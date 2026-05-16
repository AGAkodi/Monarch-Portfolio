import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import monarchPfp from "@/assets/monarch-pfp.jpg";

const stats = [
  { value: "5+", label: "Web3 protocols" },
  { value: "4y", label: "Building onchain" },
  { value: "100%", label: "Async-native" },
];

const HeroSection = () => {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16 px-6">
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Bento-style intro */}
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          {/* Identity card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-8 surface-card rounded-3xl p-8 md:p-10 relative overflow-hidden noise"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-primary mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 glow-dot animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
              Mønarch.
              <br />
              <span className="text-gradient-ember">Onchain by craft.</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Blockchain researcher, ambassador, and community manager scaling Web3 adoption through localized
              micro-campaigns and community-led growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-ember text-primary-foreground text-sm font-semibold shadow-ember hover:opacity-90 transition-opacity"
              >
                Start a conversation
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm font-medium hover:border-primary/50 transition-colors"
              >
                View work
              </a>
            </div>
          </motion.div>

          {/* Avatar card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-6 md:col-span-4 surface-card rounded-3xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-ember opacity-20" />
            <div className="absolute inset-0 grid-bg opacity-40" />
            <img
              src={monarchPfp}
              alt="Mønarch"
              className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl object-cover ring-2 ring-primary/60 shadow-ember"
            />
            <p className="relative font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/80 mt-4">
              @OxMonarch
            </p>
          </motion.div>

          {/* Stat tiles */}
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="col-span-6 md:col-span-3 surface-card rounded-2xl p-5"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient-ember">{s.value}</div>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}

          {/* Tagline tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="col-span-12 md:col-span-3 surface-card rounded-2xl p-5 flex items-center gap-3"
          >
            <Sparkles className="w-5 h-5 text-primary shrink-0" />
            <p className="text-sm text-muted-foreground leading-snug">
              Research · Ambassadorship · Community.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
