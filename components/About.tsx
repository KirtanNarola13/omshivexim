
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Anchor, Globe2 } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <ShieldCheck />, title: 'Premium Grade', desc: 'Handpicked selection of the finest dry fruits.' },
    { icon: <Globe2 />, title: 'Eco-Friendly', desc: 'Sustainable disposable plates for global markets.' },
    { icon: <Anchor />, title: 'Global Reach', desc: 'Strategically located for international trade routes.' },
    { icon: <TrendingUp />, title: 'Efficient Chain', desc: 'Direct from source to shipping with zero delay.' },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-brand-cream relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          {/* Left Text */}
          <div className="lg:w-1/2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-brand-dark/50 font-bold tracking-[0.3em] uppercase text-xs">Our Values</span>
                <div className="h-[1px] w-8 bg-brand-gold" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark mb-8 leading-[1.2]">
                Purity, <br />
                <span className="italic text-brand-gold">Sustainability.</span> <br />
                Excellence.
              </h2>
              <p className="text-brand-dark/70 text-lg leading-relaxed font-light text-balance">
                Om Shiv Exim is more than an export house; we are custodians of quality and sustainability. We've built a robust network that ensures premium dry fruits and eco-friendly disposable plates reach global destinations in their most pristine state.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {stats.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx}
                  className="flex flex-col space-y-3 group border-l border-brand-gold/30 pl-6"
                >
                  <div className="text-brand-gold">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 28, strokeWidth: 1.5 })}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-lg mb-1 font-serif">{item.title}</h4>
                    <p className="text-sm text-brand-dark/60 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Image Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-square md:aspect-[4/3] overflow-hidden rounded-tr-[5rem] rounded-bl-[5rem] relative z-10 border border-brand-dark/5">
              <img
                src="https://i.pinimg.com/736x/c0/c2/3d/c0c23d573bd3486b58517ab31b001024.jpg"
                alt="Global Logistics Trade"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Minimal Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -left-8 lg:-bottom-12 lg:-left-12 z-20 bg-brand-sand p-8 border border-brand-dark/5 shadow-2xl"
            >
              <div className="text-brand-dark text-center">
                <p className="text-4xl font-serif mb-1">Global</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">Trade Network</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
