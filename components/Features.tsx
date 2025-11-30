import React from 'react';
import { motion } from 'framer-motion';
import { ValueProp } from '../types';

const valueProps: ValueProp[] = [
  {
    id: 1,
    title: 'Eco-First Design',
    description: 'FSC-certified materials and water-based inks are our standard, not an upgrade.',
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" // Shield/Leaf shape
  },
  {
    id: 2,
    title: 'Rapid Prototyping',
    description: 'From CAD file to physical sample in your hands within 48 hours.',
    iconPath: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" // Lightning bolt
  },
  {
    id: 3,
    title: 'ISO 9001 Certified',
    description: 'Automated quality control systems ensuring zero-defect production runs.',
    iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" // Check circle
  },
];

const marqueeItems = [
  "Sustainable", "FSC Certified", "Custom Engineering", "Global Logistics", "Rapid Prototyping", "Luxury Finishes", "Soy-based Inks", "Structural Design"
];

export const Features: React.FC = () => {
  return (
    <section id="industries" className="py-20 bg-zr-darker overflow-hidden">
      {/* Marquee */}
      <div className="relative w-full py-10 border-y border-white/5 bg-white/[0.02] mb-20">
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 pr-16"
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-white/40 font-display text-4xl font-bold uppercase tracking-tighter">
                <span>{item}</span>
                <div className="w-3 h-3 bg-zr-accent rounded-full" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {valueProps.map((prop, index) => (
            <div key={prop.id} className="relative group">
              <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
                 <div className="absolute inset-0 bg-zr-accent/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                 
                 {/* SVG Draw Animation */}
                 <svg 
                   viewBox="0 0 24 24" 
                   fill="none" 
                   stroke="currentColor" 
                   strokeWidth="1.5" 
                   strokeLinecap="round" 
                   strokeLinejoin="round" 
                   className="w-10 h-10 text-zr-accent"
                 >
                   <motion.path
                     d={prop.iconPath}
                     initial={{ pathLength: 0 }}
                     whileInView={{ pathLength: 1 }}
                     viewport={{ once: true, margin: "-100px" }}
                     transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                   />
                 </svg>
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-zr-accent transition-colors">
                {prop.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {prop.description}
              </p>
              
              {/* Decorative line */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + (index * 0.2) }}
                className="h-[1px] bg-white/10 mt-8"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};