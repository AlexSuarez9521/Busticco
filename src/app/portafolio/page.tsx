'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ExternalLink, Filter } from 'lucide-react';

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

// Project type
interface Project {
  id: number;
  name: string;
  category: string;
  industry: string;
  url: string;
  description: string;
  color: string;
  tags: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'EIATEC SAS',
    category: 'Corporativo',
    industry: 'Ambiental',
    url: 'https://eiatec.com',
    description: 'Empresa de consultoría ambiental con presencia nacional.',
    color: '#00D4FF',
    tags: ['Next.js', 'Diseño Web', 'SEO'],
    image: '/portfolio/eiatec.png',
  },
  {
    id: 2,
    name: 'Biodiversa SAS',
    category: 'Corporativo',
    industry: 'Ambiental',
    url: 'https://biodiversasas.com',
    description: 'Soluciones ambientales para un futuro sostenible.',
    color: '#BFFF00',
    tags: ['Next.js', 'Diseño Web', 'Animaciones'],
    image: '/portfolio/biodiversa.png',
  },
  {
    id: 3,
    name: 'Carolina Cardón',
    category: 'Salud',
    industry: 'Dermatología',
    url: 'https://ccesteticaintegral.com',
    description: 'Centro de estética integral y dermatología avanzada.',
    color: '#E91E8C',
    tags: ['WordPress', 'Diseño Web', 'Reservas'],
    image: '/portfolio/carolina-cardon.png',
  },
  {
    id: 4,
    name: 'Ecopetrol',
    category: 'Corporativo',
    industry: 'Energía',
    url: 'https://ecopetrol.com.co',
    description: 'La empresa de petróleo más grande de Colombia.',
    color: '#BFFF00',
    tags: ['Desarrollo Web', 'Portal Corporativo'],
    image: '/portfolio/ecopetrol.png',
  },
  {
    id: 5,
    name: 'Hocol',
    category: 'Corporativo',
    industry: 'Energía',
    url: 'https://hocol.com.co',
    description: 'Compañía de exploración y producción de hidrocarburos.',
    color: '#8B5CF6',
    tags: ['Desarrollo Web', 'Portal Corporativo'],
    image: '/portfolio/hocol.png',
  },
  {
    id: 6,
    name: 'AUTOLAB',
    category: 'Servicios',
    industry: 'Automotriz',
    url: 'https://autolab.com.co',
    description: 'Red de talleres automotrices con tecnología de punta.',
    color: '#BFFF00',
    tags: ['WordPress', 'Diseño Web', 'SEO'],
    image: '/portfolio/autolab.png',
  },
  {
    id: 7,
    name: 'Sama Motors',
    category: 'Servicios',
    industry: 'Automotriz',
    url: 'https://tallersamamotors.com',
    description: 'Taller especializado en mantenimiento automotriz.',
    color: '#8B5CF6',
    tags: ['WordPress', 'Diseño Web'],
    image: '/portfolio/sama-motors.png',
  },
  {
    id: 8,
    name: 'Codimedica',
    category: 'Salud',
    industry: 'Equipos Médicos',
    url: 'https://codimedica.co',
    description: 'Distribución de instrumentos médicos de alta calidad.',
    color: '#00D4FF',
    tags: ['E-Commerce', 'Catálogo', 'Diseño'],
    image: '/portfolio/codimedica.png',
  },
  {
    id: 9,
    name: 'Mundo Seratta',
    category: 'Restaurantes',
    industry: 'Gastronomía',
    url: 'https://restauranteseratta.com',
    description: 'Experiencia gastronómica única con cocina de autor.',
    color: '#E91E8C',
    tags: ['WordPress', 'Diseño Web', 'Menú Digital'],
    image: '/portfolio/mundo-seratta.png',
  },
  {
    id: 10,
    name: "Storia D'Amore",
    category: 'Restaurantes',
    industry: 'Gastronomía',
    url: 'https://co.restaurantestoriadamore.com',
    description: 'Restaurante italiano con auténtica cocina mediterránea.',
    color: '#BFFF00',
    tags: ['WordPress', 'Diseño Web', 'Reservas'],
    image: '/portfolio/storia-damore.png',
  },
  {
    id: 11,
    name: 'Guardianes de Fe',
    category: 'Corporativo',
    industry: 'Comunidad',
    url: 'https://guardianesdefe.com',
    description: 'Plataforma comunitaria con recursos y contenido espiritual.',
    color: '#00D4FF',
    tags: ['WordPress', 'Diseño Web', 'Blog'],
    image: '/portfolio/guardianes-fe.png',
  },
  {
    id: 12,
    name: 'Nuestras Noticias',
    category: 'Medios',
    industry: 'Periodismo',
    url: 'https://nuestrasnoticias.co',
    description: 'Portal de noticias locales y nacionales.',
    color: '#E91E8C',
    tags: ['WordPress', 'Portal de Noticias', 'SEO'],
    image: '/portfolio/nuestras-noticias.png',
  },
];

