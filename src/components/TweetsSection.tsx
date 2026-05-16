import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import t1 from "@/assets/tweets/t1.jpg";
import t2 from "@/assets/tweets/t2.jpg";
import t3 from "@/assets/tweets/t3.jpg";
import t4 from "@/assets/tweets/t4.jpg";
import t5 from "@/assets/tweets/t5.jpg";
import t6 from "@/assets/tweets/t6.jpg";
import t7 from "@/assets/tweets/t7.jpg";

type Tweet = {
  id: string;
  url: string;
  handle: string;
  author: string;
  date: string;
  title: string;
  cover: string;
};

const tweets: Tweet[] = [
  {
    id: "2055203429400686979",
    url: "https://twitter.com/OxMonarch/status/2055203429400686979",
    handle: "@OxMonarch",
    author: "Mønarch",
    date: "May 15, 2026",
    title: "From Hype to Utility: The NFT Resurgence Story",
    cover: t1,
  },
  {
    id: "2049432332361248797",
    url: "https://twitter.com/OxMonarch/status/2049432332361248797",
    handle: "@OxMonarch",
    author: "Mønarch",
    date: "Apr 29, 2026",
    title:
      "The End of \u201CPrivate\u201D Messages: WhatsApp\u2019s Encryption Crisis and Why Wallet-to-Wallet Is the Future",
    cover: t2,
  },
  {
    id: "2019463352557457590",
    url: "https://twitter.com/ARMchain_pqc/status/2019463352557457590",
    handle: "@ARMchain_pqc",
    author: "ARMchain | Quantum-Secure",
    date: "Feb 2026",
    title:
      "HUGE congratulations to our top-performing Ambassadors — consistency, passion, and real commitment to the vision.",
    cover: t3,
  },
  {
    id: "1994929999867244652",
    url: "https://twitter.com/OxMonarch/status/1994929999867244652",
    handle: "@OxMonarch",
    author: "Mønarch",
    date: "Nov 2025",
    title:
      "Starting a 30-day DeFi learning series from scratch — no prior assumptions, just knowledge.",
    cover: t4,
  },
  {
    id: "1912648084145705134",
    url: "https://twitter.com/OxMonarch/status/1912648084145705134",
    handle: "@OxMonarch",
    author: "Mønarch",
    date: "Apr 2025",
    title:
      "Staking is the future of passive income in crypto — Anatoly Yakovenko. But what's the reality?",
    cover: t5,
  },
  {
    id: "1890334802605146363",
    url: "https://twitter.com/OxMonarch/status/1890334802605146363",
    handle: "@OxMonarch",
    author: "Mønarch",
    date: "Feb 14, 2025",
    title:
      "The TL was Real Busy — the @levva_fi × @OpenCustody Merger forming a powerful AI-driven DeFi ecosystem.",
    cover: t6,
  },
  {
    id: "1867478847610138641",
    url: "https://twitter.com/OxMonarch/status/1867478847610138641",
    handle: "@OxMonarch",
    author: "Mønarch",
    date: "Dec 2024",
    title:
      "I wasted this year's bull run and didn't even notice — a thread on Bitcoin dominance, altcoin season, and @dominationfi.",
    cover: t7,
  },
];

const TweetCard = ({ tweet }: { tweet: Tweet }) => (
  <a
    href={tweet.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex-shrink-0 w-[320px] flex flex-col rounded-2xl overflow-hidden surface-card hover:ring-ember transition-all snap-start"
  >
    <div className="relative h-[160px] overflow-hidden bg-muted">
      <img
        src={tweet.cover}
        alt={tweet.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
      />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-2 left-3 font-mono text-[10px] tracking-[0.25em] uppercase text-white/90">
        {tweet.handle}
      </div>
      <div className="absolute top-2 right-2 w-6 h-6 rounded bg-black/60 backdrop-blur-sm flex items-center justify-center">
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
    <section id="tweets" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary">/ Featured tweets</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Signal, not noise.</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
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
          className="flex gap-4 overflow-x-auto px-[max(1.5rem,calc((100%-72rem)/2+1.5rem))] snap-x snap-mandatory pb-4"
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
