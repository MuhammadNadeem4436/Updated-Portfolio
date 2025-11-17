import React, { useState } from 'react';
import { Github, Link as LinkIcon } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  githubLink: string;
  liveLink: string;
}

const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform built with React and Node.js.',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'react',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 2,
      title: 'Task Management API',
      description: 'RESTful API for task management built with Express and MongoDB.',
      image: 'https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'node',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard using JavaScript and Weather API.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'javascript',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'Full-stack social media application with real-time features.',
      image: 'https://images.pexels.com/photos/12433082/pexels-photo-12433082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'react',
      githubLink: '#',
      liveLink: '#'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Innovative Solutions & <span className="text-blue-600">Creative Projects</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio of web applications, APIs, and creative solutions that demonstrate my expertise in modern web development.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 bg-gray-100 p-2 rounded-full max-w-2xl mx-auto">
          {['all', 'react', 'node', 'javascript', 'Lovable', "Bolt.new"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveLink}
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-blue-50 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon size={20} className="text-blue-600" />
                  </a>
                  <a
                    href={project.githubLink}
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-blue-50 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} className="text-blue-600" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;