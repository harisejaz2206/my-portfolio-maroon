import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeTextProps {
  items: string[];
}

export const MarqueeText: React.FC<MarqueeTextProps> = ({ items }) => {
  return (
    <div className="relative overflow-hidden py-4 bg-gradient-to-r from-[#800020]/10 to-[#4A0011]/10">
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'linear',
        }}
        className="whitespace-nowrap"
      >
        {items.map((item, index) => (
          <span key={index} className="mx-8 text-lg font-medium text-[#800020]">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};