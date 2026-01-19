'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

// Particle type
interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  color: string;
}

export default function CTASection() {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles only on client side to avoid hydration mismatch
  useEffect(() => {
    const colors = ['#00D4FF', '#E91E8C', '#BFFF00', '#8B5CF6'];
    const generatedParticles = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Floating Particles - Full viewport width */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}
      >
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            animate={{
              y: [0, -25, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full opacity-50"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 4}px ${particle.color}`,
            }}
          />
        ))}
      </div>

      {/* Background orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#E91E8C]/20 via-[#8B5CF6]/20 to-[#00D4FF]/20 blur-[100px]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#2A2A2A] text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#BFFF00]" />
            Comienza hoy mismo
          </motion.span>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            ¿Listo para Impulsar{' '}
            <span className="text-gradient">Tu Negocio?</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#A1A1A1] mb-10 max-w-2xl mx-auto">
            Transformemos juntos tu visión en una solución digital exitosa.
            Agenda una consulta gratuita y descubre lo que podemos crear para ti.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E91E8C] to-[#8B5CF6] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(233,30,140,0.4)] hover:scale-105"
            >
              Solicitar Cotización
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/573105845711"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#00D4FF]/50 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]"
            >
              WhatsApp Directo
            </a>
          </div>

          {/* Trust Text */}
          <p className="mt-8 text-[#6B6B6B] text-sm">
            Sin compromisos • Respuesta en menos de 24 horas
          </p>
        </motion.div>
      </div>
    </section>
  );
}
