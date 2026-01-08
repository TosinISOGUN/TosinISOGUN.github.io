import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { 
  Building2, 
  Heart, 
  Cpu, 
  ShoppingBag, 
  Zap, 
  Factory,
  ArrowRight 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const industries = [
  {
    id: 'financial-services',
    icon: Building2,
    title: 'Financial Services',
    description: 'Helping banks, insurers, and asset managers navigate digital disruption, regulatory change, and evolving customer expectations.',
    insights: [
      'Digital banking transformation',
      'Risk management modernization',
      'Customer experience optimization',
      'Regulatory compliance strategies',
    ],
    stats: '150+ financial institutions served',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
  },
  {
    id: 'healthcare',
    icon: Heart,
    title: 'Healthcare & Life Sciences',
    description: 'Transforming healthcare delivery, accelerating innovation, and improving patient outcomes through data-driven strategies.',
    insights: [
      'Healthcare delivery transformation',
      'Digital health innovation',
      'Pharmaceutical R&D optimization',
      'Value-based care models',
    ],
    stats: '80+ healthcare organizations transformed',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop',
  },
  {
    id: 'technology',
    icon: Cpu,
    title: 'Technology & Telecom',
    description: 'Enabling tech companies to scale, innovate, and capture market opportunities in a rapidly evolving landscape.',
    insights: [
      'Product strategy and innovation',
      'Go-to-market optimization',
      'Platform business models',
      'M&A strategy and integration',
    ],
    stats: '200+ tech companies advised',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
  },
  {
    id: 'retail',
    icon: ShoppingBag,
    title: 'Retail & Consumer',
    description: 'Helping retailers and consumer brands thrive in the omnichannel era with customer-centric strategies.',
    insights: [
      'Omnichannel transformation',
      'Supply chain optimization',
      'Customer analytics and personalization',
      'Brand strategy and positioning',
    ],
    stats: '120+ retail transformations',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
  },
  {
    id: 'energy',
    icon: Zap,
    title: 'Energy & Utilities',
    description: 'Supporting the energy transition and helping utilities adapt to new technologies and market dynamics.',
    insights: [
      'Energy transition strategy',
      'Grid modernization',
      'Sustainability transformation',
      'Operational efficiency',
    ],
    stats: '60+ energy sector engagements',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop',
  },
  {
    id: 'manufacturing',
    icon: Factory,
    title: 'Industrial & Manufacturing',
    description: 'Driving Industry 4.0 adoption and operational excellence in manufacturing and industrial sectors.',
    insights: [
      'Smart manufacturing implementation',
      'Supply chain resilience',
      'Operational transformation',
      'Sustainability initiatives',
    ],
    stats: '90+ industrial clients',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=600&fit=crop',
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-24 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 animate-fade-in">
                Industries <span className="text-primary">We Serve</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '150ms' }}>
                Deep sector expertise combined with functional excellence to deliver 
                tailored solutions for your industry's unique challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <Card 
                    key={industry.id}
                    className="group bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={industry.image} 
                          alt={industry.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                        <div className="absolute bottom-4 left-4 flex items-center gap-3">
                          <div className="p-2 bg-primary rounded-lg">
                            <Icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <h2 className="text-2xl font-serif font-bold text-foreground">
                            {industry.title}
                          </h2>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-muted-foreground mb-4">
                          {industry.description}
                        </p>
                        <div className="mb-4">
                          <h3 className="text-sm font-semibold text-foreground mb-2">Key Focus Areas:</h3>
                          <ul className="grid grid-cols-2 gap-2">
                            {industry.insights.map((insight, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                {insight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <span className="text-sm text-primary font-semibold">{industry.stats}</span>
                          <Link 
                            to="/contact"
                            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            Learn more
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cross-Industry Expertise */}
        <section className="py-24 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                Cross-Industry Expertise
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We bring insights from across sectors to help you learn from the best
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Cross-Sector Innovation', 
                  desc: 'Apply best practices from leading industries to your unique challenges' 
                },
                { 
                  title: 'Global Perspectives', 
                  desc: 'Leverage insights from our work across 40+ countries' 
                },
                { 
                  title: 'Industry Networks', 
                  desc: 'Access our extensive network of industry experts and partners' 
                },
              ].map((item, index) => (
                <div key={index} className="text-center p-8 bg-card rounded-lg border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
