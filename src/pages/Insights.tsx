import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, ArrowRight, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles, categories } from '@/lib/content';

const Insights = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter(a => a.featured);
  const regularArticles = filteredArticles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 animate-fade-in">
                <span className="text-primary">Insights</span> & Research
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '150ms' }}>
                Explore our latest thinking on business strategy, digital transformation, 
                and the trends shaping the future of industries.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-background border-b border-border sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search insights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-secondary/50"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveCategory(category)}
                    className={activeCategory === category ? '' : 'bg-transparent'}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Featured</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <Card 
                    key={article.id}
                    className="group bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                          {article.type}
                        </Badge>
                      </div>
                      <div className="p-6">
                        <Badge variant="outline" className="mb-3">{article.category}</Badge>
                        <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          <Link to={`/insights/${article.slug}`}>{article.title}</Link>
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {article.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {article.readTime}
                            </span>
                          </div>
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Articles */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-8">All Insights</h2>
            {regularArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularArticles.map((article) => (
                  <Card 
                    key={article.id}
                    className="group bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <Badge className="absolute top-4 left-4 bg-background/80 text-foreground">
                          {article.type}
                        </Badge>
                      </div>
                      <div className="p-6">
                        <Badge variant="outline" className="mb-3">{article.category}</Badge>
                        <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          <Link to={`/insights/${article.slug}`}>{article.title}</Link>
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{article.readTime}</span>
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-24 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Stay Informed
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get our latest insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-secondary/50"
              />
              <Button className="bg-primary hover:bg-primary/90">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
