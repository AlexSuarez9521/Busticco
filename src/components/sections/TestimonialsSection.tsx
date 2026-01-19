'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
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

const testimonials = [
  {
    id: 1,
    name: 'María García',
    role: 'CEO',
    company: 'TechStart Colombia',
    content: 'BUSTICCO transformó nuestra visión en una aplicación increíble. Su equipo fue profesional, creativo y siempre dispuesto a ir más allá de nuestras expectativas.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    role: 'Director de Marketing',
    company: 'EcoSolutions',
    content: 'La automatización con IA que implementaron revolucionó nuestro servicio al cliente. Respuestas 24/7 y una experiencia de usuario excepcional.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ana Martínez',
    role: 'Fundadora',
    company: 'Boutique Luna',
    content: 'Nuestra tienda en línea superó todas las metas de ventas gracias al diseño y la estrategia de BUSTICCO. Son verdaderos expertos en e-commerce.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonios" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
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

      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#8B5CF6]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#E91E8C]/10 blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          badge="Testimonios"
          title="Lo Que Dicen"
          highlightedText="Nuestros Clientes"
          description="Historias de éxito que nos inspiran a seguir innovando."
        />

        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#111111] rounded-3xl p-8 md:p-12 border border-[#2A2A2A] relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-[#E91E8C]/20 to-[#8B5CF6]/20 flex items-center justify-center">
                  <Quote className="w-8 h-8 text-[#E91E8C]" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#BFFF00] fill-[#BFFF00]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xl md:text-2xl text-white leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#E91E8C] flex items-center justify-center text-white text-xl font-bold">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-[#A1A1A1]">
                      {testimonials[currentIndex].role} en {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-3 rounded-full bg-[#111111] border border-[#2A2A2A] hover:border-[#00D4FF]/50 text-white hover:text-[#00D4FF] transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-gradient-to-r from-[#E91E8C] to-[#00D4FF]'
                        : 'w-2 bg-[#2A2A2A] hover:bg-[#3A3A3A]'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full bg-[#111111] border border-[#2A2A2A] hover:border-[#00D4FF]/50 text-white hover:text-[#00D4FF] transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
