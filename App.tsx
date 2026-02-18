import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { Training } from './components/Training';
import { Partners } from './components/Partners';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TechStackBanner } from './components/TechStackBanner';
import { ProcessStartBanner } from './components/ProcessStartBanner';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full selection:bg-brand-blue/20 selection:text-brand-blue relative">
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Services />
        <TechStackBanner />
        <WhyChooseUs />
        <ProcessStartBanner />
        <Methodology />
        <Training />
        <Partners />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;