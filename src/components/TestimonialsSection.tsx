"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah & John",
    role: "Wedding Couple",
    text: "The Save the Date cards were incredibly elegant. They truly captured our story and beautifully set the tone for our wedding.",
  },
  {
    name: "Aisha M.",
    role: "Bride",
    text: "My bridal mehndi was simply breathtaking! The details were immaculate, and I received compliments all night long.",
  },
  {
    name: "David L.",
    role: "Art Collector",
    text: "I ordered a custom frame for antique artwork, and the quality exceeded my expectations. The finish is a masterpiece.",
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white dark:bg-black w-full overflow-hidden border-t border-zinc-100 dark:border-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-serif font-bold mb-3"
          >
            Client Experiences
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 font-light text-sm max-w-lg mx-auto"
          >
            Hear from our wonderful clients who trusted us with their special moments and artwork.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-zinc-50 dark:bg-zinc-900 p-8 flex flex-col justify-between border border-zinc-100 dark:border-zinc-800"
            >
              <div>
                <div className="text-zinc-900 dark:text-zinc-100 mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 font-light italic mb-8 leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-wide uppercase text-zinc-900 dark:text-zinc-100">{testimonial.name}</h4>
                <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
