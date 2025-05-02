import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkIcon, Linkedin } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  projectLink: string;
  linkedinPost: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A full-featured online shopping platform with cart, payments, and admin dashboard.',
      projectLink: '#',
      linkedinPost: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A productivity application for managing tasks and projects on the go.',
      projectLink: '#',
      linkedinPost: '#'
    },
    {
      id: 3,
      title: 'Finance Dashboard',
      category: 'Frontend',
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'An interactive dashboard for tracking financial data with visualizations.',
      projectLink: '#',
      linkedinPost: '#'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-2">My Recent Projects</h2>
            <p className="text-gray-600 max-w-md">
              Check out some of my latest work and creative solutions
            </p>
          </div>
          
          <Link 
            to="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            All Projects
          </Link>
        </div>
        
        {/* Mobile View - Single Project Slider */}
        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="flex">
                  {projects.map((project) => (
                    <div key={project.id} className="w-full flex-shrink-0">
                      <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                        <div className="relative">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute inset-0 bg-blue-900 bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                            <a 
                              href={project.projectLink}
                              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-blue-100 transition-colors"
                            >
                              <LinkIcon size={18} className="text-blue-600" />
                            </a>
                            <a 
                              href={project.linkedinPost}
                              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-blue-100 transition-colors"
                            >
                              <Linkedin size={18} className="text-blue-600" />
                            </a>
                          </div>
                        </div>
                        <div className="p-6">
                          <span className="text-blue-600 text-sm font-medium">{project.category}</span>
                          <h3 className="text-xl font-bold mt-1 mb-2">{project.title}</h3>
                          <p className="text-gray-600">{project.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Desktop View - Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a 
                      href={project.projectLink}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-blue-100 transition-colors"
                    >
                      <LinkIcon size={18} className="text-blue-600" />
                    </a>
                    <a 
                      href={project.linkedinPost}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin size={18} className="text-blue-600" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-blue-600 text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-bold mt-1 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;