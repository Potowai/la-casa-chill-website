import React from 'react';
import './App.css';
import { MapPin, Phone, Clock, Star, Utensils, Waves } from 'lucide-react';
import { motion } from 'framer-motion';

// Import des images
import logo from './assets/logo.png';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';

function App() {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="min-h-screen bg-[#19171c]">
      {/* Header */}
      <header className="bg-[#19171c] backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-yellow-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src={logo} alt="La Casa Chill Logo" className="h-16 w-auto" />
            </motion.div>
            <nav className="hidden md:flex space-x-6">
              <a href="#accueil" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">Accueil</a>
              <a href="#menu" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">Menu</a>
              <a href="#galerie" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">Galerie</a>
              <a href="#contact" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#19171c]/60"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div 
          className="text-center z-10 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Bienvenue à <span className="text-yellow-400">La Casa Chill</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Restaurant • Bar • Tapas - Au bord de l'eau dans un cadre idyllique
          </p>
          <motion.a 
            href="#menu"
            className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-lg transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir notre menu
          </motion.a>
        </motion.div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Waves className="h-8 w-8 text-yellow-400" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#19171c]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-white mb-6">Notre Histoire</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              La Casa Chill est situé au bord de l'eau, dans un cadre idyllique avec une ambiance "Chill", 
              où vous pouvez vous détendre et vous relaxer. Selon vos goûts, vous pouvez déguster nos 
              spécialités fraîches et nos plats préparés avec amour.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-[#19171c]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-white mb-6">Notre Menu</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Plats */}
            <motion.div 
              className="bg-[#19171c] rounded-lg shadow-2xl p-8 border border-yellow-500/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Utensils className="h-8 w-8 text-yellow-400 mr-3" />
                <h4 className="text-2xl font-bold text-white">PLATS</h4>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="text-gray-300">Saumon sauce crème de citron</span>
                  <span className="text-yellow-400 font-semibold">18€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="text-gray-300">Moules au maroilles frites</span>
                  <span className="text-yellow-400 font-semibold">13€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="text-gray-300">Entrecôte sauce roquefort</span>
                  <span className="text-yellow-400 font-semibold">21€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="text-gray-300">Camembert rôtit et sa charcuterie</span>
                  <span className="text-yellow-400 font-semibold">16,50€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="text-gray-300">Burger "Casa chill"</span>
                  <span className="text-yellow-400 font-semibold">16,50€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Sèches à la planxa</span>
                  <span className="text-yellow-400 font-semibold">17,50€</span>
                </div>
              </div>
            </motion.div>

            {/* Desserts */}
            <motion.div 
              className="bg-[#19171c] rounded-lg shadow-2xl p-8 border border-yellow-500/20"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Star className="h-8 w-8 text-yellow-400 mr-3" />
                <h4 className="text-2xl font-bold text-white">DESSERTS</h4>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="text-gray-300">Citron/Orange givré</span>
                  <span className="text-yellow-400 font-semibold">7€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="text-gray-300">Profiteroles</span>
                  <span className="text-yellow-400 font-semibold">9€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="text-gray-300">Crème catalane</span>
                  <span className="text-yellow-400 font-semibold">7€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="text-gray-300">Boule de glace</span>
                  <span className="text-yellow-400 font-semibold">3€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Gauffre sucre</span>
                  <span className="text-yellow-400 font-semibold">3,50€</span>
                </div>
              </div>
              
              {/* Spécialités supplémentaires */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="flex items-center mb-4">
                  <Waves className="h-6 w-6 text-yellow-400 mr-2" />
                  <h5 className="text-lg font-semibold text-white">Spécialités</h5>
                </div>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Huîtres de Leucate (dès 10h)</li>
                  <li>• Choix de Tapas</li>
                  <li>• Bar & Cocktails</li>
                  <li>• Ti Punch</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galerie" className="py-20 bg-[#19171c]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-white mb-6">Galerie Photos</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300">Découvrez l'ambiance unique de La Casa Chill</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div 
                key={index}
                className="relative overflow-hidden rounded-lg shadow-2xl group cursor-pointer border border-yellow-500/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={image} 
                  alt={`La Casa Chill ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#19171c] border-t border-yellow-500/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-white mb-6">Contactez-nous</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">Réservez votre table pour une expérience inoubliable</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div 
              className="bg-[#19171c] rounded-lg p-8 border border-yellow-500/20 hover:border-yellow-400/40 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <MapPin className="h-8 w-8 mx-auto mb-4 text-yellow-400" />
              <h4 className="text-xl font-semibold mb-4 text-white">Adresse</h4>
              <p className="text-gray-300">12 Quai des Pyrénées</p>
              <p className="text-gray-300">Rue Des Nautides</p>
              <p className="text-gray-300">66420 Le Barcarès</p>
            </motion.div>

            <motion.div 
              className="bg-[#19171c] rounded-lg p-8 border border-yellow-500/20 hover:border-yellow-400/40 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Phone className="h-8 w-8 mx-auto mb-4 text-yellow-400" />
              <h4 className="text-xl font-semibold mb-4 text-white">Téléphone</h4>
              <p className="text-lg text-yellow-400 font-semibold">04 68 86 16 56</p>
              <p className="text-sm mt-2 text-gray-300">Réservation recommandée</p>
            </motion.div>

            <motion.div 
              className="bg-[#19171c] rounded-lg p-8 border border-yellow-500/20 hover:border-yellow-400/40 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Clock className="h-8 w-8 mx-auto mb-4 text-yellow-400" />
              <h4 className="text-xl font-semibold mb-4 text-white">Horaires</h4>
              <p className="text-gray-300">Lundi - Dimanche</p>
              <p className="text-yellow-400 font-semibold">10h - 22h</p>
              <p className="text-sm mt-2 text-gray-300">Restauration: 12h-14h30 & 19h-22h30</p>
              <p className="text-sm text-gray-400">Fermé le mardi (hors saison)</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#19171c] border-t border-yellow-500/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src={logo} alt="La Casa Chill Logo" className="h-12 w-auto" />
          </div>
          <p className="text-gray-400">
            Restaurant au bord de l'eau - Terrasse avec vue - Ambiance décontractée
          </p>
          <p className="text-gray-500 text-sm mt-4">
            © 2025 La Casa Chill. Tous droits réservés.
          </p>
        </div>
      </footer>

      {/* Bottom Bar - Call Us */}
      <div className="fixed bottom-0 left-0 right-0 bg-yellow-500 text-black py-3 text-center shadow-lg z-50">
        <a href="tel:+33468861656" className="flex items-center justify-center space-x-2 font-bold text-lg">
          <Phone className="h-6 w-6" />
          <span>Appelez-nous: 04 68 86 16 56</span>
        </a>
      </div>
    </div>
  );
}

export default App;

