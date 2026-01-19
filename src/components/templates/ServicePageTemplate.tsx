'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronDown,
  ChevronUp,
  // Service icons
  Smartphone,
  Globe,
  Zap,
  Shield,
  Palette,
  Search,
  Gauge,
  Users,
  Code2,
  Layers,
  RefreshCw,
  Headphones,
  ShoppingCart,
  CreditCard,
  Package,
  TrendingUp,
  Truck,
  BarChart3,
  PieChart,
  Mail,
  Phone,
  Calendar,
  Target,
  FileText,
  Bell,
  Workflow,
  Database,
  Share2,
  Megaphone,
  PenTool,
  Bot,
  MessageSquare,
  Brain,
  Clock,
  Cpu,
  Sparkles,
  Video,
  Camera,
  Film,
  Music,
  Play,
  Tv,
  Image,
  Mic,
  Clapperboard,
  Server,
  GitBranch,
  Boxes,
  Cloud,
  Lock,
  type LucideIcon,
} from 'lucide-react';

// Icon map for string-to-component conversion
const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Globe,
  Zap,
  Shield,
  Palette,
  Search,
  Gauge,
  Users,
  Code2,
  Layers,
  RefreshCw,
  Headphones,
  ShoppingCart,
  CreditCard,
  Package,
  TrendingUp,
  Truck,
  BarChart3,
  PieChart,
  Mail,
  Phone,
  Calendar,
  Target,
  FileText,
  Bell,
  Workflow,
  Database,
  Share2,
  Megaphone,
  PenTool,
  Bot,
  MessageSquare,
  Brain,
  Clock,
  Cpu,
  Sparkles,
  Video,
  Camera,
  Film,
  Music,
  Play,
  Tv,
  Image,
  Mic,
  Clapperboard,
  Server,
  GitBranch,
  Boxes,
  Cloud,
  Lock,
};

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

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface ServicePageProps {
  // Hero
  badge: string;
  title: string;
  highlightedText: string;
  description: string;
  heroImage?: string;
  color: string;
  icon: string;

  // Features
  features: Feature[];

  // Benefits
  benefits: Benefit[];

  // Process
  processSteps: ProcessStep[];

  // Technologies (optional)
  technologies?: string[];

  // FAQ
  faqs: FAQ[];

  // Related services
  relatedServices?: {
    title: string;
    href: string;
    color: string;
  }[];
}

