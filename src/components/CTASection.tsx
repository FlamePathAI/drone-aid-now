import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Deploy Intelligence at the Edge?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            We're running live pilots during the 2026 Manitoba fire season. If you're a 
            fire agency, forestry operation, or pipeline operator in Western Canada, we 
            want to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="group"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Phone className="mr-2 h-4 w-4" />
              Contact the Team
            </Button>
          </div>

          {/* Traction Indicators */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-sm mb-4">Real Traction. Before We've Launched.</p>
            <div className="flex flex-wrap justify-center gap-4 text-primary-foreground/80 text-sm">
              <span className="px-3 py-1 rounded-full border border-primary-foreground/20">30+ Fire Chief Interviews</span>
              <span className="px-3 py-1 rounded-full border border-primary-foreground/20">$30K Mitacs</span>
              <span className="px-3 py-1 rounded-full border border-primary-foreground/20">$10K North Forge</span>
              <span className="px-3 py-1 rounded-full border border-primary-foreground/20">1517 Bursary</span>
              <span className="px-3 py-1 rounded-full border border-primary-foreground/20">Falling Walls Audience Award</span>
              <span className="px-3 py-1 rounded-full border border-primary-foreground/20">University of Manitoba Research Partnership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
