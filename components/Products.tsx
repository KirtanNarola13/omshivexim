import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Leaf, Award } from 'lucide-react';

type LineId = 'dry-fruits' | 'disposables' | null;

interface SubItem {
  name: string;
  desc: string;
}

interface BusinessLine {
  id: LineId;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  items: SubItem[];
}

const businessLines: BusinessLine[] = [
  {
    id: 'dry-fruits',
    title: 'Premium Dry Fruits',
    subtitle: 'Nature\'s Finest Selection',
    description: 'Handpicked from the greatest orchards worldwide, our dry fruits represent the pinnacle of taste, health, and luxury. Sourced with uncompromising standards for the global market.',
    image: 'https://i.pinimg.com/736x/47/77/1d/47771df25dd83eea0d9788f53488efee.jpg',
    icon: <Award size={24} strokeWidth={1.5} />,
    items: [
      { name: 'Premium Almonds', desc: 'Rich in nutrients, sourced directly from the finest farms.' },
      { name: 'Whole Cashews', desc: 'Creamy, large-sized cashews perfect for gifting and premium retail.' },
      { name: 'California Walnuts', desc: 'Heart-healthy walnuts with a rich, earthy flavor profile.' },
      { name: 'Roasted Pistachios', desc: 'Perfectly salted pistachios for a premium snacking experience.' },
      { name: 'Arabian Dates', desc: 'Naturally sweet, soft and luscious dates.' },
      { name: 'Golden Raisins', desc: 'Sun-dried to perfection for a natural sweetness.' }
    ]
  },
  {
    id: 'disposables',
    title: 'Eco-Friendly Plates',
    subtitle: 'Sustainable & Elegant',
    description: '100% biodegradable and compostable tableware made from natural fallen leaves and plant fibers. Elegant aesthetics meeting zero-waste principles for conscious hospitality.',
    image: 'https://i.pinimg.com/1200x/ab/8b/79/ab8b79f06317e0d1e12896096b53554d.jpg',
    icon: <Leaf size={24} strokeWidth={1.5} />,
    items: [
      { name: 'Areca Leaf Plates', desc: 'Sturdy, microwave-safe plates naturally shed by Areca palms.' },
      { name: 'Bagasse Bowls', desc: 'Sugarcane fiber bowls perfect for hot and cold foods.' },
      { name: 'Wooden Cutlery', desc: 'Smooth, splinter-free birchwood forks, knives, and spoons.' },
      { name: 'Paper Cups', desc: 'High-quality recyclable cups for sustainable hospitality.' },
      { name: 'Compartment Plates', desc: 'Multi-section eco-plates ideal for catering and events.' }
    ]
  }
];

const Products: React.FC = () => {
  const [selectedLine, setSelectedLine] = useState<BusinessLine | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedLine) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedLine]);

  return (
    <section id="products" className="py-24 lg:py-32 bg-brand-sand relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand-dark/50 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-brand-dark leading-tight">
            Two distinct lines. <br/>
            <span className="italic text-brand-gold">One standard of excellence.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {businessLines.map((line) => (
            <motion.div 
              key={line.id!}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer flex flex-col"
              onClick={() => setSelectedLine(line)}
            >
              <div className="aspect-[4/5] overflow-hidden relative border border-brand-dark/10 mb-8 bg-brand-cream p-3 md:p-5">
                <img 
                  src={line.image} 
                  alt={line.title} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-5 bg-brand-dark/30 group-hover:bg-brand-dark/10 transition-colors duration-700" />
                
                <div className="absolute bottom-12 left-12 text-brand-sand z-10 overflow-hidden">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }} 
                    whileInView={{ y: 0, opacity: 1 }} 
                    className="flex flex-col"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest mb-3 text-brand-gold">{line.subtitle}</span>
                    <h3 className="text-4xl lg:text-5xl font-serif leading-tight text-white">{line.title}</h3>
                  </motion.div>
                </div>
              </div>

              <div className="flex items-center justify-between px-2">
                <p className="text-brand-dark/60 font-light max-w-sm text-sm md:text-base leading-relaxed">
                  {line.description.substring(0, 90)}...
                </p>
                <div className="w-12 h-12 rounded-full border border-brand-dark/20 flex items-center justify-center group-hover:border-brand-gold group-hover:text-brand-gold group-hover:scale-110 transition-all duration-300">
                  <ArrowRight strokeWidth={1} size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed Modal Screen */}
      <AnimatePresence>
        {selectedLine && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[150] bg-brand-cream overflow-y-auto"
          >
            <button 
              onClick={() => setSelectedLine(null)}
              className="fixed top-6 right-6 lg:top-10 lg:right-10 z-[160] w-12 h-12 rounded-full bg-brand-dark text-brand-sand flex items-center justify-center hover:bg-brand-gold transition-colors shadow-2xl"
            >
              <X size={20} />
            </button>

            <div className="min-h-screen flex flex-col lg:flex-row relative">
              {/* Left: Sticky Image */}
              <div className="lg:w-1/2 lg:sticky lg:top-0 h-[60vh] lg:h-screen w-full p-4 lg:p-8">
                <div className="w-full h-full relative overflow-hidden border border-brand-dark/10 bg-brand-sand p-2">
                  <img 
                    src={selectedLine.image} 
                    alt={selectedLine.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-2 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
                  
                  <div className="absolute bottom-12 left-10 lg:bottom-16 lg:left-14 text-brand-sand">
                    <div className="mb-6 text-brand-gold p-4 bg-brand-dark/30 backdrop-blur-md rounded-full inline-block border border-white/10">{selectedLine.icon}</div>
                    <h2 className="text-5xl lg:text-7xl font-serif mb-4 text-white leading-[1.1]">{selectedLine.title}</h2>
                    <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-gold">{selectedLine.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="lg:w-1/2 p-8 lg:p-24 flex flex-col justify-center bg-brand-cream">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold mb-6">About the collection</h3>
                  <p className="text-2xl lg:text-3xl text-brand-dark font-light leading-relaxed mb-16 text-balance">
                    {selectedLine.description}
                  </p>

                  <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold mb-10">Detailed Catalog Items</h3>
                  
                  <div className="space-y-8">
                    {selectedLine.items.map((item, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + (idx * 0.1) }}
                        key={idx}
                        className="border-b border-brand-dark/10 pb-6 group hover:border-brand-gold transition-colors"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl lg:text-2xl font-serif text-brand-dark">{item.name}</h4>
                          <span className="text-[9px] uppercase tracking-widest text-brand-dark/40 font-bold ml-4 mt-2 group-hover:text-brand-gold transition-colors">Premium</span>
                        </div>
                        <p className="text-brand-dark/60 font-light text-sm lg:text-base max-w-md">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-16">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedLine(null);
                        setTimeout(() => {
                          const el = document.getElementById('contact');
                          if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                        }, 400); // Wait for modal slide out
                      }}
                      className="inline-flex items-center space-x-4 bg-brand-dark text-brand-sand px-12 py-6 uppercase tracking-[0.2em] text-xs font-bold hover:bg-brand-gold hover:text-brand-dark transition-colors cursor-pointer border border-transparent shadow-2xl"
                    >
                      <span>Request Trade Pricing</span>
                      <ArrowRight size={16} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Products;
