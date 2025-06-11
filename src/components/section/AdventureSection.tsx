"use client";

import { BookingForm } from "@/components/ui";
import { motion } from "framer-motion";
import { Calendar, User, ChevronRight } from "lucide-react";

export default function AdventureSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section
      className='flex overflow-visible relative gap-10 items-center lg:pt-24 lg:pb-44 pt-0 pb-20 bg-white max-lg:flex-col-reverse'
      id='adventure-section'
    >
      <div className='container px-4 relative'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={stagger}
          className=''
        >
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className='grow shrink min-w-60 lg:w-1/2 w-full z-10'
          >
            <div className='flex flex-col justify-center items-start w-full max-md:max-w-full'>
              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className='text-3xl script-font leading-none lg:text-center text-stone-900'
              >
                Vietnam Adventure Travel
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
                className='text-4xl font-bold leading-none lg:text-center text-blue-800 max-md:max-w-full'
              >
                Discover Your Next Adventure
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className='self-stretch text-sm leading-5 text-neutral-900 max-md:max-w-full lg:text-center'
              >
                With over 20 years of expertise, Asia Pacific Travel has been
                crafting memorable journeys for travelers worldwide. Our
                experienced tour guides and dedicated advisor team ensure every
                detail of your adventure is seamless and unforgettable.
              </motion.p>
            </div>
            <motion.div variants={fadeInUp} transition={{ delay: 0.5 }}>
              <BookingForm />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={stagger}
        className='lg:absolute lg:right-0 lg:top-1/2 lg:pl-0 pl-4 lg:-translate-y-1/2'
      >
        <motion.img
          variants={fadeInUp}
          transition={{ delay: 0.6 }}
          src='/images/home/image_adventure.png'
          alt='Vietnam adventure travel destination'
          className='object-contain rounded-[800px_0px_0px_800px] lg:max-w-[45%] w-full ml-auto z-20'
        />
      </motion.div>
    </section>
  );
}
