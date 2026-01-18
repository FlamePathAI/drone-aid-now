import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import floodResponse from "@/assets/flood-response.jpg";
import thermalWildfire from "@/assets/thermal-wildfire.jpg";
import earthquakeResponse from "@/assets/earthquake-response.jpg";

const useCases = [
  {
    image: thermalWildfire,
    title: "Wildfire Detection & Monitoring",
    description: "Thermal imaging drones detect hotspots before they become infernos. Real-time fire perimeter mapping guides firefighter deployment and evacuation routes.",
    stats: ["Early detection", "Perimeter tracking", "Crew safety"],
  },
  {
    image: floodResponse,
    title: "Flood Response & Rescue",
    description: "Deploy fleets within minutes to locate stranded survivors, assess infrastructure damage, and coordinate rescue operations across vast flooded areas.",
    stats: ["Survivor detection", "Route planning", "Damage assessment"],
  },
  {
    image: earthquakeResponse,
    title: "Earthquake Search & Rescue",
    description: "Navigate collapsed structures and debris fields to detect signs of life. Create 3D damage maps to prioritize rescue efforts and identify hazards.",
    stats: ["Life detection", "3D mapping", "Hazard identification"],
  },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Use Cases</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Mission-Critical Applications
          </h2>
          <p className="text-muted-foreground text-lg">
            From wildfires to earthquakes, our platform adapts to the unique 
            challenges of each disaster scenario.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-border/50 group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={useCase.image} 
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {useCase.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {useCase.stats.map((stat, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            Explore All Applications
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
