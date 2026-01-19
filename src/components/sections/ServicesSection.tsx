'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  ShoppingCart,
  Users,
  TrendingUp,
  Bot,
  Video,
  Code2,
  ArrowRight
} from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import Link from 'next/link';

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

const services = [
  {
    icon: Smartphone,
    title: 'Desarrollo App y Web',
    description: 'Creamos aplicaciones móviles nativas e híbridas, y sitios web personalizados que cautivan a tus usuarios.',
    gradient: 'from-[#00D4FF] to-[#0099CC]',
    glowColor: 'rgba(0, 212, 255, 0.3)',
    href: '/servicios/desarrollo-web-app',
  },
  {
    icon: ShoppingCart,
    title: 'WebShop y E-Commerce',
    description: 'Tiendas en línea seguras y optimizadas para convertir visitantes en clientes leales.',
    gradient: 'from-[#BFFF00] to-[#99CC00]',
    glowColor: 'rgba(191, 255, 0, 0.3)',
    href: '/servicios/ecommerce',
  },
  {
    icon: Users,
    title: 'CRM',
    description: 'Sistemas de gestión de relaciones con clientes que impulsan tus ventas y fidelización.',
    gradient: 'from-[#E91E8C] to-[#CC1177]',
    glowColor: 'rgba(233, 30, 140, 0.3)',
    href: '/servicios/crm',
  },
  {
    icon: TrendingUp,
    title: 'Marketing Digital',
    description: 'Estrategias de visibilidad digital que posicionan tu marca y atraen clientes potenciales.',
    gradient: 'from-[#8B5CF6] to-[#7C3AED]',
    glowColor: 'rgba(139, 92, 246, 0.3)',
    href: '/servicios/marketing-digital',
  },
  {
    icon: Bot,
    title: 'Automatización con IA',
    description: 'Asistentes virtuales y procesos automatizados con inteligencia artificial de última generación.',
    gradient: 'from-[#00D4FF] to-[#E91E8C]',
    glowColor: 'rgba(0, 212, 255, 0.3)',
    href: '/servicios/automatizacion-ia',
  },
  {
    icon: Video,
    title: 'Servicios Audiovisuales',
    description: 'Producción y edición multimedia profesional que cuenta tu historia de forma impactante.',
    gradient: 'from-[#FF6B6B] to-[#EE5A5A]',
    glowColor: 'rgba(255, 107, 107, 0.3)',
    href: '/servicios/audiovisuales',
  },
  {
    icon: Code2,
    title: 'Desarrollo de Software',
    description: 'Soluciones empresariales a medida que optimizan y escalan tu operación.',
    gradient: 'from-[#BFFF00] to-[#00D4FF]',
    glowColor: 'rgba(191, 255, 0, 0.3)',
    href: '/servicios/software',
  },
];

export default function ServicesSection() {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles only on client side to avoid hydration mismatch
  useEffect(() => {
    const colors = ['#00D4FF', '#E91E8C', '#BFFF00', '#8B5CF6'];
    const generatedParticles = Array.from({ length: 12 }, (_, i) => ({
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
    <section id="servicios" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Floating Particles - Full viewport width within section */}
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

      {/* Background orbs */}
      <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-[#E91E8C]/20 blur-[100px] -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-[#00D4FF]/20 blur-[100px] translate-x-1/2" />

      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        <SectionTitle
          badge="Nuestros Servicios"
          title="Soluciones Digitales"
          highlightedText="Completas"
          description="Ofrecemos una gama completa de servicios tecnológicos y creativos para impulsar tu negocio al siguiente nivel."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div
                className="relative h-full bg-[#111111] rounded-2xl p-6 border border-[#2A2A2A] transition-all duration-300 hover:border-[#3A3A3A] hover:bg-[#151515] overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#A1A1A1] mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#00D4FF] hover:gap-2 transition-all"
                >
                  Más información
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E91E8C] to-[#8B5CF6] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(233,30,140,0.4)] hover:scale-105"
          >
            Solicitar Cotización
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
