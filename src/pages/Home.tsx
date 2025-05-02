import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Reviews from '../components/Reviews';
import CTA from '../components/CTA';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Reviews />
      <CTA />
    </>
  );
};

export default Home;