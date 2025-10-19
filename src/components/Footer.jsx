'use client';

import Link from 'next/link';
import { Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import { SITE_CONFIG, NAV_LINKS } from '@/utils/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bilton-black text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-3xl font-bold mb-4">
              <span className="text-white">Bilton</span>
              <span className="text-bilton-blue">.</span>
            </div>
            <p className="text-gray-400 mb-4">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-sm text-gray-500">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-bilton-orange transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-bilton-orange transition-colors duration-300"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              {SITE_CONFIG.phone && (
                <li className="flex items-center space-x-3 text-gray-400">
                  <Phone size={18} />
                  <span>{SITE_CONFIG.phone}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-bilton-orange transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-bilton-orange transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-bilton-orange transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            <a
              href={SITE_CONFIG.calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block"
            >
              Book a Call
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">
            © {currentYear} Bilton Technologies. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Designed & Built in Goa 🌴
          </p>
        </div>
      </div>
    </footer>
  );
}
