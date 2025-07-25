import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Button } from './button';
import { Link } from 'react-router-dom';

interface Action {
  label: string;
  href: string;
  variant?: "default" | "secondary" | "ghost" | "destructive" | "link";
}

interface EnhancedHeroProps extends React.HTMLAttributes<HTMLElement> {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: Action[];
  titleClassName?: string;
  subtitleClassName?: string;
  actionsClassName?: string;
}

const EnhancedHero = React.forwardRef<HTMLElement, EnhancedHeroProps>(
  (
    {
      className,
      title,
      subtitle,
      actions,
      titleClassName,
      subtitleClassName,
      actionsClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative flex min-h-screen items-center justify-center overflow-hidden",
          className,
        )}
        {...props}
      >
        {/* Subtle glass morphism background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-white" />
          <div className="absolute inset-0 bg-glass-light backdrop-blur-3xl" />
        </div>

        {/* Minimal geometric pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="h-full w-full">
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto max-w-6xl px-4 text-center"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={cn(
              "text-5xl font-semibold tracking-tighter text-primary sm:text-6xl md:text-7xl lg:text-7xl",
              titleClassName,
            )}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className={cn(
                "mx-auto mt-6 max-w-3xl text-lg text-secondary md:text-xl",
                subtitleClassName,
              )}
            >
              {subtitle}
            </motion.p>
          )}

          {actions && actions.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className={cn("mt-10 flex justify-center gap-4", actionsClassName)}
            >
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant || "default"}
                  size="lg"
                  asChild
                >
                  <Link to={action.href}>{action.label}</Link>
                </Button>
              ))}
            </motion.div>
          )}
        </motion.div>
      </section>
    );
  },
);
EnhancedHero.displayName = "EnhancedHero";

export { EnhancedHero };