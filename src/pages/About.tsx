import { ArrowRight, Target, Eye, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { siteCtas } from "@/content/site";
import { aboutPageContent } from "@/content/pages/about";

const valueIcons = {
  target: Target,
  eye: Eye,
  sparkles: Sparkles,
} as const;
const About = () => {
  return (
    <Layout>
      {/* Hero Section - Light */}
      <section className="relative bg-background overflow-hidden flex flex-col items-center justify-center py-16 px-4 min-h-[40vh]">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-3xl text-center relative z-10">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-up stagger-1 text-foreground">
            {aboutPageContent.hero.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-primary to-copper bg-clip-text text-transparent">{aboutPageContent.hero.titleHighlight}</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6 opacity-0 animate-fade-up stagger-2">
            {aboutPageContent.hero.paragraphOne}
          </p>
          <p className="text-muted-foreground/70 leading-relaxed opacity-0 animate-fade-up stagger-3 max-w-2xl mx-auto">
            {aboutPageContent.hero.paragraphTwo}
          </p>
        </div>

        {/* Bottom divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-px bg-gradient-to-r from-transparent via-copper/50 to-transparent" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">{aboutPageContent.mission.eyebrow}</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-8">{aboutPageContent.mission.title}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {aboutPageContent.mission.description}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">{aboutPageContent.valuesSection.eyebrow}</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">{aboutPageContent.valuesSection.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aboutPageContent.valuesSection.values.map((value) => {
              const Icon = valueIcons[value.iconKey];
              return (
                <div
                  key={value.title}
                  className="text-center p-8 bg-card rounded-2xl border border-border/50 hover:border-copper/30 transition-all duration-300 hover:shadow-lg hover:shadow-navy/15 group"
                >
                  <div className="inline-flex p-4 bg-primary/10 rounded-xl mb-6 group-hover:bg-copper/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-copper transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding navy-section relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        </div>

        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-copper font-semibold tracking-wide uppercase text-sm mb-4">{aboutPageContent.approach.eyebrow}</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">{aboutPageContent.approach.title}</h2>
              <p className="text-xl text-white/70 mb-6">
                {aboutPageContent.approach.paragraphOne}
              </p>
              <p className="text-white/50 leading-relaxed mb-8">
                {aboutPageContent.approach.paragraphTwo}
              </p>
              <Button asChild size="lg" className="bg-white text-navy hover:bg-white/90">
                <a
                  href={siteCtas.workWithUs.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteCtas.workWithUs.label}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="space-y-6">
              {aboutPageContent.approach.quotes.map((quote) => (
                <div key={quote} className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                  <p className="text-white/90 italic text-lg">{quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="relative bg-gradient-to-br from-primary via-primary to-primary-light rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                {aboutPageContent.ctaSection.title}
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                {aboutPageContent.ctaSection.description}
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-base font-semibold shadow-xl shadow-navy/20"
              >
                <a href={aboutPageContent.ctaSection.buttonHref}>
                  {aboutPageContent.ctaSection.buttonLabel}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default About;
