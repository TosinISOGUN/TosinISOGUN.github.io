import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NewsletterForm } from '@/components/NewsletterForm';

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b border-border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                Stay Ahead of the Curve
              </h3>
              <p className="text-muted-foreground">
                Subscribe to our newsletter for the latest insights, trends, and thought leadership.
              </p>
            </div>
            <div>
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4 hover:text-primary transition-colors">
                B-PLAN
              </h3>
            </Link>
            <p className="text-muted-foreground text-sm mb-4 max-w-sm">
              Strategic consulting for transformative growth. We partner with leading organizations 
              to tackle their most complex challenges.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-background/50 rounded-lg text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-background/50 rounded-lg text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:contact@bplan-consulting.com" className="p-2 bg-background/50 rounded-lg text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services#strategy" className="text-muted-foreground hover:text-primary transition-colors">
                  Strategy Consulting
                </Link>
              </li>
              <li>
                <Link to="/services#digital" className="text-muted-foreground hover:text-primary transition-colors">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link to="/services#operations" className="text-muted-foreground hover:text-primary transition-colors">
                  Operations Excellence
                </Link>
              </li>
              <li>
                <Link to="/services#organization" className="text-muted-foreground hover:text-primary transition-colors">
                  Organization & People
                </Link>
              </li>
              <li>
                <Link to="/services#risk" className="text-muted-foreground hover:text-primary transition-colors">
                  Risk & Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/about#leadership" className="text-muted-foreground hover:text-primary transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/insights" className="text-muted-foreground hover:text-primary transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-muted-foreground hover:text-primary transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/insights?category=case-study" className="text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/insights?category=research" className="text-muted-foreground hover:text-primary transition-colors">
                  Research
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 B-PLAN Consulting. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
