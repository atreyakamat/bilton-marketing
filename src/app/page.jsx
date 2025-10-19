'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Building2, Sparkles, ChevronDown } from 'lucide-react';
import dynamic from 'next/dynamic';
import { SITE_CONFIG, DIVISIONS, ANIMATION_VARIANTS } from '@/utils/constants';
import SectionWrapper from '@/components/SectionWrapper';
import AnimatedText from '@/components/AnimatedText';
import Card from '@/components/Card';

// Dynamically import 3D component to avoid SSR issues
const Hero3D = dynamic(() => import('@/components/Hero3D'), { ssr: false });

export default function HomePage() {
  return (
    <>
      {/* Hero Section with 3D Tech Orbit */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-orange-50 overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <Hero3D variant="orbit" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="heading-xl mb-6 text-balance">
              Innovating the <br />
              <span className="text-bilton-blue">Digital Tomorrow</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="body-lg text-gray-700 mb-10 max-w-3xl mx-auto"
          >
            We build smart brands, systems, and marketing solutions that scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#divisions"
              className="btn-primary flex items-center space-x-2"
            >
              <span>Explore Divisions</span>
              <ChevronDown size={20} />
            </a>
            <Link
              href="/contact"
              className="btn-outline"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-gray-400 animate-bounce" />
        </motion.div>
      </section>

      {/* About Bilton Technologies */}
      <SectionWrapper className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <AnimatedText
            text="We're a technology-first creative group based in Goa"
            className="heading-md mb-6"
            as="h2"
          />
          <AnimatedText
            text="Crafting digital ecosystems for modern businesses through innovation, strategy, and design thinking."
            className="body-lg text-gray-600 text-balance"
            delay={0.2}
            as="p"
          />
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
              text="Specialized teams delivering excellence in their domains"
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

      {/* Vision Section */}
      <SectionWrapper className="section-padding bg-bilton-black text-white relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <AnimatedText
            text="Every project we build redefines how Goa's digital future looks"
            className="heading-lg mb-6 text-balance max-w-4xl mx-auto"
            as="h2"
          />
          <AnimatedText
            text="From startups to established brands, we bring clarity and innovation to every partnership."
            className="body-lg text-gray-400 max-w-2xl mx-auto"
            delay={0.2}
            as="p"
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-bilton-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-bilton-orange rounded-full blur-3xl"></div>
        </div>
      </SectionWrapper>

      {/* Contact CTA */}
      <SectionWrapper className="section-padding bg-gradient-to-br from-bilton-blue to-bilton-orange text-white">
        <div className="container-custom text-center">
          <AnimatedText
            text="Let's build your next digital milestone"
            className="heading-lg mb-6 text-balance"
            as="h2"
          />
          <AnimatedText
            text="Whether you need brand strategy, community marketing, or a complete digital ecosystem, we're here to help."
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
