import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Hero = () => {
  return <section className="relative min-h-[60vh] bg-background overflow-hidden flex flex-col items-center justify-center py-16 px-4">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl text-center relative z-10">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 opacity-0 animate-fade-up text-foreground">
          Operational{" "}
          <span className="bg-gradient-to-r from-primary to-copper bg-clip-text text-transparent">Autonomy</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6 opacity-0 animate-fade-up stagger-1">AI agents that execute, answer, and operate—24/7</p>

        {/* Description */}
        <p className="text-lg text-muted-foreground/70 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up stagger-2">
          Vantheos delivers always-on AI agents that autonomously execute business operations—from answering calls to handling workflows—so work gets done without waiting on people.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up stagger-3">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold shadow-xl shadow-navy/20 hover:shadow-2xl hover:shadow-navy/30 hover:-translate-y-1 transition-all duration-300">
            <a href="https://calendly.com/andre-mattera/discovery-automation-and-increased-profit" target="_blank" rel="noopener noreferrer">
              Book a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild size="lg" className="bg-navy text-white hover:bg-navy/90 px-8 py-6 text-base font-semibold shadow-lg shadow-navy/20 hover:shadow-2xl hover:shadow-navy/30 hover:-translate-y-1 transition-all duration-300">
            <a href="/services">
              Explore Services
            </a>
          </Button>
        </div>
      </div>
      
      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-copper/50 to-transparent" />
      </div>
    </section>;
};