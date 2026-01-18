import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Disaster Response?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Join emergency management agencies and first responders who trust 
            SkyAware to deliver critical intelligence when lives are on the line.
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
              Contact Sales
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-sm mb-4">Trusted by leading agencies</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              <span className="text-primary-foreground font-semibold">FEMA</span>
              <span className="text-primary-foreground font-semibold">CAL FIRE</span>
              <span className="text-primary-foreground font-semibold">US Coast Guard</span>
              <span className="text-primary-foreground font-semibold">NOAA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
