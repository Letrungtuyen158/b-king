import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cruisePackages } from "@/data/cruises";
import IconHeart from "@/components/icon/IconHeart";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function CruisePackagesSection() {
  return (
    <section id='cruise-packages' className='py-20'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center mb-2.5'>
          <motion.h2
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInLeft}
            className='text-4xl font-bold text-blue-800'
          >
            Cruise Packages
          </motion.h2>
          <motion.button
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='text-stone-950 hover:text-blue-700 font-medium text-lg flex items-center gap-1 leading-relaxed'
          >
            <span>View All</span>
            <ArrowRight className='size-6' />
          </motion.button>
        </div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={stagger}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'
        >
          {cruisePackages.slice(0, 6).map((cruise) => (
            <motion.div
              key={cruise.id}
              variants={fadeInUp}
              className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group'
            >
              <Link href={`/cruise/${cruise.slug}`}>
                <div className='aspect-[4/3] overflow-hidden'>
                  <img
                    src={cruise.images.main}
                    alt={cruise.name}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-gray-900 mb-2 leading-7 line-clamp-2'>
                    {cruise.name}
                  </h3>
                  <p className='text-neutral-500 text-sm mb-4 line-clamp-3 leading-tight'>
                    {cruise.subtitle}
                  </p>
                  <div className='flex justify-between items-end'>
                    <div>
                      <span className='text-xs text-neutral-500'>
                        Starting from
                      </span>
                      <div className='text-2xl font-semibold leading-loose tracking-wide text-blue-800'>
                        ${cruise.currentPrice}
                      </div>
                      <span className='text-xs text-neutral-500'>/person</span>
                    </div>
                    <div className='flex flex-col items-end gap-3'>
                      <IconHeart />
                      <button className='bg-white text-blue-800 px-4 py-2 rounded hover:bg-blue-50 text-xs border border-blue-800 transition-colors'>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
