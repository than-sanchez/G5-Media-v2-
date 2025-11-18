import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

// Updated NavLink to be more flexible with styling
const NavLink: React.FC<{
  page: Page;
  activePage: Page;
  onClick: (page: Page) => void;
  children: React.ReactNode;
  className?: string; // Allow passing custom classes
}> = ({ page, activePage, onClick, children, className }) => {
  const isActive = activePage === page;
  return (
    <button
      onClick={() => onClick(page)}
      className={`transition-all duration-300 active:scale-95 ${className} ${
        isActive ? 'text-white' : 'text-gray-500 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pages: Page[] = ['Introduction', 'Members', 'Stream Details', 'Promotional Outline', 'Social Media'];

  useEffect(() => {
    // Prevent scrolling when the mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="relative px-8 md:px-16 lg:px-24 py-8 z-30">
        <div className="flex justify-between items-center">
          <div className="text-sm font-bold tracking-wider">GROUP 5</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {pages.map((page) => (
              <NavLink 
                key={page} 
                page={page} 
                activePage={activePage} 
                onClick={setActivePage}
                className="text-xs uppercase tracking-widest"
              >
                {page}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} className="text-white focus:outline-none active:scale-95 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-black z-50 flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-8 right-8 text-white focus:outline-none active:scale-95 transition-transform"
          aria-label="Close menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <nav className="flex flex-col items-center space-y-10 text-center">
          {pages.map((page) => (
            <NavLink
              key={page}
              page={page}
              activePage={activePage}
              onClick={(p) => {
                setActivePage(p);
                setIsMenuOpen(false);
              }}
              className="text-2xl font-semibold uppercase tracking-widest"
            >
              {page}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
