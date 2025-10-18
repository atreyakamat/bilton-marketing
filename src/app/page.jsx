'use client';

import Link from 'next/link';
import Script from 'next/script';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import dynamic from 'next/dynamic';
import { SITE_CONFIG, DIVISIONS } from '@/utils/constants';
import SectionWrapper from '@/components/SectionWrapper';
import AnimatedText from '@/components/AnimatedText';
import Card from '@/components/Card';

// Dynamically import 3D component to avoid SSR issues
const Hero3D = dynamic(() => import('@/components/Hero3D'), { ssr: false });

const TRUST_METRICS = [
  { label: 'Brands Scaled', value: '100+' },
  { label: 'Societies Digitized', value: '50+' },
  { label: 'Residents Served', value: '2M+' },
  { label: 'Client Rating', value: '4.9/5' },
];

const FAQ_ITEMS = [
  {
    question: 'What services does Bilton Marketing provide?',
    answer:
      'Bilton Marketing provides social media management, campaign strategy, influencer partnerships, analytics, and monetization consulting for Indian brands across Instagram, LinkedIn, and emerging platforms.',
  },
  {
    question: 'How does ColonyOne help housing societies?',
    answer:
      'ColonyOne is a white-label society management app that digitizes visitor approvals, amenity bookings, maintenance payments, and community announcements for Indian housing societies and builders.',
  },
  {
    question: 'Do you work with businesses outside major metros?',
    answer:
      'Yes. Our distributed team supports startups, SMEs, and residential communities across India with localized strategies and onboarding.',
  },
  {
    question: 'How quickly can we see results from social media marketing?',
    answer:
      'Most clients notice traction within 60-90 days as we launch campaigns, optimize content, and align analytics to clearly defined growth KPIs.',
  },
];

