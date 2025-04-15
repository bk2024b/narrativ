'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="font-sans">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gray-900 text-white">
          {/* Background image avec effet */}
          <div className="absolute inset-0 opacity-50">
            <div 
              className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 bg-center bg-cover"
            ></div>
            {/* Texture overlay */}
            <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
            {/* Grain texture */}
            <div className="absolute inset-0 bg-opacity-10"></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="container mx-auto px-6 py-32 relative z-10 text-center"
          >
            {/* Decorative elements */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16 w-24 h-1 bg-teal-500"
            ></motion.div>
            
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight font-serif">
                <span className="block text-teal-400 mb-2 text-xl uppercase tracking-[0.3em] font-light">Merci</span>
                Votre inscription a été <br/>
                <span className="text-teal-500">enregistrée avec succès !</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Narrativ sera bientôt disponible. Soyez les premiers à partager votre histoire et à inspirer votre audience !
              </p>
              
              <p className="text-lg text-gray-300 mb-10">
                Nous vous tiendrons informé(e) dès le lancement. En attendant, suivez-nous pour ne rien rater !
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://www.linkedin.com/in/josias-boco-70963a219"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-br from-teal-400 to-gray-700 text-white font-medium px-10 py-5 rounded-lg shadow-xl hover:shadow-lg transition-all duration-300 uppercase tracking-wider border border-teal-400/30"
                  >
                    Me suivre sur LinkedIn
                  </a>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://wa.me/40545270"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-br from-gray-700 to-teal-500 text-white font-medium px-10 py-5 rounded-lg shadow-xl hover:shadow-lg transition-all duration-300 uppercase tracking-wider border border-teal-400/30"
                  >
                    Me contacter sur WhatsApp
                  </a>
                </motion.div>
              </div>
              
              <div className="relative pt-6 border-t border-gray-700 max-w-2xl mx-auto">
                <div className="mt-6 flex flex-wrap justify-center gap-6">
                  <Link href="/" className="flex items-center px-5 py-2 border border-gray-700 rounded-full bg-gray-900 bg-opacity-50 hover:bg-gray-800 transition-all duration-300">
                    <span className="w-2 h-2 rounded-full bg-teal-500 mr-3"></span>
                    <span className="text-sm text-gray-300 font-light">Retour à l'accueil</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Bottom decorative element */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1920 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 80H1920V30C1920 30 1714.6 0 1357.5 0C1000.4 0 962.5 15 480 15C236.8 15 0 0 0 0V80Z" fill="#F9FAFB"/>
            </svg>
          </div>
        </section>
        
        {/* Section Opportunités */}
        <section className="py-24 px-6 bg-gray-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-100 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200 rounded-full filter blur-3xl opacity-20 translate-y-1/3 -translate-x-1/4"></div>
          
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20 relative"
            >
              <span className="uppercase text-gray-600 tracking-[0.2em] font-medium text-sm mb-3 inline-block">Prochaines étapes</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
                Ce qui vous <span className="text-gray-700">attend</span>
              </h2>
              <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Préparez-vous à découvrir une nouvelle façon de connecter avec votre audience
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {[
                {
                  title: "Notification de lancement",
                  description: "Vous recevrez un email dès que la plateforme sera disponible.",
                  icon: (
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                    </svg>
                  )
                },
                {
                  title: "Accès prioritaire",
                  description: "Votre compte sera créé en priorité dès le lancement.",
                  icon: (
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                  )
                },
                {
                  title: "Ressources exclusives",
                  description: "Des guides pour créer une histoire captivante qui convertit.",
                  icon: (
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  )
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  className="bg-white p-8 rounded-xl border border-gray-100 hover:border-teal-100 shadow-xl hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-6 group-hover:bg-teal-100 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Partage */}
        <ShareSection />
      </main>
    </div>
  );
}

const ShareSection = () => {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? window.location.origin : '';
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const shareText = "Je viens de m'inscrire à Narrativ, une nouvelle plateforme pour raconter son histoire et inspirer son audience ! Rejoins-moi :";
  
  const shareViaTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  };
  
  const shareViaFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };
  
  const shareViaLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };
  
  const shareViaWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, '_blank');
  };
  
  return (
    <section className="py-16 px-6 bg-gray-100 relative overflow-hidden border-t border-gray-200">
      {/* Background decorative elements - ajoutés pour cohérence avec le reste du site */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full filter blur-3xl opacity-20 -translate-y-1/4 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-teal-100 rounded-full filter blur-3xl opacity-10 translate-y-1/4 -translate-x-1/4"></div>
      
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="uppercase text-gray-600 tracking-[0.2em] font-medium text-sm mb-3 inline-block">Faire passer le mot</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
            Partagez <span className="text-teal-600">Narrativ</span> avec votre réseau
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aidez d'autres freelances, coachs et entrepreneurs à découvrir comment partager leur histoire peut transformer leur activité.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-xl shadow-lg mb-8 max-w-xl mx-auto border border-gray-100 hover:border-teal-100 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={shareViaTwitter}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1DA1F2] text-white shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Partager sur Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={shareViaFacebook}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1877F2] text-white shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Partager sur Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={shareViaLinkedIn}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0A66C2] text-white shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Partager sur LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={shareViaWhatsApp}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Partager sur WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </motion.button>
          </div>
          
          <div className="relative">
            <input 
              type="text" 
              readOnly 
              value={shareUrl} 
              className="w-full px-4 py-3 pr-28 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCopyLink}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-1.5 rounded text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              {copied ? "Copié !" : "Copier"}
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-gray-500"
        >
          Merci de nous aider à faire grandir la communauté Narrativ !
        </motion.div>
      </div>
    </section>
  );
};