'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import dynamic from 'next/dynamic';
import { MARKETING_SERVICES, PORTFOLIO_ITEMS, VALUES } from '@/utils/constants';
import SectionWrapper from '@/components/SectionWrapper';
import AnimatedText from '@/components/AnimatedText';
import Card from '@/components/Card';

const Hero3D = dynamic(() => import('@/components/Hero3D'), { ssr: false });

export default function MarketingPage() {
  return (
    <>
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
              A Division of Bilton Technologies
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-xl mb-6"
          >
            Bilton <span className="text-bilton-orange">Marketing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-bilton-black mb-6"
          >
            Make Brands Move.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="body-lg text-gray-700 mb-10 max-w-3xl mx-auto"
          >
            A results-focused marketing firm helping Goa's local brands grow through social media, strategy, and design.
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
              Start Your Campaign
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
            text="Bilton Marketing is a performance-led agency built in Goa, driven by design thinking and strategic marketing intelligence."
            className="body-lg text-gray-600"
            delay={0.2}
            as="p"
          />
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
              text="Precision marketing for Goa's most ambitious brands"
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
              text="Our portfolio showcases real impact for real brands"
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

      {/* Final CTA */}
      <SectionWrapper className="section-padding bg-white">
        <div className="container-custom text-center">
          <AnimatedText
            text="Work with a team that makes every pixel count"
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
