import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, GraduationCap, Building2, Lightbulb } from "lucide-react";
import santiagoHeadshot from "@/assets/santiago-headshot.jpg";
import cobieHeadshot from "@/assets/cobie-headshot.jpg";
import Footer from "@/components/Footer";

const credentials = [
{ icon: Award, label: "Falling Walls Lab Manitoba — Audience Choice Award" },
{ icon: GraduationCap, label: "Mitacs Research Funding — $30,000 secured" },
{ icon: Building2, label: "North Forge Basecamp — Completed 2026" },
{ icon: Lightbulb, label: "1517 Fund Bursary — Selected" },
{ icon: GraduationCap, label: "University of Manitoba — Research Partnership" }];


const OurStory = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Why We Build</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mt-4 mb-6 leading-tight">
              Two founders. Two countries.
              <span className="block text-primary">One fire that changed everything.</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
              FlamePath was born from a simple, urgent truth: the people protecting our 
              forests are making life-or-death decisions with tools that were never built 
              for where they work.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Stories — 2 Column */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Santiago */}
            <div>
              

              
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2"> </h2>
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-6">The Long Watch</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Santiago grew up in Colombia watching forest fires tear through the landscape 
                  around him. He didn't have the tools to help then. So he spent years building 
                  the technical foundation that would eventually let him.
                </p>
                <p>
                  When he came to Canada to pursue his research at the University of Manitoba, 
                  he found the same problem wearing a different flag. Different forests. Different 
                  politics. Same broken system. Incident commanders flying blind. Crews making 
                  evacuation decisions on data that was 45 minutes old. Technology that assumed 
                  the cloud would always be there — even when the towers were burning.
                </p>
                <p className="text-foreground font-medium">
                  He started building FlamePath because the problem was solvable, and no one 
                  was solving it the right way.
                </p>
              </div>
            </div>

            {/* Cobie */}
            <div>
              

              
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Cobie Klein Damsel</h2>
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-6">The Search for Meaningful Work</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Cobie had spent years building operational competence across industries — good 
                  work, impactful in its own way. But he found himself increasingly restless, 
                  searching for a problem that actually mattered at scale.
                </p>
                <p>
                  Then the summer of 2025 happened.
                </p>
                <p>
                  Manitoba burned. The news wasn't just statistics — it was Winnipeg Fire 
                  Paramedic Service firefighters losing 17,600 hours to stress leave. It was 
                  a province overrunning its wildfire budget by $324 million. It was the moment 
                  Cobie realized that the operational expertise he'd spent years developing was 
                  needed somewhere specific: putting better intelligence in the hands of the 
                  people running toward the fire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Moment — Pull Quote */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <blockquote className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground leading-snug italic">
              "When the Manitoba fires hit in 2025, we both knew — separately — that we 
              had to do something. When we found each other, the question stopped being 
              <em className="not-italic underline decoration-primary-foreground/30 underline-offset-4">whether</em> and started being 
              <em className="not-italic underline decoration-primary-foreground/30 underline-offset-4">how fast.</em>"
            </p>
          </blockquote>
        </div>
      </section>

      {/* What We're Building */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">What We're Building</span>
            <div className="mt-6 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p className="text-foreground font-semibold text-xl">
                We are not a drone company. We are not a software company.
              </p>
              <p>
                We are the team that decided the 10-minute window at the start of a 
                wildfire — the window that determines whether a crew gets out safely — 
                was too important to leave to tools designed for a world with reliable internet.
              </p>
              <p>
                FlamePath moves the brain to the drone. Edge AI. Offline. Canadian. Built 
                for the reality of where disasters happen, not the comfort of where data 
                centers are.
              </p>
              <p>
                We're based in Winnipeg, Manitoba. We completed North Forge's Basecamp 
                program in early 2026, and we're flying our first live pilot during the 
                2026 fire season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Cards */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">The Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              The People Behind FlamePath
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Santiago Card */}
            <Card className="border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-primary/20">
                    <img src={santiagoHeadshot} alt="Santiago Góngora" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground">Santiago Villarreal</h3>
                    <p className="text-primary text-sm font-medium">CEO & CTO</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Mitacs-funded researcher. Full-stack AI engineer. Has been thinking about 
                  this problem since Colombia. Builds the core edge inference pipeline that 
                  makes FlamePath work without a cloud connection.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">University of Manitoba</span>
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Mitacs</span>
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">North Forge</span>
                </div>
              </CardContent>
            </Card>

            {/* Cobie Card */}
            <Card className="border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-primary/20">
                    <img src={cobieHeadshot} alt="Cobie" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground">Cobie [Last Name]</h3>
                    <p className="text-primary text-sm font-medium">COO</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Operations leader and B2G strategist. Understands the government procurement 
                  cycle that kills most startups before they get to field deployment. Makes sure 
                  the right technology gets to the right people.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">North Forge</span>
                </div>
              </CardContent>
            </Card>

            {/* Dr. Ken Ferens Card */}
            <Card className="border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-primary/20 bg-secondary flex items-center justify-center">
                    <span className="text-secondary-foreground font-bold text-lg">KF</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground">Dr. Ken Ferens</h3>
                    <p className="text-primary text-sm font-medium">ML Research Advisor</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Faculty at the University of Manitoba. Anchors FlamePath's machine learning 
                  development and connects the company to the academic infrastructure that 
                  accelerates model training.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">University of Manitoba</span>
                </div>
              </CardContent>
            </Card>

            {/* Coming Soon Advisor */}
            <Card className="border-border/50 border-dashed opacity-80">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-border bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground font-bold text-lg">?</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground">[Name TBD]</h3>
                    <p className="text-primary text-sm font-medium">Ex-Fire Chief Advisor</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  We're finalizing our field advisory relationship with a former Fire Chief. 
                  In this market, domain credibility isn't optional — it's the sales channel.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">Coming Soon</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Credential Bar */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            {credentials.map((cred, index) =>
            <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full border border-secondary-foreground/15 bg-secondary-foreground/5">
                <cred.icon className="w-4 h-4 text-primary" />
                <span className="text-secondary-foreground/80 text-sm font-medium">{cred.label}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            We're just getting started.
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Our first live pilot flies in August 2026. If you're a fire agency, forestry 
            operation, or government partner in Western Canada — let's talk.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="group"
            asChild>
            
            <a href="mailto:contact@flamepath.ca">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>);

};

export default OurStory;