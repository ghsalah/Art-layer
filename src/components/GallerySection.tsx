"use client";

import { motion } from "framer-motion";

const products = [
  { title: "Osaka Frame - Metal", category: "Metal Frames", price: "from ₹899", image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&q=80&w=800" },
  { title: "Kathakali Mural Art", category: "Traditional Art", price: "from ₹2,499", image: "https://images.unsplash.com/photo-1582559934158-b11c38fa800b?auto=format&fit=crop&q=80&w=800" },
  { title: "Chicago Frame - Solid Wood", category: "Wooden Frames", price: "from ₹1,299", image: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?auto=format&fit=crop&q=80&w=800" },
  { title: "Floral Save The Date", category: "Custom Invitations", price: "from ₹499", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800" },
  { title: "Austin Frame - Solid Wood", category: "Wooden Frames", price: "from ₹1,099", image: "https://images.unsplash.com/photo-1629853880406-fc4bebcda2c4?auto=format&fit=crop&q=80&w=800" },
  { title: "Buddha Abstract Canvas", category: "Canvas Art", price: "from ₹3,599", image: "https://images.unsplash.com/photo-1570535032596-f36bc4bb8b95?auto=format&fit=crop&q=80&w=800" },
  { title: "Kyoto Frame - Metal", category: "Metal Frames", price: "from ₹950", image: "https://plus.unsplash.com/premium_photo-1673809703666-8ac5c4c16dcc?auto=format&fit=crop&q=80&w=800" },
  { title: "Bespoke Bridal Mehndi", category: "Service", price: "Consultation", image: "https://images.unsplash.com/photo-1578335047879-114ebfa2ee24?auto=format&fit=crop&q=80&w=800" }
];

export default function GallerySection() {
  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-[#09090b] transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight text-balance">Best Selling Frames</h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-base max-w-2xl mx-auto font-light">Explore our curated collection of bestselling designs and authentic pieces, perfectly crafted to elevate your space.</p>
        </div>

        <div className="flex justify-between items-center mb-8 pb-4 border-b border-zinc-100 dark:border-zinc-800">
           <span className="text-sm text-zinc-500 dark:text-zinc-400">{products.length} products</span>
           <div className="flex gap-6">
             <button className="text-[13px] uppercase tracking-widest font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-500 transition-colors">Filter</button>
             <button className="text-[13px] uppercase tracking-widest font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-500 transition-colors">Sort</button>
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] bg-zinc-50 dark:bg-zinc-900 mb-5 overflow-hidden relative border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors duration-300">
                <motion.div 
                  className="w-full h-full relative"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img 
                      src={product.image} 
                      alt={product.title}
                      className="object-cover w-full h-full"
                   />
                </motion.div>
                {index < 2 && (
                  <div className="absolute top-3 left-3 bg-white dark:bg-zinc-800 px-3 py-1.5 text-[10px] uppercase tracking-widest font-semibold shadow-sm text-zinc-900 dark:text-zinc-100">
                    Bestseller
                  </div>
                )}
              </div>
              
              <div className="flex flex-col items-center text-center gap-1">
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-widest mb-1">{product.category}</span>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 leading-snug">{product.title}</h3>
                <p className="text-sm text-zinc-900 dark:text-zinc-300 mt-2 font-medium">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
