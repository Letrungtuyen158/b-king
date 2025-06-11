import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AdvisorTeamSection() {
  return (
    <section id='why-us' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='text-center mb-6'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-blue-800 mb-6'>
            Our advisor team is ready to help you
            <br />
            plan your dream trip to Halong Bay
          </h2>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={stagger}
          className='grid md:grid-cols-2 gap-8 mb-16'
        >
          <div className='space-y-1'>
            <div className='flex items-center gap-3'>
              <div className='size-1 bg-neutral-900 rounded-full flex-shrink-0' />
              <span className='text-neutral-900'>
                20+ Years Of Expertise As A Top-Rated Tour Operator.
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <div className='size-1 bg-neutral-900 rounded-full flex-shrink-0' />
              <span className='text-neutral-900'>
                Professional, Friendly, And Knowledgeable Tour Guides.
              </span>
            </div>
          </div>
          <div className='space-y-1'>
            <div className='flex items-center gap-3'>
              <div className='size-1 bg-neutral-900 rounded-full flex-shrink-0' />
              <span className='text-neutral-900'>
                Customizable Packages To Suit Every Traveler&apos;s Needs.
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <div className='size-1 bg-neutral-900 rounded-full flex-shrink-0' />
              <span className='text-neutral-900'>
                Commitment To Quality And Safety.
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <div className='size-1 bg-neutral-900 rounded-full flex-shrink-0' />
              <span className='text-neutral-900'>
                Include Testimonials From Past Customers.
              </span>
            </div>
          </div>
        </motion.div>

        {/* Tour Options Grid */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={stagger}
          className='grid md:grid-cols-9 grid-cols-1 grid-rows-1 md:grid-rows-5 gap-6'
        >
          {[
            {
              image: "/images/home/tour_options/image_tour_option1.png",
              title: "2 Days Cruise",
              description: "Experience The Ancient History & Beaches",
              gridClass: "col-span-3 row-span-3",
              aspectClass: "aspect-square",
            },
            {
              image: "/images/home/tour_options/image_tour_option2.png",
              title: "3 Days Cruise",
              description: "Discover The Land Of Pharaohs & Pyramids",
              gridClass: "col-span-3 row-span-3 col-start-4",
              aspectClass: "aspect-square",
            },
            {
              image: "/images/home/tour_options/image_tour_option3.png",
              title: "Cat Ba Island",
              description: "Embark On A Journey For Your Lifetime",
              gridClass: "col-span-6 row-span-2 col-start-1 row-start-4",
              aspectClass: "aspect-[3/1]",
            },
            {
              image: "/images/home/tour_options/image_tour_option4.png",
              title: "Halong Bay",
              description: "Indulge In The Art, Culture, And Cuisine",
              gridClass: "col-span-3 row-span-5 col-start-7 row-start-1",
              aspectClass: "aspect-[3/5]",
              isHighlight: true,
            },
          ].map((option, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`${option.gridClass} relative group overflow-hidden rounded-2xl`}
            >
              <div className={`${option.aspectClass} overflow-hidden h-full`}>
                <img
                  src={option.image}
                  alt={option.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
              <div className='absolute bottom-0 left-0 right-0 p-4 text-white'>
                <h3 className='text-2xl font-bold mb-2'>{option.title}</h3>
                <p className='text-sm font-medium mb-4'>{option.description}</p>
                {option.isHighlight && (
                  <button className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors'>
                    All Packages
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
