import { motion } from "framer-motion";
import { Play, Info } from "lucide-react";
import heroBg from "@/assets/hero-drone.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Drone technology" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/30" />
      </div>

      {/* Content */}
      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="font-display text-7xl md:text-8xl font-bold leading-none mb-4">
            <span className="text-secondary-foreground">SHIVA </span>
            <span className="text-primary">5</span>
          </h1>
          <p className="text-primary text-xl md:text-2xl font-medium mb-8 tracking-wide">
            Engineered for Endurance
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 border border-secondary-foreground/50 text-secondary-foreground px-8 py-3.5 text-sm font-semibold tracking-widest uppercase transition-colors duration-300 hover:bg-secondary-foreground hover:text-secondary"
          >
            <Play size={16} />
            Watch Video
          </motion.button>
        </motion.div>
      </div>

      {/* Info Pack floating button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 w-20 h-20 rounded-full bg-primary text-primary-foreground flex flex-col items-center justify-center shadow-lg shadow-primary/30 text-xs font-bold uppercase tracking-wide"
      >
        <Info size={18} className="mb-0.5" />
        Info Pack
      </motion.button>
    </section>
  );
};

export default HeroSection;
