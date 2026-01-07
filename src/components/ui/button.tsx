import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { playGlobalHoverSound, playGlobalClickSound } from "@/hooks/useAudioFeedback";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body tracking-wide uppercase",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full",
        outline: "border-2 border-border bg-transparent text-foreground hover:bg-muted hover:border-primary/50 rounded-full",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full",
        ghost: "hover:bg-muted hover:text-foreground rounded-lg",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_hsl(42_100%_50%/0.4)] hover:shadow-[0_0_50px_hsl(42_100%_50%/0.5)] hover:scale-[1.02] rounded-full",
        glass: "bg-card/60 backdrop-blur-xl border-2 border-border/50 text-foreground hover:bg-card/80 hover:border-primary/40 rounded-full",
      },
      size: {
        default: "h-11 px-7 py-2",
        sm: "h-9 px-5",
        lg: "h-12 px-9 text-base",
        xl: "h-14 px-12 text-base",
        icon: "h-10 w-10 rounded-full",
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
  enableSound?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, enableSound = true, onMouseEnter, onClick, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    const handleMouseEnter = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
      if (enableSound) playGlobalHoverSound();
      onMouseEnter?.(e);
    }, [enableSound, onMouseEnter]);

    const handleClick = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
      if (enableSound) playGlobalClickSound();
      onClick?.(e);
    }, [enableSound, onClick]);

    return (
      <Comp 
        className={cn(buttonVariants({ variant, size, className }))} 
        ref={ref} 
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        {...props} 
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
