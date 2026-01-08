import { motion } from "framer-motion";
import { useMemo } from "react";

const KikkBackground = () => {
  // Generate particles with stable positions
  const particles = useMemo(() => 
    [...Array(50)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: 4 + Math.random() * 6,
      delay: Math.random() * 3,
    })), []
  );

  // Floating geometric shapes
  const floatingShapes = useMemo(() => 
    [...Array(12)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 20 + Math.random() * 40,
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 5,
      rotation: Math.random() * 360,
      type: i % 3, // 0: square, 1: triangle, 2: hexagon
    })), []
  );

  // Glowing orbs
  const orbs = useMemo(() => 
    [...Array(8)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 100 + Math.random() * 200,
      duration: 20 + Math.random() * 15,
      delay: Math.random() * 5,
    })), []
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dark base with subtle gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, hsl(220, 25%, 4%) 0%, hsl(240, 20%, 2%) 50%, hsl(220, 30%, 3%) 100%)",
        }}
      />

      {/* Animated gradient mesh */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 20%, hsl(180, 100%, 50%, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, hsl(280, 100%, 50%, 0.06) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 20%, hsl(180, 100%, 50%, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, hsl(280, 100%, 50%, 0.06) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 20%, hsl(180, 100%, 50%, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, hsl(280, 100%, 50%, 0.06) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(180, 100%, 50%, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, hsl(180, 100%, 50%, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing orbs in background */}
      {orbs.map((orb) => (
        <motion.div
          key={`orb-${orb.id}`}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.left}%`,
            top: `${orb.top}%`,
            background: `radial-gradient(circle, hsl(180, 100%, 50%, 0.15) 0%, hsl(180, 100%, 50%, 0.05) 30%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.3, 0.5, 0.2, 0.3],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating geometric shapes */}
      {floatingShapes.map((shape) => (
        <motion.div
          key={`shape-${shape.id}`}
          className="absolute"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.left}%`,
            top: `${shape.top}%`,
            border: shape.type === 0 
              ? '1px solid hsl(180, 100%, 50%, 0.2)' 
              : shape.type === 1 
                ? '1px solid hsl(280, 100%, 60%, 0.15)' 
                : '1px solid hsl(320, 100%, 60%, 0.15)',
            borderRadius: shape.type === 2 ? '50%' : shape.type === 0 ? '4px' : '0',
            clipPath: shape.type === 1 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : undefined,
          }}
          animate={{
            rotate: [shape.rotation, shape.rotation + 360],
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            rotate: { duration: shape.duration * 2, repeat: Infinity, ease: "linear" },
            y: { duration: shape.duration / 2, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: shape.duration / 3, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}

      {/* Flowing Neon Wave Lines - Cyan */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(180, 100%, 50%)" stopOpacity="0" />
            <stop offset="30%" stopColor="hsl(180, 100%, 50%)" stopOpacity="0.7" />
            <stop offset="70%" stopColor="hsl(190, 100%, 50%)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(190, 100%, 50%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="magentaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(300, 100%, 50%)" stopOpacity="0" />
            <stop offset="30%" stopColor="hsl(300, 100%, 50%)" stopOpacity="0.5" />
            <stop offset="70%" stopColor="hsl(320, 100%, 50%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(320, 100%, 50%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(260, 100%, 60%)" stopOpacity="0" />
            <stop offset="30%" stopColor="hsl(260, 100%, 60%)" stopOpacity="0.4" />
            <stop offset="70%" stopColor="hsl(280, 100%, 50%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(280, 100%, 50%)" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="glowStrong">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Cyan wave - top */}
        <motion.path
          d="M-100,180 Q200,100 400,200 T800,160 T1200,220 T1600,180 T2000,200"
          stroke="url(#cyanGradient)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#glowStrong)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            d: [
              "M-100,180 Q200,100 400,200 T800,160 T1200,220 T1600,180 T2000,200",
              "M-100,200 Q200,140 400,180 T800,200 T1200,160 T1600,200 T2000,180",
              "M-100,180 Q200,100 400,200 T800,160 T1200,220 T1600,180 T2000,200",
            ]
          }}
          transition={{ 
            pathLength: { duration: 2, ease: "easeOut" },
            opacity: { duration: 1 },
            d: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Magenta wave - middle */}
        <motion.path
          d="M-100,350 Q300,280 500,380 T900,320 T1300,380 T1700,340 T2100,360"
          stroke="url(#magentaGradient)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            d: [
              "M-100,350 Q300,280 500,380 T900,320 T1300,380 T1700,340 T2100,360",
              "M-100,380 Q300,340 500,320 T900,380 T1300,320 T1700,380 T2100,340",
              "M-100,350 Q300,280 500,380 T900,320 T1300,380 T1700,340 T2100,360",
            ]
          }}
          transition={{ 
            pathLength: { duration: 2.5, ease: "easeOut", delay: 0.3 },
            opacity: { duration: 1, delay: 0.3 },
            d: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Purple wave - lower */}
        <motion.path
          d="M-100,520 Q250,450 500,540 T950,480 T1400,540 T1850,500 T2300,520"
          stroke="url(#purpleGradient)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            d: [
              "M-100,520 Q250,450 500,540 T950,480 T1400,540 T1850,500 T2300,520",
              "M-100,500 Q250,540 500,480 T950,540 T1400,480 T1850,540 T2300,500",
              "M-100,520 Q250,450 500,540 T950,480 T1400,540 T1850,500 T2300,520",
            ]
          }}
          transition={{ 
            pathLength: { duration: 3, ease: "easeOut", delay: 0.6 },
            opacity: { duration: 1, delay: 0.6 },
            d: { duration: 12, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Additional subtle cyan wave */}
        <motion.path
          d="M-100,650 Q350,600 600,680 T1000,620 T1500,680 T1900,640 T2400,660"
          stroke="url(#cyanGradient)"
          strokeWidth="1"
          fill="none"
          filter="url(#glow)"
          opacity="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 0.5,
            d: [
              "M-100,650 Q350,600 600,680 T1000,620 T1500,680 T1900,640 T2400,660",
              "M-100,680 Q350,660 600,620 T1000,680 T1500,620 T1900,680 T2400,640",
              "M-100,650 Q350,600 600,680 T1000,620 T1500,680 T1900,640 T2400,660",
            ]
          }}
          transition={{ 
            pathLength: { duration: 3.5, ease: "easeOut", delay: 0.9 },
            opacity: { duration: 1, delay: 0.9 },
            d: { duration: 14, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </svg>

      {/* Animated floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            background: `hsl(180, 100%, 50%)`,
            boxShadow: `0 0 ${particle.size * 3}px hsl(180, 100%, 50%, 0.8)`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, Math.random() > 0.5 ? 20 : -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Rising spark particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`spark-${i}`}
          className="absolute w-0.5 h-4"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '-20px',
            background: 'linear-gradient(to top, hsl(180, 100%, 50%), transparent)',
            filter: 'blur(0.5px)',
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            opacity: [0, 1, 1, 0],
            x: [0, Math.random() * 50 - 25],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}

      {/* Vignette overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, hsl(220, 25%, 2%, 0.7) 100%)",
        }}
      />
    </div>
  );
};

export default KikkBackground;