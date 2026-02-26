import { motion } from "framer-motion";

const stats = [
  { label: "Community Reach", value: 87, note: "Consistent visibility and contribution across Web3 communities and discussions." },
  { label: "Engagement Activity", value: 81, note: "Active participation in conversations, campaigns, and ecosystem events." },
  { label: "Consistency on X", value: 72, note: "Sustained presence with regular updates, commentary, and engagement." },
];

const SocialProofSection = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-xs tracking-widest uppercase text-primary mb-12">
          📊 Social Proof
        </h2>
        <div className="space-y-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-foreground font-medium">{stat.label}</span>
                <span className="font-mono text-primary font-semibold">{stat.value}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, hsl(43 90% 55%), hsl(35 100% 65%))" }}
                />
              </div>
              <p className="text-muted-foreground text-sm">{stat.note}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 border border-border rounded-lg p-6 bg-card"
        >
          <h3 className="text-primary font-mono text-sm font-medium mb-2">Focus on Trust & Presence</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Prioritizing meaningful interaction, credibility, and long-term ecosystem relationships over vanity metrics.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
