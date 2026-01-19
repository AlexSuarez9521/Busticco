'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Rocket } from 'lucide-react';
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

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Cuéntanos tu Idea',
    description: 'Escuchamos tu visión, analizamos tus necesidades y definimos juntos los objetivos de tu proyecto.',
    color: '#00D4FF',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Diseñamos la Solución',
    description: 'Creamos una estrategia personalizada y un diseño que refleja tu marca y cautiva a tu audiencia.',
    color: '#E91E8C',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Lanzamos al Éxito',
    description: 'Desarrollamos, probamos y lanzamos tu proyecto. Te acompañamos en cada paso del camino.',
    color: '#BFFF00',
  },
];

export default function ProcessSection() {
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
    <section id="proceso" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
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
              y: [0, -30, 0],
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

      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#E91E8C]/5 via-transparent to-[#00D4FF]/5 blur-3xl" />

      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        <SectionTitle
          badge="Nuestro Proceso"
          title="Simple y"
          highlightedText="Efectivo"
          description="Trabajamos contigo de forma transparente y ágil para convertir tu idea en realidad."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-1/2 w-full h-px">
                  <div className="w-full h-full bg-gradient-to-r from-[#2A2A2A] via-[#3A3A3A] to-[#2A2A2A]" />
                </div>
              )}

              <div className="relative text-center group">
                {/* Step Circle */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-48 h-48 mx-auto mb-8"
                >
                  {/* Outer glow ring */}
                  <div
                    className="absolute inset-0 rounded-full opacity-20 blur-xl transition-opacity group-hover:opacity-40"
                    style={{ backgroundColor: step.color }}
                  />

                  {/* Main circle */}
                  <div
                    className="absolute inset-4 rounded-full border-2 flex items-center justify-center transition-all duration-300"
                    style={{
                      borderColor: `${step.color}50`,
                      backgroundColor: `${step.color}10`,
                    }}
                  >
                    <step.icon className="w-16 h-16" style={{ color: step.color }} />
                  </div>

                  {/* Number badge */}
                  <div
                    className="absolute -top-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.number}
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-[#A1A1A1] leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
