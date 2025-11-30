import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "ZR Packaging transformed our unboxing experience. The attention to detail and material quality perfectly aligns with our luxury brand ethos.",
    author: "Sarah Jenkins",
    company: "Lumina Cosmetics"
  },
  {
    id: 2,
    quote: "We needed a sustainable solution that didn't compromise on durability. ZR engineered a custom insert that reduced our shipping damage by 40%.",
    author: "Marcus Thorne",
    company: "Echo Electronics"
  },
  {
    id: 3,
    quote: "Fastest turnaround in the industry without sacrificing quality. Their design team is essentially an extension of our own.",
    author: "Elena Rodriguez",
    company: "Pure Home Goods"
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-zr-dark relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <span className="text-zr-accent uppercase tracking-widest text-sm font-semibold">Testimonials</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2">Trusted by Industry Leaders</h2>
        </motion.div>

        <div className="relative bg-white/5 border border-white/5 rounded-3xl p-8 md:p-16 backdrop-blur-sm">
          <Quote className="absolute top-8 left-8 text-white/10 w-24 h-24 rotate-180" />
          
          <div className="relative z-10 min-h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <p className="font-display text-2xl md:text-3xl text-white leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <h4 className="text-zr-accent font-bold text-lg">{testimonials[currentIndex].author}</h4>
                  <p className="text-white/50">{testimonials[currentIndex].company}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="p-3 rounded-full border border-white/10 text-white hover:bg-white hover:text-zr-dark transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-zr-accent w-6' : 'bg-white/20'}`} 
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="p-3 rounded-full border border-white/10 text-white hover:bg-white hover:text-zr-dark transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};