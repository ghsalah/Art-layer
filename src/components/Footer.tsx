"use client";

import Link from "next/link";
import { Phone as PhoneIcon, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-serif font-bold text-white flex flex-col gap-1 mb-6">
              <span className="flex items-center gap-2">
                <span className="text-gold">Art</span>
                <span>Layer Studio</span>
              </span>
              <span className="text-sm font-sans font-light tracking-widest text-zinc-400">— Layers of Creativity</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed font-light">
              Layers of Creativity. Elevating your special moments through authentic craftsmanship, personalized aesthetics, and timeless artistry.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-gold hover:border-gold transition-colors">
                 <PhoneIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#home" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="#portfolio" className="text-gray-400 hover:text-gold transition-colors">Portfolio</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg tracking-wide uppercase">Services</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 hover:text-gold transition-colors cursor-pointer">Bridal Mehndi</li>
              <li className="text-gray-400 hover:text-gold transition-colors cursor-pointer">Wedding Invitations</li>
              <li className="text-gray-400 hover:text-gold transition-colors cursor-pointer">Custom Art Frames</li>
              <li className="text-gray-400 hover:text-gold transition-colors cursor-pointer">Bespoke Artwork</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Art Layer Studio — Layers of Creativity. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
