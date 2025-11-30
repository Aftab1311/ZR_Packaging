import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavLink } from '../types';

const links: NavLink[] = [
  { name: 'Solutions', href: '#solutions' },
  { name: 'Industries', href: '#industries' },
  { name: 'Sustainability', href: '#sustainability' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className={`relative flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${
            isScrolled ? 'bg-white/5 backdrop-blur-md border border-white/10 shadow-lg' : 'bg-transparent'
          }`}>
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 z-50">
              <div className="w-8 h-8 bg-zr-accent rounded-sm flex items-center justify-center">
                <span className="font-display font-bold text-zr-dark text-lg">Z</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                ZR PACKAGING
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-white/70 hover:text-zr-accent transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="bg-zr-accent text-zr-dark font-display font-semibold px-6 py-2 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden z-50 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-zr-dark flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-8 text-center">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-4xl font-bold text-white hover:text-zr-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 font-display text-xl text-zr-dark bg-zr-accent px-8 py-3 rounded-full"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};