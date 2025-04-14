// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-bleu-nuit text-white py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">© 2025 Narrativ. Tous droits réservés.</p>
          <div className="flex space-x-4">
            <a href="mailto:narrativ.dev@gmail.com" className="hover:text-turquoise-clair">
              Contactez-nous
            </a>
            <a href="https://wa.me/40545270" className="hover:text-turquoise-clair">
              WhatsApp
            </a>
            <a href="https://linkedin.com/in/[ton profil]" className="hover:text-turquoise-clair">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  }