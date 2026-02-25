import { Eye, Target, Star } from "lucide-react";

const cards = [
  {
    icon: Eye,
    title: "Vision",
    text: "Empower families and communities for the promotion, equalization of opportunities, and social inclusion of children and youth with disabilities into the mainstream of society.",
  },
  {
    icon: Target,
    title: "Mission",
    text: "To provide and implement capacity-building services to families, community volunteers, and stakeholders, and promote health, social, and educational rights of children and youth with disabilities.",
  },
  {
    icon: Star,
    title: "Goal",
    text: "Children and youth with disabilities enjoy to the fullest their human rights and privileges.",
  },
];

const VisionSection = () => {
  return (
    <section id="vision" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Purpose
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Our Vision for a Better Tomorrow
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
