import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ProductItem } from '../types';
import blister from "../components/assets/blisters.jpg";
import trays from "../components/assets/trays.jpg";
import pvc from "../components/assets/pvc.jpg";
import black from "../components/assets/black.jpg";

const products: ProductItem[] = [
  {
    id: 1,
    title: 'Rigid Boxes',
    category: 'Premium',
    description: 'High-density chipboard wrapped in premium textured papers.',
    image: trays,
    colSpan: 2
  },
  {
    id: 2,
    title: 'Transparent PVC Trays',
    category: 'Sustainable',
    description: '100% Recycled content, compostable ink.',
    image: pvc,
    colSpan: 1
  },
  {
    id: 3,
    title: 'Custom Inserts',
    category: 'Engineering',
    description: 'Molded pulp and die-cut foam for perfect fit.',
    image: black,
    colSpan: 1
  },
  {
    id: 4,
    title: 'Corrugated Shipping',
    category: 'Industrial',
    description: 'Double-walled strength for global logistics.',
    image: blister,
    colSpan: 2
  },
];

export const BentoGrid: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-zr-dark relative">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Our Craft</h2>
          <p className="text-white/60 max-w-xl">
            Precision-engineered packaging solutions designed to elevate your brand value while minimizing environmental impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-zr-gray ${product.colSpan === 2 ? 'md:col-span-2' : ''}`}
            >
              {/* Image Background */}
              <div className="absolute inset-0">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zr-dark via-transparent to-transparent opacity-90" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                  <span className="text-zr-accent text-sm font-medium tracking-wider uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {product.category}
                  </span>
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">
                        {product.title}
                      </h3>
                      <p className="text-white/70 max-w-sm h-0 overflow-hidden group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300">
                        {product.description}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-zr-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                      <ArrowUpRight className="text-zr-dark w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-zr-accent rounded-2xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};