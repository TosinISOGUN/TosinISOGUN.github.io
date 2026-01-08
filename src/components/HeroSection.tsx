import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-consulting.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional consulting team collaboration" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
            What's your next{' '}
            <span className="text-primary">strategic move?</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Transformative strategies. Operational excellence. Data-driven results. 
            At B-PLAN, we partner with you to unlock unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
              Explore Our Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
