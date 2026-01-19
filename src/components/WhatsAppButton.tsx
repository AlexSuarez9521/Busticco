'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/573105845711?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contactar por WhatsApp"
    >
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-all duration-300 group-hover:shadow-[#25D366]/50">
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-[#1A1A1A] text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap border border-[#2A2A2A]">
          ¡Escríbenos!
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-[#1A1A1A] border-r border-t border-[#2A2A2A]" />
        </div>
      </div>
    </motion.a>
  );
}
