import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { 
  Lightbulb, 
  TrendingUp, 
  Cog, 
  Users, 
  Shield, 
  Rocket,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'strategy',
    icon: Lightbulb,
    title: 'Strategy Consulting',
    subtitle: 'Shape your competitive advantage',
    description: 'We help organizations define winning strategies that drive sustainable growth and market leadership.',
    capabilities: [
      'Corporate strategy development',
      'Growth strategy and market expansion',
      'Competitive positioning',
      'Strategic planning and execution',
      'Portfolio optimization',
      'Strategic due diligence',
    ],
    outcomes: '40% average revenue growth for strategy clients',
  },
  {
    id: 'digital',
    icon: Rocket,
    title: 'Digital Transformation',
    subtitle: 'Embrace the digital future',
    description: 'Transform your business with cutting-edge digital solutions that enhance customer experience and operational efficiency.',
    capabilities: [
      'Digital strategy and roadmap',
      'Technology modernization',
      'Data and analytics transformation',
      'AI and machine learning integration',
      'Cloud migration strategy',
      'Digital product development',
    ],
    outcomes: '60% improvement in digital maturity scores',
  },
  {
    id: 'operations',
    icon: Cog,
    title: 'Operations Excellence',
    subtitle: 'Optimize for peak performance',
    description: 'Streamline operations, reduce costs, and improve efficiency across your entire value chain.',
    capabilities: [
      'Supply chain optimization',
      'Process redesign and automation',
      'Lean operations implementation',
      'Quality management systems',
      'Cost transformation',
      'Operational due diligence',
    ],
    outcomes: '25% average cost reduction achieved',
  },
  {
    id: 'organization',
    icon: Users,
    title: 'Organization & People',
    subtitle: 'Build high-performing teams',
    description: 'Transform your organization structure, culture, and talent to drive business performance.',
    capabilities: [
      'Organization design',
      'Change management',
      'Leadership development',
      'Talent strategy',
      'Culture transformation',
      'HR transformation',
    ],
    outcomes: '35% improvement in employee engagement',
  },
  {
    id: 'risk',
    icon: Shield,
    title: 'Risk & Compliance',
    subtitle: 'Navigate complexity with confidence',
    description: 'Identify, assess, and mitigate risks while ensuring regulatory compliance across your operations.',
    capabilities: [
      'Enterprise risk management',
      'Regulatory compliance',
      'Cybersecurity strategy',
      'Business continuity planning',
      'Internal audit optimization',
      'ESG and sustainability',
    ],
    outcomes: '50% reduction in compliance incidents',
  },
  {
    id: 'implementation',
    icon: TrendingUp,
    title: 'Implementation & Transformation',
    subtitle: 'Turn strategy into results',
    description: 'We don\'t just advise—we work alongside you to implement solutions and drive lasting change.',
    capabilities: [
      'Program management',
      'Transformation office setup',
      'Performance management',
      'Capability building',
      'Interim management',
      'Post-merger integration',
    ],
    outcomes: '90% of transformations achieve target outcomes',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-24 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 animate-fade-in">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '150ms' }}>
                Comprehensive consulting solutions to address your most critical business challenges 
                and unlock new opportunities for growth.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={service.id}
                    id={service.id}
                    className="bg-card border-border overflow-hidden"
                  >
                    <CardContent className="p-0">
                      <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                          <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-lg">
                              <Icon className="h-8 w-8 text-primary" />
                            </div>
                            <div>
                              <h2 className="text-3xl font-serif font-bold text-foreground">
                                {service.title}
                              </h2>
                              <p className="text-primary font-medium">{service.subtitle}</p>
                            </div>
                          </div>
                          <p className="text-lg text-muted-foreground mb-6">
                            {service.description}
                          </p>
                          <div className="bg-primary/10 p-4 rounded-lg mb-6">
                            <p className="text-primary font-semibold">{service.outcomes}</p>
                          </div>
                          <Button asChild className="group">
                            <Link to="/contact">
                              Discuss Your Needs
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </div>
                        <div className={`bg-secondary/50 p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                          <h3 className="text-xl font-semibold text-foreground mb-6">
                            Our Capabilities
                          </h3>
                          <ul className="space-y-3">
                            {service.capabilities.map((capability, capIndex) => (
                              <li key={capIndex} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{capability}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-24 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                Our Approach
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that delivers results
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Diagnose', desc: 'Deep analysis of your current state and challenges' },
                { step: '02', title: 'Design', desc: 'Develop tailored solutions aligned with your goals' },
                { step: '03', title: 'Deliver', desc: 'Implement with precision and measurable outcomes' },
                { step: '04', title: 'Sustain', desc: 'Build capabilities for lasting impact' },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl font-serif font-bold text-primary/20 mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.desc}</p>
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

export default Services;
