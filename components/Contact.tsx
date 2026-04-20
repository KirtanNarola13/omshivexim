
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    // Fix: Ensured the section tag is correctly used as a JSX intrinsic element to avoid 'section' being interpreted as a variable name.
    <section id="contact" className="py-24 lg:py-32 bg-brand-cream relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Info */}
          <div className="flex flex-col h-full justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <span className="text-brand-dark/40 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Connect with us</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark mb-8 leading-tight">
                Global Partnerships <br />
                <span className="italic text-brand-gold">Start Here.</span>
              </h2>
              <p className="text-brand-dark/70 text-lg font-light leading-relaxed max-w-md">
                We are available 24/7 for our international clients. Reach out for wholesale pricing, logistics queries, or partnership opportunities.
              </p>
            </motion.div>

            <div className="space-y-10">
              {[
                { 
                  icon: <Mail size={22} />, 
                  label: 'Email Support', 
                  val: 'omshivexim0@gmail.com', 
                  href: 'mailto:omshivexim0@gmail.com',
                  desc: 'Expect a response within 12 hours.'
                },
                { 
                  icon: <Phone size={22} />, 
                  label: 'Direct Line', 
                  val: '+91 7567096951', 
                  href: 'tel:+917567096951',
                  desc: 'Available for WhatsApp and Direct Calls.'
                },
                { 
                  icon: <MapPin size={22} />, 
                  label: 'Corporate Office', 
                  val: 'Surat, Gujarat, India', 
                  href: '#',
                  desc: 'Operating from India’s largest trade hub.'
                },
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="group flex flex-col space-y-2 border-l border-brand-gold/30 pl-6"
                >
                  <p className="text-[10px] uppercase tracking-widest text-brand-dark/40 font-bold">{item.label}</p>
                  <a href={item.href} className="text-2xl font-serif text-brand-dark group-hover:text-brand-gold transition-colors inline-block">
                    {item.val}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-sand border border-brand-dark/5 p-8 md:p-14 shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-20 h-20 border-r border-t border-brand-gold opacity-50 -mt-2 -mr-2" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-l border-b border-brand-gold opacity-50 -mb-2 -ml-2" />
            
            <div className="mb-10 text-center">
              <h3 className="text-3xl font-serif text-brand-dark mb-2">Request a Quotation</h3>
              <p className="text-brand-dark/50 text-sm font-light">Fill out the form below and our export manager will contact you.</p>
            </div>

            <form className="space-y-8">
              <div className="space-y-2 group">
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-brand-dark/20 py-4 px-2 focus:outline-none focus:border-brand-gold transition-colors text-brand-dark text-lg placeholder:text-brand-dark/30 placeholder:text-sm font-light" 
                  placeholder="Full Name / Company Name" 
                />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                  <input 
                    type="tel" 
                    className="w-full bg-transparent border-b border-brand-dark/20 py-4 px-2 focus:outline-none focus:border-brand-gold transition-colors text-brand-dark text-lg placeholder:text-brand-dark/30 placeholder:text-sm font-light" 
                    placeholder="Mobile Number" 
                  />
                </div>
                <div className="space-y-2 group">
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-brand-dark/20 py-4 px-2 focus:outline-none focus:border-brand-gold transition-colors text-brand-dark text-lg placeholder:text-brand-dark/30 placeholder:text-sm font-light" 
                    placeholder="Business Email" 
                  />
                </div>
              </div>
              
              <div className="space-y-2 group">
                <textarea 
                  className="w-full bg-transparent border-b border-brand-dark/20 py-4 px-2 h-32 focus:outline-none focus:border-brand-gold transition-colors text-brand-dark text-lg resize-none placeholder:text-brand-dark/30 placeholder:text-sm font-light" 
                  placeholder="Tell us about your requirements... (Quantities, specific dry fruits, plates type, or destination port)"
                ></textarea>
              </div>
              
              <div className="pt-8">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="w-full py-5 bg-brand-dark text-brand-sand font-bold uppercase tracking-widest text-xs border border-brand-dark hover:bg-transparent hover:text-brand-dark transition-all duration-300"
                >
                  Submit Inquiry
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
