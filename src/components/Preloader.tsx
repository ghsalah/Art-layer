"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate image loading or initial delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5s load time

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-white dark:bg-[#09090b] flex flex-col items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <h1 className="text-3xl font-serif tracking-widest text-zinc-900 dark:text-zinc-100 uppercase text-center flex gap-2">
              <span className="text-gold">Art Layer</span>
              <span>Studio</span>
            </h1>
            <div className="w-48 h-[1px] bg-zinc-200 dark:bg-zinc-800 overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 left-0 w-1/2 bg-zinc-900 dark:bg-zinc-100"
              />
            </div>
            <span className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase mt-2 text-center">Layers of Creativity</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
