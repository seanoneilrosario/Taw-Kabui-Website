import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/banner.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/30" />

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Children with disabilities learning and playing together"
          className="w-full h-full object-cover object-center opacity-20"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <p className="text-primary-foreground/80 font-medium text-lg mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          A non-stock, non-government organization
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-900 text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          We Touch Heaven,
          <br />
          <span className="text-accent">We Change Lives.</span>
        </h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          Catering to the needs of children and youth with disabilities through
          love, empowerment, and community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          <Button onClick={() => scrollTo("donate")} variant="donate" size="xl" className="animate-pulse-warm">
            <Heart className="w-5 h-5 mr-2" />
            Donate Now
          </Button>
          <Button onClick={() => scrollTo("about")} variant="heroOutline" size="xl">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
