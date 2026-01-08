import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Briefcase, Users } from 'lucide-react';

const insights = [
  {
    id: 1,
    type: 'CASE STUDY',
    icon: Briefcase,
    title: 'How digital transformation drove 40% revenue growth for a global manufacturer',
    link: '#',
  },
  {
    id: 2,
    type: 'ARTICLE',
    icon: TrendingUp,
    title: 'The future of business: Five trends shaping 2025',
    link: '#',
  },
  {
    id: 3,
    type: 'RESEARCH',
    icon: Users,
    title: 'Leadership in the age of disruption: A comprehensive study',
    link: '#',
  },
];

export const InsightsSection = () => {
  return (
    <section id="insights" className="py-24 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Stay ahead with our thought leadership on the trends reshaping business today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <Card 
                key={insight.id}
                className="group bg-secondary/50 border-border hover:border-primary/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-glow"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-semibold text-primary tracking-wider">
                      {insight.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {insight.title}
                  </h3>
                  <a 
                    href={insight.link}
                    className="inline-flex items-center text-sm text-muted-foreground group-hover:text-primary transition-colors"
                  >
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
