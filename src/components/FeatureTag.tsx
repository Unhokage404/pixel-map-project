import React from 'react';

interface FeatureTagProps {
  text: string;
}

export const FeatureTag: React.FC<FeatureTagProps> = ({ text }) => {
  return (
    <div className="flex justify-center items-center gap-2 bg-[rgba(255,255,255,0.90)] px-6 py-1.5 rounded-[1000px]">
      <span className="text-[#18255D] text-xl font-[450] leading-[27px]">
        {text}
      </span>
    </div>
  );
};
