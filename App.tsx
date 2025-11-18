import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Introduction from './pages/Introduction';
import Members from './pages/Members';
import StreamDetails from './pages/StreamDetails';
import PromotionalOutline from './pages/PromotionalOutline';
import SocialMedia from './pages/SocialMedia';
import { Page } from './types';

declare const VANTA: any;

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('Introduction');
  const vantaEffect = useRef<any>(null);
  const vantaContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activePage === 'Introduction' && !vantaEffect.current) {
      if (typeof VANTA !== 'undefined') {
        vantaEffect.current = VANTA.NET({
          el: vantaContainerRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xebebeb,
          backgroundColor: 0x0,
          points: 14.00,
          maxDistance: 18.00,
          spacing: 18.00
        });
      }
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'Introduction':
        return <Introduction />;
      case 'Members':
        return <Members />;
      case 'Stream Details':
        return <StreamDetails />;
      case 'Promotional Outline':
        return <PromotionalOutline />;
      case 'Social Media':
        return <SocialMedia />;
      default:
        return <Introduction />;
    }
  };

  return (
    <div className="bg-black text-white min-h-screen antialiased">
      {/* Vanta background layer (z-0) */}
      <div 
        ref={vantaContainerRef} 
        className={`fixed top-0 left-0 w-full h-full transition-opacity duration-700 ${activePage === 'Introduction' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />
      
      {/* Gradient overlay for Intro page (sits on top of Vanta at z-0) */}
      <div 
        className={`fixed bottom-0 left-0 w-full h-3/4 md:h-1/2 bg-gradient-to-t from-black to-transparent z-0 transition-opacity duration-700 ${activePage === 'Introduction' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />
      
      {/* Content wrapper (lifted to z-10) */}
      <div className="relative z-10">
        <Header activePage={activePage} setActivePage={setActivePage} />
        <main key={activePage} className="px-8 md:px-16 lg:px-24 py-12 animate-fade-in-up">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default App;