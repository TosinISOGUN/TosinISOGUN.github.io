// Centralized content adapter. Use the mock data below (articlesData, servicesData, etc.)
// and export a single `articles` array and helpers to keep imports stable across the app.
// Content API Adapter Layer
// This module provides a centralized data layer for all content
// Swap the implementation to connect to a CMS or external API

export interface Article {
  id: number;
  slug: string;
  category: string;
  type: 'ARTICLE' | 'CASE STUDY' | 'RESEARCH';
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  authorImage: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  tags: string[];
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  outcomes: string;
}

export interface Industry {
  id: string;
  icon: string;
  title: string;
  description: string;
  insights: string[];
  stats: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Office {
  city: string;
  address: string;
  region: string;
  phone: string;
  coordinates: [number, number];
}

export interface JobOpening {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  level: string;
  description: string;
}

// Mock data - Replace with API calls when ready
const articlesData: Article[] = [
  {
    id: 1,
    slug: 'digital-transformation-2025',
    category: 'Digital',
    type: 'ARTICLE',
    title: 'The Future of Digital Transformation: Five Trends Shaping 2025',
    excerpt: 'As technology continues to evolve, organizations must adapt their digital strategies to stay competitive. Here are the key trends we see defining the next wave of transformation.',
    content: `
## The Digital Imperative

The digital transformation landscape is evolving at an unprecedented pace. Organizations that fail to adapt risk being left behind in an increasingly competitive market. In this article, we explore the five key trends that will shape digital transformation strategies in 2025 and beyond.

### 1. AI-First Business Operations

Artificial intelligence is no longer a nice-to-have technology—it's becoming the backbone of modern business operations. From customer service to supply chain optimization, AI is transforming how companies operate at every level.

**Key considerations:**
- Evaluate AI readiness across all business functions
- Invest in AI talent and capabilities
- Develop ethical AI governance frameworks

### 2. Hyper-Personalization at Scale

Customers now expect personalized experiences across all touchpoints. Advances in data analytics and machine learning enable organizations to deliver individualized experiences to millions of customers simultaneously.

### 3. Edge Computing Revolution

As IoT devices proliferate, processing power is moving closer to the data source. Edge computing enables real-time decision-making and reduces latency in critical applications.

### 4. Sustainable Technology

Environmental considerations are becoming central to technology strategy. Organizations are prioritizing green IT initiatives and sustainable digital practices.

### 5. Cybersecurity as a Business Enabler

Security is no longer just about protection—it's about enabling business growth. Organizations with robust security frameworks can move faster and take more calculated risks.

## Conclusion

The organizations that thrive in 2025 will be those that embrace these trends proactively rather than reactively. Start planning your digital transformation journey today.
    `,
    author: 'Alexandra Chen',
    authorRole: 'Partner, Digital Practice',
    authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face',
    date: 'November 28, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
    featured: true,
    tags: ['Digital Transformation', 'AI', 'Technology Trends'],
  },
  {
    id: 2,
    slug: 'revenue-growth-case-study',
    category: 'Strategy',
    type: 'CASE STUDY',
    title: 'How Digital Transformation Drove 40% Revenue Growth for a Global Manufacturer',
    excerpt: 'A deep dive into how we partnered with a Fortune 500 manufacturer to reimagine their business model and achieve unprecedented growth.',
    content: `
## Executive Summary

A Fortune 500 manufacturing company faced declining market share and margin pressure from digital-native competitors. Through a comprehensive digital transformation program, we helped them achieve 40% revenue growth within 18 months.

### The Challenge

Our client, a global industrial manufacturer with over $5 billion in annual revenue, was experiencing:

- Declining market share in core product categories
- Margin erosion due to commodity pricing pressure
- Limited digital capabilities compared to emerging competitors
- Fragmented customer experience across channels

### Our Approach

We developed a three-phase transformation program:

**Phase 1: Digital Foundation (Months 1-6)**
- Modernized core technology infrastructure
- Implemented cloud-first architecture
- Established data governance framework

**Phase 2: Customer Experience Transformation (Months 7-12)**
- Launched digital commerce platform
- Implemented AI-powered customer service
- Created unified customer data platform

**Phase 3: Business Model Innovation (Months 13-18)**
- Developed subscription-based service offerings
- Created IoT-enabled predictive maintenance solutions
- Launched digital marketplace for ecosystem partners

### Results

The transformation delivered exceptional results:

- **40% revenue growth** from new digital channels
- **25% improvement** in customer satisfaction scores
- **30% reduction** in operational costs
- **50% faster** time-to-market for new products

## Key Lessons

1. Executive sponsorship is critical for transformation success
2. Start with quick wins to build momentum
3. Invest in change management and talent development
4. Measure progress with clear KPIs
    `,
    author: 'Marcus Williams',
    authorRole: 'Managing Director, Strategy',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    date: 'November 20, 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=500&fit=crop',
    featured: true,
    tags: ['Case Study', 'Manufacturing', 'Digital Transformation', 'Revenue Growth'],
  },
  {
    id: 3,
    slug: 'leadership-disruption',
    category: 'Leadership',
    type: 'RESEARCH',
    title: 'Leadership in the Age of Disruption: A Comprehensive Study',
    excerpt: 'Our research reveals the critical leadership capabilities needed to navigate uncertainty and drive organizational success.',
    content: `
## Research Overview

Based on interviews with over 500 C-suite executives across 20 industries, our research identifies the leadership capabilities most critical for success in an era of unprecedented disruption.

### Key Findings

**1. Adaptive Intelligence**

The most successful leaders demonstrate a unique combination of strategic vision and tactical flexibility. They can maintain focus on long-term goals while rapidly adjusting their approach based on changing circumstances.

**2. Digital Fluency**

Leaders don't need to be technologists, but they must understand how digital technologies create value and transform business models. Digital fluency enables better strategic decisions and more effective collaboration with technical teams.

**3. Inclusive Decision-Making**

Top-performing organizations have leaders who actively seek diverse perspectives and create psychological safety for dissenting opinions. This leads to better decisions and stronger team engagement.

**4. Purpose-Driven Leadership**

Employees and customers increasingly expect organizations to stand for something beyond profit. Leaders who articulate and live a compelling purpose attract better talent and build stronger customer loyalty.

### Implications for Organizations

Organizations should:

1. Assess current leadership capabilities against future needs
2. Develop comprehensive leadership development programs
3. Create opportunities for experiential learning
4. Reward adaptive and inclusive leadership behaviors

## Methodology

This research was conducted through:
- 500+ executive interviews
- Survey of 10,000 employees across 50 companies
- Analysis of 5-year performance data
- Case studies of 25 high-performing organizations
    `,
    author: 'Sarah Thompson',
    authorRole: 'Partner, Organization Practice',
    authorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
    date: 'November 15, 2025',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
    featured: false,
    tags: ['Leadership', 'Research', 'Executive Development'],
  },
  {
    id: 4,
    slug: 'supply-chain-resilience',
    category: 'Operations',
    type: 'ARTICLE',
    title: 'Building Supply Chain Resilience in an Uncertain World',
    excerpt: 'Learn how leading organizations are redesigning their supply chains to withstand disruption and maintain competitive advantage.',
    content: `
## The New Supply Chain Reality

Recent global events have exposed the fragility of traditional supply chain models. Organizations are now prioritizing resilience alongside efficiency, fundamentally reshaping how supply chains are designed and managed.

### Building Blocks of Resilience

**1. Visibility and Transparency**

End-to-end supply chain visibility is essential for identifying risks and responding quickly to disruptions. Leading organizations are investing in:
- Real-time tracking and monitoring
- Supplier risk assessment platforms
- Predictive analytics for demand and supply

**2. Diversification Strategies**

Single-source dependencies create vulnerability. Resilient supply chains feature:
- Multi-sourcing arrangements
- Regional supply bases
- Alternative logistics routes

**3. Inventory Optimization**

The just-in-time model is being reconsidered. Organizations are finding the right balance between efficiency and buffer capacity through:
- Strategic inventory positioning
- Dynamic safety stock calculations
- Multi-tier inventory visibility

**4. Digital Twin Technology**

Digital representations of physical supply chains enable scenario planning and rapid response:
- Simulate disruption scenarios
- Test response strategies
- Optimize network design

### Implementation Roadmap

1. **Assess current state** - Map your supply chain and identify vulnerabilities
2. **Define resilience objectives** - Balance cost, service, and risk
3. **Develop mitigation strategies** - Implement diversification and buffers
4. **Enable with technology** - Invest in visibility and analytics
5. **Build organizational capabilities** - Train teams on risk management

## The Path Forward

Supply chain resilience is not a one-time project but an ongoing capability. Organizations that invest in resilience today will be better positioned to navigate future disruptions.
    `,
    author: 'David Park',
    authorRole: 'Partner, Operations Practice',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    date: 'November 10, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop',
    featured: false,
    tags: ['Supply Chain', 'Operations', 'Risk Management'],
  },
  {
    id: 5,
    slug: 'ai-business-strategy',
    category: 'Digital',
    type: 'ARTICLE',
    title: 'Integrating AI into Your Business Strategy: A Practical Guide',
    excerpt: 'From proof of concept to enterprise-wide deployment, here\'s how to make AI a strategic advantage for your organization.',
    content: `
## Beyond the AI Hype

Artificial intelligence promises transformative benefits, but many organizations struggle to move beyond pilot projects to enterprise-wide value creation. This guide provides a practical framework for integrating AI into your business strategy.

### The AI Strategy Framework

**1. Start with Business Outcomes**

Successful AI initiatives begin with clear business objectives, not technology choices:
- Identify high-value use cases
- Quantify potential impact
- Align with strategic priorities

**2. Build the Right Foundation**

AI success requires:
- Quality data and data infrastructure
- Scalable computing resources
- Integration capabilities

**3. Develop AI Capabilities**

Organizations need a mix of:
- Data scientists and ML engineers
- AI-literate business leaders
- Change management expertise

**4. Govern Responsibly**

AI governance addresses:
- Ethical considerations
- Regulatory compliance
- Model risk management

### Common Pitfalls to Avoid

1. **Technology-first thinking** - Start with business problems, not AI solutions
2. **Underinvesting in data** - AI is only as good as the data it learns from
3. **Ignoring change management** - People adoption is critical for success
4. **Unrealistic expectations** - AI delivers value over time, not overnight

### Getting Started

Begin your AI journey with these steps:

1. Identify 3-5 high-potential use cases
2. Assess data readiness for each
3. Run small-scale pilots to prove value
4. Build on successes to scale
5. Continuously measure and optimize

## Conclusion

AI represents a significant opportunity for competitive advantage, but success requires a strategic, patient approach. Organizations that invest wisely in AI today will lead their industries tomorrow.
    `,
    author: 'Alexandra Chen',
    authorRole: 'Partner, Digital Practice',
    authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face',
    date: 'November 5, 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    featured: false,
    tags: ['AI', 'Digital Strategy', 'Machine Learning'],
  },
  {
    id: 6,
    slug: 'healthcare-transformation',
    category: 'Industry',
    type: 'CASE STUDY',
    title: 'Transforming Healthcare Delivery: Lessons from Leading Health Systems',
    excerpt: 'How forward-thinking healthcare organizations are improving patient outcomes while reducing costs.',
    content: `
## Healthcare at a Crossroads

The healthcare industry faces unprecedented challenges: rising costs, workforce shortages, and increasing patient expectations. Yet leading health systems are finding innovative ways to improve outcomes while managing costs.

### Case Study: Regional Health Network

We worked with a regional health network of 15 hospitals and 200 clinics to transform their care delivery model.

**Initial Challenges:**
- 30-day readmission rates above national average
- Long wait times for specialist appointments
- Fragmented patient experience across facilities
- Rising labor costs

**Our Approach:**

*Phase 1: Care Model Redesign*
- Implemented care pathways for high-volume conditions
- Deployed care coordination teams
- Integrated behavioral health into primary care

*Phase 2: Digital Health Enablement*
- Launched virtual care platform
- Implemented remote patient monitoring
- Created patient engagement app

*Phase 3: Operations Optimization*
- Redesigned scheduling and capacity management
- Optimized staffing models
- Streamlined revenue cycle

**Results:**
- 25% reduction in 30-day readmissions
- 40% decrease in specialist wait times
- 15% improvement in patient satisfaction
- $50M in annual cost savings

### Key Success Factors

1. **Physician engagement** - Clinicians led the care model redesign
2. **Technology as enabler** - Digital tools supported, not replaced, human care
3. **Patient-centered design** - Changes were tested with patient input
4. **Sustained commitment** - Leadership maintained focus through implementation

## Looking Ahead

The future of healthcare delivery will be increasingly personalized, preventive, and technology-enabled. Organizations that invest in transformation now will be positioned to thrive.
    `,
    author: 'Sarah Thompson',
    authorRole: 'Partner, Healthcare Practice',
    authorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
    date: 'October 28, 2025',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=500&fit=crop',
    featured: false,
    tags: ['Healthcare', 'Case Study', 'Digital Health'],
  },
];

const servicesData: Service[] = [
  {
    id: 'strategy',
    icon: 'Lightbulb',
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
    icon: 'Rocket',
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
    icon: 'Cog',
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
    icon: 'Users',
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
    icon: 'Shield',
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
    icon: 'TrendingUp',
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

const industriesData: Industry[] = [
  {
    id: 'financial-services',
    icon: 'Building2',
    title: 'Financial Services',
    description: 'Helping banks, insurers, and asset managers navigate digital disruption, regulatory change, and evolving customer expectations.',
    insights: [
      'Digital banking transformation',
      'Risk management modernization',
      'Customer experience optimization',
      'Regulatory compliance strategies',
    ],
    stats: '150+ financial institutions served',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
  },
  {
    id: 'healthcare',
    icon: 'Heart',
    title: 'Healthcare & Life Sciences',
    description: 'Transforming healthcare delivery, accelerating innovation, and improving patient outcomes through data-driven strategies.',
    insights: [
      'Healthcare delivery transformation',
      'Digital health innovation',
      'Pharmaceutical R&D optimization',
      'Value-based care models',
    ],
    stats: '80+ healthcare organizations transformed',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop',
  },
  {
    id: 'technology',
    icon: 'Cpu',
    title: 'Technology & Telecom',
    description: 'Enabling tech companies to scale, innovate, and capture market opportunities in a rapidly evolving landscape.',
    insights: [
      'Product strategy and innovation',
      'Go-to-market optimization',
      'Platform business models',
      'M&A strategy and integration',
    ],
    stats: '200+ tech companies advised',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
  },
  {
    id: 'retail',
    icon: 'ShoppingBag',
    title: 'Retail & Consumer',
    description: 'Helping retailers and consumer brands thrive in the omnichannel era with customer-centric strategies.',
    insights: [
      'Omnichannel transformation',
      'Supply chain optimization',
      'Customer analytics and personalization',
      'Brand strategy and positioning',
    ],
    stats: '120+ retail transformations',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
  },
  {
    id: 'energy',
    icon: 'Zap',
    title: 'Energy & Utilities',
    description: 'Supporting the energy transition and helping utilities adapt to new technologies and market dynamics.',
    insights: [
      'Energy transition strategy',
      'Grid modernization',
      'Sustainability transformation',
      'Operational efficiency',
    ],
    stats: '60+ energy sector engagements',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop',
  },
  {
    id: 'manufacturing',
    icon: 'Factory',
    title: 'Industrial & Manufacturing',
    description: 'Driving Industry 4.0 adoption and operational excellence in manufacturing and industrial sectors.',
    insights: [
      'Smart manufacturing implementation',
      'Supply chain resilience',
      'Operational transformation',
      'Sustainability initiatives',
    ],
    stats: '90+ industrial clients',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=600&fit=crop',
  },
];

const leadershipData: TeamMember[] = [
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

const officesData: Office[] = [
  {
    city: 'New York',
    address: '350 Fifth Avenue, Suite 7500',
    region: 'New York, NY 10118',
    phone: '+1 (212) 555-0100',
    coordinates: [-73.9857, 40.7484],
  },
  {
    city: 'London',
    address: '30 St Mary Axe',
    region: 'London EC3A 8BF, UK',
    phone: '+44 20 7123 4567',
    coordinates: [-0.0803, 51.5144],
  },
  {
    city: 'Singapore',
    address: 'Marina Bay Financial Centre',
    region: 'Singapore 018983',
    phone: '+65 6789 0123',
    coordinates: [103.8536, 1.2789],
  },
];

const jobOpeningsData: JobOpening[] = [
  {
    id: 1,
    title: 'Senior Strategy Consultant',
    department: 'Strategy',
    location: 'New York, NY',
    type: 'Full-time',
    level: 'Senior',
    description: 'Lead strategic engagements for Fortune 500 clients across industries.',
  },
  {
    id: 2,
    title: 'Digital Transformation Manager',
    department: 'Digital',
    location: 'London, UK',
    type: 'Full-time',
    level: 'Manager',
    description: 'Drive digital transformation initiatives for global enterprises.',
  },
  {
    id: 3,
    title: 'Associate Consultant',
    department: 'Operations',
    location: 'Singapore',
    type: 'Full-time',
    level: 'Associate',
    description: 'Support operations excellence projects across APAC region.',
  },
  {
    id: 4,
    title: 'Data Scientist',
    department: 'Analytics',
    location: 'New York, NY',
    type: 'Full-time',
    level: 'Senior',
    description: 'Develop AI/ML solutions for client analytics challenges.',
  },
  {
    id: 5,
    title: 'Business Analyst Intern',
    department: 'Strategy',
    location: 'Multiple Locations',
    type: 'Internship',
    level: 'Entry',
    description: 'Summer internship program for aspiring consultants.',
  },
];
export const articles = articlesData;

export function getArticleBySlug(slug: string) {
  return articlesData.find((a) => a.slug === slug) || null;
}

// Content API functions
export const contentApi = {
  // Articles
  async getArticles(): Promise<Article[]> {
    // Simulated API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return articlesData;
  },

  async getArticleBySlug(slug: string): Promise<Article | null> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return articlesData.find(a => a.slug === slug) || null;
  },

  async getFeaturedArticles(): Promise<Article[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return articlesData.filter(a => a.featured);
  },

  async getArticlesByCategory(category: string): Promise<Article[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    if (category === 'All') return articlesData;
    return articlesData.filter(a => a.category === category);
  },

  // Services
  async getServices(): Promise<Service[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return servicesData;
  },

  async getServiceById(id: string): Promise<Service | null> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return servicesData.find(s => s.id === id) || null;
  },

  // Industries
  async getIndustries(): Promise<Industry[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return industriesData;
  },

  async getIndustryById(id: string): Promise<Industry | null> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return industriesData.find(i => i.id === id) || null;
  },

  // Leadership
  async getLeadership(): Promise<TeamMember[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return leadershipData;
  },

  // Offices
  async getOffices(): Promise<Office[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return officesData;
  },

  // Jobs
  async getJobOpenings(): Promise<JobOpening[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return jobOpeningsData;
  },

  async getJobById(id: number): Promise<JobOpening | null> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return jobOpeningsData.find(j => j.id === id) || null;
  },

