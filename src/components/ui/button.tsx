<<<<<<< HEAD
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-gold",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-border bg-background hover:bg-secondary hover:text-secondary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gold: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-gold",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg",
        elegant: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-md px-4",
        lg: "h-14 rounded-lg px-8 text-base",
        icon: "h-11 w-11",
=======
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
>>>>>>> hikmadigital/ui-migration-clean
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
<<<<<<< HEAD
)
=======
);
>>>>>>> hikmadigital/ui-migration-clean

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
<<<<<<< HEAD
  asChild?: boolean
=======
  asChild?: boolean;
>>>>>>> hikmadigital/ui-migration-clean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
<<<<<<< HEAD
    const Comp = asChild ? Slot : "button"
=======
    const Comp = asChild ? Slot : "button";
>>>>>>> hikmadigital/ui-migration-clean
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
<<<<<<< HEAD
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
=======
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
>>>>>>> hikmadigital/ui-migration-clean
