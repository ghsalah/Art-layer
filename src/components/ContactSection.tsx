"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl font-serif font-bold mb-6">Contact Us</h2>
            <p className="text-zinc-500 font-light mb-10 max-w-lg leading-relaxed text-sm">
              Ready to bring your vision to life? Fill out the form below to inquire about our services, check availability, or discuss custom framing and artworks.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white dark:bg-zinc-900 flex items-center justify-center text-zinc-900 dark:text-white shrink-0 border border-zinc-200 dark:border-zinc-800">
                  <Mail strokeWidth={1.5} size={18} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-sm uppercase tracking-wide">Email</h4>
                  <p className="text-zinc-500 text-sm font-light">dummy@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white dark:bg-zinc-900 flex items-center justify-center text-zinc-900 dark:text-white shrink-0 border border-zinc-200 dark:border-zinc-800">
                  <Phone strokeWidth={1.5} size={18} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-sm uppercase tracking-wide">Phone</h4>
                  <p className="text-zinc-500 text-sm font-light">+0 (123) 456-7890<br/>Mon-Sat: 10:00 am to 7:00 pm</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white dark:bg-zinc-900 flex items-center justify-center text-zinc-900 dark:text-white shrink-0 border border-zinc-200 dark:border-zinc-800">
                   <MapPin strokeWidth={1.5} size={18} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-sm uppercase tracking-wide">Location</h4>
                  <p className="text-zinc-500 text-sm font-light">123 Dummy Street, Suite 000<br/>Dummy City, DC</p>
                </div>
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
            <form className="bg-white dark:bg-zinc-900 p-8 md:p-10 border border-zinc-200 dark:border-zinc-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-widest font-medium mb-2 text-zinc-500">Your Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 px-0 py-3 focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors text-sm" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-widest font-medium mb-2 text-zinc-500">Phone</label>
                  <input type="tel" className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 px-0 py-3 focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors text-sm" placeholder="+1 (555) 000-0000" required />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[11px] uppercase tracking-widest font-medium mb-2 text-zinc-500">Service Required</label>
                <select className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 px-0 py-3 focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors text-sm appearance-none rounded-none" required>
                  <option value="" disabled selected>Select a service</option>
                  <option value="frames">Custom Art Frames</option>
                  <option value="artwork">Traditional Mural Painting</option>
                  <option value="mehndi">Bridal & Custom Mehndi</option>
                  <option value="invitations">Wedding Invitations / Save the Date</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-[11px] uppercase tracking-widest font-medium mb-2 text-zinc-500">Project Description</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 px-0 py-3 focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors text-sm resize-none" placeholder="Frame dimensions, art style, wedding details..." required></textarea>
              </div>

              <button type="submit" className="w-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 py-4 text-[13px] uppercase tracking-widest font-medium hover:opacity-80 transition-opacity">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
