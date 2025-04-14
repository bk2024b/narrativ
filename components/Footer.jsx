// components/Footer.js
import Link from 'next/link';
import { FaEnvelope, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Narrativ</h3>
            <p className="text-gray-300 mb-4">
              La plateforme qui permet aux freelances, coaches et entrepreneurs de partager leur histoire professionnelle et de connecter authentiquement avec leur audience.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
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
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:narrativ.dev@gmail.com" className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 flex items-center">
                  <FaEnvelope className="mr-2" /> Email
                </a>
              </li>
              <li>
                <a href="https://wa.me/40545270" className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 flex items-center">
                  <FaWhatsapp className="mr-2" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/votre-profil" className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 flex items-center">
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-blue-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300 mb-4 md:mb-0">
            © {currentYear} Narrativ. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 text-sm">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 text-sm">
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}