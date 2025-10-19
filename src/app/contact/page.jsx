'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SITE_CONFIG } from '@/utils/constants';
import SectionWrapper from '@/components/SectionWrapper';
import AnimatedText from '@/components/AnimatedText';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    division: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = `Contact from ${formData.name} - ${formData.division || 'General Inquiry'}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ADivision: ${formData.division || 'General'}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', division: '', message: '' });
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-br from-white via-orange-50 to-blue-50">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-xl mb-6">
              Let's start something <br />
              <span className="text-bilton-orange">impactful</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="body-lg text-gray-600"
          >
            Whether you need brand strategy, community marketing, or a complete digital ecosystem, we're here to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <SectionWrapper className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-3xl p-10"
            >
              <h2 className="heading-sm mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-bilton-blue focus:outline-none focus:ring-2 focus:ring-bilton-blue focus:ring-opacity-20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-bilton-blue focus:outline-none focus:ring-2 focus:ring-bilton-blue focus:ring-opacity-20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="division" className="block text-sm font-semibold text-gray-700 mb-2">
                    Interested in
                  </label>
                  <select
                    id="division"
                    name="division"
                    value={formData.division}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-bilton-blue focus:outline-none focus:ring-2 focus:ring-bilton-blue focus:ring-opacity-20 transition-all bg-white"
                  >
                    <option value="">Select a division</option>
                    <option value="Marketing">Bilton Marketing</option>
                    <option value="ColonyOne">ColonyOne</option>
                    <option value="General">General Inquiry</option>
                    <option value="Partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-bilton-blue focus:outline-none focus:ring-2 focus:ring-bilton-blue focus:ring-opacity-20 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <AnimatedText
                  text="Get in touch"
                  className="heading-sm mb-6"
                  as="h2"
                />
                <AnimatedText
                  text="We're always excited to hear about new projects and partnerships. Drop us a message and we'll get back to you within 24 hours."
                  className="body-md text-gray-600 mb-8"
                  delay={0.2}
                  as="p"
                />
              </div>

              <div className="space-y-6">
                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-md"
                >
                  <div className="w-12 h-12 bg-bilton-blue bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-bilton-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-bilton-black mb-1">Email</h3>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-gray-600 hover:text-bilton-blue transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                {SITE_CONFIG.phone && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-md"
                  >
                    <div className="w-12 h-12 bg-bilton-orange bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-bilton-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-bilton-black mb-1">Phone</h3>
                      <p className="text-gray-600">{SITE_CONFIG.phone}</p>
                    </div>
                  </motion.div>
                )}

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-md"
                >
                  <div className="w-12 h-12 bg-bilton-blue bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-bilton-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-bilton-black mb-1">Location</h3>
                    <p className="text-gray-600">{SITE_CONFIG.location}</p>
                  </div>
                </motion.div>
              </div>

              {/* Quick Links to Divisions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-gradient-to-br from-bilton-blue to-blue-600 rounded-2xl p-8 text-white"
              >
                <h3 className="text-xl font-bold mb-4">Looking for something specific?</h3>
                <div className="space-y-3">
                  <a
                    href="/marketing"
                    className="block text-white hover:text-bilton-orange transition-colors"
                  >
                    → Explore Bilton Marketing
                  </a>
                  <a
                    href="/colonyone"
                    className="block text-white hover:text-bilton-orange transition-colors"
                  >
                    → Discover ColonyOne
                  </a>
                  <a
                    href="/about"
                    className="block text-white hover:text-bilton-orange transition-colors"
                  >
                    → Learn About Us
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
