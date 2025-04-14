// components/Header.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900 bg-opacity-95 backdrop-filter backdrop-blur-lg py-3 shadow-2xl border-b border-gray-800/20' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto">
        <nav className="flex justify-between items-center px-6">
          <Link href="/">
            <div className="flex items-center cursor-pointer group">
              <div className="relative h-12 w-12 mr-3 overflow-hidden rounded-full shadow-lg border-2 border-teal-500 group-hover:border-teal-400 transition-all duration-300 flex items-center justify-center bg-gray-900">
                <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Circle */}
                  <circle cx="50" cy="50" r="40" stroke="#8A8A8A" strokeWidth="5" fill="none" />
                  
                  {/* Feather */}
                  <path d="M35 70C45 55 55 40 65 25C60 35 55 45 50 55C45 60 40 65 35 70Z" fill="#0A2559" />
                  <path d="M33 74C43 59 53 44 63 29C58 39 53 49 48 59C43 64 38 69 33 74Z" fill="#0A2559" />
                  
                  {/* Star/sparkle */}
                  <path d="M70 40L73 47L80 50L73 53L70 60L67 53L60 50L67 47L70 40Z" fill="#2C9DB8" />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-bold text-white tracking-tight">
                  Narr<span className="text-teal-500">a</span>tiv
                </span>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-teal-600 to-teal-400 transition-all duration-500"></div>
              </div>
            </div>
          </Link>
          
          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-12">
            <Link href="/" className="text-gray-200 hover:text-teal-300 transition-colors duration-300 font-medium cursor-pointer text-sm uppercase tracking-wide">
              Accueil
            </Link>
            <Link href="#pourquoi" className="text-gray-200 hover:text-teal-300 transition-colors duration-300 font-medium cursor-pointer text-sm uppercase tracking-wide">
              Pourquoi Narrativ
            </Link>
            <Link href="#comment" className="text-gray-200 hover:text-teal-300 transition-colors duration-300 font-medium cursor-pointer text-sm uppercase tracking-wide">
              Comment ça marche
            </Link>
            <Link href="#signup" className="bg-gradient-to-br from-teal-500 to-gray-700 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium cursor-pointer text-sm uppercase tracking-wider border border-teal-400/30">
              S'inscrire
            </Link>
          </div>
          
          {/* Menu mobile button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </nav>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 bg-opacity-95 backdrop-filter backdrop-blur-lg py-6 px-6 border-t border-gray-800/20">
            <div className="flex flex-col space-y-6">
              <Link href="/" className="text-gray-200 hover:text-teal-300 transition-colors duration-300 font-medium cursor-pointer text-sm uppercase tracking-wide">
                Accueil
              </Link>
              <Link href="#pourquoi" className="text-gray-200 hover:text-teal-300 transition-colors duration-300 font-medium cursor-pointer text-sm uppercase tracking-wide">
                Pourquoi Narrativ
              </Link>
              <Link href="#comment" className="text-gray-200 hover:text-teal-300 transition-colors duration-300 font-medium cursor-pointer text-sm uppercase tracking-wide">
                Comment ça marche
              </Link>
              <Link href="#signup" className="inline-block bg-gradient-to-br from-teal-500 to-gray-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 font-medium cursor-pointer text-sm uppercase tracking-wider border border-teal-400/30 w-full text-center">
                S'inscrire
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}