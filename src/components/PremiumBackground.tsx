import { motion } from "framer-motion";

const PremiumBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[hsl(220,20%,4%)]">
      {/* Animated neon glow orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(170 100% 50% / 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(32 100% 50% / 0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Neon lines */}
      <div className="absolute top-0 left-[10%] w-[2px] h-full bg-gradient-to-b from-transparent via-[hsl(170,100%,50%,0.3)] to-transparent" />
      <div className="absolute top-0 right-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-[hsl(32,100%,50%,0.2)] to-transparent" />
      
      {/* Diagonal neon accents */}
      <motion.div 
        className="absolute top-[20%] right-[5%] w-[200px] h-[2px] origin-right"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(120 100% 50% / 0.6))",
          transform: "rotate(-45deg)",
        }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-[30%] right-[8%] w-[150px] h-[2px] origin-right"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(32 100% 50% / 0.6))",
          transform: "rotate(-45deg)",
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
      
      <motion.div 
        className="absolute bottom-[25%] left-[5%] w-[180px] h-[2px] origin-left"
        style={{
          background: "linear-gradient(90deg, hsl(170 100% 50% / 0.6), transparent)",
          transform: "rotate(45deg)",
        }}
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(hsl(170 100% 50% / 0.05) 1px, transparent 1px),
            linear-gradient(90deg, hsl(170 100% 50% / 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, hsl(220 20% 4%) 80%)",
        }}
      />
    </div>
  );
};

export default PremiumBackground;
