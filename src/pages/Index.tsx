import TopNav from "@/components/TopNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import TweetsSection from "@/components/TweetsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SocialProofSection from "@/components/SocialProofSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <TweetsSection />
      <ProjectsSection />
      <SocialProofSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
