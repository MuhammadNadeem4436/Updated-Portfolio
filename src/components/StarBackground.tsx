import React, { useEffect, useRef } from 'react';

interface Star3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  opacity: number;
  twinklSpeed: number;
  twinklPhase: number;
  originalX: number;
  originalY: number;
  originalZ: number;
}

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const starsRef = useRef<Star3D[]>([]);
  const rotationRef = useRef(0);
  const spreadRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const createStars = () => {
      starsRef.current = [];
      for (let i = 0; i < 1500; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const radius = Math.random() * 150 + 50;

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        starsRef.current.push({
          x,
          y,
          z,
          vx: 0,
          vy: 0,
          vz: 0,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.5,
          twinklSpeed: Math.random() * 0.03 + 0.015,
          twinklPhase: Math.random() * Math.PI * 2,
          originalX: x,
          originalY: y,
          originalZ: z
        });
      }
    };

    createStars();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = docHeight > 0 ? window.scrollY / docHeight : 0;
      spreadRef.current = Math.min(scrollRef.current * 1.5, 1);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      rotationRef.current += 0.001;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      starsRef.current.forEach((star) => {
        let targetX = star.originalX;
        let targetY = star.originalY;
        let targetZ = star.originalZ;

        const rotX = rotationRef.current;
        const rotY = rotationRef.current * 0.7;

        const cosRx = Math.cos(rotX);
        const sinRx = Math.sin(rotX);
        const cosRy = Math.cos(rotY);
        const sinRy = Math.sin(rotY);

        let tempY = targetY * cosRx - targetZ * sinRx;
        let tempZ = targetY * sinRx + targetZ * cosRx;

        let rotatedX = targetX * cosRy + tempZ * sinRy;
        let rotatedZ = -targetX * sinRy + tempZ * cosRy;
        let rotatedY = tempY;

        const mouseDistX = centerX - mouseRef.current.x;
        const mouseDistY = centerY - mouseRef.current.y;
        const mouseDist = Math.sqrt(mouseDistX * mouseDistX + mouseDistY * mouseDistY);
        const mouseInfluence = Math.max(0, 1 - mouseDist / 500);

        if (mouseInfluence > 0) {
          const angle = Math.atan2(mouseDistY, mouseDistX);
          const pushForce = mouseInfluence * 100;
          rotatedX += Math.cos(angle) * pushForce * spreadRef.current;
          rotatedY += Math.sin(angle) * pushForce * spreadRef.current;
        }

        const spreadForce = spreadRef.current * 300;
        rotatedX *= (1 + spreadForce / 400);
        rotatedY *= (1 + spreadForce / 400);
        rotatedZ *= (1 + spreadForce / 400);

        star.x += (rotatedX - star.x) * 0.25;
        star.y += (rotatedY - star.y) * 0.25;
        star.z += (rotatedZ - star.z) * 0.25;

        const perspective = 1 + star.z / 400;
        const x2d = centerX + star.x * perspective;
        const y2d = centerY + star.y * perspective;

        const depthOpacity = (star.z + 200) / 400;
        star.opacity = Math.sin(star.twinklPhase) * 0.3 + 0.4;
        star.twinklPhase += star.twinklSpeed;

        const finalOpacity = depthOpacity * star.opacity * 0.6;
        const finalSize = star.size * Math.max(0.3, depthOpacity);

        ctx.fillStyle = `rgba(96, 165, 250, ${finalOpacity})`;
        ctx.beginPath();
        ctx.arc(x2d, y2d, finalSize, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', resizeCanvas);

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
      style={{ background: 'linear-to-b from-gray-50 to-gray-100' }}
    />
  );
};

export default StarBackground;
