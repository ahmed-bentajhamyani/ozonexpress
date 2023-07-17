import './App.css';
import Navbar from './components/partials/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FAQs from './components/FAQs';
import Tarifs from './components/Tarifs';
import Agences from './components/Agences';
import Market from './components/Market';
import Blogs from './components/Blogs';
import Testimonials from './components/Testimonials';
import Footer from './components/partials/Footer';
import Panier from './components/Panier';
import { useState } from 'react';

function App() {
  return (
    <div id='home' className="font-poppins">
      <Navbar />

      <section className="min-h-screen md:min-h-fit">
        <Hero />
      </section>

      <Services />
      <FAQs />
      <Tarifs />
      <Agences />
      <Market />
      <Blogs />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
