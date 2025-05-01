import React from 'react';

export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-rose-50 to-violet-50" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#3498db_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Soft gradient accent orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-teal-300/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-rose-300/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-indigo-300/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000" />
    </div>
  );
};