
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent, id: string) => {
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
    <footer className="bg-brand-dark text-brand-sand pt-32 pb-12 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-8 cursor-pointer" onClick={(e) => scrollToSection(e, 'hero')}>
              <span className="text-3xl font-serif tracking-widest text-brand-sand">
                OM SHIV
              </span>
              <span className="text-xl font-serif text-brand-gold italic">EXIM</span>
            </div>
            <p className="text-brand-sand/60 text-sm leading-relaxed mb-8 max-w-xs font-light">
              Pioneering excellence in dry fruits and eco-friendly products export. Quality verified, global standards maintained.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-10 text-brand-gold">Navigation</h4>
            <ul className="space-y-6 text-brand-sand/70 text-sm font-light">
              <li><a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="hover:text-brand-gold transition-colors">Digital Home</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-brand-gold transition-colors">Our Legacy</a></li>
              <li><a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="hover:text-brand-gold transition-colors">Export Catalog</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-brand-gold transition-colors">Contact Hub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-10 text-brand-gold">Headquarters</h4>
            <ul className="space-y-6 text-brand-sand/70 text-sm font-light">
              <li className="flex flex-col space-y-1">
                <span className="text-brand-sand/40 text-[10px] uppercase font-bold tracking-widest">Address</span>
                <span>Surat, Gujarat, India</span>
              </li>
              <li className="flex flex-col space-y-1">
                <span className="text-brand-sand/40 text-[10px] uppercase font-bold tracking-widest">Business Email</span>
                <a href="mailto:omshivexim@gmail.com" className="hover:text-brand-gold transition-colors">omshivexim@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-10 text-brand-gold">Connectivity</h4>
            <div className="flex space-x-6 mb-10">
              {['IN', 'LI', 'FB'].map((social) => (
                <motion.a
                  key={social}
                  whileHover={{ y: -3, color: '#D4AF37' }}
                  href="#"
                  className="w-10 h-10 border border-brand-sand/20 flex items-center justify-center text-[10px] font-bold tracking-widest hover:border-brand-gold transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
            <p className="text-brand-sand/40 text-[10px] font-bold uppercase tracking-widest">Direct Desk: +91 7567096951</p>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-sand/10 flex flex-col md:flex-row justify-between items-center text-brand-sand/40 text-[10px] font-bold uppercase tracking-widest">
          <p>© {currentYear} Om Shiv Exim Worldwide.</p>
          <div className="flex space-x-12 mt-6 md:mt-0">
            <a href="#" className="hover:text-brand-sand transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-sand transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
