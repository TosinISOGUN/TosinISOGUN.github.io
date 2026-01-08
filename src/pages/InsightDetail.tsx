import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Calendar, 
  Share2, 
  Linkedin, 
  Twitter,
  Facebook,
  Link as LinkIcon
} from 'lucide-react';
import { contentApi, Article } from '@/lib/content';
import { useToast } from '@/hooks/use-toast';


const InsightDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;
      
      setLoading(true);
      const data = await contentApi.getArticleBySlug(slug);
      
      if (!data) {
        navigate('/insights', { replace: true });
        return;
      }
      
      setArticle(data);
      
      // Fetch related articles
      const allArticles = await contentApi.getArticles();
      const related = allArticles
        .filter(a => a.slug !== slug && a.category === data.category)
        .slice(0, 3);
      setRelatedArticles(related);
      
      setLoading(false);
    };

    fetchArticle();
  }, [slug, navigate]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = article?.title || '';
    
    let shareUrl = '';
    
    switch (platform) {
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast({
          title: "Link copied!",
          description: "Article link has been copied to clipboard.",
        });
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background font-sans">
        <Navigation />
        <main className="pt-32 pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse">
              <div className="h-8 bg-secondary rounded w-32 mb-4" />
              <div className="h-12 bg-secondary rounded w-3/4 mb-4" />
              <div className="h-6 bg-secondary rounded w-1/2 mb-8" />
              <div className="h-96 bg-secondary rounded mb-8" />
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="h-4 bg-secondary rounded w-full" />
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!article) return null;

  const canonicalUrl = `${window.location.origin}/insights/${article.slug}`;

  return (
    <div className="min-h-screen bg-background font-sans">
      <Helmet>
        <title>{article.title} | B-PLAN Consulting Insights</title>
        <meta name="description" content={article.excerpt} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={article.date} />
        <meta property="article:author" content={article.author} />
        <meta property="article:section" content={article.category} />
        {article.tags.map((tag, i) => (
          <meta key={i} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
        <meta name="twitter:image" content={article.image} />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": article.excerpt,
            "image": article.image,
            "author": {
              "@type": "Person",
              "name": article.author,
              "jobTitle": article.authorRole,
            },
            "publisher": {
              "@type": "Organization",
              "name": "B-PLAN Consulting",
              "logo": {
                "@type": "ImageObject",
                "url": `${window.location.origin}/favicon.svg`
              }
            },
            "datePublished": article.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": canonicalUrl
            }
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-8 bg-gradient-hero">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/insights" 
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Insights
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-primary text-primary-foreground">{article.type}</Badge>
              <Badge variant="outline">{article.category}</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-fade-in">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
              {article.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-3">
                <img 
                  src={article.authorImage} 
                  alt={article.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-foreground font-medium">{article.author}</p>
                  <p className="text-xs">{article.authorRole}</p>
                </div>
              </div>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_200px] gap-12">
              {/* Main Content */}
              <article className="prose prose-invert prose-lg max-w-none">
                <div 
                  className="article-content"
                  dangerouslySetInnerHTML={{ 
                    __html: article.content
                      .replace(/^## (.+)$/gm, '<h2 class="text-3xl font-serif font-bold text-foreground mt-12 mb-6">$1</h2>')
                      .replace(/^### (.+)$/gm, '<h3 class="text-2xl font-serif font-semibold text-foreground mt-8 mb-4">$1</h3>')
                      .replace(/^\*\*(.+?)\*\*$/gm, '<p class="text-foreground font-semibold">$1</p>')
                      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                      .replace(/\*(.+?)\*/g, '<em>$1</em>')
                      .replace(/^- (.+)$/gm, '<li class="text-muted-foreground ml-4">$1</li>')
                      .replace(/^(\d+)\. (.+)$/gm, '<li class="text-muted-foreground ml-4">$2</li>')
                      .replace(/\n\n/g, '</p><p class="text-muted-foreground mb-4">')
                  }}
                />
              </article>

              {/* Sidebar - Share & Tags */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-8">
                  {/* Share */}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Share2 className="h-4 w-4" />
                      Share
                    </h3>
                    <div className="flex flex-col gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleShare('linkedin')}
                        className="justify-start"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleShare('twitter')}
                        className="justify-start"
                      >
                        <Twitter className="h-4 w-4 mr-2" />
                        Twitter
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleShare('facebook')}
                        className="justify-start"
                      >
                        <Facebook className="h-4 w-4 mr-2" />
                        Facebook
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleShare('copy')}
                        className="justify-start"
                      >
                        <LinkIcon className="h-4 w-4 mr-2" />
                        Copy Link
                      </Button>
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            {/* Mobile Share */}
            <div className="lg:hidden mt-12 pt-8 border-t border-border">
              <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share this article
              </h3>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={() => handleShare('linkedin')}>
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleShare('twitter')}>
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleShare('facebook')}>
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleShare('copy')}>
                  <LinkIcon className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-foreground mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Related Insights</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map((related) => (
                  <Card 
                    key={related.id}
                    className="group bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={related.image} 
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <Badge className="absolute top-4 left-4 bg-background/80 text-foreground">
                          {related.type}
                        </Badge>
                      </div>
                      <div className="p-6">
                        <Badge variant="outline" className="mb-3">{related.category}</Badge>
                        <h3 className="text-lg font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          <Link to={`/insights/${related.slug}`}>{related.title}</Link>
                        </h3>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{related.readTime}</span>
                          <span>{related.date}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how B-PLAN Consulting can help you achieve your strategic objectives.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default InsightDetail;
