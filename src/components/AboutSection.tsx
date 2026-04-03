"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black relative overflow-hidden border-t border-zinc-100 dark:border-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="aspect-[4/5] bg-zinc-50 dark:bg-zinc-900 overflow-hidden relative z-10 w-4/5 border border-zinc-100 dark:border-zinc-800">
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-zinc-900 dark:text-zinc-100 font-serif italic text-2xl">
                  Art Layer Studio
                </div>
              </div>
              <div className="absolute -bottom-10 -right-4 w-3/4 aspect-square bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 z-20 flex items-center justify-center p-8 shadow-xl">
                 <p className="text-zinc-900 dark:text-white font-serif italic text-xl">"Every piece tells a story."</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl font-serif font-bold mb-6">Our Studio</h2>
            <div className="space-y-6 text-zinc-600 dark:text-zinc-400 font-light leading-relaxed text-sm">
              <p>
                At Art Layer Studio, we believe that true beauty lies in the intricate details. Founded with a passion for traditional craftsmanship and minimalist modern aesthetics, our studio is dedicated to creating pieces that resonate with the soul.
              </p>
              <p>
                What started as a modest endeavor to share our love for traditional mural paintings and custom henna designs has blossomed into a full-fledged creative sanctuary. From bespoke wedding invitations to fine solid wood frames, we pour our hearts into every layer of our creation.
              </p>
              <p>
                Our philosophy is simple: source premium materials, craft with precision, and elevate your personal spaces.
              </p>
            </div>
            
            <div className="mt-10 pt-10 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-12">
              <div>
                <span className="block text-2xl font-serif text-zinc-900 dark:text-white mb-1">Premium Quality</span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-500">Materials</span>
              </div>
              <div>
                <span className="block text-2xl font-serif text-zinc-900 dark:text-white mb-1">Handcrafted</span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-500">With Precision</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
