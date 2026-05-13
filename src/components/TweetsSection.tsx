import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const tweetIds = [
  "1890334802605146363",
  "1994929999867244652",
  "1912648084145705134",
  "1867478847610138641",
  "2019463352557457590",
];

declare global {
  interface Window {
    twttr?: {
      widgets: {
        createTweet: (id: string, el: HTMLElement, options?: Record<string, string>) => Promise<HTMLElement>;
      };
    };
  }
}

const TweetEmbed = ({ id }: { id: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderTweet = () => {
      if (ref.current && window.twttr) {
        ref.current.innerHTML = "";
        window.twttr.widgets.createTweet(id, ref.current, {
          theme: "dark",
          conversation: "none",
          dnt: "true",
          width: "320",
        });
      }
    };

    if (window.twttr) {
      renderTweet();
    } else {
      const existing = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
      if (!existing) {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.onload = renderTweet;
        document.head.appendChild(script);
      } else {
        const check = setInterval(() => {
          if (window.twttr) {
            clearInterval(check);
            renderTweet();
          }
        }, 100);
      }
    }
  }, [id]);

  return (
    <div className="flex-shrink-0 w-[320px] max-h-[350px] overflow-hidden rounded-lg [&_iframe]:!rounded-lg [&_.twitter-tweet]:!m-0">
      <div ref={ref} className="min-h-[200px]" />
    </div>
  );
};

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

  // Auto-scroll
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        const el = scrollRef.current;
        if (!el) return;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          el.scrollBy({ left: 340, behavior: "smooth" });
        }
      }, 4000);
    };

    startAutoScroll();
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, []);

  // Pause auto-scroll on hover
  const pauseAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
  };
  const resumeAutoScroll = () => {
    pauseAutoScroll();
    autoScrollRef.current = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 340, behavior: "smooth" });
      }
    }, 4000);
  };

  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-mono text-xs tracking-widest uppercase text-primary">
            Featured Tweets
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="p-1.5 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
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
        onMouseEnter={pauseAutoScroll}
        onMouseLeave={resumeAutoScroll}
      >
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 overflow-x-auto px-[max(1.5rem,calc((100%-48rem)/2+1.5rem))] snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tweetIds.map((id) => (
            <div key={id} className="snap-start">
              <TweetEmbed id={id} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TweetsSection;
