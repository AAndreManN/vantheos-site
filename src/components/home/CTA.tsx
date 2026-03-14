import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { homeContent } from "@/content/pages/home";

export const CTA = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <div className="relative bg-gradient-to-br from-primary via-primary to-primary-light rounded-3xl p-12 md:p-16 text-center overflow-hidden group">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }}
              />
            </div>
            
            {/* Glow effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-white/20 blur-[100px] rounded-full group-hover:bg-white/30 transition-all duration-700" />
            
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 2s infinite'
            }} />
            
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                {homeContent.cta.title}
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                {homeContent.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-base font-semibold shadow-xl shadow-navy/20 hover:shadow-2xl hover:shadow-navy/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <a
                    href={homeContent.cta.primaryButton.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {homeContent.cta.primaryButton.label}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-navy text-white hover:bg-navy/90 px-8 py-6 text-base hover:-translate-y-1 transition-all duration-300"
                >
                  <a href={homeContent.cta.secondaryButton.href}>
                    {homeContent.cta.secondaryButton.label}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
