import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Database, Users, Code, Brain, Server, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Features = () => {
  const coreProducts = [
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Headless Content Management",
      description: "API-first content management that's flexible, scalable, and native to the cloud.",
      features: ["Visual Builder", "Timeline Management", "Modular Blocks", "Workflows"]
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Real-time Data and Insights",
      description: "Unify customer data from multiple sources with real-time activation and insights.",
      features: ["Identity Resolution", "Advanced Segmentation", "Predictive Analytics", "Data Unification"]
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Omnichannel Personalization",
      description: "Deliver personalized experiences across every channel and touchpoint.",
      features: ["Dynamic Content", "A/B Testing", "Audience Targeting", "Real-time Optimization"]
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Agents & Automations",
      description: "Intelligent agents that combine reasoning, context, and tools to accelerate work.",
      features: ["Workflow Automation", "Content Generation", "Smart Routing", "Task Intelligence"]
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Front-end Hosting",
      description: "Fully integrated, automated, MACH-compliant hosting that works for you.",
      features: ["Instant Deployments", "Global CDN", "Edge Functions", "Auto Scaling"]
    }
  ];

  const roles = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Developer & IT",
      description: "API-first architecture with developer-friendly tools and extensive documentation",
      benefits: ["GraphQL & REST APIs", "SDK Support", "Headless Architecture", "DevOps Integration"]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Business Users",
      description: "Intuitive interface for content creators and marketers to work efficiently",
      benefits: ["Visual Editor", "Collaboration Tools", "Content Scheduling", "Preview & Publish"]
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Digital Leaders",
      description: "Strategic insights and governance tools for enterprise-scale content operations",
      benefits: ["Analytics Dashboard", "Performance Metrics", "ROI Tracking", "Compliance Tools"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Powerful Features for
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Modern Content Teams
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Everything you need to create, manage, and deliver content across any platform with unmatched speed and flexibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero-outline" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="ghost" size="lg" className="text-white border-white/20 hover:bg-white/10">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Core Products</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Everything you need in one platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our integrated suite of tools empowers teams to work faster, smarter, and more efficiently than ever before.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {coreProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4">
                    {product.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Built for Everyone</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Designed for every role on your team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're a developer, content creator, or digital leader, our platform adapts to your workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <Card key={index} className="text-center group hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {role.icon}
                  </div>
                  <CardTitle className="text-xl">{role.title}</CardTitle>
                  <CardDescription className="text-base">
                    {role.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {role.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center justify-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why teams choose Content King
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">80%</div>
              <div className="text-muted-foreground">Faster content publishing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">90%</div>
              <div className="text-muted-foreground">Faster time to publish</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50%</div>
              <div className="text-muted-foreground">Reduction in development costs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-muted-foreground">Platform uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to transform your content workflow?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of teams who have already made the switch to faster, more flexible content management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-outline" size="lg">
              Start Free Trial
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-white/20 hover:bg-white/10">
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;