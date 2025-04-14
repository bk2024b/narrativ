// components/Footer.jsx
import Link from 'next/link';
import Image from 'next/image';
import { FaEnvelope, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-amber-800/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          {/* About */}
          <div className="col-span-1 md:col-span-5">
            <div className="flex items-center mb-8">
              <div className="relative h-14 w-14 mr-4 overflow-hidden rounded-full shadow-lg border-2 border-amber-500">
                <Image 
                  src="/logo-narrativ.PNG" 
                  alt="Narrativ Logo" 
                  layout="fill" 
                  objectFit="cover"
                />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">
                Narr<span className="text-amber-500">a</span>tiv
              </h3>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-sm max-w-md">
              La plateforme premium qui permet aux freelances, coaches et entrepreneurs de partager leur histoire professionnelle et de créer une connexion authentique avec leur audience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-amber-800 flex items-center justify-center transition-colors duration-300">
                <FaLinkedin className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-amber-800 flex items-center justify-center transition-colors duration-300">
                <FaWhatsapp className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-amber-800 flex items-center justify-center transition-colors duration-300">
                <FaEnvelope className="text-white" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-amber-500 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-amber-300 transition-colors duration-200 text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#pourquoi" className="text-gray-400 hover:text-amber-300 transition-colors duration-200 text-sm">
                  Pourquoi Narrativ
                </Link>
              </li>
              <li>
                <Link href="#comment" className="text-gray-400 hover:text-amber-300 transition-colors duration-200 text-sm">
                  Notre processus
                </Link>
              </li>
              <li>
                <Link href="#signup" className="text-gray-400 hover:text-amber-300 transition-colors duration-200 text-sm">
                  S'inscrire
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-amber-500 uppercase tracking-wider">Légal</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-400 hover:text-amber-300 transition-colors duration-200 text-sm">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-amber-300 transition-colors duration-200 text-sm">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-amber-300 transition-colors duration-200 text-sm">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-amber-300 transition-colors duration-200 text-sm">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-lg font-semibold mb-6 text-amber-500 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-amber-500" />
                <a href="mailto:narrativ.dev@gmail.com" className="text-gray-400 hover:text-amber-300 transition-colors duration-200 text-sm">
                  narrativ.dev@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaWhatsapp className="text-amber-500" />
                <a href="https://wa.me/40545270" className="text-gray-400 hover:text-amber-300 transition-colors duration-200 text-sm">
                  +40 545 270
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaLinkedin className="text-amber-500" />
                <a href="https://linkedin.com/in/votre-profil" className="text-gray-400 hover:text-amber-300 transition-colors duration-200 text-sm">
                  linkedin.com/narrativ
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {currentYear} Narrativ. Tous droits réservés.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors duration-200 text-sm">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors duration-200 text-sm">
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}