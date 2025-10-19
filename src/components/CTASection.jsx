'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/utils/constants';
import SectionWrapper from './SectionWrapper';

export default function CTASection({ 
  title = "Your brand deserves to move.",
  description = "Let's schedule a quick discovery call and explore how we can help you grow.",
  buttonText = "Book a Call",
  showEmail = true,
  dark = false
}) {
  return (
    <SectionWrapper 
      className={`section-padding ${dark ? 'bg-bilton-black text-white' : 'bg-gradient-to-br from-bilton-orange to-bilton-blue text-white'}`}
    >
      <div className="container-custom text-center">
        <h2 className="heading-lg mb-6 text-balance">
          {title}
        </h2>
        
        {description && (
          <p className="body-lg max-w-2xl mx-auto mb-10 text-white text-opacity-90">
            {description}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={SITE_CONFIG.calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${dark ? 'btn-secondary' : 'bg-white text-bilton-black hover:bg-gray-100'} px-8 py-4 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300 hover:scale-105`}
          >
            <span>{buttonText}</span>
            <ArrowRight size={20} />
          </a>
          
          {showEmail && (
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-white hover:text-opacity-80 transition-colors duration-300 flex items-center space-x-2"
            >
              <span>or email us at</span>
              <span className="font-semibold underline">{SITE_CONFIG.email}</span>
            </a>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
