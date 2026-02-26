import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-xs tracking-widest uppercase text-primary mb-8">
            🧠 About Me
          </h2>
          <div className="space-y-5 text-secondary-foreground leading-relaxed text-lg">
            <p>
              I am a Web3-focused builder passionate about research, ecosystem growth, and community-driven innovation. My work sits at the intersection of blockchain education, adoption strategy, and decentralized technology.
            </p>
            <p>
              With experience supporting multiple Web3 protocols, I focus on long-term value creation rather than short-term hype. I believe sustainable growth comes from trust, clarity, and meaningful engagement.
            </p>
            <p>
              Through localized micro-campaigns and community-led initiatives, I contribute to making Web3 more accessible, understandable, and practical for emerging markets and global audiences alike.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
