import React from 'react';
import { ExternalLink } from 'lucide-react';

const UpworkProfilePage: React.FC = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-green-600">Upwork</span> Profile
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my Upwork profile to see my work history and client feedback
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 text-white text-center">
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
              <h3 className="text-2xl font-bold mb-4">Professional Overview</h3>
              <p className="text-gray-600 leading-relaxed">
                As a dedicated Full Stack Developer with 3+ years of experience, I deliver exceptional
                web applications that combine beautiful design with powerful functionality. My expertise
                spans from frontend development with React and TypeScript to backend solutions with Node.js
                and modern databases.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Core Competencies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">React & Modern JavaScript</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">TypeScript Development</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">Node.js & Express</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">MongoDB & SQL Databases</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">Tailwind CSS & Bootstrap</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">AI & Prompt Engineering</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://www.upwork.com/freelancers/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors text-lg font-semibold"
              >
                View on Upwork
                <ExternalLink size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpworkProfilePage;
