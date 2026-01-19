'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, LayoutDashboard, Users, BarChart3, Settings, Bell, Search, TrendingUp, Calendar, CheckCircle2, Clock, ArrowUpRight } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const stats = [
  { value: 120, suffix: '+', label: 'Clientes Felices' },
  { value: 230, suffix: '+', label: 'Proyectos Finalizados' },
];

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

export default function HeroSection() {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles only on client side to avoid hydration mismatch
  useEffect(() => {
    const colors = ['#00D4FF', '#E91E8C', '#BFFF00', '#8B5CF6'];
    const generatedParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: `${particle.x}vw`,
              y: `${particle.y}vh`,
              opacity: 0
            }}
            animate={{
              y: [
                `${particle.y}vh`,
                `${particle.y - 30}vh`,
                `${particle.y}vh`
              ],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
            }}
          />
        ))}
      </div>

      {/* Orbes flotantes con gradientes neón */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orbe Magenta - Izquierda */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 top-1/3 w-72 h-72 rounded-full bg-gradient-to-br from-[#E91E8C] to-[#8B5CF6] opacity-50 blur-[80px]"
        />

        {/* Orbe Cyan/Lime - Derecha Superior */}
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-20 w-96 h-96 rounded-full bg-gradient-to-bl from-[#BFFF00] via-[#00D4FF] to-[#00D4FF] opacity-40 blur-[100px]"
        />

        {/* Orbe Magenta - Derecha Inferior */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-20 bottom-20 w-48 h-48 rounded-full bg-gradient-to-tr from-[#E91E8C] to-[#FF4DA6] opacity-50 blur-[60px]"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 sm:px-8 relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              La sinergia perfecta entre{' '}
              <span className="text-gradient">tecnología y creatividad</span>
              {' '}para tu éxito empresarial
            </h1>

            {/* Description */}
            <p className="text-lg text-[#A1A1A1] mb-8 leading-relaxed max-w-xl">
              Tecnología y creatividad para llevar tu marca más lejos
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contacto"
                className="group flex items-center gap-3 px-6 py-4 rounded-full border border-[#3A3A3A] bg-transparent hover:border-[#00D4FF]/50 transition-all duration-300"
              >
                <span className="text-white">Regístrate y descubre nuestras soluciones</span>
              </Link>
              <Link
                href="#servicios"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#E91E8C] to-[#8B5CF6] text-white font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(233,30,140,0.4)] hover:scale-105"
              >
                <Check className="w-5 h-5" />
                Inscribirse
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Dashboard Mockup with Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Stats Card - Top */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
            >
              <div className="glass-strong rounded-2xl px-8 py-4 text-center">
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter end={120} suffix="+" />
                </div>
                <p className="text-[#E91E8C] text-sm font-medium">Clientes Felices</p>
              </div>
            </motion.div>

            {/* Main Dashboard Card - CRM/ERP Style */}
            <div className="relative glass rounded-3xl p-2 shadow-2xl">
              <div className="bg-[#0F0F0F] rounded-2xl overflow-hidden min-h-[420px] flex">
                {/* Sidebar */}
                <div className="w-14 bg-[#0A0A0A] border-r border-[#1A1A1A] py-4 flex flex-col items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#E91E8C] flex items-center justify-center">
                    <span className="text-white font-bold text-xs">B</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-3 mt-4">
                    <div className="w-9 h-9 rounded-lg bg-[#00D4FF]/20 flex items-center justify-center">
                      <LayoutDashboard className="w-4 h-4 text-[#00D4FF]" />
                    </div>
                    <div className="w-9 h-9 rounded-lg hover:bg-[#1A1A1A] flex items-center justify-center transition-colors">
                      <Users className="w-4 h-4 text-[#6B6B6B]" />
                    </div>
                    <div className="w-9 h-9 rounded-lg hover:bg-[#1A1A1A] flex items-center justify-center transition-colors">
                      <BarChart3 className="w-4 h-4 text-[#6B6B6B]" />
                    </div>
                    <div className="w-9 h-9 rounded-lg hover:bg-[#1A1A1A] flex items-center justify-center transition-colors">
                      <Calendar className="w-4 h-4 text-[#6B6B6B]" />
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-lg hover:bg-[#1A1A1A] flex items-center justify-center transition-colors">
                    <Settings className="w-4 h-4 text-[#6B6B6B]" />
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-white font-semibold text-sm">Panel de Control</h3>
                      <p className="text-[#6B6B6B] text-xs">Resumen del mes</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#1A1A1A] flex items-center justify-center">
                        <Search className="w-4 h-4 text-[#6B6B6B]" />
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-[#1A1A1A] flex items-center justify-center relative">
                        <Bell className="w-4 h-4 text-[#6B6B6B]" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#E91E8C] border-2 border-[#0F0F0F]" />
                      </div>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-[#1A1A1A] rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-3 h-3 text-[#BFFF00]" />
                        <span className="text-[#BFFF00] text-xs">+24%</span>
                      </div>
                      <p className="text-white font-bold text-lg">$48.5K</p>
                      <p className="text-[#6B6B6B] text-xs">Ingresos</p>
                    </div>
                    <div className="bg-[#1A1A1A] rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Users className="w-3 h-3 text-[#00D4FF]" />
                        <span className="text-[#00D4FF] text-xs">+12</span>
                      </div>
                      <p className="text-white font-bold text-lg">847</p>
                      <p className="text-[#6B6B6B] text-xs">Usuarios</p>
                    </div>
                    <div className="bg-[#1A1A1A] rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="w-3 h-3 text-[#E91E8C]" />
                        <span className="text-[#E91E8C] text-xs">98%</span>
                      </div>
                      <p className="text-white font-bold text-lg">156</p>
                      <p className="text-[#6B6B6B] text-xs">Tareas</p>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="bg-[#1A1A1A] rounded-xl p-3 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white text-xs font-medium">Rendimiento</span>
                      <div className="flex items-center gap-1">
                        <span className="text-[#BFFF00] text-xs font-medium">+18.2%</span>
                        <ArrowUpRight className="w-3 h-3 text-[#BFFF00]" />
                      </div>
                    </div>
                    <div className="h-20 flex items-end gap-1.5">
                      {[35, 55, 45, 70, 50, 65, 85, 55, 70, 80, 60, 90].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: i * 0.08, duration: 0.5 }}
                          className="flex-1 rounded-sm bg-gradient-to-t from-[#00D4FF] to-[#00D4FF]/30"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Recent Tasks */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white font-medium">Tareas Recientes</span>
                      <span className="text-[#00D4FF]">Ver todo</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 bg-[#1A1A1A] rounded-lg p-2">
                        <div className="w-6 h-6 rounded-full bg-[#BFFF00]/20 flex items-center justify-center">
                          <CheckCircle2 className="w-3 h-3 text-[#BFFF00]" />
                        </div>
                        <div className="flex-1">
                          <p className="text-white text-xs">Diseño UI completado</p>
                        </div>
                        <span className="text-[#6B6B6B] text-xs">2h</span>
                      </div>
                      <div className="flex items-center gap-3 bg-[#1A1A1A] rounded-lg p-2">
                        <div className="w-6 h-6 rounded-full bg-[#00D4FF]/20 flex items-center justify-center">
                          <Clock className="w-3 h-3 text-[#00D4FF]" />
                        </div>
                        <div className="flex-1">
                          <p className="text-white text-xs">Revisión de código</p>
                        </div>
                        <span className="text-[#6B6B6B] text-xs">En progreso</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Card - Bottom */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-8 right-8 z-20"
            >
              <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-2xl px-8 py-4 text-center border border-[#3A3A3A]">
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter end={230} suffix="+" />
                </div>
                <p className="text-[#BFFF00] text-sm font-medium">Proyectos Finalizados</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
}
