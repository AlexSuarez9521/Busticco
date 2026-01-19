'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const quickLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Contacto', href: '#contacto' },
];

const services = [
  { label: 'Desarrollo Web & App', href: '#servicios' },
  { label: 'E-Commerce', href: '#servicios' },
  { label: 'CRM', href: '#servicios' },
  { label: 'Marketing Digital', href: '#servicios' },
  { label: 'Automatización IA', href: '#servicios' },
  { label: 'Audiovisuales', href: '#servicios' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/busticco', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/busticco', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/busticco', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/busticco', label: 'Twitter' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-[#1A1A1A]">
      {/* Main Footer */}
      <div className="container mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#C4B5FD] bg-clip-text text-transparent">
                BUSTICCO
              </span>
            </Link>
            <p className="text-[#6B6B6B] mb-6 leading-relaxed">
              Soluciones innovadoras de desarrollo de software y servicios audiovisuales.
              La sinergia perfecta entre tecnología y creatividad.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#111111] border border-[#2A2A2A] hover:border-[#00D4FF]/50 hover:bg-[#1A1A1A] transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-[#6B6B6B] group-hover:text-[#00D4FF] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#6B6B6B] hover:text-[#00D4FF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-[#6B6B6B] hover:text-[#E91E8C] transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+573105845711"
                  className="flex items-start gap-3 text-[#6B6B6B] hover:text-[#00D4FF] transition-colors group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>+57 310 5845 711</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@busticco.com"
                  className="flex items-start gap-3 text-[#6B6B6B] hover:text-[#00D4FF] transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>contacto@busticco.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#6B6B6B]">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Calle 16 No. 4-61, Neiva, Huila</p>
                  <p className="mt-1">Calle 45 C Bis No. 23-37, Bogotá</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1A1A1A]">
        <div className="container mx-auto px-6 sm:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#6B6B6B] text-sm text-center md:text-left">
              © {currentYear} BUSTICCO. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/politica-privacidad" className="text-[#6B6B6B] hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos-condiciones" className="text-[#6B6B6B] hover:text-white transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
