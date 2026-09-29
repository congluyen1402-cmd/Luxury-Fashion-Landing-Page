import React, { useEffect, useState, createContext } from 'react';

export const SiteImageContext = createContext<Record<string, any>>({});
import Header from './components/Header';
import { Hero, Collection, LimitedDrop, Story, Values, SocialProof, Membership } from './components/HomeSections';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AmbientBg from './components/AmbientBg';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);
  const [siteImages, setSiteImages] = useState<Record<string, any>>({});

  useEffect(() => {
    fetch('http://localhost:3001/api/public/site-images')
      .then(res => res.json())
      .then(data => {
        if(data && !data.error) setSiteImages(data);
      })
      .catch(e => console.error(e));
  }, []);

  useEffect(() => {
    // Reveal Observer
    const revealElements = document.querySelectorAll('.reveal-up');
    const revealOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, revealOptions);

    revealElements.forEach(el => revealOnScroll.observe(el));
    
    // Finish preloader
    const timer = setTimeout(() => {
        setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SiteImageContext.Provider value={siteImages}>
      <AmbientBg />
      <CustomCursor />
      <Preloader loading={loading} />
      
      <Header />
      
      <main style={{ overflowX: 'hidden' }}>
        <Hero />
        <Collection />
        <LimitedDrop />
        <Story />
        <Values />
        <SocialProof />
        <Membership />
      </main>

      <Footer />
    </SiteImageContext.Provider>
  );
}

export default App;
