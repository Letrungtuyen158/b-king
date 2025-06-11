import React from "react";

interface TourInfoProps {
  title: string;
  description: string;
  routing?: string;
  tourStyle?: string;
  tourStart?: string;
  tourEnd?: string;
  tripDuration?: string;
}

export const TourInfo: React.FC<TourInfoProps> = ({
  title,
  description,
  routing,
  tourStyle,
  tourStart,
  tourEnd,
  tripDuration,
}) => {
  return (
    <div className='gap-3 w-full'>
      <div className='gap-1 w-full'>
        <h1 className='text-lg font-bold text-black'>{title}</h1>

        <div className='ml-2'>
          {routing && (
            <div className='text-sm text-neutral-800 flex items-center gap-2'>
              <div className='size-1 bg-neutral-600 shrink-0 rounded-full' />
              Routing: {routing}
            </div>
          )}
          {tourStyle && (
            <div className='text-sm text-neutral-800 flex items-center gap-2'>
              <div className='size-1 bg-neutral-600 shrink-0 rounded-full' />
              Tour Style: {tourStyle}
            </div>
          )}
          {(tourStart || tourEnd) && (
            <div className='text-sm text-neutral-800 flex items-center gap-2'>
              <div className='size-1 bg-neutral-600 shrink-0 rounded-full' />
              Tour Start: {tourStart} / Tour End: {tourEnd}
            </div>
          )}
          {tripDuration && (
            <div className='text-sm text-neutral-800 flex items-center gap-2'>
              <div className='size-1 bg-neutral-600 shrink-0 rounded-full' />
              Trip Duration: {tripDuration}
            </div>
          )}
        </div>
        {/* <p className='mt-1 text-xs leading-5 text-zinc-700'>{description}</p> */}
      </div>
    </div>
  );
};
