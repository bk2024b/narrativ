
// components/Footer.jsx
import Link from 'next/link';
import Image from 'next/image';
import { FaEnvelope, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative h-12 w-12 mr-3">
                <Image 
                  src="/logo-narrativ.PNG" 
                  alt="Narrativ Logo" 
                  layout="fill" 
                  objectFit="contain"
                  className="rounded-md"
                />
              </div>
              <h3 className="text-2xl font-bold">Narrativ</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              La plateforme qui permet aux freelances, coaches et entrepreneurs de partager leur histoire professionnelle et de connecter authentiquement avec leur audience.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-cyan-300 transition-colors duration-200">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#pourquoi" className="text-gray-300 hover:text-cyan-300 transition-colors duration-200">
                  Pourquoi Narrativ
                </Link>
              </li>
              <li>
                <Link href="#comment" className="text-gray-300 hover:text-cyan-300 transition-colors duration-200">
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link href="#signup" className="text-gray-300 hover:text-cyan-300 transition-colors duration-200">
                  S'inscrire
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:narrativ.dev@gmail.com" className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 flex items-center">
                  <FaEnvelope className="mr-3" /> Email
                </a>
              </li>
              <li>
                <a href="https://wa.me/40545270" className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 flex items-center">
                  <FaWhatsapp className="mr-3" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/votre-profil" className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 flex items-center">
                  <FaLinkedin className="mr-3" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} Narrativ. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors duration-200 text-sm">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors duration-200 text-sm">
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
