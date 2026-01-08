import { motion } from "framer-motion";

const KikkBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dark base with subtle gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, hsl(220, 25%, 5%) 0%, hsl(240, 20%, 3%) 50%, hsl(220, 30%, 4%) 100%)",
        }}
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating circles in background */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, hsl(170, 100%, 50%) 0%, transparent 70%)',
          top: '10%',
          right: '-10%',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.04, 0.06, 0.04],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, hsl(280, 100%, 50%) 0%, transparent 70%)',
          bottom: '5%',
          left: '-5%',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, hsl(200, 100%, 50%) 0%, transparent 70%)',
          top: '50%',
          left: '30%',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.04, 0.03],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Flowing Neon Wave Lines - Cyan */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(170, 100%, 50%)" stopOpacity="0" />
            <stop offset="30%" stopColor="hsl(170, 100%, 50%)" stopOpacity="0.6" />
            <stop offset="70%" stopColor="hsl(190, 100%, 50%)" stopOpacity="0.6" />
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
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Cyan wave - top */}
        <motion.path
          d="M-100,180 Q200,100 400,200 T800,160 T1200,220 T1600,180 T2000,200"
          stroke="url(#cyanGradient)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
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
          strokeWidth="1.5"
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

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Vignette overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, hsl(220, 25%, 3%, 0.6) 100%)",
        }}
      />
    </div>
  );
};

export default KikkBackground;