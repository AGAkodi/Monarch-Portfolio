import { motion } from "framer-motion";
import { Mail, Send, ArrowUpRight } from "lucide-react";

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
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="surface-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-ember opacity-20 blur-3xl rounded-full" />

          <div className="relative grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary">/ Contact</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
                Let's build<br /><span className="text-gradient-ember">something onchain.</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
                If you're building in Web3 and need support in research, community growth, or ambassador representation —
                reach out. Open to collaborations, ecosystem contributions, and strategic growth.
              </p>
            </div>

            <div className="col-span-12 md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 p-4 bg-card/60 border border-border rounded-2xl hover:border-primary/50 hover:bg-card transition-all"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-gradient-ember transition-colors">
                      <link.icon className="w-4 h-4 text-foreground group-hover:text-primary-foreground" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{link.label}</div>
                      <div className="text-foreground text-sm truncate">{link.value}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
