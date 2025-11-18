import React from 'react';
import { Star, MapPin, Globe, Heart, ExternalLink } from 'lucide-react';

interface Gig {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  price: string;
  tags: string[];
}

const FiverrProfilePage: React.FC = () => {
  const gigs: Gig[] = [
    {
      id: 1,
      title: 'Build Landing Pages, MVPs & Websites using AI Tools',
      description: 'I will build websites and mvps using lovable, bolt new and supabase',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 4.1,
      reviews: 6,
      price: 'From PKR 13,362',
      tags: ['Lovable', 'Bolt.new', 'Supabase', 'Landing Pages']
    },
    {
      id: 2,
      title: 'FULL STACK DEVELOPER',
      description: 'I will develop mern stack web app, react website, nodejs API as full stack deve',
      image: 'https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 4.1,
      reviews: 6,
      price: 'From PKR 20,785',
      tags: ['MERN Stack', 'React', 'Node.js', 'Full Stack']
    },
    {
      id: 3,
      title: 'FIX LOVABLE BUGS IN 24 HOURS',
      description: 'I will fix lovable bug and build responsive lovable ai saas website with modern',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 4.1,
      reviews: 6,
      price: 'From PKR 14,847',
      tags: ['Lovable', 'Bug Fixing', 'SAAS', 'Web Dev']
    }
  ];

  const skills = [
    'Front-end web developer',
    'ChatGPT expert',
    'Website developer',
    'Landing page developer',
    'TypeScript expert'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img
                    src="/images/Nadeem-removebg-preview.png"
                    alt="Nadeem"
                    className="w-32 h-32 object-cover"
                  />
                </div>
                <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                      Muhammad Nadeem
                    </h1>
                    <p className="text-blue-600 font-semibold mb-3">@nadeemakramm</p>

                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1">
                        <Star size={18} className="fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-gray-900">4.1</span>
                        <span className="text-gray-500 text-sm">(6)</span>
                      </div>
                    </div>

                    <p className="text-gray-700 font-semibold mb-2">
                      Full Stack Developer Building Dynamic Web Solutions with React, Node
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>Pakistan</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Globe size={16} />
                        <span>English, Spanish</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://www.fiverr.com/nadeemakramm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-semibold flex items-center gap-2 whitespace-nowrap"
                  >
                    Visit Profile
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About me</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="text-2xl mr-2">👋</span>
              Hi! I'm a Professional Full Stack Web Developer specializing in React.js, Node.js, Next.js, Tailwind CSS, and database integration. I build modern, scalable, responsive websites to deliver exceptional user experiences. Let's create dynamic web applications tailored to your needs!
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                >
                  {skill}
                </div>
              ))}
              <div className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer">
                +11
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Gigs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gigs.map((gig) => (
              <div
                key={gig.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden h-56 bg-gradient-to-br from-blue-600 to-blue-700">
                  <img
                    src={gig.image}
                    alt={gig.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 line-clamp-3">
                        {gig.title}
                      </h3>
                      <div className="flex items-center justify-center gap-2">
                        <Star size={16} className="fill-yellow-400 text-yellow-400" />
                        <span className="font-bold">{gig.rating}</span>
                        <span className="text-sm">({gig.reviews})</span>
                      </div>
                    </div>
                  </div>
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <Heart size={18} className="text-gray-400" />
                  </button>
                </div>

                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {gig.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {gig.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="border-t pt-3">
                    <p className="text-gray-700 font-bold mb-3">{gig.price}</p>
                    <a
                      href="https://www.fiverr.com/nadeemakramm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center"
                    >
                      View Gig
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

export default FiverrProfilePage;
