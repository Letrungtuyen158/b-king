import React from "react";

interface DecorativeDividerProps {}

export const DecorativeDivider: React.FC<DecorativeDividerProps> = ({}) => {
  return (
    <div className='flex gap-4 justify-center items-center mt-3 w-full'>
      <div className='flex flex-1 shrink gap-2 items-center self-stretch my-auto basis-0'>
        <div className='flex-1 shrink self-stretch my-auto h-px border border-blue-300 border-solid basis-0 w-[113px]' />
        <svg
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6 0.891602L7.34708 5.0375H11.7063L8.17963 7.59981L9.52671 11.7457L6 9.1834L2.47329 11.7457L3.82037 7.59981L0.293661 5.0375H4.65292L6 0.891602Z'
            fill='#87BAFF'
          />
        </svg>
      </div>
      <svg
        width='8'
        height='9'
        viewBox='0 0 8 9'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M4 0.891602L8 4.8916L4 8.8916L0 4.8916L4 0.891602Z'
          fill='#87BAFF'
        />
      </svg>

      <div className='flex flex-1 shrink gap-2 items-center self-stretch my-auto basis-0'>
        <svg
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6 0.891602L7.34708 5.0375H11.7063L8.17963 7.59981L9.52671 11.7457L6 9.1834L2.47329 11.7457L3.82037 7.59981L0.293661 5.0375H4.65292L6 0.891602Z'
            fill='#87BAFF'
          />
        </svg>

        <div className='flex-1 shrink self-stretch my-auto w-28 h-px border border-blue-300 border-solid basis-0' />
      </div>
    </div>
  );
};
