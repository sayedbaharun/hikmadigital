import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

// Steve Jobs Button System - Only 2 Variants
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-normal transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary: Blue background, white text
        default: "bg-accent text-background hover:opacity-90",
        // Secondary: White background, blue border and text
        secondary: "bg-transparent text-accent border border-accent hover:bg-accent hover:text-background",
      },
      size: {
        // Consistent proportions - 48px height always
        default: "h-12 px-6 rounded-lg text-base",
        sm: "h-10 px-4 rounded-lg text-sm", 
        lg: "h-12 px-8 rounded-lg text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };