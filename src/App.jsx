import React from 'react';
import './App.css';
import { MapPin, Phone, Clock, Star, Utensils, Waves, Instagram, Facebook, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

// Import des nouvelles images
import logo from './assets/logo.png';
import restaurantExterior from './assets/IMG_2979.jpeg';
import tapasPlate from './assets/IMG_2978.jpeg';
import cocktailTapas from './assets/IMG_2977.jpeg';
import saladPlate from './assets/IMG_2976.jpeg';
import burger from './assets/IMG_2975.jpeg';

function App() {
  const images = [restaurantExterior, tapasPlate, cocktailTapas, saladPlate, burger];

  const reviews = [
    {
      name: "Alexandra D",
      rating: 5,
      date: "Juin 2025",
      text: "Les plats sont copieux, frais et délicieux ! Le cuisinier est un vrai chef et l'accueil au top. Dans un très joli cadre. Adresse à connaître et à garder sur Barcarès."
    },
    {
      name: "valérie D",
      rating: 5,
      date: "Avril 2025",
      text: "Excellente adresse parking gratuit, au bord de l'eau avec son goéland. Patron au top cuisinier excellent tout fait maison. Burger de la casa chill excellent, moules au maroilles exceptionnelles n'hésitez pas une adresse incontournable 😜🤪💟"
    },
    {
      name: "Safari27121523160",
      rating: 5,
      date: "Juillet 2024",
      text: "Les patrons sont très sympas. Nous avons été très détendus avec l'accueil qu'ils nous ont fait. Très bonne cuisine. Excellentes tapas Tout était parfait. A recommander et j'y retournerais aussi."
    },
    {
      name: "Cayrol E",
      rating: 5,
      date: "Juillet 2024",
      text: "Petit endroit sympa, chill, il porte bien son nom :) Le patron est très accueillant, un personnage chaleureux, sympathique et plein d'humour. Nous avons passé un très bon moment en famille après un long trajet."
    },
    {
      name: "ALICE B",
      rating: 5,
      date: "Mai 2024",
      text: "Un bel endroit avec de belles personnes, merci pour l'accueil chaleureux. Bons plats, bonnes huîtres, bonne ambiance, nous reviendrons, merci 🙏"
    },
    {
      name: "Florian G",
      rating: 5,
      date: "Mai 2024",
      text: "Une très belle découverte ! Très belle table dans un cadre face à la mer, des produits frais et préparés avec soin. Une ambiance très chaleureuse. Un établissement qui mérite d'être connu !"
    }
  ];

  return (
    <div className="min-h-screen bg-[#19171c]">
      {/* Header */}
      <header className="bg-[#19171c] backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-yellow-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center md:justify-between">
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
              <a href="#avis" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">Avis</a>
              <a href="#contact" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${restaurantExterior})` }}
        ></div>
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
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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

            {/* Tapas & Huîtres */}
            <motion.div 
              className="bg-[#19171c] rounded-lg shadow-2xl p-8 border border-yellow-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Waves className="h-8 w-8 text-yellow-400 mr-3" />
                <h4 className="text-2xl font-bold text-white">TAPAS & HUÎTRES</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="text-yellow-400 font-semibold mb-3">PAN CON TOMATE SERRANO</div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-1">
                  <span className="text-gray-300">Accras de morue</span>
                  <span className="text-yellow-400 font-semibold">6€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-1">
                  <span className="text-gray-300">Beignets de courgettes</span>
                  <span className="text-yellow-400 font-semibold">6€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-1">
                  <span className="text-gray-300">Beignets d'aubergines</span>
                  <span className="text-yellow-400 font-semibold">6€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-1">
                  <span className="text-gray-300">Beignets fleur de courgette</span>
                  <span className="text-yellow-400 font-semibold">8€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-1">
                  <span className="text-gray-300">Oignons rings</span>
                  <span className="text-yellow-400 font-semibold">6€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-1">
                  <span className="text-gray-300">Calamars à la romaine</span>
                  <span className="text-yellow-400 font-semibold">7€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-1">
                  <span className="text-gray-300">Couteaux persillades</span>
                  <span className="text-yellow-400 font-semibold">8€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-1">
                  <span className="text-gray-300">Beignets cheddar piment</span>
                  <span className="text-yellow-400 font-semibold">7€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-1">
                  <span className="text-gray-300">Croquettes camembert</span>
                  <span className="text-yellow-400 font-semibold">8€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-1">
                  <span className="text-gray-300">Moules aioli</span>
                  <span className="text-yellow-400 font-semibold">8€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-1">
                  <span className="text-gray-300">Beignets de crevettes</span>
                  <span className="text-yellow-400 font-semibold">8€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-1">
                  <span className="text-gray-300">Portion de frites</span>
                  <span className="text-yellow-400 font-semibold">3€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-1">
                  <span className="text-gray-300">Planche ibérique</span>
                  <span className="text-yellow-400 font-semibold">14,50€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-1">
                  <span className="text-gray-300">6 huîtres de Leucate</span>
                  <span className="text-yellow-400 font-semibold">9€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-1">
                  <span className="text-gray-300">12 huîtres de Leucate</span>
                  <span className="text-yellow-400 font-semibold">16€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">6 huîtres de Leucate gratinées</span>
                  <span className="text-yellow-400 font-semibold">12€</span>
                </div>
              </div>
            </motion.div>

            {/* Desserts */}
            <motion.div 
              className="bg-[#19171c] rounded-lg shadow-2xl p-8 border border-yellow-500/20"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
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
                  <li>• Bar & Cocktails</li>
                  <li>• Ti Punch</li>
                  <li>• Choix de Tapas</li>
                  <li>• Ambiance décontractée</li>
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

      {/* Reviews Section */}
      <section id="avis" className="py-20 bg-[#19171c] border-t border-yellow-500/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-white mb-6">Avis de nos clients</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">Ce que disent nos clients sur leur expérience</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {reviews.map((review, index) => (
              <motion.div 
                key={index}
                className="bg-[#19171c] rounded-lg shadow-2xl p-6 border border-yellow-500/20 hover:border-yellow-400/40 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <Quote className="h-6 w-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h4 className="text-white font-semibold mr-3">{review.name}</h4>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{review.date}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{review.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white text-xl font-bold">4.9/5</span>
            </div>
            <p className="text-gray-300">Basé sur 31 avis Tripadvisor</p>
          </motion.div>
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
          
          <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
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

          {/* Social Media Links */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold text-white mb-6">Suivez-nous</h4>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.instagram.com/la_casa_chill_nautica/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-full hover:from-pink-400 hover:to-purple-500 transition-all transform hover:scale-110"
              >
                <Instagram className="h-8 w-8 text-white" />
              </a>
              <a 
                href="https://m.facebook.com/nautica.barcares.fr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 p-4 rounded-full hover:bg-blue-500 transition-all transform hover:scale-110"
              >
                <Facebook className="h-8 w-8 text-white" />
              </a>
            </div>
          </motion.div>
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
    </div>
  );
}

export default App;

