// pages/thank-you.js
'use client'
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
      </main>
      
      
    </div>
  );
}