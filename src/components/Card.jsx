'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export default function Card({ 
  title, 
  description, 
  icon, 
  className = '',
  children,
  hover3D = false 
}) {
  const Icon = icon ? Icons[icon] : null;

  return (
    <motion.div
      whileHover={hover3D ? { 
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
        transition: { duration: 0.3 }
      } : {
        scale: 1.02,
        y: -8,
        transition: { duration: 0.3 }
      }}
      className={`
        bg-white rounded-2xl p-8 shadow-lg 
        ${hover3D ? 'perspective-1000 preserve-3d' : ''}
        ${className}
      `}
    >
      {Icon && (
        <div className="w-14 h-14 bg-bilton-orange bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
          <Icon size={28} className="text-bilton-orange" />
        </div>
      )}
      
      {title && (
        <h3 className="text-2xl font-bold mb-4 text-bilton-black">
          {title}
        </h3>
      )}
      
      {description && (
        <p className="text-gray-600 body-md mb-4">
          {description}
        </p>
      )}
      
      {children}
    </motion.div>
  );
}
