import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SocialProofSection from "@/components/SocialProofSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <div className="w-24 h-px bg-primary/20 mx-auto" />
      <AboutSection />
      <div className="w-24 h-px bg-primary/20 mx-auto" />
      <ExperienceSection />
      <div className="w-24 h-px bg-primary/20 mx-auto" />
      <ProjectsSection />
      <div className="w-24 h-px bg-primary/20 mx-auto" />
      <SocialProofSection />
      <div className="w-24 h-px bg-primary/20 mx-auto" />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
