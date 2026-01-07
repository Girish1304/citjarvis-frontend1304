import { motion } from "framer-motion";

const PremiumBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Deep dark base */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, hsl(240 25% 2%) 0%, hsl(250 30% 4%) 50%, hsl(240 20% 6%) 100%)",
        }}
      />

      {/* Cyberpunk grid - perspective */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(185 100% 55% / 0.6) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(185 100% 55% / 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'center top',
          height: '200%',
          top: '40%',
        }}
      />

      {/* Horizontal scan lines */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(185 100% 55% / 0.5) 2px, hsl(185 100% 55% / 0.5) 4px)',
          backgroundSize: '100% 4px',
        }}
      />

      {/* Animated neon glow waves */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="cyanMagentaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(185 100% 55% / 0)" />
            <stop offset="30%" stopColor="hsl(185 100% 55% / 0.8)" />
            <stop offset="70%" stopColor="hsl(320 100% 60% / 0.8)" />
            <stop offset="100%" stopColor="hsl(320 100% 60% / 0)" />
          </linearGradient>
          <filter id="neonGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Top wave */}
        <motion.path
          d="M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100"
          fill="none"
          stroke="url(#cyanMagentaGrad)"
          strokeWidth="2"
          filter="url(#neonGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        
        {/* Bottom wave */}
        <motion.path
          d="M0,700 Q250,650 500,700 T1000,700 T1500,700 T2000,700"
          fill="none"
          stroke="url(#cyanMagentaGrad)"
          strokeWidth="1.5"
          filter="url(#neonGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        />
      </svg>

      {/* Floating cyan particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`cyan-${i}`}
          className="absolute w-1 h-1 rounded-full bg-primary"
          style={{
            left: `${10 + (i * 6)}%`,
            top: `${20 + Math.random() * 60}%`,
            boxShadow: '0 0 10px hsl(185 100% 55% / 0.8), 0 0 20px hsl(185 100% 55% / 0.4)',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating magenta particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`magenta-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-secondary"
          style={{
            left: `${5 + (i * 10)}%`,
            top: `${30 + Math.random() * 50}%`,
            boxShadow: '0 0 15px hsl(320 100% 60% / 0.8), 0 0 30px hsl(320 100% 60% / 0.4)',
          }}
          animate={{
            y: [0, 40, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Large glowing orb - cyan */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(185 100% 55% / 0.1) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Large glowing orb - magenta */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(320 100% 60% / 0.1) 0%, transparent 60%)",
          filter: "blur(50px)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Center arc reactor glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(185 100% 55% / 0.15) 0%, hsl(320 100% 60% / 0.05) 40%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Corner accent glows */}
      <div 
        className="absolute top-0 left-0 w-[300px] h-[300px]"
        style={{
          background: "radial-gradient(circle at top left, hsl(185 100% 55% / 0.15) 0%, transparent 70%)",
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[300px] h-[300px]"
        style={{
          background: "radial-gradient(circle at bottom right, hsl(320 100% 60% / 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, hsl(240 25% 2% / 0.8) 100%)",
        }}
      />

      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default PremiumBackground;