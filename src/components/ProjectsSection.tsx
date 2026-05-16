import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Cherry",
    role: "Community Manager",
    description: "Improved engagement quality through structured discussions and proactive moderation, helping build a focused and interactive ecosystem.",
    span: "md:col-span-7",
    feature: true,
  },
  {
    name: "Aleo",
    role: "Blockchain Researcher",
    description: "Explored blockchain architecture and emerging technologies, contributing research insights and ecosystem analysis.",
    span: "md:col-span-5",
  },
  {
    name: "ARMChain",
    role: "Ambassador",
    description: "Supported educational campaigns and ecosystem awareness efforts to strengthen protocol visibility.",
    span: "md:col-span-4",
  },
  {
    name: "Levva",
    role: "Ambassador",
    description: "Encouraged organic community growth through active participation and information sharing.",
    span: "md:col-span-4",
  },
  {
    name: "Pondo Protocol",
    role: "Ambassador",
    description: "Contributed to outreach efforts and community-level awareness to support adoption initiatives.",
    span: "md:col-span-4",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary">/ Projects</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Case highlights</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={`group surface-card rounded-3xl p-6 md:p-7 flex flex-col justify-between min-h-[180px] hover:ring-ember transition-all relative overflow-hidden ${project.span}`}
            >
              {project.feature && (
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-ember opacity-20 blur-3xl rounded-full" />
              )}
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">{project.name}</h3>
                  <p className="font-mono text-xs text-primary mt-1">{project.role}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <p className="relative text-sm text-muted-foreground leading-relaxed mt-6">{project.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
