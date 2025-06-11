import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProducts />
      <HowItWorks />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;