  // Search
  async search(query: string): Promise<{ articles: Article[]; services: Service[]; industries: Industry[] }> {
    await new Promise(resolve => setTimeout(resolve, 100));
    const lowerQuery = query.toLowerCase();
    
    return {
      articles: articlesData.filter(a => 
        a.title.toLowerCase().includes(lowerQuery) ||
        a.excerpt.toLowerCase().includes(lowerQuery) ||
        a.tags.some(t => t.toLowerCase().includes(lowerQuery))
      ),
      services: servicesData.filter(s => 
        s.title.toLowerCase().includes(lowerQuery) ||
        s.description.toLowerCase().includes(lowerQuery)
      ),
      industries: industriesData.filter(i => 
        i.title.toLowerCase().includes(lowerQuery) ||
        i.description.toLowerCase().includes(lowerQuery)
      ),
    };
  },
};

// Categories for filtering
export const categories = ['All', 'Strategy', 'Digital', 'Operations', 'Leadership', 'Industry'];

// Values for About page
export const companyValues = [
  {
    icon: 'Target',
    title: 'Excellence',
    description: 'We deliver exceptional results through rigorous analysis and innovative thinking.',
  },
  {
    icon: 'Heart',
    title: 'Integrity',
    description: 'We build lasting relationships through trust, transparency, and ethical practices.',
  },
  {
    icon: 'Users',
    title: 'Collaboration',
    description: 'We work as true partners, embedding ourselves in our clients\' success.',
  },
  {
    icon: 'Globe',
    title: 'Impact',
    description: 'We create measurable value that transforms businesses and communities.',
  },
];

