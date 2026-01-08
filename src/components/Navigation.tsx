import { useState } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

const servicesDropdown = [
  { label: 'Strategy Consulting', href: '/services#strategy' },
  { label: 'Digital Transformation', href: '/services#digital' },
  { label: 'Operations Excellence', href: '/services#operations' },
  { label: 'Organization & People', href: '/services#organization' },
  { label: 'Risk & Compliance', href: '/services#risk' },
  { label: 'View All Services', href: '/services' },
];

const industriesDropdown = [
  { label: 'Financial Services', href: '/industries#financial-services' },
  { label: 'Healthcare', href: '/industries#healthcare' },
  { label: 'Technology', href: '/industries#technology' },
  { label: 'Retail & Consumer', href: '/industries#retail' },
  { label: 'Energy & Utilities', href: '/industries#energy' },
  { label: 'View All Industries', href: '/industries' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold text-foreground hover:text-primary transition-colors">
              B-PLAN
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`flex items-center gap-1 text-sm ${isActive('/services') ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors`}>
                  Services
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {servicesDropdown.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link to={item.href} className="cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Industries Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`flex items-center gap-1 text-sm ${isActive('/industries') ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors`}>
                  Industries
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {industriesDropdown.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link to={item.href} className="cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              to="/insights" 
              className={`text-sm ${isActive('/insights') ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors`}
            >
              Insights
            </Link>
            <Link 
              to="/about" 
              className={`text-sm ${isActive('/about') ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors`}
            >
              About
            </Link>
            <Link 
              to="/careers" 
              className={`text-sm ${isActive('/careers') ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors`}
            >
              Careers
            </Link>
            
            {/* Search */}
            <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                  <Search className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>Search</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <Input 
                    placeholder="Search insights, services, industries..." 
                    className="bg-secondary/50"
                    autoFocus
                  />
                  <p className="text-sm text-muted-foreground mt-4">
                    Try searching for "digital transformation", "strategy", or "healthcare"
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            <Button asChild size="sm">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              <div className="border-b border-border pb-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Services</p>
                {servicesDropdown.slice(0, 5).map((item) => (
                  <Link 
                    key={item.href}
                    to={item.href}
                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="border-b border-border pb-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Industries</p>
                {industriesDropdown.slice(0, 5).map((item) => (
                  <Link 
                    key={item.href}
                    to={item.href}
                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link 
                to="/insights" 
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Insights
              </Link>
              <Link 
                to="/about" 
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/careers" 
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              <Button asChild size="sm" className="w-full">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
