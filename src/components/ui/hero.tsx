"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import { Link } from "react-router-dom";

interface Action {
  label: string;
  href: string;
  variant?: "default" | "secondary" | "ghost" | "destructive" | "link";
}

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: Action[];
  titleClassName?: string;
  subtitleClassName?: string;
  actionsClassName?: string;
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
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
        {/* Subtle glass background */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-white" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-10 mx-auto max-w-5xl px-4 text-center"
        >
          <h1
            className={cn(
              "text-5xl font-semibold tracking-tighter text-primary sm:text-6xl md:text-7xl lg:text-7xl",
              titleClassName,
            )}
          >
            {title}
          </h1>
          
          {subtitle && (
            <p
              className={cn(
                "mx-auto mt-6 max-w-2xl text-lg text-secondary md:text-xl",
                subtitleClassName,
              )}
            >
              {subtitle}
            </p>
          )}
          
          {actions && actions.length > 0 && (
            <div className={cn("mt-10 flex justify-center gap-4", actionsClassName)}>
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
            </div>
          )}
        </motion.div>
      </section>
    );
  },
);
Hero.displayName = "Hero";

export { Hero };