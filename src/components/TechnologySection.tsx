import { Badge } from "@/components/ui/badge";
import { Cpu, Wifi, Battery, Map } from "lucide-react";

const techSpecs = [
  {
    icon: Cpu,
    label: "Edge Processing",
    value: "NVIDIA Jetson",
    description: "GPU-accelerated inference",
  },
  {
    icon: Wifi,
    label: "Communication",
    value: "4G/5G + Mesh",
    description: "Redundant connectivity",
  },
  {
    icon: Battery,
    label: "Flight Time",
    value: "45+ Minutes",
    description: "Extended operations",
  },
  {
    icon: Map,
    label: "Coverage",
    value: "10km Range",
    description: "Per drone radius",
  },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Technology</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              Purpose-Built for Disaster Response
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-8">
              Our proprietary edge AI stack combines custom hardware with advanced 
              neural networks optimized for disaster scenarios. Every component is 
              designed for reliability when conventional systems fail.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="mt-1 border-primary/50 text-primary">01</Badge>
                <div>
                  <h4 className="font-semibold mb-1">Custom Vision Models</h4>
                  <p className="text-secondary-foreground/70 text-sm">
                    Neural networks trained on millions of disaster imagery samples for 
                    unparalleled accuracy in smoke, debris, and survivor detection.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="mt-1 border-primary/50 text-primary">02</Badge>
                <div>
                  <h4 className="font-semibold mb-1">Distributed Intelligence</h4>
                  <p className="text-secondary-foreground/70 text-sm">
                    Each drone shares insights with the fleet, creating a collective 
                    intelligence that adapts to evolving situations in real-time.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="mt-1 border-primary/50 text-primary">03</Badge>
                <div>
                  <h4 className="font-semibold mb-1">Rugged Hardware</h4>
                  <p className="text-secondary-foreground/70 text-sm">
                    IP67-rated drones withstand extreme temperatures, rain, and 
                    smoke conditions that would ground commercial alternatives.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Specs Grid */}
          <div className="grid grid-cols-2 gap-4">
            {techSpecs.map((spec, index) => (
              <div 
                key={index}
                className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-xl p-6 hover:bg-secondary-foreground/10 transition-colors"
              >
                <spec.icon className="w-8 h-8 text-primary mb-4" />
                <div className="text-2xl font-bold mb-1">{spec.value}</div>
                <div className="text-sm font-medium text-secondary-foreground/70">{spec.label}</div>
                <div className="text-xs text-secondary-foreground/50 mt-1">{spec.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
