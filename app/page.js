'use client'
// pages/index.js
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { supabase } from '../lib/supabaseClient';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '' });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  // Animation pour le défilement
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100">
      <Head>
        <title>Narrativ | Racontez votre histoire professionnelle</title>
        <meta name="description" content="Narrativ - La plateforme pour freelances, coaches et entrepreneurs qui veulent partager leur parcours et connecter avec leur communauté." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <Header />
      
      <main>
        {/* Hero Section avec animation */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-blue-800 to-cyan-700 text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-center"></div>
          </div>
          
          <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Racontez votre <span className="text-cyan-300">histoire</span>, inspirez votre <span className="text-cyan-300">audience</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                La plateforme pour freelances, coaches et entrepreneurs qui transforment leur parcours en aimant à opportunités.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="#signup">
                  <span className="inline-block bg-gradient-to-r from-cyan-400 to-cyan-500 text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg cursor-pointer">
                    Rejoindre la liste d&apos;attente
                  </span>
                </Link>
              </motion.div>
              
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <div className="flex items-center bg-white bg-opacity-10 px-5 py-2 rounded-full">
                  <svg className="w-5 h-5 mr-2 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Lancement imminent</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-10 px-5 py-2 rounded-full">
                  <svg className="w-5 h-5 mr-2 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Accès prioritaire</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Vague décorative en bas */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
              <path d="M0,96L60,85.3C120,75,240,53,360,48C480,43,600,53,720,69.3C840,85,960,107,1080,106.7C1200,107,1320,85,1380,74.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
            </svg>
          </div>
        </section>
        
        {/* Section Pourquoi partager votre histoire */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: scrollY > 100 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Pourquoi partager votre histoire ?
              </h2>
              <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dans un monde où la concurrence est rude, votre histoire est votre plus grand atout pour vous démarquer.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {[
                {
                  title: "Inspirez votre audience",
                  description: "Transformez vos défis en leçons inspirantes qui résonnent avec vos clients potentiels.",
                  icon: (
                    <svg className="w-12 h-12 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  )
                },
                {
                  title: "Attirez des opportunités",
                  description: "Un récit authentique crée une connexion émotionnelle qui vous ouvre les portes à de nouveaux projets.",
                  icon: (
                    <svg className="w-12 h-12 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  )
                },
                {
                  title: "Créez une communauté fidèle",
                  description: "Établissez des liens durables avec ceux qui partagent vos valeurs et votre vision.",
                  icon: (
                    <svg className="w-12 h-12 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                  )
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: scrollY > 300 ? 1 : 0, y: scrollY > 300 ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Section Comment ça marche */}
        <section className="py-24 px-6 bg-gray-50">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: scrollY > 800 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Comment ça marche ?
              </h2>
              <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                3 étapes simples pour faire briller votre parcours professionnel avec Narrativ
              </p>
            </motion.div>
            
            <div className="relative max-w-5xl mx-auto">
              {/* Ligne de connexion */}
              <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 z-0"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  {
                    step: "1",
                    title: "Créez votre profil",
                    description: "Configurez votre espace personnel en quelques clics - ajoutez votre bio, photo et liens sociaux en moins de 2 minutes."
                  },
                  {
                    step: "2",
                    title: "Racontez votre histoire",
                    description: "Partagez vos chapitres – les débuts, les défis rencontrés et les succès qui ont façonné votre parcours professionnel."
                  },
                  {
                    step: "3",
                    title: "Engagez votre audience",
                    description: "Connectez avec votre communauté, recevez des retours et transformez votre récit en opportunités concrètes."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: scrollY > 900 ? 1 : 0, y: scrollY > 900 ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative z-10 bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-bold text-lg mb-6 mx-auto">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{item.title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Témoignages fictifs */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: scrollY > 1400 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Ce que disent nos testeurs
              </h2>
              <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: "Narrativ m'a permis de structurer mon histoire de reconversion professionnelle d'une manière captivante. Les retours positifs ne se sont pas fait attendre !",
                  author: "Sophie M.",
                  role: "Coach en développement personnel"
                },
                {
                  quote: "Grâce à Narrativ, j'ai pu présenter mon parcours d'entrepreneur de façon authentique. C'est devenu mon meilleur outil pour attirer de nouveaux clients.",
                  author: "Thomas L.",
                  role: "Freelance en marketing digital"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: scrollY > 1500 ? 1 : 0, y: scrollY > 1500 ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-50 p-8 rounded-2xl shadow-md"
                >
                  <svg className="w-12 h-12 text-indigo-400 mb-6" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8v8H6c0 2.2 1.8 4 4 4v4c-4.4 0-8-3.6-8-8V8h8zm12 0v8h-4c0 2.2 1.8 4 4 4v4c-4.4 0-8-3.6-8-8V8h8z"></path>
                  </svg>
                  <p className="text-gray-700 mb-6 text-lg italic">&quot;{item.quote}&quot;</p>
                  <div>
                    <p className="font-semibold text-gray-800">{item.author}</p>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Section CTA (Formulaire) avec design amélioré */}
        <section id="signup" className="py-24 px-6 bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-700 text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: scrollY > 2000 ? 1 : 0, x: scrollY > 2000 ? 0 : -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Rejoignez les premiers utilisateurs de Narrativ
                </h2>
                <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                  Inscrivez-vous dès maintenant pour obtenir un accès prioritaire à la plateforme dès son lancement.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      text: "Accès prioritaire à la plateforme",
                      icon: (
                        <svg className="w-5 h-5 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      )
                    },
                    {
                      text: "Fonctionnalités exclusives pour les early-adopters",
                      icon: (
                        <svg className="w-5 h-5 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      )
                    },
                    {
                      text: "Support personnalisé pour créer votre histoire",
                      icon: (
                        <svg className="w-5 h-5 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      )
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="mr-3">
                        {item.icon}
                      </div>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: scrollY > 2000 ? 1 : 0, x: scrollY > 2000 ? 0 : 20 }}
                transition={{ duration: 0.5 }}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-xl"
              >
                <h3 className="text-2xl font-semibold mb-6 text-center">Inscrivez-vous maintenant</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-100">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full p-3 rounded-lg bg-white bg-opacity-20 border border-gray-300 border-opacity-30 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-100">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre.email@exemple.com"
                      className="w-full p-3 rounded-lg bg-white bg-opacity-20 border border-gray-300 border-opacity-30 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium mb-1 text-gray-100">WhatsApp (facultatif)</label>
                    <input
                      type="text"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="+33 6 XX XX XX XX"
                      className="w-full p-3 rounded-lg bg-white bg-opacity-20 border border-gray-300 border-opacity-30 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-300"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-white font-medium py-3 px-4 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Inscription en cours...
                      </>
                    ) : "Rejoindre la liste d'attente"}
                  </button>
                </form>
                {message && (
                  <div className={`mt-4 p-3 rounded-lg ${message.includes('réussie') ? 'bg-green-500 bg-opacity-20 text-green-100' : 'bg-red-500 bg-opacity-20 text-red-100'}`}>
                    {message}
                  </div>
                )}
                <p className="text-sm text-center mt-4 text-gray-300">
                  Nous respectons votre vie privée. Pas de spam, promis !
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