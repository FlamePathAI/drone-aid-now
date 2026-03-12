import { Badge } from "@/components/ui/badge";
import { Cpu, Radio, Plane, FileOutput } from "lucide-react";

const techSpecs = [
  {
    icon: Cpu,
    label: "Edge Processing",
    value: "NVIDIA Jetson",
    description: "GPU-accelerated on-device inference",
  },
  {
    icon: Radio,
    label: "Transmission",
    value: "Low-BW Radio",
    description: "Vectors over mesh — no internet required",
  },
  {
    icon: Plane,
    label: "Hardware",
    value: "DJI Platform",
    description: "Integration-ready, field-tested hardware",
  },
  {
    icon: FileOutput,
    label: "Output Size",
    value: "10KB",
    description: "vs. 10GB raw thermal video",
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
              Purpose-Built for Where the Cloud Fails
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-8">
              FlamePath's Edge AI stack runs entirely on-device — transforming raw 
              thermal sensor data into lightweight tactical vectors without a single 
              cloud dependency.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="mt-1 border-primary/50 text-primary">01</Badge>
                <div>
                  <h4 className="font-semibold mb-1">Edge Inference Pipeline</h4>
                  <p className="text-secondary-foreground/70 text-sm">
                    Our proprietary model runs on NVIDIA Jetson hardware, processing raw 
                    thermal data through a custom-trained fire detection neural network. 
                    Output: a 10KB vector file, not a video stream.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="mt-1 border-primary/50 text-primary">02</Badge>
                <div>
                  <h4 className="font-semibold mb-1">RRC Partnership & Training Data</h4>
                  <p className="text-secondary-foreground/70 text-sm">
                    We are partnering with Red River College to clean and label thermal 
                    fire datasets — building the training foundation that makes our model 
                    more accurate with every deployment.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="mt-1 border-primary/50 text-primary">03</Badge>
                <div>
                  <h4 className="font-semibold mb-1">Offline-First by Design</h4>
                  <p className="text-secondary-foreground/70 text-sm">
                    No fallback to the cloud. No "offline mode." FlamePath was designed 
                    from line one to operate without connectivity — because in disaster 
                    zones, that assumption kills.
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
