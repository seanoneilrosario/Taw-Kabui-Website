import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionSection from "@/components/VisionSection";
import ProgramsSection from "@/components/ProgramsSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {

  useEffect(() => {
  const id = sessionStorage.getItem("scrollTo");

  if (id) {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });

      sessionStorage.removeItem("scrollTo");
    }, 100);
  }
}, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <ProgramsSection />
      <Footer />
    </div>
  );
};

export default Index;
