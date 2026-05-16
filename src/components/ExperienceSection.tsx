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
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary">/ Experience</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Proof of work</h2>
          </div>
          <span className="hidden sm:block font-mono text-xs text-muted-foreground">{experiences.length.toString().padStart(2, "0")} roles</span>
        </div>

        <div className="grid grid-cols-12 gap-3 md:gap-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="col-span-12 md:col-span-6 lg:col-span-4 surface-card rounded-2xl p-6 group hover:ring-ember transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="w-2 h-2 rounded-full bg-primary group-hover:shadow-ember transition-shadow" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
              <p className="font-mono text-xs text-primary mt-1">{exp.org}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-4">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
