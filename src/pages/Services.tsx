import { ArrowRight, Brain, Workflow, Mic, Cog, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { siteCtas } from "@/content/site";
const services = [
  {
    icon: Brain,
    title: "AI Consulting",
    subtitle: "Strategic Intelligence Implementation",
    description:
      "We assess your operations, identify automation opportunities, and architect intelligent systems that align with your business objectives. Our consulting process delivers actionable roadmaps for AI adoption.",
    benefits: [
      "Comprehensive AI readiness assessment",
      "Custom implementation roadmap",
      "Technology stack recommendations",
      "ROI projections and success metrics",
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Workflow,
    title: "Automation Solutions",
    subtitle: "End-to-End Workflow Automation",
    description:
      "Transform manual processes into autonomous workflows. We design and deploy automation systems that eliminate bottlenecks, reduce errors, and scale operations without proportional headcount increases.",
    benefits: [
      "Process analysis and optimization",
      "Custom automation development",
      "Integration with existing systems",
      "Continuous monitoring and refinement",
    ],
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: Mic,
    title: "Voice Agents",
    subtitle: "Intelligent Voice Operations",
    description:
      "Deploy AI-powered voice agents that answer calls, handle inquiries, schedule appointments, and execute tasks around the clock. Replace dropped calls and wait times with reliable, always-on support.",
    benefits: [
      "24/7 call handling capability",
      "Natural language understanding",
      "Seamless handoff to human agents",
      "Multi-language support",
    ],
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Cog,
    title: "Process Re-engineering",
    subtitle: "Operational Transformation",
    description:
      "We analyze existing workflows and where appropriate, re-engineer them into autonomous systems that operate with precision. The result is leaner operations that adapt, execute, and deliver consistent outcomes.",
    benefits: [
      "Workflow analysis and mapping",
      "Bottleneck identification",
      "Autonomous system design",
      "Change management support",
    ],
    gradient: "from-orange-500/20 to-amber-500/20",
  },
];
const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-background overflow-hidden flex flex-col items-center justify-center py-16 px-4 min-h-[40vh]">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-3xl text-center relative z-10">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-up stagger-1 text-foreground">
            Intelligent Systems <span className="bg-gradient-to-r from-primary to-copper bg-clip-text text-transparent">That Execute</span>
          </h1>
          <p className="text-xl text-muted-foreground opacity-0 animate-fade-up stagger-2">
            From strategy to deployment, we deliver autonomous solutions that transform how your business operates.
          </p>
        </div>

        {/* Bottom divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-px bg-gradient-to-r from-transparent via-copper/50 to-transparent" />
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="container-wide space-y-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Content Side */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-6 transition-all duration-300 hover:bg-copper hover:scale-110 hover:rotate-3 group">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">{service.subtitle}</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">{service.description}</p>
                <ul className="space-y-4">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Side */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div
                  className={`aspect-square rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center relative overflow-hidden transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-navy/20 group`}
                >
                  {/* Pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                      backgroundSize: "30px 30px",
                    }}
                  />
                  <service.icon className="w-32 h-32 text-foreground/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding navy-section relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />
        </div>

        <div className="container-wide text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
            Let us show you how Vantheos can deliver operational autonomy for your business.
          </p>
          <Button asChild size="lg" className="bg-white text-navy hover:bg-white/90 px-8 py-6 text-base font-semibold">
            <a
              href={siteCtas.scheduleConsultation.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteCtas.scheduleConsultation.label}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};
export default Services;
