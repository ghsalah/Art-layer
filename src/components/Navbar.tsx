"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Search, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Shop By Category", href: "/shop" },
    { name: "Custom Frames", href: "/services" },
    { name: "Traditional Art", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-100 dark:bg-[#09090b]/90 dark:border-zinc-900 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2 -ml-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>

        {/* Logo */}
        <Link href="#home" className="text-xl md:text-2xl font-serif font-bold text-foreground flex items-center tracking-tight gap-1">
          <span className="text-gold">Art Layer</span>
          <span>Studio</span>
          <span className="hidden md:inline text-zinc-400 font-sans text-sm font-light tracking-wide ml-2">— Layers of Creativity</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-medium tracking-wide uppercase text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 text-zinc-900 dark:text-white">
          <button className="p-2 hover:opacity-70 transition-opacity" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === "dark" ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
          </button>
          <button className="p-2 hover:opacity-70 transition-opacity">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button className="p-2 hover:opacity-70 transition-opacity">
            <ShoppingBag size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-[#09090b] border-t border-zinc-100 dark:border-zinc-900 overflow-hidden"
          >
            <div className="flex flex-col py-8 px-6 gap-6 h-full">
              {navLinks.map((link, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif text-zinc-900 dark:text-white hover:opacity-70 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
