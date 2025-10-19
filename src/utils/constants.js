// Site-wide constants and configurations

// Parent Brand Configuration
export const SITE_CONFIG = {
  name: 'Bilton Technologies',
  tagline: 'Innovating the Digital Tomorrow.',
  description: "A Goa-based digital innovation company building smart brands, systems, and marketing solutions that scale.",
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
    tagline: 'Make Brands Move',
    description: 'Building your brand\'s digital movement through strategy, content, and campaigns.',
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
    tagline: 'Smart Marketing for Smart Communities',
    description: 'A marketing platform for residential communities and societies.',
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
    title: 'Social Media Management',
    description: 'We plan, design, and manage your brand\'s social presence with consistency and data.',
    icon: 'Share2',
    features: [
      'Content planning & scheduling',
      'Community management',
      'Analytics & reporting',
      'Platform optimization',
    ],
  },
  {
    title: 'Campaign Strategy & Ads',
    description: 'Performance-backed ads that build recognition and results.',
    icon: 'Target',
    features: [
      'Paid social advertising',
      'Campaign strategy',
      'A/B testing & optimization',
      'ROI tracking',
    ],
  },
  {
    title: 'Brand Consulting',
    description: 'We help shape your brand identity and growth roadmap.',
    icon: 'Lightbulb',
    features: [
      'Brand strategy',
      'Positioning & messaging',
      'Visual identity',
      'Growth roadmap',
    ],
  },
  {
    title: 'Content Production',
    description: 'Professional photos, reels, and motion edits for social impact.',
    icon: 'Video',
    features: [
      'Photography & videography',
      'Reel production',
      'Motion graphics',
      'Post-production editing',
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
    title: 'Community Newsletter Campaigns',
    description: 'Engaging email and WhatsApp campaigns for your residents.',
    icon: 'Mail',
  },
  {
    title: 'Resident Engagement Tools',
    description: 'Interactive content that builds community connection.',
    icon: 'Users',
  },
  {
    title: 'Visual Branding for Colonies',
    description: 'Professional branding that elevates your property.',
    icon: 'Palette',
  },
  {
    title: 'Property Promotion Partnerships',
    description: 'Strategic marketing for property sales and rentals.',
    icon: 'Building',
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
