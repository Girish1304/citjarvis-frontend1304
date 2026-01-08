import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Cpu, CircuitBoard, Wrench, Calendar, MapPin } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import jarvisLogo from "@/assets/jarvis-logo.png";

const HolographicHero = () => {
  const stats = [
    { value: "9+", label: "Events", icon: Zap },
    { value: "6+", label: "Workshops", icon: Wrench },
    { value: "₹50K+", label: "Prizes", icon: CircuitBoard },
    { value: "1000+", label: "Participants", icon: Cpu },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-6 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Main content */}
        <div className="text-center">
          {/* Date badge - styled like reference */}
          <motion.div 
            className="inline-flex items-center justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="relative flex items-center gap-4 px-8 py-3 bg-[hsl(220,25%,8%,0.8)] border border-[hsl(170,100%,50%,0.4)] rounded-full backdrop-blur-sm">
              {/* Corner glow effects */}
              <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t-2 border-l-2 border-[hsl(170,100%,50%)] rounded-tl-lg" />
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 border-t-2 border-r-2 border-[hsl(170,100%,50%)] rounded-tr-lg" />
              <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-b-2 border-l-2 border-[hsl(170,100%,50%)] rounded-bl-lg" />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b-2 border-r-2 border-[hsl(170,100%,50%)] rounded-br-lg" />
              
              <Zap className="w-4 h-4 text-[hsl(170,100%,50%)]" />
              <span className="font-hero text-sm md:text-base font-semibold text-[hsl(170,100%,50%)] tracking-[0.2em] uppercase">
                February 4, 2026
              </span>
              <Zap className="w-4 h-4 text-[hsl(170,100%,50%)]" />
            </div>
          </motion.div>

          {/* Main heading - Hero title with gradient */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4"
          >
            <h1 className="font-hero text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.05em] leading-none">
              <span 
                className="block bg-gradient-to-r from-[hsl(170,100%,50%)] via-[hsl(280,100%,60%)] to-[hsl(320,100%,60%)] bg-clip-text text-transparent drop-shadow-[0_0_60px_hsl(280,100%,50%,0.4)]"
                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                JARVIS
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="font-hero text-4xl sm:text-5xl md:text-6xl font-medium tracking-[0.3em] text-foreground/90">
              2 0 2 6
            </h2>
          </motion.div>

          {/* Subtitle with highlighted text */}
          <motion.div 
            className="max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="font-heading text-lg md:text-xl text-muted-foreground leading-relaxed">
              The ultimate technical symposium at{" "}
              <span className="text-[hsl(170,100%,50%)] font-semibold">Chennai Institute of Technology</span>.
              <span className="text-[hsl(320,100%,60%)]">Where innovation</span>{" "}
              meets{" "}
              <span className="text-[hsl(32,100%,50%)]">inspiration</span>.
            </p>
          </motion.div>

          {/* Countdown section */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <CountdownTimer />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/register">
              <button className="group px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] bg-gradient-to-r from-[hsl(170,100%,50%)] to-[hsl(190,100%,50%)] hover:from-[hsl(170,100%,55%)] hover:to-[hsl(190,100%,55%)] text-black rounded-md transition-all duration-300 shadow-[0_0_30px_hsl(170,100%,50%,0.4)] hover:shadow-[0_0_50px_hsl(170,100%,50%,0.6)] flex items-center gap-3 font-heading">
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="/events">
              <button className="px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] rounded-md border-2 border-[hsl(320,100%,60%,0.5)] text-[hsl(320,100%,60%)] bg-transparent hover:bg-[hsl(320,100%,60%,0.1)] hover:border-[hsl(320,100%,60%)] transition-all duration-300 font-heading">
                Explore Events
              </button>
            </Link>
          </motion.div>

          {/* Stats - styled like reference with corner brackets */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="group relative p-6 bg-[hsl(220,25%,8%,0.6)] border border-[hsl(170,100%,50%,0.2)] rounded-lg hover:border-[hsl(170,100%,50%,0.5)] transition-all duration-300 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Corner brackets */}
                <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[hsl(320,100%,60%)] opacity-70" />
                <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[hsl(320,100%,60%)] opacity-70" />
                <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[hsl(320,100%,60%)] opacity-70" />
                <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[hsl(320,100%,60%)] opacity-70" />

                <div className="font-hero text-3xl md:text-4xl font-bold text-[hsl(170,100%,50%)] mb-2 drop-shadow-[0_0_15px_hsl(170,100%,50%,0.5)]">
                  {stat.value}
                </div>
                <div className="text-xs font-heading text-muted-foreground font-semibold uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-[hsl(170,100%,50%,0.3)] flex items-start justify-center p-2">
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-[hsl(170,100%,50%)]"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HolographicHero;