import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zr-dark relative overflow-hidden pt-20 pb-10">
      {/* Large Watermark */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none">
        <h1 className="text-[20vw] font-display font-bold text-white/[0.03] leading-none text-center transform translate-y-[20%]">
          ZR PACKAGING
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="font-display font-bold text-2xl text-white mb-6 block">ZR PACKAGING</a>
            <p className="text-white/60 max-w-sm mb-8">
              Engineered sustainable packaging solutions for the world's most innovative brands.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-zr-accent hover:text-zr-dark hover:border-zr-accent transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-zr-accent hover:text-zr-dark hover:border-zr-accent transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-zr-accent hover:text-zr-dark hover:border-zr-accent transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Sitemap</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-zr-accent transition-colors">Solutions</a></li>
              <li><a href="#" className="hover:text-zr-accent transition-colors">Industries</a></li>
              <li><a href="#" className="hover:text-zr-accent transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-zr-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-zr-accent transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Newsletter</h4>
            <p className="text-white/60 text-sm mb-4">Stay updated with our latest innovations.</p>
            <div className="flex border-b border-white/20 pb-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent text-white w-full outline-none placeholder:text-white/30"
              />
              <button className="text-zr-accent font-bold text-sm uppercase">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} ZR Packaging Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};