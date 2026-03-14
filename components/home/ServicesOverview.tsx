import { Link } from "react-router-dom";
import { Brain, Workflow, Mic, Cog, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const services = [
  {
    icon: Brain,
    title: "AI Consulting",
    description: "Strategic guidance for implementing intelligent systems that align with your business objectives.",
  },
  {
    icon: Workflow,
    title: "Automation Solutions",
    description: "End-to-end workflow automation that eliminates bottlenecks and scales operations effortlessly.",
  },
  {
    icon: Mic,
    title: "Voice Agents",
    description:
      "Intelligent voice agents that make and answer calls, handle inquiries, and execute tasks around the clock.",
  },
  {
    icon: Cog,
    title: "Process Re-engineering",
    description: "Transform existing workflows into autonomous systems that operate with precision.",
  },
];

export const ServicesOverview = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Intelligent Systems That Execute</h2>
          <p className="text-muted-foreground text-lg">
            Agents that think, act, and deliver outcomes. No wait times, no dropped calls, no manual bottlenecks.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 150}>
              <div className="group relative h-full bg-card rounded-xl p-8 border border-border hover:border-copper/40 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-navy/20 hover:-translate-y-2 cursor-pointer">
                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-copper/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-start gap-5">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-copper group-hover:scale-110 group-hover:rotate-3 transition-all duration-400 ease-out">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={500} className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:text-copper font-semibold group transition-colors duration-300">
            <span className="link-underline">View All Services</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};
