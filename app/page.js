'use client'
// app/page.js
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
// Nous gardons l'import de supabase mais ne le modifions pas
import { supabase } from '../lib/supabaseClient';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '' });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Références pour les animations scroll - réduites pour améliorer les performances
  const heroRef = useRef(null);
  const whyRef = useRef(null);
  const howRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Animation pour les sections
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.2 });
  const isWhyInView = useInView(whyRef, { once: true, amount: 0.2 });
  const isHowInView = useInView(howRef, { once: true, amount: 0.2 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.2 });
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.from('subscribers').insert([
        { name: formData.name, email: formData.email, whatsapp: formData.whatsapp },
      ]);
      
      if (error) {
        setMessage('Erreur lors de l\'inscription. Réessayez !');
      } else {
        setMessage('Inscription réussie ! Vous serez notifié bientôt.');
        setFormData({ name: '', email: '', whatsapp: '' });
      }
    } catch (error) {
      setMessage('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Next.js 13+ App Router n'utilise pas Head component */}
      <Header />
      
      <main className="font-sans">
        {/* Hero Section avec animation de parallax */}
        <section 
          ref={heroRef}
          className="relative min-h-screen flex items-center overflow-hidden bg-gray-900 text-white"
        >
          {/* Background image avec effet de parallax */}
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
            style={{ y: heroY }}
            className="container mx-auto px-6 pt-40 pb-32 relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isHeroInView ? 1 : 0, y: isHeroInView ? 0 : 30 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-4xl mx-auto text-center relative"
            >
              {/* Decorative elements */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: isHeroInView ? 1 : 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16 w-24 h-1 bg-teal-500"
              ></motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight font-serif">
                <span className="block text-teal-400 mb-2 text-xl uppercase tracking-[0.3em] font-light">Votre histoire</span>
                Transformez votre parcours en<br />
                <span className="text-teal-500">attraction magnétique</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                La plateforme premium qui permet aux freelances et entrepreneurs d&apos;impact de transformer leur parcours en machine d&apos;acquisition de clients.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mb-12"
              >
                <Link href="#signup" className="inline-block bg-gradient-to-br from-teal-400 to-gray-700 text-white font-medium px-10 py-5 rounded-lg shadow-xl hover:shadow-lg transition-all duration-300 uppercase tracking-wider border border-teal-400/30">
                  Accès prioritaire
                </Link>
              </motion.div>
              
              <div className="relative pt-6 border-t border-gray-700 max-w-2xl mx-auto">
                <div className="mt-6 flex flex-wrap justify-center gap-6">
                  <div className="flex items-center px-5 py-2 border border-gray-700 rounded-full bg-gray-900 bg-opacity-50">
                    <span className="w-2 h-2 rounded-full bg-teal-500 mr-3 animate-pulse"></span>
                    <span className="text-sm text-gray-300 font-light">Lancement imminent</span>
                  </div>
                  <div className="flex items-center px-5 py-2 border border-gray-700 rounded-full bg-gray-900 bg-opacity-50">
                    <span className="w-2 h-2 rounded-full bg-teal-500 mr-3"></span>
                    <span className="text-sm text-gray-300 font-light">Places limitées</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Bottom decorative element */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1920 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 80H1920V30C1920 30 1714.6 0 1357.5 0C1000.4 0 962.5 15 480 15C236.8 15 0 0 0 0V80Z" fill="#F9FAFB"/>
            </svg>
          </div>
        </section>
        
        {/* Section Pourquoi */}
        <section ref={whyRef} className="py-24 px-6 bg-gray-50 relative overflow-hidden" id="pourquoi">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-100 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200 rounded-full filter blur-3xl opacity-20 translate-y-1/3 -translate-x-1/4"></div>
          
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isWhyInView ? 1 : 0, y: isWhyInView ? 0 : 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20 relative"
            >
              <span className="uppercase text-gray-600 tracking-[0.2em] font-medium text-sm mb-3 inline-block">Votre histoire est précieuse</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
                Pourquoi partager <span className="text-gray-700">votre histoire</span> ?
              </h2>
              <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Dans un marché saturé, votre histoire authentique est votre atout le plus puissant pour créer une connexion émotionnelle avec vos clients potentiels.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {[
                {
                  title: "Captivez votre audience",
                  description: "Transformez vos défis et réussites en récit mémorable qui résonne profondément avec vos clients idéaux.",
                  icon: (
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  )
                },
                {
                  title: "Attirez des clients premium",
                  description: "Créez un positionnement d'expert unique qui attire naturellement vers vous les clients de haute valeur.",
                  icon: (
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  )
                },
                {
                  title: "Bâtissez une marque forte",
                  description: "Établissez une connexion émotionnelle qui transforme vos prospects en ambassadeurs fidèles.",
                  icon: (
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  )
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isWhyInView ? 1 : 0, y: isWhyInView ? 0 : 30 }}
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
        
        {/* Section Comment */}
        <section ref={howRef} className="py-24 px-6 bg-white relative overflow-hidden" id="comment">
          <div className="absolute top-40 right-0 w-96 h-96 bg-teal-50 rounded-full filter blur-3xl opacity-70"></div>
          
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isHowInView ? 1 : 0, y: isHowInView ? 0 : 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <span className="uppercase text-gray-600 tracking-[0.2em] font-medium text-sm mb-3 inline-block">Notre processus</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
                Comment <span className="text-gray-700">ça marche</span> ?
              </h2>
              <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Un processus simplifié en trois étapes pour transformer votre histoire en outil d&apos;attraction client
              </p>
            </motion.div>
            
            <div className="relative max-w-5xl mx-auto">
              {/* Ligne de connexion */}
              <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-300 via-teal-500 to-gray-700 z-0"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  {
                    step: "1",
                    title: "Créez votre profil narratif",
                    description: "Configurez votre espace premium et découvrez notre méthodologie exclusive pour construire votre récit professionnel."
                  },
                  {
                    step: "2",
                    title: "Structurez votre parcours",
                    description: "Transformez vos expériences en récit captivant avec nos templates exclusifs et conseils d'experts en storytelling."
                  },
                  {
                    step: "3",
                    title: "Convertissez votre audience",
                    description: "Partagez votre histoire et utilisez nos outils d'analyse pour mesurer son impact sur votre acquisition client."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isHowInView ? 1 : 0, y: isHowInView ? 0 : 30 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                    className="relative z-10"
                  >
                    <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-xl hover:shadow-2xl hover:border-teal-100 transition-all duration-300 h-full">
                      <div className="flex justify-center mb-6">
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-50 border-2 border-teal-500 text-gray-700 font-bold text-xl">
                          {item.step}
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center font-serif">{item.title}</h3>
                      <p className="text-gray-600 text-center leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Section CTA et Formulaire */}
        <section ref={ctaRef} id="signup" className="py-24 px-6 bg-gray-900 text-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-10"></div>
          </div>
          <div className="absolute top-40 right-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gray-700 rounded-full filter blur-3xl opacity-10"></div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isCtaInView ? 1 : 0, y: isCtaInView ? 0 : 30 }}
                transition={{ duration: 0.6 }}
              >
                <span className="uppercase text-teal-400 tracking-[0.2em] font-medium text-sm mb-3 inline-block">Lancement imminent</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                  Rejoignez les pionniers de <span className="text-teal-500">Narrativ</span>
                </h2>
                <div className="w-24 h-1 bg-teal-500 mb-8"></div>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Inscrivez-vous dès maintenant pour être parmi les premiers à accéder à notre plateforme exclusive et bénéficier d&apos;avantages réservés aux early-adopters.
                </p>
                
                <div className="space-y-6 mb-12">
                  {[
                    {
                      text: "Accès prioritaire à la plateforme dès son lancement",
                      icon: (
                        <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      )
                    },
                    {
                      text: "Tarif préférentiel exclusif pour les membres fondateurs",
                      icon: (
                        <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      )
                    },
                    {
                      text: "Consultation stratégique individuelle offerte",
                      icon: (
                        <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      )
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 mr-4 flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-gray-200">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isCtaInView ? 1 : 0, y: isCtaInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-800 p-10 rounded-2xl border border-gray-700 shadow-2xl"
              >
                <h3 className="text-2xl font-semibold mb-6 text-center font-serif">Inscrivez-vous à la liste d&apos;attente</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre.email@exemple.com"
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium mb-2 text-gray-300">WhatsApp (facultatif)</label>
                    <input
                      type="text"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="+33 6 XX XX XX XX"
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-teal-500 to-gray-700 text-white font-medium py-4 px-6 rounded-lg hover:from-teal-600 hover:to-gray-800 transition-all duration-300 shadow-lg flex items-center justify-center uppercase tracking-wider"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Inscription en cours...
                        </>
                      ) : "Réserver votre place"}
                    </button>
                  </div>
                </form>
                {message && (
                  <div className={`mt-6 p-4 rounded-lg ${message.includes('réussie') ? 'bg-green-800 bg-opacity-50 text-green-100' : 'bg-red-800 bg-opacity-50 text-red-100'}`}>
                    {message}
                  </div>
                )}
                <p className="text-sm text-center mt-6 text-gray-400">
                  Nous respectons votre vie privée et ne partageons jamais vos informations.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}