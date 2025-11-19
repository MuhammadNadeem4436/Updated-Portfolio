import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';

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

const AnimatedPortfolio: React.FC = () => {
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
      for (let i = 0; i < 800; i++) {
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
          twinklSpeed: Math.random() * 0.02 + 0.01,
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
      ctx.fillStyle = 'rgba(15, 12, 41, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0f0c29');
      gradient.addColorStop(0.5, '#302b63');
      gradient.addColorStop(1, '#24243e');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      rotationRef.current += 0.0003;

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

        star.x += (rotatedX - star.x) * 0.1;
        star.y += (rotatedY - star.y) * 0.1;
        star.z += (rotatedZ - star.z) * 0.1;

        const perspective = 1 + star.z / 400;
        const x2d = centerX + star.x * perspective;
        const y2d = centerY + star.y * perspective;

        const depthOpacity = (star.z + 200) / 400;
        star.opacity = Math.sin(star.twinklPhase) * 0.3 + 0.4;
        star.twinklPhase += star.twinklSpeed;

        const finalOpacity = (depthOpacity * star.opacity * 0.8);
        const finalSize = star.size * Math.max(0.3, depthOpacity);

        ctx.fillStyle = `rgba(200, 220, 255, ${finalOpacity})`;
        ctx.beginPath();
        ctx.arc(x2d, y2d, finalSize, 0, Math.PI * 2);
        ctx.fill();

        if (finalSize > 1) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${finalOpacity * 0.5})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
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
    <div className="relative w-full min-h-screen overflow-x-hidden bg-gradient-to-b from-gray-900 to-black">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
      />

      <div className="relative z-10">
        <header className="h-screen flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Muhammad Nadeem
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 mb-8">
              Full Stack Developer & AI Innovator
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Crafting scalable, impactful, and future-ready solutions with modern technologies
            </p>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all transform hover:scale-105 font-semibold"
            >
              Explore My Work
              <ChevronDown size={20} />
            </a>
          </div>
        </header>

        <section id="about" className="relative py-20 px-4 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a professional Full Stack Developer with expertise in React.js, Node.js, Next.js, and modern web technologies. With 5+ years of experience, I've delivered 30+ projects empowering startups and enterprises worldwide.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My passion lies in creating scalable, impactful, and future-ready solutions. I specialize in AI integration, SaaS development, and low-code solutions using platforms like Lovable and Bolt.
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-20 px-4 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Secure Government Document Management SAAS',
                  description: 'Enterprise-grade document management system with advanced security features',
                  tech: ['React', 'Node.js', 'PostgreSQL', 'AWS']
                },
                {
                  title: 'GlowUp Skincare E-commerce Platform',
                  description: 'Premium e-commerce landing page with interactive UI/UX and conversion optimization',
                  tech: ['Next.js', 'Tailwind', 'Stripe', 'Supabase']
                },
                {
                  title: 'AI-Powered SaaS Dashboard',
                  description: 'Full-stack MVP with AI integration using Lovable and Bolt',
                  tech: ['React', 'ChatGPT API', 'Supabase', 'Lovable']
                },
                {
                  title: 'Real-time Analytics Platform',
                  description: 'Live data visualization and reporting dashboard for enterprises',
                  tech: ['React', 'D3.js', 'WebSocket', 'Node.js']
                },
                {
                  title: 'Mobile App Development',
                  description: 'Cross-platform mobile applications with seamless user experience',
                  tech: ['React Native', 'Firebase', 'Redux', 'TypeScript']
                },
                {
                  title: 'Custom CMS Solution',
                  description: 'Headless CMS with flexible content management and API integration',
                  tech: ['Next.js', 'GraphQL', 'MongoDB', 'Next Auth']
                }
              ].map((project, idx) => (
                <div
                  key={idx}
                  className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
                >
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/30 text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project
                    <ExternalLink size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20 px-4 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'] },
                { category: 'Backend', skills: ['Node.js', 'Express', 'GraphQL', 'REST APIs', 'Authentication'] },
                { category: 'Databases', skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'Firebase', 'Redis'] },
                { category: 'AI & Tools', skills: ['ChatGPT', 'OpenAI API', 'Lovable', 'Bolt', 'Prompt Engineering'] }
              ].map((skillGroup, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all"
                >
                  <h3 className="text-xl font-bold text-blue-400 mb-4">{skillGroup.category}</h3>
                  <div className="space-y-3">
                    {skillGroup.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20 px-4 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <div className="flex items-center justify-center gap-6 mb-8">
              <a
                href="https://github.com"
                className="p-4 bg-white/10 hover:bg-blue-600 rounded-full transition-all transform hover:scale-110"
              >
                <Github size={24} className="text-white" />
              </a>
              <a
                href="https://linkedin.com"
                className="p-4 bg-white/10 hover:bg-blue-600 rounded-full transition-all transform hover:scale-110"
              >
                <Linkedin size={24} className="text-white" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-4 bg-white/10 hover:bg-blue-600 rounded-full transition-all transform hover:scale-110"
              >
                <Mail size={24} className="text-white" />
              </a>
            </div>
            <a
              href="mailto:contact@example.com"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full transition-all transform hover:scale-105 font-semibold"
            >
              Send Me a Message
            </a>
          </div>
        </section>

        <footer className="relative py-8 px-4 border-t border-white/10 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center text-gray-400">
            <p>&copy; 2024 Muhammad Nadeem. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AnimatedPortfolio;
