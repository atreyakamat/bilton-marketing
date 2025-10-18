// Site-wide constants and configurations

// Parent Brand Configuration
export const SITE_CONFIG = {
  name: 'Bilton Technologies',
  tagline: 'Brands. Communities. Mastered.',
  description: 'Bilton Technologies is an India-built tech company combining social media marketing and community software for measurable growth.',
  email: 'connect.bilton@gmail.com',
  phone: '+91 XXXXX XXXXX', // Add actual phone number
  location: 'Goa, India',
  social: {
    instagram: 'https://instagram.com/biltontechnologies',
    linkedin: 'https://linkedin.com/company/biltontechnologies',
    twitter: 'https://twitter.com/biltontechnologies',
  },
  calendlyLink: 'https://calendly.com/bilton-technologies', // Add actual Calendly link
};

// Navigation Links
export const NAV_LINKS = [
  { name: 'Marketing', href: '/marketing' },
  { name: 'ColonyOne', href: '/colonyone' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

// Divisions/Sub-brands
export const DIVISIONS = [
  {
    name: 'Bilton Marketing',
    slug: 'marketing',
    tagline: 'Growth Without Noise',
    description: 'Data-driven social media marketing for India that turns attention into repeatable results.',
    color: '#FFA64D', // Orange
    icon: 'Rocket',
    features: [
      'Social Media Management',
      'Brand Campaigns',
      'Content Strategy',
      'Creative Production',
    ],
  },
  {
    name: 'ColonyOne',
    slug: 'colonyone',
    tagline: 'Communities Made Simple',
    description: 'White-label SaaS that streamlines Indian housing society operations from one dashboard.',
    color: '#0066CC', // Blue
    icon: 'Building2',
    features: [
      'Community Engagement',
      'Resident Communication',
      'Visual Branding',
      'Property Promotion',
    ],
  },
];

// Marketing Division Services
export const MARKETING_SERVICES = [
  {
    title: 'Strategy That Works',
    description: 'Custom social roadmaps for Instagram, LinkedIn, and emerging platforms so every activity supports a measurable KPI.',
    icon: 'Target',
    features: [
      'Audience & channel prioritisation',
      'Objective-led content calendars',
      'Campaign roadmaps for India-first platforms',
      'Always-on optimisation loops',
    ],
  },
  {
    title: 'Content That Converts',
    description: 'Stories, reels, polls, and UGC formats engineered for retention and saves — not vanity metrics.',
    icon: 'Clapperboard',
    features: [
      'Interactive polls and quizzes',
      'Creator-led collaborations',
      'Short-form video & reel playbooks',
      'Brand voice & copy frameworks',
    ],
  },
  {
    title: 'Monetisation Guidance',
    description: 'Playbooks to turn engaged audiences into revenue via commerce, affiliates, and influencer partnerships.',
    icon: 'Coins',
    features: [
      'Influencer & creator fit mapping',
      'Revenue model experimentation',
      'Community-to-commerce funnels',
      'Partnership & sponsorship playbooks',
    ],
  },
  {
    title: 'Analytics & Insights',
    description: 'Measurement suites that separate signal from noise with iterative experiments and ROI tracking.',
    icon: 'LineChart',
    features: [
      'Full-funnel performance dashboards',
      'Attribution & cohort analysis',
      'Campaign retrospectives & pilots',
      'Actionable monthly growth labs',
    ],
  },
];

export const VALUES = [
  {
    title: 'Clarity',
    description: 'Clear messaging that cuts through the noise.',
    icon: 'Eye',
  },
  {
    title: 'Consistency',
    description: 'Reliable execution across every touchpoint.',
    icon: 'RefreshCw',
  },
  {
    title: 'Creativity',
    description: 'Bold ideas that make brands memorable.',
    icon: 'Sparkles',
  },
  {
    title: 'Credibility',
    description: 'Data-driven results you can trust.',
    icon: 'Award',
  },
];

export const PORTFOLIO_ITEMS = [
  {
    title: 'Goa Café',
    category: 'Social Media Management',
    description: 'Complete social presence overhaul for a coastal café.',
    status: 'Coming Soon',
    image: '/images/portfolio/goa-cafe.jpg',
  },
  {
    title: 'Casa Amora',
    category: 'Brand Campaign',
    description: 'Luxury property launch campaign.',
    status: 'Coming Soon',
    image: '/images/portfolio/casa-amora.jpg',
  },
  {
    title: 'Nova Realtors',
    category: 'Content Strategy',
    description: 'Real estate content strategy and production.',
    status: 'Coming Soon',
    image: '/images/portfolio/nova-realtors.jpg',
  },
];

export const COLONYONE_FEATURES = [
  {
    title: 'Amenity Booking',
    description: 'Residents reserve gyms, halls, and courts in seconds with automated approvals.',
    icon: 'CalendarCheck2',
  },
  {
    title: 'Parking & Visitors',
    description: 'Digital vehicle passes, real-time visitor alerts, and lobby-ready verification logs.',
    icon: 'Car',
  },
  {
    title: 'Maintenance & Payments',
    description: 'Track service requests, reconcile dues, and settle invoices without spreadsheets.',
    icon: 'Wallet',
  },
  {
    title: 'Community Messaging',
    description: 'Broadcast announcements and targeted notices without drowning in chat threads.',
    icon: 'Megaphone',
  },
];

export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  },
  slideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  },
};
