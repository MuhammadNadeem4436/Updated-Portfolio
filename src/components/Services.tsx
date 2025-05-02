import React from 'react';
import { Globe, Code, Database, Layout, Smartphone, Server } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
      <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
        <div className="text-blue-600 group-hover:text-white transition-colors">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe size={28} />,
      title: 'Web Development',
      description: 'Creating modern, responsive websites with the latest technologies and best practices.'
    },
    // {
    //   icon: <Smartphone size={28} />,
    //   title: 'Mobile Development',
    //   description: 'Building cross-platform mobile applications that work on iOS and Android devices.'
    // },
    {
      icon: <Code size={28} />,
      title: 'Frontend Development',
      description: 'Crafting beautiful user interfaces with React, TypeScript, and modern CSS frameworks.'
    },
    {
      icon: <Server size={28} />,
      title: 'Backend Development',
      description: 'Building robust server-side applications using Node.js, Express, and various databases.'
    },
    {
      icon: <Database size={28} />,
      title: 'Database Design',
      description: 'Designing efficient database schemas and implementing data storage solutions.'
    },
    // {
    //   icon: <Layout size={28} />,
    //   title: 'UI/UX Design',
    //   description: 'Creating intuitive and engaging user experiences with modern design principles.'
    // }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">My Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I offer a wide range of development services to help bring your ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;