import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Download, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = 'https://aquamarine-nickie-87.tiiny.site'; // Replace with your CV URL
    link.download = 'nadeem-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="pt-28 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side - Text Content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <div className="mb-4">
              <span className="text-blue-600 font-semibold">Full Stack Developer</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Transforming Ideas Into <span className="text-blue-600">Digital Reality</span>
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Hi, I’m Nadeem — a Full Stack Developer and AI Software Developer. I build modern, high-quality web applications using Lovable, Supabase, Bolt.new, React, Node.js, and Tailwind CSS. I help businesses and startups turn ideas into fast, scalable, and secure digital products.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
              <Link 
                to="/contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center"
              >
                <Mail size={18} className="mr-2" />
                Contact Me
              </Link>
              <button 
                onClick={handleDownloadCV}
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors flex items-center"
              >
                <Download size={18} className="mr-2" />
                Download CV
              </button>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://github.com/MuhammadNadeem4436" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-nadeem-156129273/" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Right Side - Image and Stats */}
          <div className="w-full md:w-1/2 relative hidden md:block">
            <div className="relative max-w-md mx-auto">
              <img 
                src="\images\Nadeem-removebg-preview.png" 
                alt="Nadeem" 
                className="w-80 h-80 object-cover rounded-full mx-auto border-4 border-white shadow-xl"
              />
              
              {/* Experience Badge */}
              <div className="absolute top-5 -left-5 bg-white p-3 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold text-xl">3+</div>
                <div className="text-gray-600 text-sm">Years of<br />Experience</div>
              </div>
              
              {/* Projects Badge */}
              <div className="absolute top-1/2 -right-5 bg-white p-3 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold text-xl">25+</div>
                <div className="text-gray-600 text-sm">Projects<br />Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;