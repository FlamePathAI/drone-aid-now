import { Card, CardContent } from "@/components/ui/card";
import { Brain, Radio, Shield, Zap, Eye, Cloud } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Edge AI Processing",
    description: "On-device neural networks analyze imagery in real-time, eliminating latency and connectivity dependencies.",
  },
  {
    icon: Zap,
    title: "Instant Detection",
    description: "Identify survivors, hazards, and structural damage within milliseconds using advanced computer vision.",
  },
  {
    icon: Radio,
    title: "Mesh Networking",
    description: "Drones form autonomous mesh networks, ensuring continuous communication even when infrastructure fails.",
  },
  {
    icon: Eye,
    title: "Multi-Spectral Imaging",
    description: "Thermal, infrared, and visual sensors provide comprehensive situational awareness day or night.",
  },
  {
    icon: Shield,
    title: "Autonomous Operations",
    description: "Self-navigating drones operate safely in GPS-denied and hazardous environments.",
  },
  {
    icon: Cloud,
    title: "Command Integration",
    description: "Seamlessly integrate with existing emergency management systems and protocols.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Capabilities</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Intelligence When It Matters Most
          </h2>
          <p className="text-muted-foreground text-lg">
            Our edge AI platform delivers critical situational awareness capabilities 
            designed for the chaos of natural disaster response.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group border-border/50 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
