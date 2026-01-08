import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import digitalTransform from '@/assets/digital-transform.jpg';
import strategyImage from '@/assets/strategy.jpg';
import operationsImage from '@/assets/operations.jpg';

const services = [
  {
    id: 1,
    category: 'DIGITAL TRANSFORMATION',
    title: 'Technology that drives competitive advantage',
    image: digitalTransform,
    link: '#',
  },
  {
    id: 2,
    category: 'STRATEGY & GROWTH',
    title: 'Building resilient organizations for uncertain times',
    image: strategyImage,
    link: '#',
  },
  {
    id: 3,
    category: 'OPERATIONS EXCELLENCE',
    title: 'Operational transformation at scale',
    image: operationsImage,
    link: '#',
  },
];

export const ServicesGrid = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden shadow-elegant hover:shadow-glow cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary tracking-wider">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-serif font-semibold text-foreground mt-2 mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <a 
                    href={service.link}
                    className="inline-flex items-center text-sm text-muted-foreground group-hover:text-primary transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
