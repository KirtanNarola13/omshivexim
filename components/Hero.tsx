
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-[100vh] lg:min-h-screen flex items-center overflow-hidden bg-brand-cream">
      <div className="container mx-auto px-6 relative z-10 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="h-[1px] w-12 bg-brand-gold" />
              <span className="text-brand-dark/50 text-xs font-bold tracking-widest uppercase">
                Premium Global Exporter
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-dark mb-8 leading-[1.1]">
              Nature's <br />
              <span className="text-brand-gold italic">Finest</span> <br />
              Selection.
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-lg md:text-xl text-brand-dark/70 mb-12 max-w-lg leading-relaxed text-balance"
            >
              Om Shiv Exim delivers the highest quality dry fruits and eco-friendly disposable plates. Experience unmatched purity and sustainable solutions.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#products"
                onClick={(e) => scrollTo(e, 'products')}
                className="w-full sm:w-auto px-10 py-5 bg-brand-dark text-brand-sand font-bold rounded-none flex items-center justify-center space-x-3 transition-colors hover:bg-brand-gold"
              >
                <span className="tracking-widest uppercase text-xs">Explore Catalog</span>
                <ArrowRight size={18} />
              </motion.a>
              
              <motion.a
                whileHover={{ x: 5 }}
                href="#about"
                onClick={(e) => scrollTo(e, 'about')}
                className="group flex items-center space-x-3 text-brand-dark font-medium uppercase tracking-widest text-[10px]"
              >
                <span className="border-b border-brand-dark/20 group-hover:border-brand-gold group-hover:text-brand-gold transition-all">Discover Our Legacy</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Image Composition */}
          <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[80vh] flex items-center justify-center mt-12 lg:mt-0">
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full h-full relative"
             >
                <img 
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Premium Assorted Dry Fruits" 
                  className="w-full h-full object-cover rounded-t-full shadow-2xl z-10 relative"
                />
                
                {/* Decorative Elements */}
                <div className="absolute -inset-4 border border-brand-gold/30 rounded-t-full z-0 pointer-events-none" />
                
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full border border-dashed border-brand-gold/50 z-20 pointer-events-none flex items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full border border-brand-dark/10" />
                </motion.div>

                <div className="absolute -bottom-8 -left-8 bg-brand-sand p-6 shadow-xl border border-brand-dark/5 z-30 max-w-[200px]">
                  <p className="font-serif text-3xl text-brand-dark italic mb-1">100%</p>
                  <p className="text-[9px] uppercase tracking-widest text-brand-dark/60 font-bold">Organic & Premium Quality Guaranteed</p>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
