"use client";

import { motion } from "framer-motion";
import { Calendar, User, ChevronRight } from "lucide-react";

export default function TravelBlog() {
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

  const blogPosts = [
    {
      id: 1,
      title: "When is the Best Time To Visit Halong Bay?",
      excerpt: "Discover the perfect seasons for your Halong Bay adventure",
      author: "Travel Expert",
      date: "Jan 15, 2025",
      image: "/images/home/blog/image_blog1.png",
    },
    {
      id: 2,
      title: "Top 10 Must-Visit Caves in Halong Bay",
      excerpt: "Explore the most stunning caves and grottos",
      author: "Adventure Guide",
      date: "Jan 12, 2025",
      image: "/images/home/blog/image_blog2.png",
    },
    {
      id: 3,
      title: "Halong Bay Photography Tips",
      excerpt: "Capture the perfect shot of limestone karsts",
      author: "Photography Pro",
      date: "Jan 10, 2025",
      image: "/images/home/blog/image_blog3.png",
    },
    {
      id: 4,
      title: "Traditional Vietnamese Cuisine on Board",
      excerpt: "Experience authentic flavors during your cruise",
      author: "Food Critic",
      date: "Jan 8, 2025",
      image: "/images/home/blog/image_blog4.png",
    },
  ];

  return (
    <section className='py-20 bg-sky-50'>
      <div className='container mx-auto px-4 space-y-10'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='text-center'
        >
          <h2 className='text-4xl font-bold text-blue-800 mb-4'>Travel Blog</h2>
          <p className='text-sm text-neutral-900'>
            Get insider tips and stories from our travel experts to make your
            Halong Bay experience unforgettable
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Featured Post */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='lg:col-span-2'
          >
            <div className='bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300'>
              <div className='aspect-[16/9] overflow-hidden'>
                <img
                  src='/images/home/image_discover.png'
                  alt='Featured Post'
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
              </div>
              <div className='p-8'>
                <div className='flex items-center space-x-4 text-sm text-gray-500 mb-4'>
                  <div className='flex items-center space-x-2'>
                    <User className='w-4 h-4' />
                    <span>Travel Expert</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Calendar className='w-4 h-4' />
                    <span>Jan 20, 2025</span>
                  </div>
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  The Ultimate Guide to Halong Bay: Everything You Need to Know
                  Before You Go
                </h3>
                <p className='text-gray-600 mb-6 leading-relaxed'>
                  Discover the secrets of one of Vietnam&apos;s most iconic
                  destinations. From the best cruise options to hidden gems that
                  most tourists never see, this comprehensive guide will help
                  you plan the perfect Halong Bay adventure. Learn about the
                  geological wonders, local culture, and insider tips that will
                  make your journey truly unforgettable.
                </p>
                <button className='text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2 group'>
                  <span>Read Full Article</span>
                  <ChevronRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Sidebar with Recent Posts */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={stagger}
            className='space-y-6'
          >
            <div className='bg-gray-50 rounded-2xl p-6'>
              <h4 className='text-xl font-bold text-gray-900 mb-6'>
                Recent Posts
              </h4>
              <div className='space-y-6'>
                {blogPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    variants={fadeInUp}
                    className='group cursor-pointer'
                  >
                    <div className='flex space-x-4'>
                      <div className='flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden'>
                        <img
                          src={post.image}
                          alt={post.title}
                          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                        />
                      </div>
                      <div className='flex-1'>
                        <h5 className='font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors'>
                          {post.title}
                        </h5>
                        <div className='flex items-center space-x-2 text-xs text-gray-500'>
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            {/* <motion.div
              variants={fadeInUp}
              className='bg-blue-600 rounded-2xl p-6 text-white'
            >
              <h4 className='text-xl font-bold mb-4'>Stay Updated</h4>
              <p className='text-blue-100 mb-4'>
                Get the latest travel tips and exclusive offers delivered to
                your inbox
              </p>
              <div className='space-y-3'>
                <input
                  type='email'
                  placeholder='Your email address'
                  className='w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300'
                />
                <button className='w-full bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium'>
                  Subscribe Now
                </button>
              </div>
            </motion.div> */}

            {/* Popular Tags */}
            <motion.div
              variants={fadeInUp}
              className='bg-white rounded-2xl p-6'
            >
              <h4 className='text-xl font-bold text-gray-900 mb-4'>
                Popular Tags
              </h4>
              <div className='flex flex-wrap gap-2'>
                {[
                  "Halong Bay",
                  "Cruise",
                  "Travel Tips",
                  "Photography",
                  "Adventure",
                  "Culture",
                  "Food",
                  "Nature",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className='px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-100 hover:text-blue-600 cursor-pointer transition-colors'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
