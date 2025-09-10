import React from 'react';
import { FeatureTag } from './FeatureTag';

interface FeatureSectionProps {
  title: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  title, 
  features, 
  imageUrl, 
  imageAlt 
}) => {
  return (
    <section className="relative w-full">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-[312px] h-[654px] absolute rounded-[56px] left-[64.8%] top-[659px]"
      />
      <div className="flex w-[875px] flex-col items-start gap-8 absolute left-[5.2%] top-[659px]">
        <h2 className="w-[91%] text-black text-[40px] font-bold leading-[54px] max-md:text-[32px] max-sm:text-2xl">
          {title}
        </h2>
        <div className="flex items-center gap-[17px] flex-wrap max-sm:justify-center" role="list">
          {features.map((feature, index) => (
            <div key={index} role="listitem">
              <FeatureTag text={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