// Timeline for About page
export const companyTimeline = [
  { year: '2000', event: 'B-PLAN Consulting founded with a vision to transform businesses' },
  { year: '2005', event: 'Expanded to international markets across Europe and Asia' },
  { year: '2010', event: 'Launched digital transformation practice' },
  { year: '2015', event: 'Reached 500+ successful client engagements' },
  { year: '2020', event: 'Pioneered AI-driven consulting methodologies' },
  { year: '2025', event: 'Celebrating 25 years of transformative impact' },
];

// Benefits for Careers page
export const careerBenefits = [
  {
    icon: 'TrendingUp',
    title: 'Career Growth',
    description: 'Clear progression paths and mentorship from industry leaders',
  },
  {
    icon: 'GraduationCap',
    title: 'Learning & Development',
    description: 'Continuous learning opportunities and professional certifications',
  },
  {
    icon: 'Heart',
    title: 'Health & Wellness',
    description: 'Comprehensive health benefits and wellness programs',
  },
  {
    icon: 'Users',
    title: 'Collaborative Culture',
    description: 'Work with talented professionals in a supportive environment',
  },
];

export const candidateValues = [
  'Intellectual curiosity',
  'Collaborative spirit',
  'Client-first mindset',
  'Drive for excellence',
  'Integrity and ethics',
  'Diverse perspectives',
];
