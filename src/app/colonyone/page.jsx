'use client';

import Link from 'next/link';
import Script from 'next/script';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Check } from 'lucide-react';
import { COLONYONE_FEATURES, SITE_CONFIG } from '@/utils/constants';
import SectionWrapper from '@/components/SectionWrapper';
import AnimatedText from '@/components/AnimatedText';
import Card from '@/components/Card';

export default function ColonyOnePage() {
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ColonyOne',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    offers: {
      '@type': 'Offer',
      price: 'Contact for pricing',
      priceCurrency: 'INR',
    },
    description:
      'White-label SaaS platform for residential community management including amenity booking, visitor management, and maintenance tracking.',
  };

  const faqItems = [
    {
      question: 'How much does ColonyOne cost per society?',
      answer:
        'Pricing depends on resident volume and customisations. Most societies opt for quarterly or annual subscriptions with onboarding bundled in.',
    },
    {
      question: 'Can residents download the app for free?',
      answer:
        'Yes. Residents access ColonyOne via your branded app experience on iOS, Android, or the web without additional fees.',
    },
    {
      question: 'How long does implementation take?',
      answer:
        'Most societies launch within 3-4 weeks. We provide onboarding for management committees, staff, and residents to smooth adoption.',
    },
    {
      question: 'Do you provide training for society committee members?',
      answer:
        'Absolutely. We run live training sessions, offer SOP templates, and keep support channels open for any questions post-launch.',
    },
    {
      question: 'Is ColonyOne available for small societies (50-100 units)?',
      answer:
        'Yes. ColonyOne scales from boutique complexes to large townships with pricing tiers and feature sets that fit your requirements.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
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
      <Script id="colonyone-software-schema" type="application/ld+json">
        {JSON.stringify(softwareSchema)}
      </Script>
      <Script id="colonyone-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden pt-20">
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4 px-4 py-2 bg-bilton-blue bg-opacity-10 rounded-full"
          >
            <p className="text-bilton-blue font-semibold text-sm">
              By Bilton Technologies
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-xl mb-6"
          >
            ColonyOne — Society Management App for Indian Housing Communities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="body-lg text-gray-700 mb-4 max-w-3xl mx-auto"
          >
            ColonyOne is the housing society software India&apos;s builders choose to digitise every touchpoint. Offer a white-label resident app that handles visitor approvals, amenity booking, payments, and communications without juggling multiple tools.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="body-md text-gray-600 mb-10 max-w-3xl mx-auto"
          >
            Inspired by leaders like MyGate yet built for full customisation, ColonyOne gives Indian housing communities a secure, future-ready platform that residents and facility teams adopt quickly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={`mailto:${SITE_CONFIG.email}?subject=ColonyOne Inquiry`}
              className="btn-primary bg-bilton-blue hover:bg-blue-700"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="btn-outline border-bilton-blue text-bilton-blue hover:bg-bilton-blue hover:text-white"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Decorative 3D-style elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-32 h-32 bg-bilton-blue opacity-10 rounded-3xl rotate-12 animate-float"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-bilton-orange opacity-10 rounded-3xl -rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-10 w-24 h-24 bg-bilton-blue opacity-10 rounded-2xl rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </section>

      {/* Overview Section */}
      <SectionWrapper className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <AnimatedText
            text="Community management software that just works"
            className="heading-md mb-6"
            as="h2"
          />
          <AnimatedText
            text="Inspired by how apps like MyGate transformed Indian societies, ColonyOne automates daily operations so teams stop juggling spreadsheets and chat groups."
            className="body-lg text-gray-600"
            delay={0.2}
            as="p"
          />
        </div>
      </SectionWrapper>

      {/* Features Section */}
      <SectionWrapper id="features" className="section-padding bg-gradient-to-br from-blue-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <AnimatedText
              text="Everything Your Community Needs"
              className="heading-lg mb-4"
              as="h2"
            />
            <AnimatedText
              text="Comprehensive tools for modern community management"
              className="body-lg text-gray-600"
              delay={0.2}
              as="p"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {COLONYONE_FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  hover3D={true}
                  className="h-full border-2 border-bilton-blue border-opacity-0 hover:border-opacity-20"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Comparison Section */}
      <SectionWrapper className="section-padding bg-white">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-lg mb-4">ColonyOne vs. Traditional Management</h2>
            <p className="body-md text-gray-600">
              Move beyond registers and fragmented chat groups with a unified society management platform tailored for India.
            </p>
          </div>
          <div className="overflow-x-auto bg-gray-50 rounded-3xl border border-gray-100">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="p-4 font-semibold text-gray-500 uppercase tracking-widest">Feature</th>
                  <th className="p-4 font-semibold text-gray-500 uppercase tracking-widest">Traditional</th>
                  <th className="p-4 font-semibold text-gray-500 uppercase tracking-widest">ColonyOne</th>
                </tr>
              </thead>
              <tbody>
                {[{
                  feature: 'Visitor Approval',
                  traditional: 'Paper logs, manual calls to residents, no visual verification.',
                  colonyone: 'Instant digital approval with visitor photos and OTP validation.',
                }, {
                  feature: 'Maintenance Payments',
                  traditional: 'Cash or cheque collection, manual receipt tracking.',
                  colonyone: 'Online payments with automated reminders and invoice history.',
                }, {
                  feature: 'Amenity Booking',
                  traditional: 'Notice board bookings prone to conflicts and overlaps.',
                  colonyone: 'Real-time availability with smart scheduling and usage limits.',
                }, {
                  feature: 'Communication',
                  traditional: 'Scattered WhatsApp groups and SMS blasts.',
                  colonyone: 'Centralised announcements with segment targeting and read receipts.',
                }, {
                  feature: 'Transparency',
                  traditional: 'Manual ledgers and limited access for residents.',
                  colonyone: 'Digital audit trails and dashboards for committees and builders.',
                }].map((row) => (
                  <tr key={row.feature} className="border-b border-gray-200 last:border-0">
                    <td className="p-4 font-semibold text-bilton-black">{row.feature}</td>
                    <td className="p-4 text-gray-600">{row.traditional}</td>
                    <td className="p-4 text-gray-600">{row.colonyone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionWrapper>

      {/* Benefits Section */}
      <SectionWrapper className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md mb-6">
                Why Communities Choose ColonyOne
              </h2>
              <ul className="space-y-4">
                {[
                  'Smooth operations with automated visitor check-ins, amenity approvals, and reminders',
                  'Transparent records for every request, payment, and notice',
                  'Less stress for residents and managers thanks to unified workflows',
                  'Security that mirrors top-performing Indian community platforms',
                  'White-label flexibility for builders who need a branded launch experience',
                  'Local-first support and onboarding that respects how societies actually function',
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <Check size={24} className="mr-3 text-bilton-blue flex-shrink-0 mt-1" />
                    <span className="body-md text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-bilton-blue to-blue-600 rounded-3xl p-12 text-white">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-4">
                    <Mail size={32} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    Ready to Transform Your Community?
                  </h3>
                  <p className="text-white text-opacity-90 body-md">
                    Let&apos;s show you how ColonyOne trims manual work, boosts resident satisfaction, and keeps every stakeholder in sync.
                  </p>
                </div>
                <a
                  href={`mailto:${SITE_CONFIG.email}?subject=ColonyOne Partnership Inquiry`}
                  className="bg-white text-bilton-blue px-6 py-3 rounded-full font-semibold inline-flex items-center space-x-2 hover:bg-gray-100 transition-all duration-300"
                >
                  <span>Collaborate with ColonyOne</span>
                  <ArrowRight size={20} />
                </a>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-bilton-orange opacity-20 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-bilton-blue opacity-10 rounded-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Builder Section */}
      <SectionWrapper className="section-padding bg-gray-50">
        <div className="container-custom max-w-5xl mx-auto text-center">
          <AnimatedText
            text="White-Label Solution for Real Estate Developers"
            className="heading-lg mb-4"
            as="h2"
          />
          <AnimatedText
            text="ColonyOne becomes your branded app, supporting the entire lifecycle from pre-sales CRM to post-handover community experience."
            className="body-md text-gray-600 mb-10"
            delay={0.2}
            as="p"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              'Use ColonyOne as a CRM during pre-sales to track leads, site visits, and follow-ups.',
              'Convert the same system into a resident app upon handover with zero downtime.',
              'Enhance property value by showcasing digital amenities to prospects.',
              'Reduce post-sale support load with transparent issue tracking and updates.',
            ].map((item) => (
              <div key={item} className="bg-white p-8 rounded-3xl shadow-lg border border-bilton-blue/10 text-left">
                <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 text-bilton-blue font-semibold hover:gap-3 transition-all"
          >
            <span>Request Builder Demo</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </SectionWrapper>

      {/* Use Cases Section */}
      <SectionWrapper className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <AnimatedText
              text="Perfect For"
              className="heading-lg mb-4"
              as="h2"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Residential Societies',
                description: 'Apartment complexes looking to build community culture and communication.',
                icon: '🏢',
              },
              {
                title: 'Gated Communities',
                description: 'Villa communities wanting to create a unified brand identity.',
                icon: '🏘️',
              },
              {
                title: 'Property Developers',
                description: 'Builders seeking to add value through community engagement programs.',
                icon: '🏗️',
              },
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-bilton-black">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper className="section-padding bg-white">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
            <p className="body-md text-gray-600">
              Everything you need to know before rolling out ColonyOne across your housing society or developer portfolio.
            </p>
          </div>
          <div className="space-y-6">
            {faqItems.map((item) => (
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

      {/* Final CTA */}
      <SectionWrapper className="section-padding bg-bilton-blue text-white">
        <div className="container-custom text-center">
            <AnimatedText
              text="Let&apos;s build your community story"
              className="heading-lg mb-6 text-balance"
              as="h2"
            />
            <AnimatedText
              text="Join societies upgrading from scattered tools to one secure platform."
              className="body-lg mb-10 text-white text-opacity-90 max-w-2xl mx-auto"
              delay={0.2}
              as="p"
            />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={`mailto:${SITE_CONFIG.email}?subject=ColonyOne Inquiry`}
              className="bg-white text-bilton-blue px-8 py-4 rounded-full font-semibold inline-flex items-center space-x-2 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <Mail size={20} />
              <span>Email Us</span>
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-bilton-blue transition-all duration-300"
            >
              Contact Form
            </Link>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}
