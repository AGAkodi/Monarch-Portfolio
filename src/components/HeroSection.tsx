import { motion } from "framer-motion";
import monarchPfp from "@/assets/monarch-pfp.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(43 90% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(43 90% 55%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <img src={monarchPfp} alt="Mønarch" className="w-24 h-24 rounded-full mx-auto mb-5 border-2 border-gold-glow shadow-gold object-cover" />
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-gradient-gold mb-4">
            Mønarch
          </h1>
          <p className="font-mono text-sm md:text-base text-muted-foreground tracking-wider uppercase">
            Blockchain Researcher · Quantum Computing · Ambassador · Community Manager
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Scaling Web3 adoption and education through localized micro-campaigns and community-led growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 inline-block"
        >
          <div className="border border-gold-glow bg-card/80 backdrop-blur-sm rounded-lg p-6 max-w-lg shadow-gold">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 glow-dot animate-pulse-glow" />
              <span className="font-mono text-sm text-primary font-medium">Available for Opportunities</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed text-left">
              Open to collaborations, research contributions, ambassador programs, and community growth roles in forward-thinking Web3 ecosystems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
