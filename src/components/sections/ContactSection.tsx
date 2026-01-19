'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
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

const contactInfo = [
  { icon: Phone, label: 'Teléfono', value: '+57 310 5845 711', href: 'tel:+573105845711', color: '#00D4FF' },
  { icon: Mail, label: 'Email', value: 'contacto@busticco.com', href: 'mailto:contacto@busticco.com', color: '#E91E8C' },
  { icon: Clock, label: 'Horario', value: 'Lun - Vie: 8:00 - 18:00', href: null, color: '#BFFF00' },
];

const locations = [
  { city: 'Neiva', address: 'Calle 16 No. 4-61, Huila' },
  { city: 'Bogotá', address: 'Calle 45 C Bis No. 23-37' },
];

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles only on client side to avoid hydration mismatch
  useEffect(() => {
    const colors = ['#00D4FF', '#E91E8C', '#BFFF00', '#8B5CF6'];
    const generatedParticles = Array.from({ length: 22 }, (_, i) => ({
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contacto" className="py-24 bg-[#0A0A0A] relative">
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

      {/* Background */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#00D4FF]/10 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#E91E8C]/10 blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          badge="Contacto"
          title="Hablemos de"
          highlightedText="Tu Proyecto"
          description="Estamos listos para escucharte y ayudarte a hacer realidad tu idea."
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>

            <div className="space-y-4 mb-10">
              {contactInfo.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#111111] border border-[#2A2A2A] hover:border-[#3A3A3A] transition-all"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-sm text-[#6B6B6B] mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white font-medium hover:text-[#00D4FF] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Locations */}
            <h4 className="text-lg font-semibold text-white mb-4">Nuestras Oficinas</h4>
            <div className="grid grid-cols-2 gap-4">
              {locations.map((location) => (
                <div
                  key={location.city}
                  className="p-4 rounded-xl bg-[#111111] border border-[#2A2A2A]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-[#E91E8C]" />
                    <span className="font-semibold text-white">{location.city}</span>
                  </div>
                  <p className="text-sm text-[#6B6B6B]">{location.address}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#111111] rounded-2xl p-8 border border-[#2A2A2A]">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-[#BFFF00]/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-[#BFFF00]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-[#A1A1A1]">Nos pondremos en contacto contigo muy pronto.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Nombre completo</label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/20 outline-none transition-all text-white placeholder-[#6B6B6B]"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/20 outline-none transition-all text-white placeholder-[#6B6B6B]"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Teléfono</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/20 outline-none transition-all text-white placeholder-[#6B6B6B]"
                        placeholder="+57 300 000 0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Servicio</label>
                      <select
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/20 outline-none transition-all text-white"
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="web-app">Desarrollo Web & App</option>
                        <option value="ecommerce">E-Commerce</option>
                        <option value="crm">CRM</option>
                        <option value="marketing">Marketing Digital</option>
                        <option value="ia">Automatización IA</option>
                        <option value="audiovisual">Audiovisuales</option>
                        <option value="software">Software a Medida</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Cuéntanos tu proyecto</label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/20 outline-none transition-all resize-none text-white placeholder-[#6B6B6B]"
                      placeholder="Describe brevemente tu proyecto..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E91E8C] to-[#8B5CF6] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(233,30,140,0.4)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
