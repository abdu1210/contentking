import { useState, useEffect } from "react";

const stats = [
  {
    number: "50B+",
    label: "API Requests Served",
    description: "Handling massive scale with reliability"
  },
  {
    number: "150+",
    label: "Countries Served",
    description: "Global reach with local performance"
  },
  {
    number: "99.99%",
    label: "API Uptime",
    description: "Enterprise-grade reliability you can trust"
  },
  {
    number: "24/7",
    label: "Expert Support",
    description: "Always here when you need us most"
  }
];

const Stats = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState([0, 0, 0, 0]);
  const targetNumbers = [50, 150, 99.99, 24];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedNumbers(prev => 
        prev.map((current, index) => {
          const target = targetNumbers[index];
          const increment = target / 50;
          return current < target ? Math.min(current + increment, target) : target;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Teams Worldwide
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of companies already using Content King to power their digital experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                {index === 0 ? `${Math.floor(animatedNumbers[index])}B+` :
                 index === 1 ? `${Math.floor(animatedNumbers[index])}+` :
                 index === 2 ? `${animatedNumbers[index].toFixed(2)}%` :
                 `${Math.floor(animatedNumbers[index])}/7`}
              </div>
              <div className="text-xl font-semibold mb-2 text-white/90">
                {stat.label}
              </div>
              <div className="text-white/70">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;