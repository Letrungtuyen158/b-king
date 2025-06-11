import React from "react";

interface PricingSectionProps {
  price: string;
  duration: string;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  price,
  duration,
}) => {
  return (
    <div className='mt-3 text-4xl'>
      <p className='text-center'>
        <span className='text-blue-800 font-bold'>{price}</span>
        <span className='text-base text-neutral-800'>/{duration}</span>
      </p>
    </div>
  );
};
