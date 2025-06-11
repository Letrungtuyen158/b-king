import { motion } from "framer-motion";
import { Search, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id='daily-departure'
      className='relative min-h-screen flex items-center justify-center'
    >
      <div
        className='absolute inset-0 bg-cover bg-center bg-fixed'
        style={{
          backgroundImage: `url('/images/home/image_hero.png')`,
          filter: "brightness(0.7)",
        }}
      />
      <div className='absolute inset-0 bg-gradient-to-b from-black/20 to-black/40' />

      <div className='relative z-10 text-center text-white max-w-7xl w-full  mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-5xl md:text-6xl script-font mb-4 leading-tight'>
            Unforgettable{" "}
            <span className='text-yellow-300'>Halong Bay Cruises</span>
          </h1>
          <p className='text-xl md:text-5xl mb-12 font-bold'>
            with Asia Pacific Travel - Since 2002
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='px-6 py-4 bg-white/30 rounded-2xl flex backdrop-blur-lg mx-auto'
        >
          <div className='flex flex-col w-full md:flex-row *:px-3 md:divide-x md:divide-white/70'>
            <div className='w-full relative'>
              <div className='flex items-center'>
                <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-white/70 size-6' />
                <input
                  type='text'
                  placeholder='Search destinations, hotels'
                  className='w-full pl-10 pr-4 py-3.5 rounded-lg text-white/70 focus:outline-none bg-transparent'
                />
              </div>
            </div>
            <div className='w-full relative'>
              <div className='flex items-center pl-6'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='absolute left-6 top-1/2 -translate-y-1/2 text-white/70 size-6'
                >
                  <g>
                    <path
                      d='M11.5781 3.75V6.23438H10.3594V8.48438H8.76434L8.64528 9.33534L6.84491 9.18511L6.74881 10.0336L8.5295 10.174L8.31491 11.7824L7.11528 12.4367L8.14681 15.4886C5.98244 15.6469 3.82565 15.8957 1.68209 16.2344L1.81391 17.0677C3.69693 16.7703 5.59036 16.5432 7.49028 16.3867L7.48662 16.4012C12.7623 17.721 16.4187 18.4209 21.8686 15.9813L21.5239 15.2111C21.1097 15.397 20.6901 15.5704 20.2655 15.7311C18.8643 15.5429 17.4006 15.4192 15.8989 15.3536L16.8847 12.4367L15.6851 11.7824L15.2356 8.48438H13.6406V6.23438H12.4219V3.75H11.5781ZM11.2031 7.07812H12.7969V8.48438H11.2031V7.07812ZM9.51687 9.32812H14.3893L14.6781 11.2331L12 9.92569L9.32187 11.233L9.51687 9.32812ZM12 10.8868V15.3093C11.7463 15.3141 11.4922 15.3204 11.2377 15.3281H9.05989L8.07219 12.8758L12 10.8868ZM13.9767 11.9062C14.3909 11.9062 14.7267 12.242 14.7267 12.6562C14.7267 13.0705 14.3909 13.4062 13.9767 13.4062C13.5625 13.4062 13.2267 13.0705 13.2267 12.6562C13.2267 12.242 13.5625 11.9062 13.9767 11.9062ZM11.3086 16.1719H15.1713C16.226 16.2051 17.2627 16.2661 18.272 16.3575C15.5099 17.04 13.1448 16.8165 10.3252 16.2078C10.6529 16.1936 10.9807 16.1816 11.3086 16.1719ZM5.08053 17.5483C4.7082 17.5472 4.34614 17.5592 3.99847 17.5877L4.06733 18.4287C6.61686 18.2199 10.3024 19.0142 12.936 19.2351C15.5442 19.4537 18.0907 19.1561 20.8417 18.6017L20.675 17.7746C17.9656 18.3207 15.5056 18.6039 13.0066 18.3943C10.7963 18.209 7.68678 17.556 5.08053 17.5483ZM6.02834 19.2023C5.45656 19.1985 4.83833 19.2311 4.22286 19.29C2.99192 19.4081 1.80411 19.6255 1.04169 19.9585L1.37933 20.7317C1.95598 20.4799 3.12514 20.243 4.30339 20.13C5.48173 20.017 6.70137 20.0216 7.38992 20.1593C8.93473 20.4681 11.6747 20.9532 13.8877 20.8832L13.8611 20.0399C11.7961 20.1052 9.07639 19.6359 7.5553 19.3318C7.12545 19.2459 6.60017 19.206 6.02834 19.2023Z'
                      fill='currentColor'
                    />
                  </g>
                </svg>

                <select className='w-full pl-10 pr-4 py-3.5 rounded-lg text-white/70 selection:text-white focus:outline-none bg-transparent appearance-none'>
                  <option>Cruise category</option>
                  <option>Luxury Cruise</option>
                  <option>Budget Cruise</option>
                  <option>Family Cruise</option>
                </select>
              </div>
            </div>
            <button
              data-state='Default'
              className='min-w-40 px-6 py-3.5 bg-white rounded-[32px] shadow-[0px_5px_12px_0px_rgba(130,130,130,0.10)] outline outline-1 outline-offset-[-1px] flex justify-center items-center gap-3 overflow-hidden'
            >
              <div className="justify-start text-blue-700 text-lg font-bold font-['Be_Vietnam_Pro']">
                Search
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
