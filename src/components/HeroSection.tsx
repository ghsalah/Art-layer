"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] bg-white dark:bg-black flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-500 block mb-6">
            Bespoke Art & Fine Framing
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-zinc-900 dark:text-white leading-[1.1] tracking-tight mb-6">
            Frame your <br />
            <span className="italic font-light text-zinc-600 dark:text-zinc-300">masterpieces.</span>
          </h1>

          <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-md mb-10 font-light leading-relaxed">
            Elevate your space with our bestselling wooden and metal frames, or discover authentic traditional Mural artworks handcrafted to perfection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-zinc-900 text-white dark:bg-white dark:text-black text-sm uppercase tracking-widest font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors flex items-center justify-center"
            >
              Shop Collection
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-sm uppercase tracking-widest font-medium hover:border-zinc-900 dark:hover:border-white transition-colors flex items-center justify-center"
            >
              Get Custom Frame
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 aspect-[4/5] md:aspect-square bg-zinc-50 dark:bg-zinc-900 relative group overflow-hidden border border-zinc-100 dark:border-zinc-800"
        >
          {/* Subtle image placeholder that mimics a framed art piece hanging on a clean wall */}
          <div className="absolute inset-x-12 inset-y-16 md:inset-x-24 md:inset-y-24 bg-white dark:bg-black shadow-[rgba(0,0,0,0.08)_0_20px_40px] flex items-center justify-center">
             <div className="absolute inset-2 border border-zinc-100 dark:border-zinc-800" />
             <span className="font-serif italic text-xl text-zinc-400">Pure Wood Frame</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
