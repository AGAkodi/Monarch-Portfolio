import { motion } from "framer-motion";

const stats = [
  { label: "Community Reach", value: 87, note: "Consistent visibility and contribution across Web3 communities and discussions." },
  { label: "Engagement Activity", value: 81, note: "Active participation in conversations, campaigns, and ecosystem events." },
  { label: "Consistency on X", value: 72, note: "Sustained presence with regular updates, commentary, and engagement." },
];

const SocialProofSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary">/ Social proof</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Trust over vanity.</h2>
        </div>

        <div className="grid grid-cols-12 gap-3 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="col-span-12 md:col-span-4 surface-card rounded-3xl p-6"
            >
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-sm font-medium text-foreground">{stat.label}</span>
                <span className="font-mono text-2xl font-bold text-gradient-ember">{stat.value}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-ember"
                />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{stat.note}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-12 surface-card rounded-3xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative overflow-hidden"
          >
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-gradient-ember opacity-10 blur-3xl rounded-full" />
            <div className="relative">
              <h3 className="text-primary font-mono text-xs tracking-widest uppercase mb-2">Focus on trust & presence</h3>
              <p className="text-foreground text-base md:text-lg max-w-2xl leading-relaxed">
                Prioritizing meaningful interaction, credibility, and long-term ecosystem relationships over vanity metrics.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
