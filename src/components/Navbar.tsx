import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <img src={logo} className="w-[80px] h-fit" alt="taw-kabui" width="200" height="100" />
          <span className="text-xl font-heading font-bold text-foreground">
            Taw-Kabui
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("about")} className="text-muted-foreground hover:text-foreground font-medium transition-colors">
            About Us
          </button>
          <button onClick={() => scrollTo("programs")} className="text-muted-foreground hover:text-foreground font-medium transition-colors">
            Programs
          </button>
          <button onClick={() => scrollTo("vision")} className="text-muted-foreground hover:text-foreground font-medium transition-colors">
            Our Vision
          </button>
          <Button onClick={() => scrollTo("donate")} variant="donate" size="lg">
            <Heart className="w-4 h-4 mr-2" />
            Donate Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border px-6 py-4 space-y-3 animate-fade-in">
          <button onClick={() => scrollTo("about")} className="block w-full text-left text-muted-foreground hover:text-foreground font-medium">
            About Us
          </button>
          <button onClick={() => scrollTo("programs")} className="block w-full text-left text-muted-foreground hover:text-foreground font-medium">
            Programs
          </button>
          <button onClick={() => scrollTo("vision")} className="block w-full text-left text-muted-foreground hover:text-foreground font-medium">
            Our Vision
          </button>
          <Button onClick={() => scrollTo("donate")} variant="donate" className="w-full">
            <Heart className="w-4 h-4 mr-2" />
            Donate Now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
