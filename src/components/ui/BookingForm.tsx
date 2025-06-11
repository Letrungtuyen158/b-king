"use client";

const BookingForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col justify-center p-6 mt-8 w-full bg-blue-50 rounded-lg text-zinc-800 max-md:px-5 max-md:max-w-full'
    >
      <div className={`w-full `}>
        <label className='text-lg font-medium text-zinc-800'>
          Organized Group Tour
        </label>
        <div className='flex flex-col justify-center py-3.5 pl-4 mt-1 w-full text-sm bg-white rounded max-md:max-w-full'>
          <div className='opacity-50 text-zinc-800 max-md:max-w-full'>
            Single Customized Trip
          </div>
        </div>
      </div>

      <div className={`w-full mt-6`}>
        <label className='text-lg font-medium text-zinc-800'>
          Organized Group Tour
        </label>
        <div className='flex flex-col justify-center py-3.5 pl-4 mt-1 w-full text-sm bg-white rounded max-md:max-w-full'>
          <div className='opacity-50 text-zinc-800 max-md:max-w-full'>
            Single Customized Trip
          </div>
        </div>
      </div>

      <button
        type='submit'
        className='overflow-hidden gap-1.5 self-start px-5 py-2 mt-6 text-xs leading-loose text-center text-white whitespace-nowrap bg-blue-800 rounded hover:bg-blue-900 transition-colors'
      >
        Submit
      </button>
    </form>
  );
};

export default BookingForm;
