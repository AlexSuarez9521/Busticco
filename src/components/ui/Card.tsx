'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
  glass = false,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5 } : undefined}
      className={cn(
        'rounded-2xl p-6 transition-all duration-300',
        glass
          ? 'glass'
          : 'bg-[var(--background)] border border-[var(--border)] shadow-card',
        hover && 'hover:shadow-card-hover',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
