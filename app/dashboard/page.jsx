'use client'
// app/dashboard/page.js
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const [subscribers, setSubscribers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('subscribers')
          .select('*')
          .order('id', { ascending: false });
          
        if (error) {
          throw error;
        }
        
        setSubscribers(data || []);
      } catch (error) {
        console.error('Error fetching subscribers:', error);
        setError('Impossible de charger les donn�es. Veuillez r�essayer plus tard.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchSubscribers();
  }, []);
  
  const filteredSubscribers = subscribers.filter(subscriber => {
    const searchLower = searchTerm.toLowerCase();
    return (
      subscriber.name?.toLowerCase().includes(searchLower) ||
      subscriber.email?.toLowerCase().includes(searchLower) ||
      subscriber.whatsapp?.toLowerCase().includes(searchLower)
    );
  });
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="font-sans">
        <section className="py-16 px-6 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-10"></div>
          </div>
          <div className="absolute top-40 right-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-10"></div>
          
          <div className="container mx-auto max-w-6xl relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="uppercase text-teal-400 tracking-[0.2em] font-medium text-sm mb-3 inline-block">Tableau de bord</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                Vos <span className="text-teal-500">Leads</span> Narrativ
              </h1>
              <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Explorez et g�rez tous les inscrits � votre plateforme.
              </p>
            </motion.div>
          </div>
        </section>
        
        <section className="py-12 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-100 shadow-xl p-6 mb-8"
            >
              <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0 font-serif">Liste des inscrits</h2>
                <div className="w-full md:w-1/3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Rechercher..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    />
                    <div className="absolute right-3 top-3 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {isLoading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-teal-500"></div>
                </div>
              ) : error ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mb-4">
                  {error}
                </div>
              ) : (
                <>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg overflow-hidden">
                      <thead className="bg-gray-800 text-white">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">ID</th>
                          <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">Nom</th>
                          <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">Email</th>
                          <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">WhatsApp</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {filteredSubscribers.length > 0 ? (
                          filteredSubscribers.map((subscriber) => (
                            <tr key={subscriber.id} className="hover:bg-gray-50 transition-colors duration-200">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{subscriber.id}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{subscriber.name || '-'}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{subscriber.email || '-'}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{subscriber.whatsapp || '-'}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="4" className="px-6 py-12 text-center text-gray-500">
                              {searchTerm 
                                ? "Aucun r�sultat trouv� pour votre recherche."
                                : "Aucun inscrit trouv� dans la base de donn�es."}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 text-sm text-gray-500 flex justify-between items-center">
                    <div>Total: {filteredSubscribers.length} inscrit(s)</div>
                    <div className="text-teal-600 font-medium">
                      {searchTerm && `${filteredSubscribers.length} r�sultat(s) pour "${searchTerm}"`}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl border border-gray-100 shadow-xl p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Statistiques</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Total des inscrits</h3>
                    <div className="bg-teal-100 p-2 rounded-md">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{subscribers.length}</div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Avec WhatsApp</h3>
                    <div className="bg-teal-100 p-2 rounded-md">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    {subscribers.filter(s => s.whatsapp && s.whatsapp.trim() !== '').length}
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Aujourd'hui</h3>
                    <div className="bg-teal-100 p-2 rounded-md">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    {subscribers.filter(s => {
                      // Note: This is a placeholder since we don't have created_at in the data
                      // In a real implementation, you'd compare against a created_at date
                      return true; 
                    }).length}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
    </div>
  );
}