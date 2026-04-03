"use client";

import { motion } from "framer-motion";
import { Brush, Heart, Palette, Image as ImageIcon } from "lucide-react";

const services = [
  {
    icon: <Brush size={24} strokeWidth={1.5} />,
    title: "Custom Mehndi Design",
    description: "Intricate, bespoke henna patterns for weddings and special occasions."
  },
  {
    icon: <Heart size={24} strokeWidth={1.5} />,
    title: "Wedding Invitations",
    description: "Elegant 'Save the Date' cards and full invitation suites with an artistic touch."
  },
  {
    icon: <ImageIcon size={24} strokeWidth={1.5} />,
    title: "Fine Art Frames",
    description: "Premium wooden and metal frames to preserve your cherished memories."
  },
  {
    icon: <Palette size={24} strokeWidth={1.5} />,
    title: "Traditional Art",
    description: "Authentic mural paintings and handcrafted traditional Indian artworks."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-serif font-bold mb-3"
          >
            Creative Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 font-light text-sm max-w-lg mx-auto"
          >
            From intricate henna to bespoke traditional art frames, we bring your vision to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center mb-4 shadow-sm border border-zinc-100 dark:border-zinc-800 text-zinc-900 dark:text-white transition-transform group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wide mb-2">{service.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm font-light leading-relaxed max-w-[250px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
