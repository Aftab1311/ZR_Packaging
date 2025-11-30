import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Magnetic } from './ui/Magnetic';
import { MapPin, Mail, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const inputs = [
    { name: 'name', label: 'What is your name?', type: 'text', placeholder: 'John Doe' },
    { name: 'email', label: 'What is your email?', type: 'email', placeholder: 'john@example.com' },
    { name: 'company', label: 'Company name', type: 'text', placeholder: 'Acme Corp' },
    { name: 'message', label: 'Tell us about your project', type: 'textarea', placeholder: 'I need packaging for...' },
  ];

  return (
    <section id="contact" className="py-24 bg-zr-darker text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-5xl md:text-6xl mb-8"
            >
              Let's start a <br />
              <span className="text-zr-accent">project together.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-lg mb-12 max-w-md"
            >
              From concept to production, our engineers are ready to bring your vision to life.
            </motion.p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-zr-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Email us</p>
                  <p className="text-lg font-medium">hello@zrpackaging.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-zr-accent">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Call us</p>
                  <p className="text-lg font-medium">+1 (555) 012-3456</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-zr-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Visit HQ</p>
                  <p className="text-lg font-medium">128 Industrial Blvd, Suite 400<br/>New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white/[0.02] p-8 md:p-12 rounded-3xl border border-white/5">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
              {inputs.map((field) => (
                <div key={field.name} className="relative">
                  <label className="block text-sm text-white/60 mb-2 font-medium">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea 
                      rows={3}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none resize-none"
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      placeholder={field.placeholder}
                    />
                  ) : (
                    <input 
                      type={field.type}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none"
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      placeholder={field.placeholder}
                    />
                  )}
                  {/* Animated Border Line */}
                  <motion.div 
                    initial={{ width: '0%' }}
                    animate={{ width: focusedField === field.name ? '100%' : '0%' }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 h-[2px] bg-zr-accent"
                  />
                </div>
              ))}

              <div className="pt-4">
                <Magnetic>
                  <button className="w-full md:w-auto bg-zr-accent text-zr-dark font-display font-bold text-lg px-10 py-4 rounded-full hover:bg-white transition-colors duration-300">
                    Send Inquiry
                  </button>
                </Magnetic>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};