export default function ServicePageTemplate({
  badge,
  title,
  highlightedText,
  description,
  color,
  icon,
  features,
  benefits,
  processSteps,
  technologies,
  faqs,
  relatedServices,
}: ServicePageProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Get icon component from map
  const Icon = iconMap[icon] || Smartphone;

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

  // Reusable particles component for sections
  const SectionParticles = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
  );

  return (
    <div className="bg-[#0A0A0A] min-h-screen relative">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Floating Particles */}
        <SectionParticles />
        {/* Background orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-[120px]" style={{ backgroundColor: color }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#8B5CF6]/20 blur-[120px]" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/#servicios"
              className="inline-flex items-center gap-2 text-[#A1A1A1] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a servicios
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{ backgroundColor: `${color}20`, color: color }}
              >
                <Icon className="w-4 h-4" />
                {badge}
              </span>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {title}{' '}
                <span className="text-gradient">{highlightedText}</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-[#A1A1A1] mb-8 leading-relaxed">
                {description}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${color}, #8B5CF6)`,
                    boxShadow: `0 0 30px ${color}40`
                  }}
                >
                  Solicitar Cotización
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/573105845711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#3A3A3A] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  WhatsApp Directo
                </a>
              </div>
            </motion.div>

            {/* Icon/Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              <div
                className="relative w-80 h-80 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${color}10` }}
              >
                <div
                  className="absolute inset-0 rounded-full opacity-30 blur-2xl"
                  style={{ backgroundColor: color }}
                />
                <Icon className="w-32 h-32 relative z-10" style={{ color: color }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <SectionParticles />
        {/* Background orbs */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-[#E91E8C]/20 blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full opacity-20 blur-[100px]" style={{ backgroundColor: color }} />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Qué <span className="text-gradient">Incluye</span>?
            </h2>
            <p className="text-[#A1A1A1] max-w-2xl mx-auto">
              Todo lo que necesitas para llevar tu proyecto al siguiente nivel
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const FeatureIcon = iconMap[feature.icon] || Smartphone;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-[#111111] border border-[#2A2A2A] hover:border-[#3A3A3A] transition-all duration-300 group"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${color}20` }}
                  >
                    <FeatureIcon className="w-7 h-7" style={{ color: color }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-[#A1A1A1] text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative overflow-hidden">
        <SectionParticles />
        {/* Background orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#E91E8C]/10 via-transparent to-[#00D4FF]/10 blur-3xl" />
        <div className="absolute top-0 -left-32 w-64 h-64 rounded-full bg-[#BFFF00]/10 blur-[100px]" />
        <div className="absolute bottom-0 -right-48 w-72 h-72 rounded-full opacity-15 blur-[100px]" style={{ backgroundColor: color }} />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Beneficios <span className="text-gradient">Clave</span>
            </h2>
            <p className="text-[#A1A1A1] max-w-2xl mx-auto">
              Por qué elegirnos para tu proyecto
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-5 rounded-2xl bg-[#111111] border border-[#2A2A2A]"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <Check className="w-5 h-5" style={{ color: color }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-[#A1A1A1] text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden">
        <SectionParticles />
        {/* Background orbs */}
        <div className="absolute top-0 -right-32 w-72 h-72 rounded-full bg-[#00D4FF]/15 blur-[100px]" />
        <div className="absolute bottom-0 -left-32 w-72 h-72 rounded-full bg-[#8B5CF6]/15 blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestro <span className="text-gradient">Proceso</span>
            </h2>
            <p className="text-[#A1A1A1] max-w-2xl mx-auto">
              Metodología clara y eficiente para garantizar el éxito de tu proyecto
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: color }}
                  >
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-px h-full bg-gradient-to-b from-[#2A2A2A] to-transparent mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-[#A1A1A1]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section (if provided) */}
      {technologies && technologies.length > 0 && (
        <section className="py-24 relative overflow-hidden">
          <SectionParticles />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tecnologías que <span className="text-gradient">Utilizamos</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-5 py-2.5 rounded-full bg-[#111111] border border-[#2A2A2A] text-white text-sm font-medium hover:border-[#3A3A3A] transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden">
        <SectionParticles />
        {/* Background orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-15 blur-[120px]" style={{ backgroundColor: color }} />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 rounded-full bg-[#8B5CF6]/15 blur-[100px]" />
        <div className="absolute top-1/2 -right-32 w-56 h-56 rounded-full bg-[#E91E8C]/10 blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Preguntas <span className="text-gradient">Frecuentes</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-[#111111] border border-[#2A2A2A] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#A1A1A1]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#A1A1A1]" />
                  )}
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5"
                  >
                    <p className="text-[#A1A1A1]">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services (if provided) */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="py-24 relative overflow-hidden">
          <SectionParticles />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Servicios <span className="text-gradient">Relacionados</span>
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {relatedServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] border border-[#2A2A2A] text-white font-medium hover:border-[#3A3A3A] transition-all"
                  >
                    {service.title}
                    <ArrowRight className="w-4 h-4" style={{ color: service.color }} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <SectionParticles />
        {/* Background orbs - one on each side */}
        <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-72 h-72 rounded-full opacity-20 blur-[100px]" style={{ backgroundColor: color }} />
        <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-72 h-72 rounded-full bg-[#8B5CF6]/20 blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Listo para <span className="text-gradient">Empezar</span>?
            </h2>
            <p className="text-lg text-[#A1A1A1] mb-10">
              Transformemos juntos tu idea en una solución digital exitosa.
              Agenda una consulta gratuita y descubre lo que podemos crear para ti.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${color}, #8B5CF6)`,
                  boxShadow: `0 0 30px ${color}40`
                }}
              >
                Solicitar Cotización
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/573105845711"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#3A3A3A] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                WhatsApp Directo
              </a>
            </div>
            <p className="mt-8 text-[#6B6B6B] text-sm">
              Sin compromisos • Respuesta en menos de 24 horas
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
