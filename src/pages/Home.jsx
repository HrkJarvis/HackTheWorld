// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import AboutSection from '../components/Aboutsection';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import WhoWeAre from '../components/WhoWeAre';

const Home = () => (
  <>
    <Hero />
    <WhoWeAre/>
    <ServicesOverview />
    <WhyChooseUs/>
    <AboutSection />

   
   
  </>
);

export default Home;
