'use client';

import Link from 'next/link';
import Script from 'next/script';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import dynamic from 'next/dynamic';
import { MARKETING_SERVICES, PORTFOLIO_ITEMS, VALUES } from '@/utils/constants';
import SectionWrapper from '@/components/SectionWrapper';
import AnimatedText from '@/components/AnimatedText';
import Card from '@/components/Card';

const Hero3D = dynamic(() => import('@/components/Hero3D'), { ssr: false });

const PROCESS_STEPS = [
  {
    title: '1. Discovery & Audit',
    description:
      'We analyse your current presence, competitors, and target audience to uncover quick wins and long-term levers.',
  },
  {
    title: '2. Strategy Development',
    description:
      'A custom roadmap with channel mix, messaging pillars, and KPIs covering follower growth, engagement, and revenue.',
  },
  {
    title: '3. Content Creation & Publishing',
    description:
      'High-quality posts, reels, stories, and campaigns built for Indian audiences on Instagram, LinkedIn, YouTube, and more.',
  },
  {
    title: '4. Analytics & Optimisation',
    description:
      'Monthly reporting with actionable insights. We iterate quickly based on what the data proves.',
  },
];

const FAQ_ITEMS = [
  {
    question: 'How long does it take to see results from social media marketing?',
    answer:
      'Most clients see leading indicators like engagement rate and quality inquiries improve within 45-60 days. Revenue-linked outcomes typically follow in 90 days as campaigns compound.',
  },
  {
    question: 'Do you work with small businesses or only large brands?',
    answer:
      'We partner with SMEs, startups, creators, and enterprise brands. Engagement models are tailored based on your goals, budgets, and in-house capabilities.',
  },
  {
    question: 'What platforms do you specialise in?',
    answer:
      'Instagram, LinkedIn, YouTube, and WhatsApp form our core stack. We also pilot emerging formats such as short video platforms and community channels when they align with your audience.',
  },
  {
    question: 'How do you measure ROI on social media campaigns?',
    answer:
      'We define KPIs upfront, build dashboards that integrate platform analytics with web and CRM data, and run experiments focused on attributable revenue growth.',
  },
  {
    question: 'What makes Bilton Marketing different from other agencies?',
    answer:
      'We operate as a data-driven growth partner, combining creative production with analytics, monetisation strategy, and ColonyOne integration for community-focused brands.',
  },
];

