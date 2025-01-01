import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../../../types';

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] 
                 before:bg-gradient-to-b before:from-[#800020] before:to-transparent before:rounded-full"
    >
      <div className="absolute left-0 top-0 w-3 h-3 bg-[#800020] rounded-full 
                    transform -translate-x-[5px] shadow-lg shadow-[#800020]/50" />
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#800020] to-[#4A0011] rounded-xl blur opacity-0 
                      group-hover:opacity-20 transition-opacity" />
        <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
            <div>
              <h3 className="text-xl font-bold text-[#800020]">{experience.company}</h3>
              <p className="text-lg text-gray-700">{experience.position}</p>
            </div>
            <div className="text-right">
              <p className="text-[#800020] font-medium">{experience.duration}</p>
              <p className="text-gray-500">{experience.location}</p>
            </div>
          </div>
          <ul className="space-y-2">
            {experience.description.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-2 text-gray-600"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#800020] mt-2 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};