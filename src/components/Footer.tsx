import { Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-heading font-bold text-background">
                Taw-Kabui
              </span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              A non-stock, non-government organization catering to the needs of
              children and youth with disabilities.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-background mb-4">Contact</h4>
            <div className="space-y-3 text-background/60 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Barangay San Jose, Puerto Princesa City, Palawan</span>
              </div>
              <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0" />
                  <a href="tel:+63 953 2550950"><span>+63 953 2550950 (Globe)</span></a>
              </div>
              <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0" />
                  <a href="tel:+63 938 0966131"><span>+63 938 0966131 (Smart)</span></a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:tawkabui@yahoo.com.ph"><span>Tawkabui@yahoo.com.ph</span></a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:tawkabuiforachildinc@gmail.com"><span>Tawkabuiforachildinc@gmail.com</span></a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-background mb-4">Quick Links</h4>
            <div className="space-y-2 text-background/60 text-sm">
              <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="block hover:text-background transition-colors">
                About Us
              </button>
              <button onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })} className="block hover:text-background transition-colors">
                Programs
              </button>
              <button onClick={() => document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })} className="block hover:text-background transition-colors">
                Donate
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/40 text-sm">
          © {new Date().getFullYear()} Taw-Kabui For A Child, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
