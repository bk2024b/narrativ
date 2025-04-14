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
        ? 'bg-black bg-opacity-90 backdrop-filter backdrop-blur-md shadow-lg py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto">
        <nav className="flex justify-between items-center px-6">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <div className="relative h-16 w-16 mr-4">
                <Image 
                  src="/logo-narrativ.PNG" 
                  alt="Narrativ Logo" 
                  layout="fill" 
                  objectFit="contain"
                  className="rounded-md"
                />
              </div>
              <span className="text-3xl font-bold text-white">Narrativ</span>
            </div>
          </Link>
          
          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/">
              <span className="text-white hover:text-cyan-300 transition-colors duration-200 font-medium cursor-pointer">Accueil</span>
            </Link>
            <Link href="#pourquoi">
              <span className="text-white hover:text-cyan-300 transition-colors duration-200 font-medium cursor-pointer">Pourquoi Narrativ</span>
            </Link>
            <Link href="#comment">
              <span className="text-white hover:text-cyan-300 transition-colors duration-200 font-medium cursor-pointer">Comment ça marche</span>
            </Link>
            <Link href="#signup">
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium cursor-pointer">
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
          <div className="md:hidden bg-black bg-opacity-95 backdrop-filter backdrop-blur-md py-4 px-6">
            <div className="flex flex-col space-y-4">
              <Link href="/">
                <span className="text-white hover:text-cyan-300 transition-colors duration-200 font-medium cursor-pointer">Accueil</span>
              </Link>
              <Link href="#pourquoi">
                <span className="text-white hover:text-cyan-300 transition-colors duration-200 font-medium cursor-pointer">Pourquoi Narrativ</span>
              </Link>
              <Link href="#comment">
                <span className="text-white hover:text-cyan-300 transition-colors duration-200 font-medium cursor-pointer">Comment ça marche</span>
              </Link>
              <Link href="#signup">
                <span className="inline-block bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-5 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 font-medium cursor-pointer">
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
