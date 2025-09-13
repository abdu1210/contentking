import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Users, Heart, Trophy, Coffee, Globe } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Volunteer opportunities",
    description: "At Content King, we show up for our communities. That's why every full-time employee gets 16 hours of volunteer time each year."
  },
  {
    icon: Users,
    title: "Content King Cares",
    description: "Every March is Content King Cares Month, where we pledge our time and energy to the causes that matter most to us."
  },
  {
    icon: Coffee,
    title: "Gatherings",
    description: "We're globally distributed, but that doesn't stop us from getting together in person for happy hours and organized outings."
  },
  {
    icon: Trophy,
    title: "Giving back",
    description: "We support many organizations, including Partnerships for Children, St. Jude's Children's Research Hospital, Pledge 1% and more."
  },
  {
    icon: Globe,
    title: "Our commitment to diversity",
    description: "We don't just recognize diversity. We celebrate unique perspectives and take pride in fostering a safe and inclusive environment."
  }
];

const testimonials = [
  {
    name: "Nabarupa Chatterjee",
    role: "Manager Corporate Strategy and Growth",
    quote: "I came for the role, stayed for the people—and I feel lucky to be part of something that's constantly evolving and growing."
  },
  {
    name: "Jess Gomez",
    role: "Sr Project Manager",
    quote: "Honestly, working at Content King feels less like 'work' and more like building something awesome with friends who just happen to be super good at what they do."
  },
  {
    name: "Christine Masters",
    role: "Senior Product Manager",
    quote: "Every day I team up with the world's biggest brands to work on tomorrow's toughest tech problems. That's why I love Content King."
  },
  {
    name: "Victor Monsch",
    role: "Sr. Sales Engineer",
    quote: "Constant innovation means we're often stepping into new territory. What makes this journey exciting is having the entire company supporting you."
  }
];

const departments = [
  { name: "Engineering", openings: 12, icon: "💻" },
  { name: "Product", openings: 8, icon: "🎯" },
  { name: "Sales", openings: 15, icon: "💼" },
  { name: "Marketing", openings: 6, icon: "📢" },
  { name: "Customer Success", openings: 9, icon: "🤝" },
  { name: "Operations", openings: 4, icon: "⚙️" }
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join the Content King team
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
            We are a globally distributed team of innovators with offices in Austin, Texas, and Mumbai, India. 
            We are looking for driven and talented people to join us, no matter where you live, to experience 
            the best work of your career.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            View Open Positions
          </Button>
        </div>
      </section>

      {/* What we're about */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What we're about</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Become part of an incredible team where colleagues are friends and customers are fans. 
              We combine the spirit of a startup with the gravitas of an established business and 
              experienced leadership team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Life at Content King</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Content King is an award-winning business, recognized by leading analysts and endorsed by Fortune 500 companies. 
                Join us as we continue to innovate and shape the future of digital experiences.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Austin, Texas
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Mumbai, India
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Remote Worldwide
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-secondary rounded-lg p-8">
              <h4 className="text-xl font-semibold mb-4">Join our mission</h4>
              <p className="text-muted-foreground mb-6">
                Help us build the technology that powers the world's best digital experiences. 
                We're looking for passionate individuals ready to make an impact.
              </p>
              <Button variant="hero">
                Explore Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Benefits & Culture</h2>
            <p className="text-xl text-muted-foreground">
              More than just a job - join a tribe that cares
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why you should work with us</h2>
            <p className="text-xl text-muted-foreground">
              Hear from our team members about their experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardContent className="pt-6">
                  <blockquote className="text-lg italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <span className="text-sm font-bold text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground">
              Find your next career opportunity across our teams
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {departments.map((dept, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="text-4xl mb-4">{dept.icon}</div>
                  <CardTitle className="text-xl">{dept.name}</CardTitle>
                  <CardDescription className="text-lg">
                    <Badge variant="secondary" className="text-sm">
                      {dept.openings} open positions
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    View Openings
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="hero">
              See All Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to build the future with us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join a tribe of innovators, dreamers, and changemakers. Experience the best work of your career 
            while building technology that powers the world's best digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Learn More About Culture
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;