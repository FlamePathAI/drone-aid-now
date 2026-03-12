import { Card, CardContent } from "@/components/ui/card";
import { WifiOff, FileOutput, TrendingUp, ShieldCheck, Cpu, Zap } from "lucide-react";

const features = [
  {
    icon: WifiOff,
    title: "Offline-First Architecture",
    description: "All processing happens on-device. No cell tower. No cloud round-trip. No latency. FlamePath works where connectivity fails — which is exactly where disasters happen.",
  },
  {
    icon: FileOutput,
    title: "Vector Output, Not Raw Video",
    description: "We compress 10 gigabytes of thermal data into a 10-kilobyte vector file — fire perimeter, escape route, containment line — transmitted instantly over low-bandwidth radio.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Fire Intelligence",
    description: "Commanders don't need to see where the fire is. They need to know where it will be in 10 minutes. FlamePath's Edge AI delivers predictive vectors, not historical pixels.",
  },
  {
    icon: ShieldCheck,
    title: "Canadian Data Sovereignty",
    description: "All inference runs on-device. Your data never touches a foreign cloud. For Canadian federal contracts, this isn't a feature — it's a legal requirement our US competitors cannot meet.",
  },
  {
    icon: Cpu,
    title: "Hardware-Agnostic Platform",
    description: "Built to run on NVIDIA Jetson hardware integrated with DJI drone platforms. Designed from day one to be hardware-agnostic as the platform scales.",
  },
  {
    icon: Zap,
    title: "Instant Field Deployment",
    description: "No specialist required. The FlamePath interface is designed for the incident commander in the field — one screen, one directive, under pressure.",
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
            Purpose-built for the reality of remote Canadian operations — where the 
            cloud doesn't exist and decisions can't wait.
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
