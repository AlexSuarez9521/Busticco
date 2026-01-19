'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Sparkles, Award, Users, Zap } from 'lucide-react';
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

const values = [
  {
    icon: Sparkles,
    title: 'Innovación',
    description: 'Siempre a la vanguardia de las últimas tecnologías.',
    color: '#00D4FF',
  },
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Comprometidos con la calidad en cada proyecto.',
    color: '#E91E8C',
  },
  {
    icon: Users,
    title: 'Colaboración',
    description: 'Trabajamos como extensión de tu equipo.',
    color: '#BFFF00',
  },
  {
    icon: Zap,
    title: 'Agilidad',
    description: 'Entregas rápidas sin sacrificar calidad.',
    color: '#8B5CF6',
  },
];

export default function AboutSection() {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles only on client side to avoid hydration mismatch
  useEffect(() => {
    const colors = ['#00D4FF', '#E91E8C', '#BFFF00', '#8B5CF6'];
    const generatedParticles = Array.from({ length: 20 }, (_, i) => ({
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
    <section id="nosotros" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
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

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#8B5CF6]/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#00D4FF]/10 blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              badge="Sobre Nosotros"
              title="Tecnología y Creatividad"
              highlightedText="Unidas"
              description="Somos un equipo apasionado por la tecnología y el diseño. Transformamos ideas en soluciones digitales que impulsan negocios."
              centered={false}
            />

            {/* Mission & Vision */}
            <div className="space-y-6 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-4 p-5 rounded-2xl bg-[#111111] border border-[#2A2A2A] hover:border-[#00D4FF]/30 transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#0099CC] flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Nuestra Misión
                  </h3>
                  <p className="text-[#A1A1A1] text-sm leading-relaxed">
                    Crear soluciones tecnológicas innovadoras que impulsen el crecimiento
                    de nuestros clientes, combinando desarrollo de software con servicios audiovisuales de alta calidad.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-4 p-5 rounded-2xl bg-[#111111] border border-[#2A2A2A] hover:border-[#E91E8C]/30 transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#E91E8C] to-[#CC1177] flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Nuestra Visión
                  </h3>
                  <p className="text-[#A1A1A1] text-sm leading-relaxed">
                    Ser líderes en la transformación digital de empresas en Colombia,
                    reconocidos por nuestra excelencia, innovación y compromiso.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 rounded-2xl bg-[#111111] border border-[#2A2A2A] hover:border-[#3A3A3A] transition-all duration-300 group"
                  style={{
                    boxShadow: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 30px ${value.color}33`;
                    e.currentTarget.style.borderColor = `${value.color}50`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = '#2A2A2A';
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${value.color}20` }}
                  >
                    <value.icon className="w-6 h-6" style={{ color: value.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#A1A1A1]">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
