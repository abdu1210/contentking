import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-image.jpg";
import AnimatedCounter from "./AnimatedCounter";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <section className="relative min-h-[90vh] flex items-center bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Build Digital Experiences That 
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Scale Infinitely
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              The headless CMS that empowers teams to create, manage, and deliver content 
              across any platform with unmatched speed and flexibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero-outline" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="ghost" size="lg" className="text-white border-white/20 hover:bg-white/10">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <div className={`mt-12 grid grid-cols-3 gap-8 text-center transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div>
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={99.9} decimals={1} suffix="%" />
                </div>
                <div className="text-white/70 text-sm">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={10} suffix="M+" />
                </div>
                <div className="text-white/70 text-sm">API Calls/Month</div>
              </div>
              <div>
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-white/70 text-sm">Companies</div>
              </div>
            </div>
          </div>
          <div className="lg:block hidden">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Content King Dashboard" 
                className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;