const categories = ['Todos', 'Corporativo', 'Salud', 'Restaurantes', 'Servicios', 'Medios'];

export default function PortfolioPage() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const colors = ['#00D4FF', '#E91E8C', '#BFFF00', '#8B5CF6'];
    const generatedParticles = Array.from({ length: 30 }, (_, i) => ({
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

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  // Particles component
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
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <SectionParticles />
        {/* Background orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#00D4FF]/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#8B5CF6]/20 blur-[120px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-[#E91E8C]/20 text-[#E91E8C]"
            >
              <Filter className="w-4 h-4" />
              Nuestro Trabajo
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Proyectos que{' '}
              <span className="text-gradient">Inspiran</span>
            </h1>

            <p className="text-lg text-[#A1A1A1] mb-12 leading-relaxed max-w-2xl mx-auto">
              Cada proyecto es una historia de transformación digital. Conoce cómo hemos ayudado
              a empresas de diferentes industrias a destacar en el mundo digital.
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-white shadow-lg shadow-[#00D4FF]/25'
                      : 'bg-[#111111] border border-[#2A2A2A] text-white/70 hover:text-white hover:border-[#3A3A3A]'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 relative overflow-hidden">
        <SectionParticles />
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-[#E91E8C]/15 blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-[#BFFF00]/15 blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-[#111111] border border-[#2A2A2A] hover:border-[#3A3A3A] transition-all duration-500">
                    {/* Project Preview Area */}
                    <div className="relative h-52 overflow-hidden">
                      {/* Project Image */}
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Industry Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span
                          className="px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg"
                          style={{
                            backgroundColor: '#0A0A0A',
                            color: project.color,
                            border: `1px solid ${project.color}50`
                          }}
                        >
                          {project.industry}
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent flex items-center justify-center z-10"
                      >
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105"
                          style={{
                            background: `linear-gradient(135deg, ${project.color}, #8B5CF6)`,
                            boxShadow: `0 0 30px ${project.color}40`
                          }}
                        >
                          Ver Sitio
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </motion.div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all">
                          {project.name}
                        </h3>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-[#A1A1A1] hover:text-white hover:bg-white/5 transition-all"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </a>
                      </div>

                      <p className="text-[#A1A1A1] text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-[#1A1A1A] text-[#A1A1A1] text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No results message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-[#A1A1A1] text-lg">
                No hay proyectos en esta categoría aún.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <SectionParticles />
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-48 h-48 rounded-full bg-[#00D4FF]/15 blur-[80px]" />
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-48 h-48 rounded-full bg-[#E91E8C]/15 blur-[80px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Listo para ser el{' '}
              <span className="text-gradient">Próximo</span>?
            </h2>
            <p className="text-lg text-[#A1A1A1] mb-10">
              Tu proyecto podría estar aquí. Conversemos sobre cómo podemos
              transformar tu visión en una realidad digital impresionante.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] shadow-lg shadow-[#00D4FF]/25"
              >
                Iniciar Proyecto
                <ArrowUpRight className="w-5 h-5" />
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
        </div>
      </section>
    </div>
  );
}
