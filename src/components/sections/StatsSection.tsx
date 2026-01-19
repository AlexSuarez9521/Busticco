'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { Users, FolderCheck, Clock, Award } from 'lucide-react';

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

const stats = [
  {
    icon: Users,
    value: 120,
    suffix: '+',
    label: 'Clientes Felices',
    color: '#E91E8C',
  },
  {
    icon: FolderCheck,
    value: 230,
    suffix: '+',
    label: 'Proyectos Completados',
    color: '#00D4FF',
  },
  {
    icon: Clock,
    value: 8,
    suffix: '+',
    label: 'Años de Experiencia',
    color: '#BFFF00',
  },
  {
    icon: Award,
    value: 99,
    suffix: '%',
    label: 'Satisfacción',
    color: '#8B5CF6',
  },
];

export default function StatsSection() {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles only on client side to avoid hydration mismatch
  useEffect(() => {
    const colors = ['#00D4FF', '#E91E8C', '#BFFF00', '#8B5CF6'];
    const generatedParticles = Array.from({ length: 15 }, (_, i) => ({
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
    <section className="py-20 bg-[#0A0A0A] relative">
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

      {/* Floating orbs */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute left-1/4 top-1/2 w-64 h-64 rounded-full bg-[#E91E8C]/10 blur-[100px] z-0"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute right-1/4 top-1/2 w-64 h-64 rounded-full bg-[#00D4FF]/10 blur-[100px] z-0"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
              </motion.div>

              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>

              <h3 className="text-lg font-medium text-white mb-1">
                {stat.label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
