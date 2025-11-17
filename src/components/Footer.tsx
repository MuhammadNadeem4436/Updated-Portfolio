import React from 'react';
import { Github, Linkedin } from 'lucide-react';

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
            <a href="https://www.fiverr.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2v-2H9V7a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2v-2h-1V7a1 1 0 0 0-1-1zm6 0a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2v-2h-1V7a1 1 0 0 0-1-1zm-6-4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
              </svg>
            </a>
            <a href="https://www.upwork.com/freelancers/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.491-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
              </svg>
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