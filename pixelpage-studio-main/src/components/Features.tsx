import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Globe, Code, Users, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Deliver content at blazing speeds with our global CDN and optimized API endpoints."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance, encryption at rest, and advanced access controls."
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Built for global deployment with multi-region support and automatic scaling."
  },
  {
    icon: Code,
    title: "Developer First",
    description: "Rich APIs, webhooks, and SDKs for every major platform and programming language."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Advanced workflows, approval processes, and role-based permissions for seamless teamwork."
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Deep insights into content performance with built-in analytics and custom reporting."
  }
];

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section id="features" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create, manage, and deliver exceptional digital experiences 
            at enterprise scale.
          </p>
        </div>
        
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-300 hover:scale-105 border-0 shadow-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;