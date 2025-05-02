import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-white mb-6">.Nadeem</div>
          
          <div className="flex space-x-6 mb-8">
            <a href="https://github.com/MuhammadNadeem4436" target='_blank' className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-nadeem-156129273/" target='_blank' className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400">
              © {currentYear} Nadeem. All rights reserved.
            </p>
            <p className="text-sm mt-2">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              {' • '}
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;