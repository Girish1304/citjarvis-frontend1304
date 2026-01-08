import { motion } from "framer-motion";

const PremiumBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient - deep purple to magenta */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, hsl(280 60% 8%) 0%, hsl(320 50% 12%) 40%, hsl(300 45% 10%) 70%, hsl(270 50% 8%) 100%)"
        }}
      />

      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle, hsl(320 100% 50% / 0.5) 0%, hsl(320 100% 40% / 0.2) 40%, transparent 70%)",
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div 
        className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full opacity-50"
        style={{
          background: "radial-gradient(circle, hsl(280 100% 45% / 0.4) 0%, hsl(280 80% 30% / 0.2) 40%, transparent 70%)",
        }}
        animate={{ 
          scale: [1, 1.15, 1],
          x: [0, -40, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <motion.div 
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(340 100% 55% / 0.3) 0%, transparent 60%)",
        }}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top vignette */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/80 to-transparent" />
      
      {/* Bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/80 to-transparent" />
    </div>
  );
};

export default PremiumBackground;