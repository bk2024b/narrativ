// components/Header.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
        ? 'bg-black bg-opacity-95 backdrop-filter backdrop-blur-lg py-3 shadow-2xl border-b border-amber-800/20' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto">
        <nav className="flex justify-between items-center px-6">
          <Link href="/">
            <div className="flex items-center cursor-pointer group">
              <div className="relative h-12 w-12 mr-3 overflow-hidden rounded-full shadow-lg border-2 border-amber-500 group-hover:border-amber-400 transition-all duration-300">
                <Image 
                  src="/logo-narrativ.PNG" 
                  alt="Narrativ Logo" 
                  layout="fill" 
                  objectFit="cover"
                />
              </div>
              <div>
                <span className="text-2xl font-bold text-white tracking-tight">
                  Narr<span className="text-amber-500">a</span>tiv
                </span>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-500"></div>
              </div>
            </div>
          </Link>
          
          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-12">
            <Link href="/">
              <span className="text-gray-200 hover:text-amber-300 transition-colors duration-300 font-medium cursor-pointer text-sm uppercase tracking-wide">Accueil</span>
            </Link>
            <Link href="#pourquoi">
              <span className="text-gray-200 hover:text-amber-300 transition-colors duration-300 font-medium cursor-pointer text-sm uppercase tracking-wide">Pourquoi Narrativ</span>
            </Link>
            <Link href="#comment">
              <span className="text-gray-200 hover:text-amber-300 transition-colors duration-300 font-medium cursor-pointer text-sm uppercase tracking-wide">Comment ça marche</span>
            </Link>
            <Link href="#signup">
              <span className="bg-gradient-to-br from-amber-500 to-amber-700 text-white px-6 py-3 rounded-lg hover:shadow-amber-900/50 hover:shadow-lg transition-all duration-300 font-medium cursor-pointer text-sm uppercase tracking-wider border border-amber-400/30">
                S'inscrire
              </span>
            </Link>
          </div>
          
          {/* Menu mobile button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
          <div className="md:hidden bg-black bg-opacity-95 backdrop-filter backdrop-blur-lg py-6 px-6 border-t border-amber-800/20">
            <div className="flex flex-col space-y-6">
              <Link href="/">
                <span className="text-gray-200 hover:text-amber-300 transition-colors duration-300 font-medium cursor-pointer text-sm uppercase tracking-wide">Accueil</span>
              </Link>
              <Link href="#pourquoi">
                <span className="text-gray-200 hover:text-amber-300 transition-colors duration-300 font-medium cursor-pointer text-sm uppercase tracking-wide">Pourquoi Narrativ</span>
              </Link>
              <Link href="#comment">
                <span className="text-gray-200 hover:text-amber-300 transition-colors duration-300 font-medium cursor-pointer text-sm uppercase tracking-wide">Comment ça marche</span>
              </Link>
              <Link href="#signup">
                <span className="inline-block bg-gradient-to-br from-amber-500 to-amber-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-amber-900/50 transition-all duration-300 font-medium cursor-pointer text-sm uppercase tracking-wider border border-amber-400/30 w-full text-center">
                  S'inscrire
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}