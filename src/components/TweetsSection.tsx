import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const tweets = [
  {
    id: "1890334802605146363",
    url: "https://x.com/i/status/1890334802605146363",
    preview: "Exploring the intersection of blockchain privacy and scalability — the future of Web3 infrastructure.",
    date: "Feb 14, 2025",
  },
  {
    id: "1884287724343156815",
    url: "https://x.com/i/status/1884287724343156815",
    preview: "Deep dive into post-quantum cryptography and its implications for blockchain security.",
    date: "Jan 28, 2025",
  },
  {
    id: "1955402450887905342",
    url: "https://x.com/i/status/1955402450887905342",
    preview: "Community-first approaches to ecosystem growth — why genuine engagement beats vanity metrics.",
    date: "May 3, 2025",
  },
  {
    id: "1912648084145705134",
    url: "https://x.com/i/status/1912648084145705134",
    preview: "Building trust in decentralized ecosystems through consistent contribution and visibility.",
    date: "Apr 16, 2025",
  },
  {
    id: "1867478847610138641",
    url: "https://x.com/i/status/1867478847610138641",
    preview: "The role of ambassadors in bridging the gap between projects and their communities.",
    date: "Dec 13, 2024",
  },
];

const TweetsSection = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-xs tracking-widest uppercase text-primary mb-12">
          Featured Tweets
        </h2>
        <div className="grid gap-4">
          {tweets.map((tweet, i) => (
            <motion.a
              key={tweet.id}
              href={tweet.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group block border border-border rounded-lg p-5 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(43_90%_55%/0.1)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1 text-primary">
                  <XIcon />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-foreground text-sm leading-relaxed mb-3">
                    {tweet.preview}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-xs font-mono">
                      {tweet.date}
                    </span>
                    <span className="flex items-center gap-1 text-primary text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                      View on X <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TweetsSection;
