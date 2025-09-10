import React, { useState } from 'react';

interface CallToActionProps {
  text: string;
  onClick?: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ text, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button 
      className={`flex justify-center items-center gap-2 absolute w-[222px] h-[60px] cursor-pointer pt-3 pb-4 px-10 rounded-[1000px] left-[5.2%] top-[1253px] bg-[#18255D] hover:bg-[#1a2766] transition-all duration-200 ${isClicked ? 'scale-95' : 'scale-100'}`}
      onClick={handleClick}
      aria-label={text}
    >
      <span className="text-white text-2xl font-semibold leading-[32.4px]">
        {text}
      </span>
    </button>
  );
};
