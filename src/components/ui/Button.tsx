'use client';

import { cn } from '@/lib/utils';
import { forwardRef, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-[var(--secondary)] hover:bg-[var(--secondary-dark)] text-white focus:ring-[var(--secondary)] shadow-lg hover:shadow-[var(--secondary)]/25',
      secondary: 'bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white focus:ring-[var(--primary)]',
      outline: 'border-2 border-[var(--secondary)] text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-white focus:ring-[var(--secondary)]',
      ghost: 'text-[var(--foreground)] hover:bg-[var(--background-subtle)] focus:ring-[var(--accent)]',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
