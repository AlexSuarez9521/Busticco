'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  badge?: string;
  title: string;
  highlightedText?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  badge,
  title,
  highlightedText,
  description,
  centered = true,
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        'max-w-3xl mb-12',
        centered && 'mx-auto text-center',
        className
      )}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-[#1A1A1A] border border-[#2A2A2A] text-[#00D4FF]">
          <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}{' '}
        {highlightedText && (
          <span className="text-gradient">{highlightedText}</span>
        )}
      </h2>
      {description && (
        <p className="text-lg text-[#A1A1A1]">
          {description}
        </p>
      )}
    </motion.div>
  );
}
