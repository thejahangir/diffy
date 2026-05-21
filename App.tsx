import React, { useState, useEffect } from 'react';
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
import { ServiceNowAdminBanner } from './components/ServiceNowAdminBanner';
import { ServiceNowSyllabusPage } from './components/ServiceNowSyllabusPage';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentPath(hash);
      
      if (hash === '#/servicenow-syllabus') {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      } else if (hash) {
        const targetId = hash.replace('#', '');
        // wait for the DOM to render the homepage sections
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial check on page load (deep linking support)
    if (window.location.hash && window.location.hash !== '#/servicenow-syllabus') {
      handleHashChange();
    }
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isSyllabusRoute = currentPath === '#/servicenow-syllabus';

  return (
    <div className="min-h-screen flex flex-col w-full selection:bg-brand-blue/20 selection:text-brand-blue relative">
      <ScrollProgress />
      <Navbar />
      {isSyllabusRoute ? (
        <ServiceNowSyllabusPage />
      ) : (
        <main className="flex-grow">
          <Hero />
          <Features />
          <Services />
          <TechStackBanner />
          <WhyChooseUs />
          <ProcessStartBanner />
          <Methodology />
          <ServiceNowAdminBanner />
          <Training />
          <Partners />
          <Contact />
          <CTA />
        </main>
      )}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;