export default function HomePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bilton Technologies',
    url: 'https://www.biltontechnologies.com',
    logo: 'https://www.biltontechnologies.com/logo.png',
    description:
      'Indian tech company providing social media marketing services and residential community management software.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'India',
    },
    sameAs: [
      'https://www.linkedin.com/company/bilton-technologies',
      'https://www.instagram.com/biltontechnologies',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.slice(0, 2).map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Script id="organization-schema" type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </Script>
      <Script id="homepage-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      {/* Hero Section with 3D Tech Orbit */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-orange-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Hero3D variant="orbit" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-xl mb-6 text-balance"
          >
            Transform Your Business with India&apos;s Leading Social Media Marketing &amp; Community Management Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="body-lg text-gray-700 mb-4 max-w-3xl mx-auto"
          >
            Bilton Technologies is the social media marketing company India-based founders choose when they need measurable growth. We unite Bilton Marketing&apos;s data-led campaigns with ColonyOne&apos;s housing society management software in India so brands and communities scale confidently.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="body-md text-gray-600 mb-10 max-w-3xl mx-auto"
          >
            From digital marketing agency-level strategy to community platforms that replace paperwork, we build connected ecosystems aligned to real KPIs, not vanity metrics. Explore our social media marketing services or discover our community management platform built for Indian housing societies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/marketing" className="btn-primary flex items-center space-x-2">
              <span>Explore Marketing Services</span>
              <ArrowRight size={20} />
            </Link>
            <Link href="/colonyone" className="btn-outline">
              Discover ColonyOne
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-gray-400 animate-bounce" />
        </motion.div>
      </section>

      {/* Social Media Marketing Focus */}
      <SectionWrapper className="section-padding bg-white">
        <div className="container-custom grid gap-12 md:grid-cols-2">
          <div>
            <AnimatedText
              text="Social Media Marketing That Drives Results"
              className="heading-lg mb-6"
              as="h2"
            />
            <AnimatedText
              text="Our India-first social media management playbooks boost brand visibility, engagement, and monetisation. We align every campaign to revenue-focused goals so your marketing budget compounds instead of burning out."
              className="body-lg text-gray-600"
              delay={0.2}
              as="p"
            />
            <AnimatedText
              text="Whether you need B2B LinkedIn growth, direct-to-consumer Instagram funnels, or content marketing solutions for emerging platforms, Bilton Marketing builds the roadmap and runs the experiments."
              className="body-md text-gray-600 mt-6"
              delay={0.3}
              as="p"
            />
          </div>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-bilton-black mb-3">Strategy That Works</h3>
              <p className="text-gray-600">
                We audit your channels, competitors, and audience to map KPI-driven initiatives across Instagram, LinkedIn, and YouTube. Expect quarterly roadmaps, channel prioritisation, and experimentation sprints designed for Indian markets.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-bilton-black mb-3">Content That Converts</h3>
              <p className="text-gray-600">
                High-impact assets—from reels and stories to thought-leadership carousels—built to capture attention and drive leads. We combine creator collaborations, UGC, and data-backed posting cadences so engagement translates into sales.
              </p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* ColonyOne Overview */}
      <SectionWrapper className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center mb-10">
            <AnimatedText
              text="ColonyOne – Communities Made Simple"
              className="heading-lg mb-4"
              as="h2"
            />
            <AnimatedText
              text="ColonyOne is the society management software India&apos;s housing communities trust to digitize every workflow. Replace manual visitor logs, scattered WhatsApp chats, and cash payments with one secure platform."
              className="body-lg text-gray-600"
              delay={0.2}
              as="p"
            />
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: 'Amenity Booking',
                description:
                  'Residents reserve clubhouses, gyms, and sports courts in real time with automated approvals and fair usage reporting.',
              },
              {
                title: 'Visitor Management',
                description:
                  'Digital visitor passes, QR-based verification, and instant alerts keep your gates secure without slowing down guests.',
              },
              {
                title: 'Maintenance Tracking',
                description:
                  'Log service requests, assign vendors, and monitor completion timelines with full transparency for committees and residents.',
              },
              {
                title: 'Payments & Accounting',
                description:
                  'Collect dues online, automate reminders, and maintain a digital audit trail ready for society audits and builder handovers.',
              },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl shadow-lg p-8 border border-bilton-blue/10 hover:border-bilton-blue/40 transition"
              >
                <h3 className="text-2xl font-semibold text-bilton-blue mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/colonyone" className="text-bilton-blue font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
              <span>Explore society management software features</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Trust Signals */}
      <SectionWrapper className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Trusted by Leading Brands &amp; Communities</h2>
            <p className="body-md text-gray-600">
              Our integrated stack powers marketing operations and community management for organisations across India.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {TRUST_METRICS.map((metric) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-gray-50 rounded-3xl py-8 px-6 text-center border border-gray-100 hover:border-bilton-blue/40 transition"
              >
                <p className="text-4xl font-bold text-bilton-blue mb-2">{metric.value}</p>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-widest">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Divisions Grid */}
      <SectionWrapper id="divisions" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <AnimatedText
              text="Our Divisions"
              className="heading-lg mb-4"
              as="h2"
            />
            <AnimatedText
              text="One parent company, two divisions built for measurable Indian market impact"
              className="body-lg text-gray-600"
              delay={0.2}
              as="p"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {DIVISIONS.map((division, index) => (
              <motion.div
                key={division.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Link href={`/${division.slug}`}>
                  <Card
                    title={division.name}
                    description={division.description}
                    icon={division.icon}
                    hover3D={true}
                    className="h-full border-2 border-transparent hover:border-opacity-20"
                    style={{ borderColor: division.color }}
                  >
                    <div className="mt-6">
                      <p className="text-sm font-semibold mb-3" style={{ color: division.color }}>
                        {division.tagline}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {division.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <Sparkles size={16} className="mr-2 text-bilton-orange" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center text-bilton-blue font-semibold hover:gap-3 transition-all duration-300">
                        <span>Explore Division</span>
                        <ArrowRight size={20} className="ml-2" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Bilton */}
      <SectionWrapper className="section-padding bg-bilton-black text-white relative overflow-hidden">
        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimatedText
              text="Why Choose Bilton Technologies?"
              className="heading-lg mb-6"
              as="h2"
            />
            <p className="body-md text-gray-300 mb-4">
              We bridge two worlds: data-driven social media marketing and resilient community software. Every engagement starts with an audit, a roadmap, and aligned KPIs so you understand exactly what we are solving.
            </p>
            <p className="body-md text-gray-300">
              With in-house strategy, creative, and engineering talent, Bilton Technologies keeps execution seamless across campaigns and software rollouts.
            </p>
          </div>
          <div className="space-y-4">
            {[
              'Full-funnel reporting that ties campaigns to leads, pipeline, and revenue.',
              'Implementation support for ColonyOne to onboard residents, facility teams, and builders.',
              'Playbooks tailored for Indian SMEs, creators, and residential societies.',
              'Partnership approach focused on transparency, experimentation, and measurable growth.',
            ].map((point) => (
              <div key={point} className="flex items-start">
                <span className="text-bilton-orange mr-3 mt-1 text-xl">•</span>
                <p className="text-sm text-gray-200 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-bilton-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-bilton-orange rounded-full blur-3xl"></div>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
            <p className="body-md text-gray-600">
              Answers to the most common questions about our social media marketing services and ColonyOne society management software.
            </p>
          </div>
          <div className="space-y-6">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="group border border-gray-200 rounded-2xl p-6 hover:border-bilton-blue/60 transition"
              >
                <summary className="flex items-center justify-between cursor-pointer text-left">
                  <h3 className="text-lg font-semibold text-bilton-black pr-4">{item.question}</h3>
                  <span className="text-bilton-blue group-open:rotate-180 transition-transform">&#9660;</span>
                </summary>
                <p className="text-gray-600 mt-4 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact CTA */}
      <SectionWrapper className="section-padding bg-gradient-to-br from-bilton-blue to-bilton-orange text-white">
        <div className="container-custom text-center">
          <AnimatedText
            text="Let&apos;s build your next digital milestone"
            className="heading-lg mb-6 text-balance"
            as="h2"
          />
          <AnimatedText
            text="Whether you need brand strategy, community marketing, or a complete digital ecosystem, we&apos;re here to help."
            className="body-lg mb-10 max-w-2xl mx-auto text-white text-opacity-90"
            delay={0.2}
            as="p"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="bg-white text-bilton-black px-8 py-4 rounded-full font-semibold inline-flex items-center space-x-2 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <span>Contact Us</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}
