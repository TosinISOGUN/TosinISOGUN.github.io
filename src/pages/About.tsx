import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react';

const leadership = [
  {
    name: 'Alexandra Sui',
    role: 'Chief Executive Officer',
    bio: 'Former McKinsey partner with 20+ years driving transformation across Fortune 500 companies.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Marcus Williams',
    role: 'Chief Strategy Officer',
    bio: 'Strategy expert specializing in digital disruption and market expansion with BCG background.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Sarah Thompson',
    role: 'Managing Director, Operations',
    bio: 'Operations transformation leader with expertise in supply chain and operational excellence.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'David Park',
    role: 'Chief Technology Officer',
    bio: 'Technology visionary leading digital innovation and AI-driven business solutions.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
];

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We deliver exceptional results through rigorous analysis and innovative thinking.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We build lasting relationships through trust, transparency, and ethical practices.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work as true partners, embedding ourselves in our clients\' success.',
  },
  {
    icon: Globe,
    title: 'Impact',
    description: 'We create measurable value that transforms businesses and communities.',
  },
];

const timeline = [
  { year: '2000', event: 'B-PLAN Consulting founded with a vision to transform businesses' },
  { year: '2005', event: 'Expanded to international markets across Europe and Asia' },
  { year: '2010', event: 'Launched digital transformation practice' },
  { year: '2015', event: 'Reached 500+ successful client engagements' },
  { year: '2020', event: 'Pioneered AI-driven consulting methodologies' },
  { year: '2025', event: 'Celebrating 25 years of transformative impact' },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-24 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 animate-fade-in">
                About <span className="text-primary">B-PLAN</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '150ms' }}>
                For over two decades, we've partnered with the world's leading organizations 
                to tackle their most complex challenges and unlock transformative growth.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 bg-card rounded-lg border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  To empower organizations with strategic insights and operational excellence 
                  that drive sustainable competitive advantage and measurable business outcomes.
                </p>
              </div>
              <div className="p-8 bg-card rounded-lg border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  To be the trusted partner of choice for organizations seeking to navigate 
                  complexity, embrace innovation, and achieve lasting transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={index}
                    className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 text-center"
                  >
                    <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Leadership Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experienced leaders driving transformation across industries
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <div 
                  key={index}
                  className="group text-center"
                >
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{leader.name}</h3>
                  <p className="text-primary font-medium mb-2">{leader.role}</p>
                  <p className="text-sm text-muted-foreground">{leader.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Our Journey</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                25 years of transforming businesses worldwide
              </p>
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-card p-6 rounded-lg border border-border inline-block">
                        <span className="text-2xl font-serif font-bold text-primary">{item.year}</span>
                        <p className="text-muted-foreground mt-2">{item.event}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center w-4 h-4 bg-primary rounded-full relative z-10" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Recognition & Awards</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <Award className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Top Consulting Firm</p>
                    <p className="text-sm text-muted-foreground">Industry Award 202{index}</p>
                  </div>
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

export default About;
