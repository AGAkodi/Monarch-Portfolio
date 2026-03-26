import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const tweetIds = [
  "1890334802605146363",
  "1884287724343156815",
  "1955402450887905342",
  "1912648084145705134",
  "1867478847610138641",
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

const TweetEmbed = ({ id, delay }: { id: string; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderTweet = () => {
      if (ref.current && window.twttr) {
        ref.current.innerHTML = "";
        window.twttr.widgets.createTweet(id, ref.current, {
          theme: "dark",
          conversation: "none",
          dnt: "true",
        });
      }
    };

    if (window.twttr) {
      renderTweet();
    } else {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = renderTweet;
      document.head.appendChild(script);
    }
  }, [id]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="[&_iframe]:!rounded-lg [&_.twitter-tweet]:!m-0"
    >
      <div ref={ref} className="min-h-[200px]" />
    </motion.div>
  );
};

const TweetsSection = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-xs tracking-widest uppercase text-primary mb-12">
          Featured Tweets
        </h2>
        <div className="grid gap-4">
          {tweetIds.map((id, i) => (
            <TweetEmbed key={id} id={id} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TweetsSection;
