"use client";
import * as React from "react";

interface PartnerSectionProps {
  className?: string;
}

function PartnerSection({ className = "" }: PartnerSectionProps) {
  return (
    <section
      className={`flex flex-wrap gap-6 justify-center items-center py-24 ${className}`}
    >
      <img
        src='/images/home/partners/bliss_worldwide.png'
        alt='Gallery image 1'
        className='object-contain shrink-0 self-stretch my-auto aspect-[2] w-[100px]'
      />
      <img
        src='/images/home/partners/adventure.png'
        alt='Gallery image 2'
        className='object-contain shrink-0 self-stretch my-auto rounded-lg aspect-[1.02] w-[100px]'
      />
      <img
        src='/images/home/partners/maichau_tourist.png'
        alt='Gallery image 3'
        className='object-contain shrink-0 self-stretch my-auto aspect-[2.33] w-[100px]'
      />
      <img
        src='/images/home/partners/hagiang_travel.png'
        alt='Gallery image 4'
        className='object-contain shrink-0 self-stretch my-auto aspect-[2.44] w-[100px]'
      />
      <img
        src='/images/home/partners/halong_travel.png'
        alt='Gallery image 5'
        className='object-contain shrink-0 self-stretch my-auto rounded-lg aspect-[1.15] w-[100px]'
      />
    </section>
  );
}

export default PartnerSection;
