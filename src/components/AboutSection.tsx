import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="col-span-12 md:col-span-4"
        >
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary">/ About</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
            A builder at the<br />edge of <span className="text-gradient-ember">Web3</span>.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="col-span-12 md:col-span-8 surface-card rounded-3xl p-8 md:p-10"
        >
          <div className="space-y-5 text-secondary-foreground leading-relaxed text-base md:text-lg">
            <p>
              I am a Web3-focused builder passionate about research, ecosystem growth, and community-driven innovation. My work sits at the intersection of blockchain education, adoption strategy, and decentralized technology.
            </p>
            <p>
              With experience supporting multiple Web3 protocols, I focus on long-term value creation rather than short-term hype. Sustainable growth comes from trust, clarity, and meaningful engagement.
            </p>
            <p className="text-muted-foreground">
              Through localized micro-campaigns and community-led initiatives, I make Web3 more accessible, understandable, and practical for emerging markets and global audiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
