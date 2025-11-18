import React, { useState } from 'react';
import { ExternalLink, MapPin, Clock, Globe, Github, ChevronDown } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  deliveryTime: string;
  price: string;
  link: string;
}

interface Skill {
  name: string;
  category: string;
}

const UpworkProfilePage: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'You will get Full-stack React, Next.js, Node eCommerce or web Developer',
      description: 'Full-stack React, Next.js, Node eCommerce or web Developer',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      price: 'From $100',
      deliveryTime: '3 days delivery',
      link: 'https://www.upwork.com/freelancers/~your-profile'
    },
    {
      id: 2,
      title: 'You will get a full-stack AI-powered MVP or SaaS web app using Lovable, Bolt, Supabase',
      description: 'Full-stack AI-powered MVP or SaaS web app using Lovable, Bolt, Supabase',
      image: 'https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      price: 'From $70',
      deliveryTime: '2 days delivery',
      link: 'https://www.upwork.com/freelancers/~your-profile'
    }
  ];

  const skills: Skill[] = [
    { name: 'Web Development', category: 'primary' },
    { name: 'Mobile App', category: 'primary' },
    { name: 'AI Development', category: 'primary' },
    { name: 'Prompt Engineering', category: 'primary' },
    { name: 'SaaS Development', category: 'primary' },
    { name: 'MERN Stack', category: 'secondary' },
    { name: 'OpenAI API', category: 'secondary' },
    { name: 'Bug Fix', category: 'secondary' },
    { name: 'ChatGPT', category: 'secondary' },
    { name: 'Supabase', category: 'secondary' },
    { name: 'Low-Code Development', category: 'secondary' },
    { name: 'React', category: 'secondary' },
    { name: 'Node.js', category: 'secondary' },
    { name: 'TypeScript', category: 'secondary' },
    { name: 'Next.js', category: 'secondary' }
  ];

  const portfolioItems = [
    {
      title: 'Secure Government Document Management SAAS - MijnEbox',
      link: 'https://mijnebox.com',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      title: 'GlowUp Skincare Premium E-commerce Landing Page with Interactive UI/UX',
      link: '#',
      image: 'https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-6 border-b">
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src="/images/Nadeem-removebg-preview.png"
                  alt="Nadeem"
                  className="w-28 h-28 object-cover"
                />
              </div>
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-1">Nadeem A.</h1>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <MapPin size={16} />
                <span>Kasur, Pakistan — 12:08 am local time</span>
              </div>
              <a
                href="https://www.upwork.com/freelancers/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-semibold"
              >
                View Profile
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="w-full md:w-auto bg-gray-50 rounded-lg p-4">
              <div className="text-4xl font-bold text-gray-900 mb-1">$30.00/hr</div>
              <p className="text-gray-600 text-sm">Hourly rate</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Hours per week</h3>
              <p className="text-gray-700 mb-2">More than 30 hrs/week</p>
              <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded">
                Open to contract to hire
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Languages</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium text-gray-900">English:</span>
                  <span className="text-gray-600 ml-2">Fluent</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Urdu:</span>
                  <span className="text-gray-600 ml-2">Native or Bilingual</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Spanish:</span>
                  <span className="text-gray-600 ml-2">Conversational</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Education</h3>
              <div>
                <p className="font-medium text-gray-900">Lahore Leads University -City Campus</p>
                <p className="text-gray-600 text-sm">Bachelor's degree</p>
                <p className="text-gray-600 text-sm">2021-2025</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Linked accounts</h3>
            <div className="flex items-center gap-3">
              <Github size={20} className="text-gray-600" />
              <div>
                <p className="font-medium text-gray-900">GitHub</p>
                <p className="text-sm text-gray-600">Since 2022</p>
                <p className="text-blue-600 text-sm font-medium">Muhammad Nadeem Akram</p>
                <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
                  View profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Full-Stack Developer | React.js | Next.js | Lovable.dev & Bolt Special
            </h2>
            <p className="text-gray-600 mb-4">
              5+ Years Experience | Delivered 30+ Projects | Empowering Startups & Enterprises Worldwide
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              I'm a versatile Full-Stack Developer, AI Innovator, and Low-Code/No-Code Expert dedicated to crafting
              scalable, impactful, and future-ready solutions. My mission is to empower businesses by delivering smart
              automation, intuitive platforms, and seamless end-to-end solutions — with proven success across startups,
              enterprises, and SaaS ecosystems ...
            </p>
            <a href="#" className="text-blue-600 font-medium hover:underline">
              more
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg h-48 bg-gray-200 mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-green-600 font-medium group-hover:underline">{item.title}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                  skill.category === 'primary'
                    ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Project catalog</h2>
          <p className="text-gray-600 mb-8">
            Get started working with Nadeem quickly with these predefined projects.
          </p>

          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col md:flex-row gap-6 pb-6 border-b last:border-b-0"
              >
                <div className="md:w-80 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden h-40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-6 mb-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Globe size={16} />
                        <span className="font-medium">{project.price}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Clock size={16} />
                        <span className="font-medium">{project.deliveryTime}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors font-semibold"
                    >
                      View project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpworkProfilePage;
