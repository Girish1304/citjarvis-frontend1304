import { motion } from "framer-motion";

const ArcReactorBackground = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Subtle grid pattern like GoatFundedTrader */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(42 100% 50% / 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(42 100% 50% / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Outer breathing glow - more subtle */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[900px] h-[900px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(42 100% 50% / 0.1) 0%, hsl(42 100% 50% / 0.03) 40%, transparent 70%)",
        }}
      />

      {/* Middle breathing ring */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(42 100% 50% / 0.08) 0%, transparent 60%)",
          boxShadow: "0 0 100px hsl(42 100% 50% / 0.08)",
        }}
      />

      {/* Core glow */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(42 100% 50% / 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Center bright point */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[80px] h-[80px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(42 100% 60% / 0.5) 0%, transparent 100%)",
        }}
      />

      {/* Decorative curved lines - GoatFundedTrader style */}
      <svg className="absolute w-[800px] h-[800px] opacity-20" viewBox="0 0 800 800">
        <motion.path
          d="M 100 400 Q 400 100 700 400"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path
          d="M 150 450 Q 400 200 650 450"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(42 100% 50% / 0)" />
            <stop offset="50%" stopColor="hsl(42 100% 50% / 0.8)" />
            <stop offset="100%" stopColor="hsl(42 100% 50% / 0)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ArcReactorBackground;
