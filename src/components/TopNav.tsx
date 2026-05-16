import { useEffect, useState } from "react";
import monarchPfp from "@/assets/monarch-pfp.jpg";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Tweets", href: "#tweets" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const TopNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex items-center gap-1 sm:gap-2 rounded-full border border-border/80 px-2 py-2 transition-all duration-300 ${
          scrolled ? "bg-background/70 backdrop-blur-xl shadow-soft" : "bg-background/40 backdrop-blur-md"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 pl-1 pr-2">
          <img src={monarchPfp} alt="Mønarch" className="w-7 h-7 rounded-full object-cover ring-1 ring-primary/40" />
          <span className="hidden sm:inline font-semibold text-sm">Mønarch</span>
        </a>
        <div className="h-5 w-px bg-border mx-1 hidden sm:block" />
        <ul className="flex items-center">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-1.5 text-xs sm:text-sm text-muted-foreground hover:text-foreground rounded-full transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:talk2monarch77@gmail.com"
          className="ml-1 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-gradient-ember text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
};

export default TopNav;
