import React from 'react';
import { ExternalLink } from 'lucide-react';

const FiverrProfilePage: React.FC = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-green-600">Fiverr</span> Profile
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out my Fiverr profile to see my services and client reviews
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 text-white text-center">
            <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
              <img
                src="\images\Nadeem-removebg-preview.png"
                alt="Nadeem"
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold mb-2">Muhammad Nadeem</h2>
            <p className="text-green-100 text-lg">Full Stack Developer & AI Software Developer</p>
          </div>

          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">About My Services</h3>
              <p className="text-gray-600 leading-relaxed">
                I specialize in building modern, high-quality web applications using cutting-edge technologies.
                With expertise in React, Node.js, TypeScript, and Tailwind CSS, I help businesses and startups
                transform their ideas into fast, scalable, and secure digital products.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">What I Offer</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">Full Stack Web Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">React & TypeScript Applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">Node.js Backend Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">Database Design & Integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">AI-Powered Solutions</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <a
                href="https://www.fiverr.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors text-lg font-semibold"
              >
                View on Fiverr
                <ExternalLink size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiverrProfilePage;