export default function MarketingPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
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
      <Script id="marketing-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-orange-50 to-white overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-30">
          <Hero3D variant="orbit" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4 px-4 py-2 bg-bilton-orange bg-opacity-10 rounded-full"
          >
            <p className="text-bilton-orange font-semibold text-sm">
              Bilton Technologies Division
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-xl mb-6"
          >
            Social Media Marketing Services India — Bilton <span className="text-bilton-orange">Marketing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-bilton-black mb-6"
          >
            Growth Without Noise.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="body-lg text-gray-700 mb-6 max-w-3xl mx-auto"
          >
            Bilton Marketing is the Instagram marketing agency India-based brands trust when likes need to convert into leads. We run social media management, brand visibility services, and monetisation programs that centre measurable KPIs.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="body-md text-gray-600 mb-10 max-w-3xl mx-auto"
          >
            Platforms like Instagram, LinkedIn, and YouTube now command over 20 hours of monthly attention from Indian users. Our digital marketing agency experts turn that attention into retention, revenue, and community growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="mailto:connect.bilton@gmail.com"
              className="btn-primary"
            >
              Let&apos;s Get to Work
            </a>
            <a
              href="#services"
              className="btn-outline"
            >
              View Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Snapshot */}
      <SectionWrapper className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <AnimatedText
            text="We build clarity into every campaign"
            className="heading-md mb-6"
            as="h2"
          />
          <AnimatedText
            text="Our playbooks prioritise measurable KPIs over vanity metrics. From Stix n Vibes to fast-growing creators, brands trust us to convert reach into retention with sharp, iterative execution."
            className="body-lg text-gray-600"
            delay={0.2}
            as="p"
          />
          <AnimatedText
            text="India&apos;s influencer ecosystem crossed $290M in spend last year — we help you capture that momentum with campaigns that tie creativity to revenue."
            className="body-md text-gray-500"
            delay={0.35}
            as="p"
          />
        </div>
      </SectionWrapper>

      {/* Data-Driven Process */}
      <SectionWrapper className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <AnimatedText
              text="Our Data-Driven Process"
              className="heading-lg mb-4"
              as="h2"
            />
            <AnimatedText
              text="A repeatable operating system that keeps campaigns aligned to growth metrics."
              className="body-lg text-gray-600"
              delay={0.2}
              as="p"
            />
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-bilton-orange/20"
              >
                <h3 className="text-2xl font-semibold text-bilton-black mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <AnimatedText
              text="Our Foundation"
              className="heading-lg mb-4"
              as="h2"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  title={value.title}
                  description={value.description}
                  icon={value.icon}
                  className="text-center h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Case Study Snippet */}
      <SectionWrapper className="section-padding bg-white">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-4">Client Success: Stix n Vibes</h2>
              <p className="body-md text-gray-600 mb-6">
                Stix n Vibes, a new F&B brand, needed to build Instagram traction fast. We paired creator-generated content with targeted paid boosts and monetisation experiments that tied engagement to footfall.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[{
                  label: 'Followers in 6 Months',
                  value: '10K',
                }, {
                  label: 'Average Engagement Rate',
                  value: '8.5%',
                }, {
                  label: 'Website Traffic Lift',
                  value: '3x',
                }].map((stat) => (
                  <div key={stat.label} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
                    <p className="text-3xl font-semibold text-bilton-orange">{stat.value}</p>
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-bilton-blue font-semibold hover:gap-3 transition-all"
              >
                <span>View Full Case Study</span>
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-bilton-orange to-orange-500 text-white p-10 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-4">Challenges Solved</h3>
              <ul className="space-y-3 text-sm text-white text-opacity-90">
                <li>• Built consistent content pipeline with UGC and Reels.</li>
                <li>• Created monetisation flows via limited drops and events.</li>
                <li>• Deployed analytics dashboards tracking reach-to-revenue impact.</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Services Section */}
      <SectionWrapper id="services" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <AnimatedText
              text="What We Do Best"
              className="heading-lg mb-4"
              as="h2"
            />
            <AnimatedText
              text="Strategies, content, monetisation, and analytics built to move Indian audiences"
              className="body-lg text-gray-600"
              delay={0.2}
              as="p"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {MARKETING_SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  hover3D={true}
                  className="h-full"
                >
                  <ul className="space-y-2 mt-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <Check size={16} className="mr-2 mt-1 text-bilton-orange flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Portfolio Preview */}
      <SectionWrapper className="section-padding bg-bilton-black text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <AnimatedText
              text="Results That Speak Louder Than Reach"
              className="heading-lg mb-4"
              as="h2"
            />
            <AnimatedText
              text="Discover how disciplined social programs keep brands visible, trusted, and monetised"
              className="body-lg text-gray-400"
              delay={0.2}
              as="p"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PORTFOLIO_ITEMS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10 hover:border-bilton-orange transition-all duration-300"
              >
                <div className="mb-4">
                  <span className="text-xs font-semibold text-bilton-orange bg-bilton-orange bg-opacity-10 px-3 py-1 rounded-full">
                    {item.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-bilton-orange mb-3">{item.category}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ColonyOne Highlight */}
      <SectionWrapper className="section-padding bg-gradient-to-br from-bilton-blue to-blue-600 text-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <AnimatedText
            text="Introducing ColonyOne"
            className="heading-md mb-4"
            as="h2"
          />
          <AnimatedText
            text="Smart Marketing for Smart Communities"
            className="text-2xl font-semibold mb-6"
            delay={0.2}
            as="p"
          />
          <AnimatedText
            text="A specialized division for residential colonies and societies, offering tailored communication and marketing solutions."
            className="body-lg text-white text-opacity-90 mb-8"
            delay={0.4}
            as="p"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="/colonyone"
              className="bg-white text-bilton-blue px-8 py-4 rounded-full font-semibold inline-flex items-center space-x-2 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <span>Explore ColonyOne</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper className="section-padding bg-gray-50">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
            <p className="body-md text-gray-600">
              Still exploring agencies? These answers break down how Bilton Marketing approaches social media for Indian brands.
            </p>
          </div>
          <div className="space-y-6">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="group border border-gray-200 rounded-2xl p-6 hover:border-bilton-orange/60 transition"
              >
                <summary className="flex items-center justify-between cursor-pointer text-left">
                  <h3 className="text-lg font-semibold text-bilton-black pr-4">{item.question}</h3>
                  <span className="text-bilton-orange group-open:rotate-180 transition-transform">&#9660;</span>
                </summary>
                <p className="text-gray-600 mt-4 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper className="section-padding bg-white">
        <div className="container-custom text-center">
            <AnimatedText
              text="We move brands with intent — ready when you are"
              className="heading-lg mb-8 text-balance max-w-4xl mx-auto"
              as="h2"
            />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="mailto:connect.bilton@gmail.com"
              className="btn-primary"
            >
              Get Started
            </a>
            <Link
              href="/contact"
              className="btn-outline"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}
