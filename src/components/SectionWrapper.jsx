'use client';

import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS } from '@/utils/constants';

export default function SectionWrapper({ 
  children, 
  className = '',
  variant = 'fadeIn',
  delay = 0
}) {
  return (
    <motion.section
      variants={ANIMATION_VARIANTS[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
