import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeUnit {
  value: number;
  label: string;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([]);

  useEffect(() => {
    const targetDate = new Date("2026-02-04T09:00:00").getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft([
          { value: days, label: "DAYS" },
          { value: hours, label: "HOURS" },
          { value: minutes, label: "MINUTES" },
          { value: seconds, label: "SECONDS" },
        ]);
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Label */}
      <motion.div 
        className="text-sm font-display text-muted-foreground tracking-[0.2em] uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Symposium Starts In
      </motion.div>
      
      {/* Timer */}
      <div className="flex items-center justify-center gap-4 md:gap-6 p-6 md:p-8 bg-card/60 backdrop-blur-xl rounded-2xl border border-border">
        {timeLeft.map((unit, index) => (
          <div key={unit.label} className="flex items-center gap-4 md:gap-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {/* Number */}
              <motion.div
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[hsl(170,100%,50%)] drop-shadow-[0_0_20px_hsl(170,100%,50%,0.5)]"
                key={unit.value}
                initial={{ y: -5, opacity: 0.7 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.15 }}
              >
                {formatNumber(unit.value)}
              </motion.div>

              {/* Label */}
              <div className="text-[10px] md:text-xs text-muted-foreground text-center tracking-wider mt-2 font-medium">
                {unit.label}
              </div>
            </motion.div>

            {/* Separator */}
            {index < timeLeft.length - 1 && (
              <motion.div
                className="text-2xl md:text-3xl font-bold text-muted-foreground"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                :
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
