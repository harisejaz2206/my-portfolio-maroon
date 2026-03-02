import React from 'react';
import { SectionHeader } from './primitives';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return <SectionHeader title={title} subtitle={subtitle} />;
};
