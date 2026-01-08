import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Cpu, CircuitBoard, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";

const GlassCard = ({ 
  children, 
  className = "",
  rotate = 0,
  delay = 0
}: { 
  children: React.ReactNode; 
  className?: string;
  rotate?: number;
  delay?: number;
}) => (
  <motion.div 
    className={`relative ${className}`}
    initial={{ opacity: 0, y: 40, rotateY: rotate }}
    animate={{ 
      opacity: 1, 
      y: 0,
      rotateY: rotate,
    }}
    transition={{ delay, duration: 0.8, ease: "easeOut" }}
    whileHover={{ 
      scale: 1.02,
      rotateY: rotate * 0.5,
      transition: { duration: 0.3 }
    }}
    style={{ 
      transformStyle: "preserve-3d",
      perspective: "1000px"
    }}
  >
    {/* Glass background */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20" />
    {/* Shine effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl opacity-60" />
    {/* Content */}
    <div className="relative z-10">
      {children}
    </div>
  </motion.div>
);

const HolographicHero = () => {
  const stats = [
    { value: "9+", label: "EVENTS", icon: Zap },
    { value: "6+", label: "WORKSHOPS", icon: Wrench },
    { value: "₹50K+", label: "PRIZES", icon: CircuitBoard },
    { value: "1000+", label: "PARTICIPANTS", icon: Cpu },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-24 pb-16">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(320 100% 50% / 0.4) 0%, transparent 70%)",
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(280 100% 40% / 0.3) 0%, transparent 70%)",
          }}
          animate={{ 
            scale: [1, 1.15, 1],
            x: [0, -30, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(65 100% 50% / 0.15) 0%, transparent 60%)",
          }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="text-left">
            {/* Sparkle badge */}
            <motion.div 
              className="inline-flex items-center gap-2 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-6 h-6 text-primary" />
            </motion.div>

            {/* Main heading - T.RICKS style big bold text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.85] tracking-tight mb-6">
                <span className="block text-foreground">JARVIS</span>
                <span className="block text-foreground">TECHNICAL</span>
                <span className="block text-gradient">SYMPOSIUM</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground max-w-lg mb-8 font-body leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Giving tech enthusiasts a competitive edge through 
              interactive workshops and events at Chennai Institute of Technology
            </motion.p>

            {/* CTA Button - T.RICKS style with arrow */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/register" className="group">
                <div className="flex items-center">
                  <div className="px-8 py-5 bg-transparent border-2 border-white/30 rounded-full font-mono text-sm uppercase tracking-widest text-foreground group-hover:border-primary group-hover:text-primary transition-all duration-300">
                    Register Now
                  </div>
                  <div className="w-14 h-14 -ml-1 bg-white rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <ArrowRight className="w-5 h-5 text-background group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Right side - Floating glass cards */}
          <div className="relative h-[500px] lg:h-[600px] hidden md:block" style={{ perspective: "1000px" }}>
            {/* Main glass card - tilted */}
            <GlassCard 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 z-20"
              rotate={-15}
              delay={0.4}
            >
              <div className="p-8">
                <div className="text-sm font-mono text-muted-foreground mb-4 tracking-wider">JARVIS</div>
                <div className="space-y-3 mb-6">
                  <div className="h-1 bg-white/20 rounded-full w-full" />
                  <div className="h-1 bg-white/15 rounded-full w-4/5" />
                  <div className="h-1 bg-white/10 rounded-full w-3/5" />
                </div>
                <div className="font-mono text-xl tracking-[0.3em] text-foreground/80 mb-6">
                  FEB 04 2026
                </div>
                <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
              </div>
            </GlassCard>

            {/* Secondary card - behind and tilted other way */}
            <GlassCard 
              className="absolute top-[40%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-72 z-10"
              rotate={20}
              delay={0.6}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-background" />
                  </div>
                  <span className="text-sm font-medium">Tech Events</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(6)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      className="aspect-square rounded-xl bg-white/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    />
                  ))}
                </div>
              </div>
            </GlassCard>

            {/* Third small card */}
            <GlassCard 
              className="absolute top-[70%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-48 z-30"
              rotate={-8}
              delay={0.8}
            >
              <div className="p-5 text-center">
                <div className="text-3xl font-display text-gradient mb-1">₹50K+</div>
                <div className="text-xs text-muted-foreground font-mono tracking-wider">PRIZE POOL</div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Countdown section */}
        <motion.div 
          className="mt-16 lg:mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <CountdownTimer />
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + index * 0.1 }}
              className="group"
            >
              <div className="relative p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all duration-300">
                <stat.icon className="w-5 h-5 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl md:text-4xl font-display text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground font-mono tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HolographicHero;
