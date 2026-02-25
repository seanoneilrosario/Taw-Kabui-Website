import { Heart, HandHeart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, value: "500+", label: "Children Served" },
  { icon: HandHeart, value: "50+", label: "Volunteers" },
  { icon: Heart, value: "8+", label: "Years of Impact" },
];

const DonateSection = () => {
  return (
    <section id="donate" className="py-24 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-foreground/20" />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
          Make a Difference Today
        </h2>
        <p className="text-primary-foreground/85 text-lg max-w-2xl mx-auto mb-12">
          Your donation helps us provide essential services, therapy, and education
          to children and youth with disabilities. Every contribution matters.
        </p>

        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-2xl font-heading font-bold text-primary-foreground">{stat.value}</p>
              <p className="text-primary-foreground/70 text-xs font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <Button variant="donate" size="xl" className="animate-pulse-warm">
          <Heart className="w-5 h-5 mr-2" />
          Donate Now
        </Button>
      </div>
    </section>
  );
};

export default DonateSection;
