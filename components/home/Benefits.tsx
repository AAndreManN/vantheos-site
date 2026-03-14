import { Clock, Zap, Shield, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const benefits = [
  {
    icon: Clock,
    stat: "24/7",
    title: "Always-On Operations",
    description: "Systems that never sleep, stall, or miss a beat.",
  },
  {
    icon: Zap,
    stat: "10x",
    title: "Faster Execution",
    description: "Replace wait times with continuous, reliable execution.",
  },
  {
    icon: Shield,
    stat: "99.9%",
    title: "Autonomous Reliability",
    description: "Agents that understand context and take action independently.",
  },
  {
    icon: TrendingUp,
    stat: "∞",
    title: "Scalable Growth",
    description: "Operations that expand without proportional headcount increase.",
  },
];

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
            Why Vantheos
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            True Operational Autonomy
          </h2>
          <p className="text-navy-foreground/60 text-lg">
            Unlike chatbots or one-off automations, Vantheos agents operate independently, understand context, and follow through.
          </p>
        </AnimatedSection>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedSection 
              key={benefit.title} 
              delay={index * 100}
              className="text-center group"
            >
              <div className="inline-flex p-4 bg-white/5 rounded-2xl mb-5 group-hover:bg-copper/20 group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-8 h-8 text-copper-light group-hover:text-copper transition-colors duration-300" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-copper-light to-copper bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                {benefit.stat}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h3>
              <p className="text-navy-foreground/60 text-sm">{benefit.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
