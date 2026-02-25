import programArts from "@/assets/community-based.jpeg";
import programCommunity from "@/assets/program-arts.jpg";

const programs = [
  {
    image: programArts,
    title: "Community-Based Mobilization",
    description:
      "Empowering local communities for inclusive development through capacity building, health facilitation, and social enhancement.",
    tags: ["Capacity Building", "Health Referrals", "Social Enhancement"],
  },
  {
    image: programCommunity,
    title: "Center-Based Services",
    description:
      "Providing center-based developmental programs including therapy sessions, educational support, and life skills training.",
    tags: ["Therapy", "Education", "Life Skills"],
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Our Programs & Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {program.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  {program.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {program.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
