
import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { GalleryItem } from '../types';
import zipper from "../components/assets/zipper.jpg";
import pvctray from "../components/assets/pvctray.jpg";
import pvcbox from "../components/assets/pvcbox.jpg";
import pvcsweettray from "../components/assets/pvcsweettray.jpg";
import mushroom from "../components/assets/mushroom.jpg";
import inject from "../components/assets/inject.jpg";
import bottles from "../components/assets/bottles.jpg";
import btray from "../components/assets/btray.jpg";
import cupcake from "../components/assets/cupcake.jpg";

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Zipper Packs',
    category: 'Stationery',
    src: zipper,
    heightClass: 'aspect-[3/4]'
  },
  {
    id: 2,
    title: 'Recycled PVC Trays',
    category: 'Sustainable',
    src: pvctray,
    heightClass: 'aspect-square'
  },
  {
    id: 3,
    title: 'Holographic Injection Trays',
    category: 'Finishing',
    src: inject,
    heightClass: 'aspect-[3/2]'
  },
  {
    id: 4,
    title: 'Mushroom Blisters',
    category: 'Pharmaceutical',
    src: mushroom,
    heightClass: 'aspect-[6/7]'
  },
  {
    id: 5,
    title: 'Food Grade Trays',
    category: 'Food Safety',
    src: cupcake,
    heightClass: 'aspect-[6/5]'
  },
  {
    id: 6,
    title: 'Luxury Bottles',
    category: 'Luxury',
    src: bottles,
    heightClass: 'aspect-[2/3]'
  },
  {
    id: 7,
    title: 'Biodegradable PVC Boxes',
    category: 'Innovation',
    src: pvcbox,
    heightClass: 'aspect-square'
  },
  {
    id: 8,
    title: 'Vacuum Formed Trays',
    category: 'Industrial',
    src: pvcsweettray,
    heightClass: 'aspect-[3/4]'
  },
  {
    id: 9,
    title: 'Blister Packaging Tray',
    category: 'Food Safety',
    src: btray,
    heightClass: 'aspect-[3/2]'
  }
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-zr-dark relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Material <span className="text-zr-accent">Showcase</span>
            </h2>
            <p className="text-white/60 max-w-xl text-lg">
              A visual index of our advanced manufacturing capabilities, from OV blister packs to sustainable substrates.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-2 text-white/40 text-sm font-mono uppercase tracking-widest">
              <span>Scroll for more</span>
              <div className="w-12 h-[1px] bg-white/20"></div>
            </div>
          </div>
        </motion.div>

        {/* Masonry Grid using Tailwind Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="break-inside-avoid relative group rounded-xl overflow-hidden bg-zr-gray cursor-pointer"
            >
              <div className={`${item.heightClass} w-full relative`}>
                 <img 
                    src={item.src} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-zr-dark/0 group-hover:bg-zr-dark/60 transition-colors duration-300" />
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-zr-accent text-zr-dark flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Plus className="w-5 h-5" />
                  </div>
                </div>
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  <span className="text-zr-accent text-xs font-bold uppercase tracking-wider mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-white font-display font-bold text-xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
