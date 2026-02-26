import monarchPfp from "@/assets/monarch-pfp.jpg";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <img src={monarchPfp} alt="Mønarch" className="w-8 h-8 rounded-full mx-auto mb-3 object-cover" />
        <p className="text-gradient-gold font-semibold text-lg mb-1">Mønarch © 2026</p>
        <p className="text-muted-foreground text-sm">
          Building Web3 Through Research, Education, and Community Growth.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
