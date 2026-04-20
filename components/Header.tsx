
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'products' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent | React.TouchEvent, id: string) => {
    e.preventDefault();
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    // Close menu after starting the scroll
    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 border-b border-brand-dark/5 ${
        scrolled ? 'bg-brand-cream/90 backdrop-blur-md shadow-sm py-3 md:py-4' : 'bg-brand-sand/80 backdrop-blur-sm py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Desktop Nav - Left */}
        <nav className="hidden lg:flex items-center space-x-12 w-1/3">
          {navLinks.slice(0, 2).map((link) => (
            <motion.a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-sm font-medium tracking-widest uppercase transition-colors relative group text-brand-dark hover:text-brand-gold"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Center Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center cursor-pointer relative z-[10001] lg:w-1/3"
          onClick={(e) => scrollToSection(e, 'hero')}
        >
          <div className="mr-4 w-12 h-12 md:w-16 md:h-16 rounded-full border border-brand-gold/50 bg-white shadow-sm overflow-hidden flex-shrink-0 flex items-center justify-center transition-transform hover:scale-105">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-start lg:items-center justify-center lg:w-full">
            <span className={`text-xl lg:text-3xl font-serif tracking-widest ${scrolled || mobileMenuOpen ? 'text-brand-dark' : 'text-brand-dark'}`}>
              OM SHIV <span className="text-brand-gold italic">EXIM</span>
            </span>
            <span className={`text-[7px] md:text-[8px] tracking-[0.2em] sm:tracking-[0.3em] uppercase font-semibold mt-1 ${scrolled || mobileMenuOpen ? 'text-brand-dark/50' : 'text-brand-dark/50'}`}>
              Dry Fruits & Disposables
            </span>
          </div>
        </motion.div>

        {/* Desktop Nav - Right */}
        <nav className="hidden lg:flex items-center justify-end space-x-12 w-1/3">
          {navLinks.slice(2, 4).map((link) => (
            <motion.a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-sm font-medium tracking-widest uppercase transition-colors relative group text-brand-dark hover:text-brand-gold"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className={`lg:hidden p-3 rounded-full relative z-[10001] transition-colors ${
            scrolled || mobileMenuOpen ? 'text-brand-dark bg-brand-sand' : 'text-brand-dark bg-white/50'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-[9998]"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-full sm:w-[400px] bg-brand-cream z-[9999] shadow-2xl flex flex-col"
            >
              <div className="flex-1 px-8 pt-32 pb-10 flex flex-col space-y-2 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className="group w-full flex items-center justify-between py-6 text-3xl font-serif text-brand-dark border-b border-brand-dark/5 text-left hover:text-brand-gold transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-brand-gold" size={24} />
                  </motion.button>
                ))}
              </div>

              <div className="p-8 bg-brand-sand border-t border-brand-dark/5">
                <div className="space-y-6 text-center">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-brand-dark/40">Direct Trade Desk</p>
                  <a href="tel:+917567096951" className="text-xl font-serif text-brand-dark hover:text-brand-gold block">+91 7567096951</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
