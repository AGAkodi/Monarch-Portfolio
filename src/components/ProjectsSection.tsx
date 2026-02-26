import { motion } from "framer-motion";

const projects = [
  {
    name: "Cherry",
    role: "Community Manager",
    description: "Improved engagement quality through structured discussions and proactive moderation, helping build a focused and interactive ecosystem.",
  },
  {
    name: "ARMChain",
    role: "Ambassador",
    description: "Supported educational campaigns and ecosystem awareness efforts to strengthen protocol visibility.",
  },
  {
    name: "Levva",
    role: "Ambassador",
    description: "Encouraged organic community growth through active participation and information sharing.",
  },
  {
    name: "Pondo Protocol",
    role: "Ambassador",
    description: "Contributed to outreach efforts and community-level awareness to support adoption initiatives.",
  },
  {
    name: "Aleo",
    role: "Blockchain Researcher",
    description: "Explored blockchain architecture and emerging technologies, contributing research insights and ecosystem analysis.",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-xs tracking-widest uppercase text-primary mb-12">
          🚀 Project / Case Highlights
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-gold-glow hover:shadow-gold transition-all duration-300"
            >
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-foreground font-semibold text-lg">{project.name}</h3>
                <span className="font-mono text-xs text-primary">{project.role}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
