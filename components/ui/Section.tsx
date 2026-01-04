import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  darker?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, darker = false }) => {
  return (
    <section 
      id={id} 
      className={`relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden ${
        darker ? 'bg-slate-950' : 'bg-slate-900'
      } ${className}`}
    >
      {/* Background Noise/Gradient Effects included in children or specific implementations */}
      <div className="relative max-w-7xl mx-auto z-10">
        {children}
      </div>
    </section>
  );
};