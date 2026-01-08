import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase, 
  MapPin, 
  GraduationCap, 
  Heart, 
  TrendingUp,
  Users,
  ArrowRight,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const openings = [
  {
    id: 1,
    title: 'Senior Strategy Consultant',
    department: 'Strategy',
    location: 'New York, NY',
    type: 'Full-time',
    level: 'Senior',
  },
  {
    id: 2,
    title: 'Digital Transformation Manager',
    department: 'Digital',
    location: 'London, UK',
    type: 'Full-time',
    level: 'Manager',
  },
  {
    id: 3,
    title: 'Associate Consultant',
    department: 'Operations',
    location: 'Singapore',
    type: 'Full-time',
    level: 'Associate',
  },
  {
    id: 4,
    title: 'Data Scientist',
    department: 'Analytics',
    location: 'New York, NY',
    type: 'Full-time',
    level: 'Senior',
  },
  {
    id: 5,
    title: 'Business Analyst Intern',
    department: 'Strategy',
    location: 'Multiple Locations',
    type: 'Internship',
    level: 'Entry',
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Clear progression paths and mentorship from industry leaders',
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    description: 'Continuous learning opportunities and professional certifications',
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health benefits and wellness programs',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'Work with talented professionals in a supportive environment',
  },
];

const values = [
  'Intellectual curiosity',
  'Collaborative spirit',
  'Client-first mindset',
  'Drive for excellence',
  'Integrity and ethics',
  'Diverse perspectives',
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-24 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 animate-fade-in">
                Build Your <span className="text-primary">Career</span> With Us
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '150ms' }}>
                Join a team of exceptional consultants solving the world's most complex 
                business challenges. Your growth is our priority.
              </p>
              <div className="mt-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="#openings">
                    View Open Positions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Why Join B-PLAN?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We invest in our people because they are the foundation of our success
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="bg-card border-border text-center">
                    <CardContent className="p-6">
                      <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* What We Look For */}
        <section className="py-24 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                  What We Look For
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We seek talented individuals who share our commitment to excellence 
                  and are passionate about making a meaningful impact for our clients.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="rounded-lg shadow-elegant"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="openings" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Open Positions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore current opportunities across our global offices
              </p>
            </div>
            <div className="space-y-4">
              {openings.map((job) => (
                <Card 
                  key={job.id}
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                          <Badge variant="outline">{job.level}</Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <Button asChild>
                        <Link to="/contact">
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Life at B-PLAN */}
        <section className="py-24 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Life at B-PLAN</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A glimpse into our culture and community
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop',
              ].map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg aspect-square">
                  <img 
                    src={image} 
                    alt="Life at B-PLAN"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
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

export default Careers;
