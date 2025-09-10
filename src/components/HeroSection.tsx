import React from 'react';

interface HeroSectionProps {
  title: string;
  description: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
  return (
    <header className="flex flex-col items-center gap-6 absolute w-[69%] max-w-[993px] left-[14.9%] top-[95px]">
      <h1 className="text-black text-center text-[90px] font-extrabold leading-[99px] uppercase w-full max-md:text-6xl max-sm:text-4xl">
        {title}
      </h1>
      <p className="w-full text-black text-center text-[28px] font-[450] leading-[37.8px] max-md:text-2xl max-sm:text-lg">
        {description}
      </p>
    </header>
  );
};
