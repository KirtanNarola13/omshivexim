
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading for a premium feel
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-gold selection:text-white overflow-x-hidden">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-sand text-brand-dark"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-brand-gold bg-white overflow-hidden shadow-2xl mb-8 flex items-center justify-center"
            >
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-4xl md:text-5xl font-serif tracking-widest text-brand-dark mb-6 text-center"
            >
              OM SHIV <span className="text-brand-gold italic">EXIM</span>
            </motion.div>
            <div className="relative w-32 h-[1px] bg-brand-dark/20 overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-brand-gold w-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Header />
            <Hero />
            <About />
            <Products />
            <Contact />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
