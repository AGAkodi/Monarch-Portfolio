import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
  </svg>
);

const links = [
  { icon: Mail, label: "Email", value: "talk2monarch77@gmail.com", href: "mailto:talk2monarch77@gmail.com" },
  { icon: Send, label: "Telegram", value: "@Ox_Monarch", href: "https://t.me/Ox_Monarch" },
  { icon: XIcon, label: "X", value: "@OxMonarch", href: "https://x.com/OxMonarch" },
  { icon: DiscordIcon, label: "Discord", value: "oxmonarch", href: "#" },
];

const ContactSection = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-xs tracking-widest uppercase text-primary mb-8">
          Contact & Web3 Messaging
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
