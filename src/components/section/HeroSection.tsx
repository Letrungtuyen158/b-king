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

      <div className='relative z-10 text-center text-white max-w-4xl mx-auto px-4'>
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
          className='px-6 py-4 bg-white/30 rounded-2xl flex backdrop-blur-lg max-w-7xl w-full mx-auto'
        >
          <div className='flex flex-col w-full md:flex-row *:px-3 md:divide-x md:divide-white'>
            <div className='w-full relative'>
              <div className='flex items-center'>
                <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-white size-6' />
                <input
                  type='text'
                  placeholder='Search destinations, hotels'
                  className='w-full pl-10 pr-4 py-3.5 rounded-lg text-white focus:outline-none bg-transparent'
                />
              </div>
            </div>
            <div className='w-full relative'>
              <div className='flex items-center'>
                <Users className='absolute left-3 top-1/2 -translate-y-1/2 text-white size-6' />
                <select className='w-full pl-10 pr-4 py-3.5 rounded-lg text-white focus:outline-none bg-transparent appearance-none'>
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
