import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { Magnetic } from './ui/Magnetic';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotate = useTransform(scrollY, [0, 500], [45, 90]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-zr-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.05]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            <motion.div 
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[1px] bg-zr-accent"></div>
              <span className="text-zr-accent font-medium tracking-wider text-sm uppercase">Est. 1998</span>
            </motion.div>

            <motion.h1 
              variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white mb-8"
            >
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                The Future
              </span> <br />
              of Packaging
            </motion.h1>

            <motion.p 
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed mb-10"
            >
              Premium, sustainable, and custom packaging solutions tailored for global brands who demand precision and aesthetics.
            </motion.p>

            <motion.div 
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="flex flex-wrap gap-6"
            >
              <Magnetic>
                <a href="#products" className="group relative inline-flex items-center gap-3 bg-zr-light text-zr-dark px-8 py-4 rounded-full font-display font-semibold transition-all hover:bg-zr-accent">
                  Explore Solutions
                  <ArrowDownRight className="w-5 h-5 transition-transform group-hover:rotate-[-45deg]" />
                </a>
              </Magnetic>
              
              <div className="flex items-center gap-4">
                 <div className="flex -space-x-3">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-zr-dark bg-gray-800 overflow-hidden">
                       <img src={`https://picsum.photos/100/100?random=${i}`} alt="Client" className="w-full h-full object-cover" />
                     </div>
                   ))}
                 </div>
                 <div className="text-sm text-white/80">
                   <span className="font-bold text-white block">200+</span>
                   Global Partners
                 </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Abstract 3D Visual */}
        <motion.div 
          style={{ y: y1 }}
          className="order-1 lg:order-2 flex justify-center items-center relative h-[400px] md:h-[600px]"
        >
           {/* Abstract Box Representation */}
           <motion.div 
              style={{ rotate }}
              className="relative w-64 h-64 md:w-80 md:h-80 border-2 border-white/20 backdrop-blur-sm bg-white/5"
           >
              {/* Inner floating elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 w-32 h-32 bg-zr-accent/80 border border-white/20" 
              />
              <motion.div 
                style={{ y: y2 }}
                className="absolute -bottom-8 -left-8 w-40 h-40 border border-zr-accent/50 bg-zr-dark/80 backdrop-blur-md" 
              />
              <div className="absolute inset-4 border border-white/10 flex items-center justify-center">
                 <div className="text-zr-accent/20 font-display font-bold text-6xl">ZR</div>
              </div>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
};