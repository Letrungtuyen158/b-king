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

export default function ExperienceSection() {
  return (
    <section id='cruise-category' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold text-blue-800 mb-4'>
            Choose Your Perfect Halong Bay Experience
          </h2>
          <p className='text-sm text-gray-900'>
            With over 20 years of expertise, Asia Pacific Travel has been
            crafting memorable journeys for travelers worldwide. Our experienced
            tour guides and dedicated advisor team ensure every detail of your
            adventure is seamless and unforgettable.
          </p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={stagger}
          className='grid md:grid-cols-3 gap-8'
        >
          {[
            {
              title: "Why Cruise with Us",
              image: "/images/home/experience/image_experience1.png",
              description:
                "Experience luxury and comfort with our premium cruise services",
            },
            {
              title: "Full & Half Package Tours",
              image: "/images/home/experience/image_experience2.png",
              description:
                "Flexible tour options to suit your schedule and preferences",
            },
            {
              title: "Think To Do",
              image: "/images/home/experience/image_experience3.png",
              description:
                "Exciting activities and adventures await your discovery",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className='group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300'
            >
              <div className='aspect-[3/4] overflow-hidden'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent' />
              <div className='absolute bottom-0 inset-x-0 p-3 text-white'>
                <h3 className='text-lg font-bold text-center p-6 rounded-xl overflow-hidden bg-black/10 shadow-[0px_4px_48px_0px_rgba(31,93,151,0.15)] backdrop-blur-[5px]'>
                  {item.title}
                </h3>
                {/* <p className='text-sm opacity-90'>{item.description}</p> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
