import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, Send, Linkedin, Twitter } from 'lucide-react';

const offices = [
  {
    city: 'New York',
    address: '350 Fifth Avenue, Suite 7500',
    region: 'New York, NY 10118',
    phone: '+1 (212) 555-0100',
  },
  {
    city: 'London',
    address: '30 St Mary Axe',
    region: 'London EC3A 8BF, UK',
    phone: '+44 20 7123 4567',
  },
  {
    city: 'Singapore',
    address: 'Marina Bay Financial Centre',
    region: 'Singapore 018983',
    phone: '+65 6789 0123',
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24-48 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-24 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 animate-fade-in">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '150ms' }}>
                Ready to transform your business? Let's start a conversation about 
                how B-PLAN Consulting can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" required className="bg-secondary/50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" required className="bg-secondary/50" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Business Email *</Label>
                        <Input id="email" type="email" required className="bg-secondary/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company *</Label>
                        <Input id="company" required className="bg-secondary/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Job Title</Label>
                        <Input id="role" className="bg-secondary/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="interest">Area of Interest</Label>
                        <Select>
                          <SelectTrigger className="bg-secondary/50">
                            <SelectValue placeholder="Select a topic" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="strategy">Strategy Consulting</SelectItem>
                            <SelectItem value="digital">Digital Transformation</SelectItem>
                            <SelectItem value="operations">Operations Excellence</SelectItem>
                            <SelectItem value="organization">Organization & People</SelectItem>
                            <SelectItem value="risk">Risk & Compliance</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea 
                          id="message" 
                          required 
                          rows={4}
                          placeholder="Tell us about your challenges and how we can help..."
                          className="bg-secondary/50"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                
                {/* Quick Contact */}
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <a href="mailto:contact@bplan-consulting.com" className="text-muted-foreground hover:text-primary transition-colors">
                        contact@bplan-consulting.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <a href="tel:+12125550100" className="text-muted-foreground hover:text-primary transition-colors">
                        +1 (212) 555-0100
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM (EST)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mb-12">
                  <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="p-3 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="p-3 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* Office Locations */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6">Our Offices</h3>
                  <div className="space-y-6">
                    {offices.map((office, index) => (
                      <Card key={index} className="bg-secondary/30 border-border">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <MapPin className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">{office.city}</h4>
                              <p className="text-sm text-muted-foreground">{office.address}</p>
                              <p className="text-sm text-muted-foreground">{office.region}</p>
                              <p className="text-sm text-primary mt-1">{office.phone}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="h-96 bg-secondary/50 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Interactive map coming soon</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
