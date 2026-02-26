import { motion } from "framer-motion";
import { Mail, Send, MessageCircle } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", value: "talk2monarch77@gmail.com", href: "mailto:talk2monarch77@gmail.com" },
  { icon: Send, label: "Telegram", value: "@Ox_Monarch", href: "https://t.me/Ox_Monarch" },
  { icon: MessageCircle, label: "X", value: "@OxMonarch", href: "https://x.com/OxMonarch" },
  { icon: MessageCircle, label: "Discord", value: "oxmonarch", href: "#" },
];

const ContactSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-xs tracking-widest uppercase text-primary mb-8">
          📩 Contact & Web3 Messaging
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4 text-secondary-foreground leading-relaxed mb-10">
            <p>If you're building in Web3 and looking for support in research, community growth, or ambassador representation, feel free to reach out.</p>
            <p>I'm open to collaborations, ecosystem contributions, and strategic growth discussions.</p>
            <p className="text-muted-foreground text-sm">For privacy-focused conversations, Web3-native messaging options are welcome.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-gold-glow hover:shadow-gold transition-all duration-300 group"
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <div className="font-mono text-xs text-muted-foreground">{link.label}</div>
                  <div className="text-foreground text-sm">{link.value}</div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
