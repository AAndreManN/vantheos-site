import { ArrowRight, Target, Eye, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "We build systems that execute with accuracy. No guesswork, no approximations—only precise, reliable outcomes.",
  },
  {
    icon: Eye,
    title: "Autonomy",
    description:
      "Our solutions operate independently, understanding context and taking action without constant supervision.",
  },
  {
    icon: Sparkles,
    title: "Intelligence",
    description: "We leverage cutting-edge AI to create systems that adapt, learn, and continuously improve.",
  },
];
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
            Building the Future of <span className="bg-gradient-to-r from-primary to-copper bg-clip-text text-transparent">Autonomous Operations</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6 opacity-0 animate-fade-up stagger-2">
            Vantheos creates autonomous operations built around intelligent agents that act, execute, and follow
            through.
          </p>
          <p className="text-muted-foreground/70 leading-relaxed opacity-0 animate-fade-up stagger-3 max-w-2xl mx-auto">
            Designed for real-world business needs—like making and answering calls, coordinating workflows, and handling
            tasks around the clock—Vantheos replaces wait times, dropped calls, and manual bottlenecks with continuous,
            reliable, hands-off execution.
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
            <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">Our Mission</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Operational Autonomy for Every Business</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe businesses deserve systems that work as hard as they do—around the clock, without pause. Our
              mission is to deliver intelligent agents that transform how organizations operate, freeing teams to focus
              on what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">Our Values</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">Principles That Guide Us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 bg-card rounded-2xl border border-border/50 hover:border-copper/30 transition-all duration-300 hover:shadow-lg hover:shadow-navy/15 group"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-xl mb-6 group-hover:bg-copper/20 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-primary group-hover:text-copper transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
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
              <p className="text-copper font-semibold tracking-wide uppercase text-sm mb-4">Our Approach</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">Systems, Not Scripts</h2>
              <p className="text-xl text-white/70 mb-6">
                Unlike chatbots or one-off automations, Vantheos agents operate independently, understand context, and
                take action.
              </p>
              <p className="text-white/50 leading-relaxed mb-8">
                We speak like systems, not marketing. We prefer strong verbs: process, orchestrate, execute, verify,
                adapt, interpret. This approach reflects in everything we build—direct, declarative, precise.
              </p>
              <Button asChild size="lg" className="bg-white text-navy hover:bg-white/90">
                <a
                  href="https://calendly.com/andre-mattera/discovery-automation-and-increased-profit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                <p className="text-white/90 italic text-lg">"Autonomous systems that execute with precision."</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                <p className="text-white/90 italic text-lg">"Operational intelligence for real-world workflows."</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                <p className="text-white/90 italic text-lg">"Agents that think, act, and deliver outcomes."</p>
              </div>
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
                Let's Build Something Intelligent
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Ready to explore how autonomous operations can transform your business?
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-base font-semibold shadow-xl shadow-navy/20"
              >
                <a href="/contact">
                  Get in Touch
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
