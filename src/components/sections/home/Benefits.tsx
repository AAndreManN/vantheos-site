import { Clock, Zap, Shield, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { homeContent } from "@/content/pages/home";

const benefitIcons = {
  clock: Clock,
  zap: Zap,
  shield: Shield,
  trendingUp: TrendingUp,
} as const;

export const Benefits = () => {
  return (
    <section className="section-padding navy-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-copper font-semibold tracking-wide uppercase text-sm mb-4">
            {homeContent.benefits.eyebrow}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {homeContent.benefits.title}
          </h2>
          <p className="text-navy-foreground/60 text-lg">
            {homeContent.benefits.description}
          </p>
        </AnimatedSection>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {homeContent.benefits.items.map((benefit, index) => {
            const Icon = benefitIcons[benefit.iconKey];
            return (
            <AnimatedSection 
              key={benefit.title} 
              delay={index * 100}
              className="text-center group"
            >
              <div className="inline-flex p-4 bg-white/5 rounded-2xl mb-5 group-hover:bg-copper/20 group-hover:scale-110 transition-all duration-300">
                <Icon className="w-8 h-8 text-copper-light group-hover:text-copper transition-colors duration-300" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-copper-light to-copper bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                {benefit.stat}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h3>
              <p className="text-navy-foreground/60 text-sm">{benefit.description}</p>
            </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
