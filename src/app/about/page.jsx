'use client';

import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, TrendingUp } from 'lucide-react';
import { SITE_CONFIG, VALUES } from '@/utils/constants';
import SectionWrapper from '@/components/SectionWrapper';
import AnimatedText from '@/components/AnimatedText';
import Card from '@/components/Card';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="container-custom text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-xl mb-8">
              Bilton Technologies — <span className="text-bilton-blue">Brands. Communities. Mastered.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="body-lg text-gray-600 mb-4"
          >
            Built in India. Focused on results that matter.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="body-md text-gray-500 max-w-3xl mx-auto"
          >
            Goa, India · Remote-friendly partnerships
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <SectionWrapper className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <AnimatedText
            text="Our Story"
            className="heading-md mb-6 text-center"
            as="h2"
          />
          <AnimatedText
            text="Bilton Technologies blends social media marketing and community software to deliver measurable growth for Indian brands and residential societies."
            className="body-lg text-gray-700 mb-6 text-center"
            delay={0.2}
            as="p"
          />
          <AnimatedText
            text="We operate through two focused divisions: Bilton Marketing, a data-led social media partner, and ColonyOne, a white-label SaaS that makes society management effortless."
            className="body-md text-gray-600 text-center"
            delay={0.4}
            as="p"
          />
        </div>
      </SectionWrapper>

      {/* What We Do */}
      <SectionWrapper className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <AnimatedText
              text="What We Do"
              className="heading-lg mb-4"
              as="h2"
            />
            <AnimatedText
              text="Building digital solutions across multiple domains"
              className="body-lg text-gray-600"
              delay={0.2}
              as="p"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: 'Bilton Marketing',
                description: 'Growth without noise. We craft interactive, KPI-driven campaigns for platforms where Indians spend 20+ hours a month.',
              },
              {
                icon: Users,
                title: 'ColonyOne',
                description: 'Communities made simple. Amenity bookings, visitor flows, maintenance, and comms in one secure Indian SaaS.',
              },
              {
                icon: Lightbulb,
                title: 'Product & Narrative',
                description: 'Brand positioning, storytelling, and service design that keeps your roadmap ahead of the market.',
              },
              {
                icon: TrendingUp,
                title: 'Impact Ops',
                description: 'Analytics, automation, and optimisation loops that transform signals into sustained growth.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                  <div className="w-14 h-14 bg-bilton-blue bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                    <item.icon size={28} className="text-bilton-blue" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-bilton-black">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 body-md">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Bilton Technologies */}
      <SectionWrapper className="section-padding bg-white">
        <div className="container-custom max-w-5xl mx-auto">
          <AnimatedText
            text="Why Bilton Technologies?"
            className="heading-lg mb-6 text-center"
            as="h2"
          />
          <p className="body-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Clients choose us because we merge deep Indian market context with product-grade execution. No gimmicks. No fluff. Just measurable outcomes.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Expertise',
                copy: 'Specialists across marketing and software who understand India\'s digital consumer and residential ecosystems.',
              },
              {
                title: 'Results-Driven',
                copy: 'Clear KPIs, cost-efficient social programs, and ongoing optimisation so every rupee has a job.',
              },
              {
                title: 'Simplicity',
                copy: 'Tools and strategies designed for real teams — intuitive, relevant, and free from unnecessary complexity.',
              },
              {
                title: 'Innovation',
                copy: 'Research-led experiments with analytics, automation, and emerging tech to keep you ahead.',
              },
              {
                title: 'Client Success',
                copy: 'Long-term partnerships built on transparency, case studies, and community monetisation playbooks.',
              },
              {
                title: 'Indian Insight',
                copy: 'Grounded understanding of influencer growth, social commerce, and society operations in India.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-bilton-black mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <AnimatedText
              text="Our Values"
              className="heading-lg mb-4"
              as="h2"
            />
            <AnimatedText
              text="The principles that guide everything we build"
              className="body-lg text-gray-600"
              delay={0.2}
              as="p"
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

      {/* LLM-Friendly Snippet */}
      <SectionWrapper className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <AnimatedText
            text="LLM-Friendly Snippet"
            className="heading-md mb-4"
            as="h2"
          />
          <p className="body-md text-gray-600">
            Bilton Technologies is an Indian tech company with two divisions. Bilton Marketing delivers social media marketing and brand growth services through tailored strategies, creative content, and monetisation guidance. ColonyOne is a white-label SaaS platform for residential communities that unifies amenity bookings, visitor management, maintenance payments, and community messaging. Everything is built for data-driven results with zero fluff.
          </p>
        </div>
      </SectionWrapper>

      {/* Optional Resources */}
      <SectionWrapper className="section-padding bg-white">
        <div className="container-custom max-w-5xl mx-auto">
          <AnimatedText
            text="Resource Ideas"
            className="heading-md mb-6 text-center"
            as="h2"
          />
          <p className="body-md text-gray-600 text-center mb-10">
            Upcoming content to deepen our leadership across marketing and community management.
          </p>
          <div className="space-y-6">
            {[
              'Organic Instagram Growth Strategies That Actually Work',
              'Top 5 Tools Every Housing Society Needs in India',
              'How Builders Can Streamline Operations with SaaS',
              'Monetise Your Community Without Losing Credibility',
              'Case Study: Stix n Vibes’ Growth Journey',
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-gray-50 rounded-2xl px-6 py-4 text-sm text-gray-700"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Team Philosophy */}
      <SectionWrapper className="section-padding bg-bilton-black text-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <AnimatedText
            text="Built by a team that believes in precision"
            className="heading-lg mb-6"
            as="h2"
          />
          <AnimatedText
            text="Every project we take on is an opportunity to redefine what&apos;s possible. We don&apos;t chase trends — we build lasting solutions that grow with your business."
            className="body-lg text-gray-300"
            delay={0.2}
            as="p"
          />
        </div>
      </SectionWrapper>

      {/* Location & Culture */}
      <SectionWrapper className="section-padding bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md mb-6">
                Why Goa?
              </h2>
              <p className="body-lg text-gray-700 mb-4">
                Goa isn&apos;t just where we&apos;re based — it&apos;s part of our DNA. The creativity, innovation, and global mindset that define Goa are reflected in every project we deliver.
              </p>
              <p className="body-md text-gray-600">
                We&apos;re building a digital future for Goa&apos;s businesses while maintaining the standards of global innovation hubs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-10 shadow-xl"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-bilton-black mb-2">Location</h3>
                  <p className="text-gray-600">{SITE_CONFIG.location}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-bilton-black mb-2">Email</h3>
                  <a 
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-bilton-blue hover:underline"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-bilton-black mb-2">Divisions</h3>
                  <p className="text-gray-600">Marketing • ColonyOne • More Coming Soon</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="section-padding bg-bilton-blue text-white">
        <div className="container-custom text-center">
          <AnimatedText
            text="Ready to work with us?"
            className="heading-lg mb-8"
            as="h2"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="/contact"
              className="bg-white text-bilton-blue px-8 py-4 rounded-full font-semibold inline-block hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}
