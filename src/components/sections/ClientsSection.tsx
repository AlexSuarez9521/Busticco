'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';

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

const clients = [
  { name: 'TechStart', initials: 'TS', color: '#00D4FF' },
  { name: 'EcoSolutions', initials: 'ES', color: '#BFFF00' },
  { name: 'Boutique Luna', initials: 'BL', color: '#E91E8C' },
  { name: 'Constructora', initials: 'CA', color: '#8B5CF6' },
  { name: 'MediHealth', initials: 'MH', color: '#00D4FF' },
  { name: 'FoodDelivery', initials: 'FD', color: '#BFFF00' },
  { name: 'AutoTech', initials: 'AT', color: '#E91E8C' },
  { name: 'EduPlus', initials: 'EP', color: '#8B5CF6' },
];

export default function ClientsSection() {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles only on client side to avoid hydration mismatch
  useEffect(() => {
    const colors = ['#00D4FF', '#E91E8C', '#BFFF00', '#8B5CF6'];
    const generatedParticles = Array.from({ length: 16 }, (_, i) => ({
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
          width: '100vw',
          height: '100%',
          overflow: 'hidden'
        }}
      >
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            animate={{
              y: [0, -20, 0],
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

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          badge="Clientes"
          title="Empresas Que"
          highlightedText="Confían en Nosotros"
          description="Orgullosos de trabajar con empresas que buscan la excelencia."
        />

        {/* Clients Grid */}
        <div className="mt-12 overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: { repeat: Infinity, repeatType: 'loop', duration: 25, ease: 'linear' },
            }}
            className="flex gap-6"
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                whileHover={{ y: -5 }}
                className="flex-shrink-0 w-44 h-28 rounded-2xl bg-[#111111] border border-[#2A2A2A] flex items-center justify-center hover:border-[#3A3A3A] transition-all duration-300 group"
                style={{
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${client.color}20`;
                  e.currentTarget.style.borderColor = `${client.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#2A2A2A';
                }}
              >
                <div className="text-center">
                  <div
                    className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-2 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${client.color}15` }}
                  >
                    <span className="text-lg font-bold" style={{ color: client.color }}>
                      {client.initials}
                    </span>
                  </div>
                  <span className="text-sm text-[#6B6B6B] group-hover:text-white transition-colors">
                    {client.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {[
            { text: 'Atención 24/7', color: '#00D4FF' },
            { text: 'Garantía de Calidad', color: '#E91E8C' },
            { text: 'Tecnología de Punta', color: '#BFFF00' },
            { text: 'Soporte Continuo', color: '#8B5CF6' },
          ].map((badge) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-[#A1A1A1]"
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: badge.color }} />
              <span>{badge.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
