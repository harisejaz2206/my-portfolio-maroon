import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center space-y-4 mb-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#800020] to-[#4A0011] 
                   text-transparent bg-clip-text"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};