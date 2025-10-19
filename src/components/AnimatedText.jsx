'use client';

import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS } from '@/utils/constants';

export default function AnimatedText({ 
  text, 
  className = '', 
  variant = 'fadeIn',
  delay = 0,
  as: Component = 'div'
}) {
  return (
    <motion.div
      variants={ANIMATION_VARIANTS[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
    >
      <Component className={className}>
        {text}
      </Component>
    </motion.div>
  );
}
