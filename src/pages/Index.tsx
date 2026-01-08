import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ServicesGrid } from '@/components/ServicesGrid';
import { StatsSection } from '@/components/StatsSection';
import { InsightsSection } from '@/components/InsightsSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>B-PLAN Consulting | Strategic Business Transformation</title>
        <meta name="description" content="B-PLAN Consulting delivers transformative strategies, operational excellence, and data-driven results. Partner with us to unlock unprecedented growth." />
        <meta name="keywords" content="business consulting, strategy consulting, digital transformation, management consulting" />
        <link rel="canonical" href="https://bplan-consulting.com" />
      </Helmet>
      <div className="min-h-screen bg-background font-sans">
        <Navigation />
        <main>
          <HeroSection />
          <ServicesGrid />
          <StatsSection />
          <InsightsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
