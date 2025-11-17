import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Download, Mail } from 'lucide-react';

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
              <a href="https://www.fiverr.com/your-profile" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-4.23h1.61v.594c.272-.41.73-.674 1.276-.674h.414v1.752zm-4.74-1.752h-1.61v4.23h1.61v-2.38c0-.548.255-.81.726-.81.437 0 .665.294.665.81v2.38h1.61v-2.893c0-.96-.583-1.61-1.503-1.61-.64 0-1.14.328-1.498.838v-.565zm-6.934 1.09c.25-.205.632-.338 1.03-.338.576 0 1.062.247 1.062.876v.217h-2.198c.02-.33.13-.58.416-.755h.69zm2.876 1.016v-.217c0-1.305-.854-2.154-2.218-2.154-1.342 0-2.302.89-2.302 2.235 0 1.323.95 2.196 2.443 2.196.768 0 1.385-.23 1.854-.615l-.633-1.013c-.34.274-.74.41-1.21.41-.576 0-1.01-.267-1.113-.84h3.18v-.002zm-5.456-1.09c.25-.205.632-.338 1.03-.338.576 0 1.062.247 1.062.876v.217H7.65c.02-.33.13-.58.416-.755h.69zm2.876 1.09v-.217c0-1.305-.854-2.154-2.218-2.154-1.342 0-2.302.89-2.302 2.235 0 1.323.95 2.196 2.443 2.196.768 0 1.385-.23 1.854-.615l-.633-1.013c-.34.274-.74.41-1.21.41-.576 0-1.01-.267-1.113-.84h3.18v-.002zm-6.092-3.843h-1.61v1.326H1.29v1.434h.637v1.685c0 1.06.524 1.63 1.39 1.63.424 0 .79-.123 1.063-.328l-.476-1.19c-.097.07-.23.118-.363.118-.213 0-.314-.143-.314-.472v-1.443h1.14v-1.434h-1.14V8.394z"/>
                </svg>
              </a>
              <a href="https://www.upwork.com/freelancers/your-profile" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.491-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                </svg>
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