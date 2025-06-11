import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function NewsletterSection() {
  return (
    <section id='newsletter' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='max-w-4xl mx-auto text-center'
        >
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Sign Up For Our Free Newsletter
          </h2>
          <p className='text-gray-600 mb-8'>
            Receive news and offers from Halong Bay Tours
          </p>

          <div className='flex flex-col md:flex-row gap-4 max-w-md mx-auto'>
            <input
              type='email'
              placeholder='Enter your Email'
              className='flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium'>
              Subscribe Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
