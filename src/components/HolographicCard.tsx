import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HolographicCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "primary" | "secondary" | "accent";
}

const HolographicCard = ({ children, className = "", delay = 0, variant = "primary" }: HolographicCardProps) => {
  const borderColors = {
    primary: "border-primary/40 group-hover:border-primary/70",
    secondary: "border-secondary/40 group-hover:border-secondary/70",
    accent: "border-accent/40 group-hover:border-accent/70",
  };

  const glowColors = {
    primary: "from-primary via-primary/50 to-primary",
    secondary: "from-secondary via-secondary/50 to-secondary",
    accent: "from-accent via-accent/50 to-accent",
  };

  const cornerColors = {
    primary: "border-primary",
    secondary: "border-secondary",
    accent: "border-accent",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`relative group ${className}`}
    >
      {/* Animated border glow on hover */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${glowColors[variant]} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl rounded-2xl`} />
      
      {/* Main card - GoatFundedTrader glassmorphism style */}
      <div className={`relative bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-xl border ${borderColors[variant]} transition-all duration-500 overflow-hidden rounded-2xl`}>
        {/* Premium glass shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
        
        {/* Holographic shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        
        {/* Top accent line */}
        <div className={`absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent ${glowColors[variant]} to-transparent opacity-50`} />
        
        {/* Corner accent glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default HolographicCard;