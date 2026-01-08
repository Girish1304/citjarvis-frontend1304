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
          {/* College badge */}
          <motion.div 
            className="inline-flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 px-5 py-2.5 bg-[hsl(170,100%,50%,0.1)] border border-[hsl(170,100%,50%,0.3)] rounded-full">
              <span className="w-2 h-2 bg-[hsl(170,100%,50%)] rounded-full animate-pulse shadow-[0_0_10px_hsl(170,100%,50%)]" />
              <span className="text-sm font-medium text-[hsl(170,100%,50%)] tracking-wide uppercase">
                Chennai Institute of Technology presents
              </span>
            </div>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <img 
              src={jarvisLogo} 
              alt="JARVIS 2026" 
              className="h-24 md:h-32 lg:h-40 mx-auto drop-shadow-[0_0_30px_hsl(170,100%,50%,0.4)]"
            />
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide leading-tight uppercase">
              <span className="block text-foreground">The Future of</span>
              <span className="block text-[hsl(32,100%,50%)] drop-shadow-[0_0_30px_hsl(32,100%,50%,0.5)]">Innovation</span>
              <span className="block text-foreground">Starts Here</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Join <span className="text-[hsl(32,100%,50%)] font-semibold">JARVIS 2026</span> — 
            the premier technical symposium featuring cutting-edge workshops, 
            intense competitions, and transformative experiences.
          </motion.p>

          {/* Event info pills */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2 px-4 py-2.5 bg-card/80 border border-border rounded-full backdrop-blur-sm">
              <Calendar className="w-4 h-4 text-[hsl(32,100%,50%)]" />
              <span className="text-sm font-medium">February 4, 2026</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 bg-card/80 border border-border rounded-full backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-[hsl(32,100%,50%)]" />
              <span className="text-sm font-medium">CIT Campus, Chennai</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/register">
              <button className="group px-8 py-4 text-sm font-bold uppercase tracking-wider bg-[hsl(32,100%,50%)] hover:bg-[hsl(32,100%,55%)] text-black rounded-full transition-all duration-300 shadow-[0_0_30px_hsl(32,100%,50%,0.4)] hover:shadow-[0_0_40px_hsl(32,100%,50%,0.6)] flex items-center gap-2">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="/events">
              <button className="px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-full border-2 border-[hsl(170,100%,50%,0.5)] text-[hsl(170,100%,50%)] bg-transparent hover:bg-[hsl(170,100%,50%,0.1)] hover:border-[hsl(170,100%,50%)] transition-all duration-300">
                Explore Events
              </button>
            </Link>
          </motion.div>

          {/* Countdown */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <CountdownTimer />
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="group relative p-5 bg-card/60 border border-border rounded-xl hover:border-[hsl(170,100%,50%,0.5)] transition-all duration-300 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-3 right-3 opacity-20 group-hover:opacity-40 transition-opacity">
                  <stat.icon className="w-6 h-6 text-[hsl(170,100%,50%)]" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-[hsl(170,100%,50%)] mb-1 drop-shadow-[0_0_10px_hsl(170,100%,50%,0.4)]">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HolographicHero;
