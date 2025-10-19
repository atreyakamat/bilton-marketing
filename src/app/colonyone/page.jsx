'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Check } from 'lucide-react';
import { COLONYONE_FEATURES, SITE_CONFIG } from '@/utils/constants';
import SectionWrapper from '@/components/SectionWrapper';
import AnimatedText from '@/components/AnimatedText';
import Card from '@/components/Card';

export default function ColonyOnePage() {
  return (
    <>
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
            <span className="text-bilton-blue">Colony</span>One
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-bilton-black mb-6"
          >
            Smart Marketing for Smart Communities
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="body-lg text-gray-700 mb-10 max-w-3xl mx-auto"
          >
            A specialized platform for residential colonies and societies, offering tailored communication, engagement, and marketing solutions.
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
            text="Marketing solutions for communities that live together"
            className="heading-md mb-6"
            as="h2"
          />
          <AnimatedText
            text="ColonyOne by Bilton Technologies helps colonies connect, engage, and promote through community-driven campaigns that build belonging."
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
                  'Professional branding for your residential community',
                  'Increased resident engagement and satisfaction',
                  'Streamlined communication across all platforms',
                  'Enhanced property value through community presence',
                  'Dedicated support from marketing specialists',
                  'Affordable packages designed for communities',
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
                    Let's discuss how ColonyOne can elevate your residential community's presence and engagement.
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

      {/* Final CTA */}
      <SectionWrapper className="section-padding bg-bilton-blue text-white">
        <div className="container-custom text-center">
          <AnimatedText
            text="Let's build your community story"
            className="heading-lg mb-6 text-balance"
            as="h2"
          />
          <AnimatedText
            text="Join the communities already using ColonyOne to connect and grow."
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
