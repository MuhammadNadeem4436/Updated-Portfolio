import React, { useState } from 'react';
import { User, GraduationCap, Code, Briefcase, Mail, Phone, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know more about me, my qualifications, and my technical skills
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/3 hidden md:block">
            <img 
              src="\images\Nadeem-removebg-preview.png" 
              alt="About Nadeem" 
              className="rounded-lg shadow-lg w-full h-auto max-w-md mx-auto"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="w-full lg:w-2/3">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center mb-8 bg-gray-100 p-1 rounded-full">
              <button 
                onClick={() => setActiveTab('personal')}
                className={`flex items-center px-4 py-2 ${
                  activeTab === 'personal' 
                    ? 'bg-blue-600 text-white rounded-full' 
                    : 'text-gray-700'
                } transition-all duration-300 mb-2 sm:mb-0`}
              >
                <User size={18} className="mr-2" />
                Personal Info
              </button>
              <button 
                onClick={() => setActiveTab('qualification')}
                className={`flex items-center px-4 py-2 ${
                  activeTab === 'qualification' 
                    ? 'bg-blue-600 text-white rounded-full' 
                    : 'text-gray-700'
                } transition-all duration-300 mb-2 sm:mb-0`}
              >
                <GraduationCap size={18} className="mr-2" />
                Qualification
              </button>
              <button 
                onClick={() => setActiveTab('skills')}
                className={`flex items-center px-4 py-2 ${
                  activeTab === 'skills' 
                    ? 'bg-blue-600 text-white rounded-full' 
                    : 'text-gray-700'
                } transition-all duration-300`}
              >
                <Code size={18} className="mr-2" />
                Skills
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              {/* Personal Info Content */}
              {activeTab === 'personal' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-blue-100 p-2 rounded-lg">
                      <User size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">Name</h4>
                      <p className="font-semibold text-lg">Muhammad Nadeem Akram</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-blue-100 p-2 rounded-lg">
                      <Mail size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">Email</h4>
                      <p className="font-semibold text-lg">nadeemakram4436@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-blue-100 p-2 rounded-lg">
                      <Phone size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">Phone No</h4>
                      <p className="font-semibold text-lg">+92 309 4436995 , +92 302 1436596</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-blue-100 p-2 rounded-lg">
                      <MapPin size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">Address</h4>
                      <p className="font-semibold text-lg">Nishter Colony Ferozpur Road Lahore, Pakistan</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Qualification Content */}
              {activeTab === 'qualification' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Experience Column */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Briefcase size={20} className="mr-2 text-blue-600" />
                      Experience
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="relative pl-6 border-l-2 border-blue-200 pb-6">
                        <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
                        <h4 className="font-semibold">Senior Frontend Developer</h4>
                        <p className="text-gray-600 text-sm">TechCorp • 2021 - Present</p>
                        <p className="text-gray-500 mt-2">Leading frontend development for enterprise applications.</p>
                      </div>
                      
                      <div className="relative pl-6 border-l-2 border-blue-200">
                        <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
                        <h4 className="font-semibold">Web Developer</h4>
                        <p className="text-gray-600 text-sm">Digital Agency • 2019 - 2021</p>
                        <p className="text-gray-500 mt-2">Developed responsive websites for various clients.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Education Column */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <GraduationCap size={20} className="mr-2 text-blue-600" />
                      Education
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="relative pl-6 border-l-2 border-blue-200 pb-6">
                        <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
                        <h4 className="font-semibold">BSCS Computer Science</h4>
                        <p className="text-gray-600 text-sm">Lahore Leads University • 2021 - 2025</p>
                        <p className="text-gray-500 mt-2">Foundation in programming and software development.</p>
                      </div>
                      
                      <div className="relative pl-6 border-l-2 border-blue-200">
                        <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
                        <h4 className="font-semibold">FSC Pre-Engineering</h4>
                        <p className="text-gray-600 text-sm">Government Collage Township • 2013 - 2017</p>
                        <p className="text-gray-500 mt-2">Foundation in Engineering</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Skills Content */}
              {activeTab === 'skills' && (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {['JavaScript', 'React', 'Node.js', 'TypeScript', 'HTML/CSS', 'MongoDB', 'Express', 'TailwindCSS', 'Bootstrap 5', 'Prompt Engineering', 'AI Development'].map((skill, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center">
                      <Code size={18} className="mr-2 text-blue-600" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;