import heroImage from "@/assets/hero-children.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={heroImage}
                alt="Children learning together in an inclusive classroom"
                className="w-full h-80 object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-accent flex items-center justify-center shadow-soft">
              <span className="text-accent-foreground font-heading font-bold text-sm text-center leading-tight">
                Since<br />2006
              </span>
            </div>
          </div>

          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
              Taw-Kabui For A Child, Inc.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              TAW-KABUI FOR A CHILD, INC is a non-governmental organization (NGO),
              registered with the Securities and Exchange Commission (SEC) and licensed
              and accredited by the Department of Social Welfare and Development (DSWD)
              since 2016.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We serve children and youth with disabilities, based in Barangay San Jose,
              Puerto Princesa City, Palawan. We operate programs and services both
              center and community-based, and advocate for systematic change in the life
              of children and youth with disabilities through a rights-based approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
