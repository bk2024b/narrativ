'use client'
// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('subscribers').insert([
      { name: formData.name, email: formData.email, whatsapp: formData.whatsapp },
    ]);
    if (error) {
      setMessage('Erreur lors de l’inscription. Réessayez !');
    } else {
      setMessage('Inscription réussie ! Vous serez notifié bientôt.');
      setFormData({ name: '', email: '', whatsapp: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Head>
        <title>Narrativ - Partagez votre histoire professionnelle</title>
        <meta name="description" content="Plateforme pour freelances, coaches et entrepreneurs qui veulent partager leur parcours." />
      </Head>
      <Header />
      <main className="bg-[#D1D5DB]">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-[80vh] text-center px-4 bg-gradient-to-b from-[#1E3A8A] to-[#2DD4BF]">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Narrativ - Racontez votre histoire, inspirez votre audience
          </h1>
          <p className="text-lg md:text-xl text-[#D1D5DB] mb-6 max-w-2xl">
            Une plateforme pour freelances, coaches et entrepreneurs qui veulent partager leur parcours et connecter avec leur communauté.
          </p>
          <Link href="#signup">
            <a className="bg-[#2DD4BF] text-white px-6 py-3 rounded-lg hover:bg-[#1E3A8A] transition">
              S’inscrire maintenant
            </a>
          </Link>
        </section>

        {/* Pourquoi Narrativ ? */}
        <section className="py-16 px-4">
          <h2 className="text-3xl font-bold text-bleu-nuit text-center mb-8">
            Pourquoi partager votre histoire ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">Inspirez votre audience</h3>
              <p className="text-gray-600">
                Racontez vos galères et victoires pour motiver vos clients.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">Attirez des opportunités</h3>
              <p className="text-gray-600">
                Un récit authentique peut ouvrir des portes à de nouveaux projets.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">Connectez avec votre communauté</h3>
              <p className="text-gray-600">
                Créez des liens profonds avec ceux qui partagent vos valeurs.
              </p>
            </div>
          </div>
        </section>

        {/* Comment ça marche ? */}
        <section className="py-16 px-4 bg-gris-clair">
          <h2 className="text-3xl font-bold text-[#1E3A8A] text-center mb-8">
            3 étapes pour briller avec Narrativ
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">1. Créez votre profil</h3>
              <p className="text-gray-600">Ajoutez votre bio et vos liens sociaux en 2 min.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">2. Racontez votre histoire</h3>
              <p className="text-gray-600">Partagez vos chapitres – débuts, défis, succès.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">3. Engagez votre audience</h3>
              <p className="text-gray-600">Recevez des likes et commentaires de votre communauté.</p>
            </div>
          </div>
        </section>

        {/* Section CTA (Formulaire) */}
        <section id="signup" className="py-16 px-4 bg-[#1E3A8A] text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Soyez les premiers à tester Narrativ !
          </h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              className="w-full p-3 rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre e-mail"
              className="w-full p-3 rounded-lg"
              required
            />
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="Votre numéro WhatsApp (facultatif)"
              className="w-full p-3 rounded-lg"
            />
            <button
              type="submit"
              className="bg-[#2DD4BF] text-white px-6 py-3 rounded-lg hover:bg-[#1E3A8A] transition w-full"
            >
              S’inscrire maintenant
            </button>
          </form>
          {message && <p className="text-[#D1D5DB] mt-4">{message}</p>}
          <p className="text-[#D1D5DB] mt-4">
            Nous vous notifierons dès le lancement – promis, pas de spam !
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}