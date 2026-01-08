import { useEffect, useState } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Clients Served', description: 'Across 40+ countries' },
  { value: 95, suffix: '%', label: 'Client Satisfaction', description: 'Average rating' },
  { value: 15, suffix: 'B+', label: 'Value Created', description: 'In client outcomes' },
  { value: 25, suffix: '+', label: 'Years Experience', description: 'Industry leadership' },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-5xl md:text-6xl font-serif font-bold text-primary">
      {count}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Driving Impact at Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself. We partner with leading organizations to deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <h3 className="text-lg font-semibold text-foreground mt-4 mb-1">
                {stat.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
