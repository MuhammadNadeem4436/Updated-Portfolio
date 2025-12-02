import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative z-0">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
          Ready to Transform Your Ideas into Reality? Let's Work Together!
        </h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Whether you need a website, mobile app, or complete digital solution, I'm here to bring your vision to life with innovative technology and exceptional design.
        </p>
        <Link 
          to="/contact"
          className="px-8 py-4 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors inline-flex items-center group"
        >
          Contact Me
          <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default CTA;