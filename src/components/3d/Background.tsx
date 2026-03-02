import React from 'react';

export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-canvas via-surface-2 to-canvas" />
      <div className="absolute inset-0 section-grid-bg opacity-40" />
      <div className="ambient-orb left-[-8rem] top-[-5rem] h-[22rem] w-[22rem] bg-brand-soft animate-ambient-float" />
    </div>
  );
};
