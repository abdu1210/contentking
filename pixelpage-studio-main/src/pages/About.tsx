import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Shield, Users, Lightbulb, Search, Sparkles } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "A Connected Tribe",
    description: "We're more than colleagues. We're a tribe."
  },
  {
    icon: Heart,
    title: "Grounded in Care",
    description: "We care deeply about each other, our customers and our communities."
  },
  {
    icon: Shield,
    title: "Anchored in Integrity",
    description: "We do the right thing even when nobody's watching."
  },
  {
    icon: Lightbulb,
    title: "Agents of Change",
    description: "We're dreamers and dreammakers, agents of change who challenge the status quo."
  },
  {
    icon: Search,
    title: "Fiercely Curious",
    description: "We're curious trendspotters and brave trendsetters."
  },
  {
    icon: Sparkles,
    title: "Diverse & Inclusive",
    description: "Diverse voices. Shared purpose. Lasting impact."
  }
];

const teamMembers = [
  { name: "Neha Sampat", role: "CEO", department: "Leadership" },
  { name: "Nishant Patel", role: "CTO", department: "Technology" },
  { name: "Josette Leslie", role: "CFO", department: "Finance" },
  { name: "Todd Rathje", role: "CRO", department: "Revenue" },
  { name: "Gurdeep Dhillon", role: "CMO", department: "Marketing" },
  { name: "Conor Egan", role: "SVP, Product", department: "Product" }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            One team, one dream
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Together at Content King, we're redefining what's possible in the digital space. 
            Join us and do the best work of your career.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            Current Openings
          </Button>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Future driven. Human first.</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our customers are building the future, and we're building the technology to get them there. 
              We pioneered headless content management and continue to innovate through bold and interesting 
              work for the world's biggest brands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  Driven by innovation and grounded in care, we enable the world's best brands to reimagine possible.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  The world's best digital experiences run on Content King.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Meet the experienced leaders driving our vision forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="h-24 w-24 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-lg">{member.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">We live our values</h2>
            <p className="text-xl text-muted-foreground">
              How we show up for our communities and each other
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Volunteer opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  At Content King, we show up for our communities. That's why every full-time employee gets 16 hours of volunteer time each year.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Content King Cares</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every March is Content King Cares Month, where we pledge our time and energy to the causes that matter most to us.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Gatherings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're globally distributed, but that doesn't stop us from getting together in person for happy hours and organized outings.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Giving back</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We support a number of organizations, including Partnerships for Children, St. Jude's Children's Research Hospital, Pledge 1% and more.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Our commitment to diversity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We don't just recognize diversity. We celebrate unique perspectives and take pride in fostering a safe and inclusive environment.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Global presence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're proudly founder-led and globally distributed, with offices in Austin, Texas and Mumbai, India.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join our mission
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Be part of a team that's building the future of digital experiences. 
            Explore career opportunities and find your place in our tribe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              View Open Positions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;