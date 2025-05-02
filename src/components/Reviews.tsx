import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
}

const Reviews: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: 'John Smith',
      position: 'CTO',
      company: 'TechStart',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 5,
      content: 'Nadeem delivered our web application ahead of schedule and with exceptional quality. His technical skills and attention to detail are impressive.'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Product Manager',
      company: 'InnovateCorp',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 5,
      content: 'Working with Nadeem was a great experience. He understood our requirements perfectly and created a solution that exceeded our expectations.'
    },
    {
      id: 3,
      name: 'Michael Lee',
      position: 'Founder',
      company: 'StartupX',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 4,
      content: 'Nadeem helped us transform our outdated system into a modern, efficient platform. His technical knowledge and problem-solving skills were invaluable.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Client Reviews</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What clients say about working with me and the results they've achieved
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map(review => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={18} 
                    className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                  />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote size={32} className="text-blue-100 absolute -top-2 -left-1" />
                <p className="text-gray-600 relative z-10 pl-3">{review.content}</p>
              </div>
              
              <div className="flex items-center">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.position}, {review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;