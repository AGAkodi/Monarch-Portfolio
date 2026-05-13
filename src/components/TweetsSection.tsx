import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

type Tweet = {
  id: string;
  url: string;
  handle: string;
  author: string;
  date: string;
  title: string;
  cover: string; // gradient classes
};

const tweets: Tweet[] = [
  {
    id: "2049432332361248797",
    url: "https://twitter.com/OxMonarch/status/2049432332361248797",
    handle: "@OxMonarch",
    author: "Mønarch",
    date: "Apr 29, 2026",
    title:
      "The End of \u201CPrivate\u201D Messages: WhatsApp\u2019s Encryption Crisis and Why Wallet-to-Wallet Is the Future",
    cover: "from-red-900 via-rose-700 to-amber-600",
  },
  {
    id: "1890334802605146363",
    url: "https://twitter.com/OxMonarch/status/1890334802605146363",
    handle: "@OxMonarch",
    author: "Mønarch",
    date: "Feb 14, 2025",
    title:
      "The TL was Real Busy — the @levva_fi × @OpenCustody Merger forming a powerful AI-driven DeFi ecosystem.",
    cover: "from-amber-700 via-yellow-600 to-orange-500",
  },
  {
    id: "1994929999867244652",
    url: "https://twitter.com/OxMonarch/status/1994929999867244652",
    handle: "@OxMonarch",
    author: "Mønarch",
    date: "Nov 2025",
    title:
      "Starting a 30-day DeFi learning series from scratch — no prior assumptions, just knowledge.",
    cover: "from-emerald-900 via-teal-700 to-cyan-600",
  },
  {
    id: "1912648084145705134",
    url: "https://twitter.com/OxMonarch/status/1912648084145705134",
    handle: "@OxMonarch",
    author: "Mønarch",
    date: "Apr 2025",
    title:
      "Staking is the future of passive income in crypto — Anatoly Yakovenko. But what's the reality?",
    cover: "from-indigo-900 via-violet-700 to-fuchsia-600",
  },
  {
    id: "1867478847610138641",
    url: "https://twitter.com/OxMonarch/status/1867478847610138641",
    handle: "@OxMonarch",
    author: "Mønarch",
    date: "Dec 2024",
    title:
      "I wasted this year's bull run and didn't even notice — a thread on Bitcoin dominance, altcoin season, and @dominationfi.",
    cover: "from-orange-900 via-amber-700 to-yellow-500",
  },
  {
    id: "2019463352557457590",
    url: "https://twitter.com/ARMchain_pqc/status/2019463352557457590",
    handle: "@ARMchain_pqc",
    author: "ARMchain | Quantum-Secure",
    date: "2026",
    title:
      "HUGE congratulations to our top-performing Ambassadors — consistency, passion, and real commitment to the vision.",
    cover: "from-slate-900 via-zinc-800 to-amber-700",
  },
];

const TweetCard = ({ tweet }: { tweet: Tweet }) => (
  <a
    href={tweet.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex-shrink-0 w-[320px] flex flex-col rounded-lg overflow-hidden border border-border bg-card hover:border-primary/60 transition-colors snap-start"
  >
    {/* Cover */}
    <div
      className={`relative h-[140px] bg-gradient-to-br ${tweet.cover} flex items-center justify-center overflow-hidden`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
      <span className="relative font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
        {tweet.handle.replace("@", "")}
      </span>
      <div className="absolute top-2 right-2 w-6 h-6 rounded bg-black/40 backdrop-blur-sm flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>
    </div>

    {/* Body */}
    <div className="flex-1 flex flex-col p-3 gap-2 bg-card">
      <h3 className="text-sm font-medium text-foreground leading-snug line-clamp-3">
        {tweet.title}
      </h3>
      <div className="mt-auto flex items-center justify-between pt-1">
        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground font-mono">
          <ExternalLink className="w-3 h-3" />
          <span>x.com</span>
        </div>
        <span className="text-[10px] font-mono text-muted-foreground/70 uppercase tracking-wider">
          {tweet.date}
        </span>
      </div>
    </div>
  </a>
);

const TweetsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }, []);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
  };

  const startAuto = useCallback(() => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 340, behavior: "smooth" });
      }
    }, 4000);
  }, []);

  useEffect(() => {
    startAuto();
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [startAuto]);

  const pause = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
  };

  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-mono text-xs tracking-widest uppercase text-primary">
            Featured Tweets
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="p-1.5 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="p-1.5 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onMouseEnter={pause}
        onMouseLeave={startAuto}
      >
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 overflow-x-auto px-[max(1.5rem,calc((100%-48rem)/2+1.5rem))] snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tweets.map((t) => (
            <TweetCard key={t.id} tweet={t} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TweetsSection;
