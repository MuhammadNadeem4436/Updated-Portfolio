import React from 'react';
import StarBackground from '../components/StarBackground';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Reviews from '../components/Reviews';
import CTA from '../components/CTA';

const Home: React.FC = () => {
  return (
    <>
      <StarBackground />
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