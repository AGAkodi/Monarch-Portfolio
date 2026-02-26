import { motion } from "framer-motion";

const experiences = [
  {
    role: "Community Manager",
    org: "@cherrydotfun",
    description: "Supported structured community engagement, moderated discussions, and strengthened ecosystem interaction quality.",
  },
  {
    role: "Ambassador",
    org: "@ARMchain_pqc",
    description: "Contributed to awareness initiatives, educational content distribution, and ecosystem visibility.",
  },
  {
    role: "Ambassador",
    org: "@levva_fi",
    description: "Helped drive early community participation and organic discussions within the ecosystem.",
  },
  {
    role: "Ambassador",
    org: "@PondoProtocol",
    description: "Assisted with outreach, community representation, and growth-focused initiatives.",
  },
  {
    role: "Blockchain Researcher",
    org: "@AleoHQ",
    description: "Focused on research-driven exploration of blockchain infrastructure and privacy-oriented technologies.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-xs tracking-widest uppercase text-primary mb-12">
          🏗 Experience / Proof of Work
        </h2>
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8 pb-10 border-l border-border last:pb-0 group"
            >
              <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-primary -translate-x-[5px] group-hover:shadow-gold transition-shadow" />
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-2">
                <h3 className="text-foreground font-semibold">{exp.role}</h3>
                <span className="font-mono text-sm text-primary">— {exp.org}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
