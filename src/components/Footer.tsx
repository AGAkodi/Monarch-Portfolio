import { Crown } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <Crown className="w-6 h-6 text-primary mx-auto mb-4" />
        <p className="text-gradient-gold font-semibold text-lg mb-2">Mønarch © 2026</p>
        <p className="text-muted-foreground text-sm">
          Building Web3 Through Research, Education, and Community Growth.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
