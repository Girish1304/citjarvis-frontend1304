import { motion } from "framer-motion";

const sponsors = {
  title: [
    { name: "TechCorp Industries", tier: "Title Sponsor" },
  ],
  platinum: [
    { name: "RoboTech Solutions" },
    { name: "AutomateX" },
  ],
  gold: [
    { name: "InnovateLabs" },
    { name: "FutureDrive" },
    { name: "MechaPro" },
  ],
  silver: [
    { name: "CircuitWorks" },
    { name: "DriveSync" },
    { name: "TechNova" },
    { name: "ByteForge" },
  ],
};

const SponsorLogo = ({ name, size = "md" }: { name: string; size?: "lg" | "md" | "sm" }) => {
  const sizeClasses = {
    lg: "h-24 w-48",
    md: "h-20 w-40",
    sm: "h-16 w-32",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`${sizeClasses[size]} bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl flex items-center justify-center p-4 hover:border-primary/40 transition-colors cursor-pointer group`}
    >
      <div className="text-center">
        <div className="text-2xl font-bold text-primary/60 group-hover:text-primary transition-colors mb-1">
          {name.split(' ').map(word => word[0]).join('')}
        </div>
        <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors truncate max-w-full">
          {name}
        </p>
      </div>
    </motion.div>
  );
};

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              OUR SPONSORS
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            JARVIS 2026 is made possible by our amazing sponsors and partners
          </p>
        </motion.div>

        {/* Title Sponsor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-center text-sm uppercase tracking-widest text-primary mb-6 font-semibold">
            Title Sponsor
          </h3>
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="h-32 w-64 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border-2 border-primary/40 rounded-2xl flex items-center justify-center p-6 hover:border-primary/60 transition-colors cursor-pointer group"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-primary group-hover:text-accent transition-colors mb-2">
                  TCI
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  TechCorp Industries
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Platinum Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-6 font-semibold">
            Platinum Sponsors
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {sponsors.platinum.map((sponsor) => (
              <SponsorLogo key={sponsor.name} name={sponsor.name} size="lg" />
            ))}
          </div>
        </motion.div>

        {/* Gold Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-6 font-semibold">
            Gold Sponsors
          </h3>
          <div className="flex flex-wrap justify-center gap-5">
            {sponsors.gold.map((sponsor) => (
              <SponsorLogo key={sponsor.name} name={sponsor.name} size="md" />
            ))}
          </div>
        </motion.div>

        {/* Silver Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-6 font-semibold">
            Silver Sponsors
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sponsors.silver.map((sponsor) => (
              <SponsorLogo key={sponsor.name} name={sponsor.name} size="sm" />
            ))}
          </div>
        </motion.div>

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-foreground mb-2">
              Interested in Sponsoring?
            </h4>
            <p className="text-muted-foreground mb-4">
              Partner with us and reach thousands of tech enthusiasts
            </p>
            <a
              href="mailto:jarvis2026@citchennai.net?subject=Sponsorship Inquiry"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
