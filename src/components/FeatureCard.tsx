import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  position: 'left' | 'right';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  position 
}) => {
  const leftPosition = position === 'left' ? 'left-[5.2%]' : 'left-[32.2%]';
  
  return (
    <article className={`flex w-[357px] flex-col items-start gap-6 absolute bg-[rgba(255,255,255,0.50)] p-8 rounded-[32px] ${leftPosition} top-[923px]`}>
      <div 
        dangerouslySetInnerHTML={{ __html: icon }}
        aria-hidden="true"
      />
      <p className="w-full text-[#18255D] text-xl font-[450] leading-[27px]">
        {description}
      </p>
    </article>
  );
};
