import monarchPfp from "@/assets/monarch-pfp.jpg";

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-border/60">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={monarchPfp} alt="Mønarch" className="w-8 h-8 rounded-full object-cover ring-1 ring-primary/40" />
          <div>
            <p className="text-sm font-semibold text-gradient-ember">Mønarch © 2026</p>
            <p className="text-xs text-muted-foreground">Building Web3 through research, education, and community.</p>
          </div>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Open to collaborations
        </p>
      </div>
    </footer>
  );
};

export default Footer;
