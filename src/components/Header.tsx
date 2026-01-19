'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Inicio', href: '/', active: true },
  {
    label: 'Nosotros',
    href: '/#nosotros',
    children: [
      { label: 'Historia', href: '/#historia' },
      { label: 'Equipo', href: '/#equipo' },
    ],
  },
  { label: 'Nuestro Proceso', href: '/#proceso' },
  { label: 'Contacto', href: '/#contacto' },
  { label: 'Portafolio', href: '/portafolio' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#0A0A0A]/80 backdrop-blur-2xl border-b border-[#2A2A2A]/50 shadow-lg shadow-black/20'
          : 'bg-gradient-to-b from-[#0A0A0A]/50 to-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-wider">
              <span className="text-white">BUSTIC</span>
              <span className="text-gradient">CO</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                    item.active
                      ? 'text-[#00D4FF]'
                      : 'text-white/70 hover:text-white'
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 py-2 bg-[#111111] rounded-xl border border-[#2A2A2A] min-w-[180px] shadow-xl"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-white/70 hover:text-[#00D4FF] hover:bg-white/5 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Search Icon */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-[#2A2A2A]">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'block px-4 py-3 rounded-lg transition-colors',
                        item.active
                          ? 'text-[#00D4FF]'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.children?.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-8 py-2 text-sm text-white/50 hover:text-[#00D4FF] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
