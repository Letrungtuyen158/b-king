"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Star,
  ChevronLeft,
  ChevronRight,
  User,
  Mail,
  Phone,
} from "lucide-react";

export default function AffordableCruises() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const cruisePackages = [
    {
      id: 1,
      name: "Orchid Classic Cruise",
      duration: "2 Days 1 Night",
      location: "Halong Bay",
      rating: 4.8,
      reviews: 234,
      originalPrice: 299,
      currentPrice: 249,
      image: "/images/home/affordable/image_affordable1.png",
      highlights: [
        "Luxury Accommodation",
        "All Meals Included",
        "English Guide",
      ],
    },
    {
      id: 2,
      name: "Paradise Elegance",
      duration: "3 Days 2 Nights",
      location: "Halong & Lan Ha Bay",
      rating: 4.9,
      reviews: 189,
      originalPrice: 499,
      currentPrice: 399,
      image: "/images/home/affordable/image_affordable2.png",
      highlights: ["Premium Cabin", "Kayaking", "Cave Exploration"],
    },
    {
      id: 3,
      name: "Dragon Legend Cruise",
      duration: "2 Days 1 Night",
      location: "Bai Tu Long Bay",
      rating: 4.7,
      reviews: 156,
      originalPrice: 349,
      currentPrice: 289,
      image: "/images/home/affordable/image_affordable3.png",
      highlights: ["Traditional Style", "Cooking Class", "Fishing Village"],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cruisePackages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + cruisePackages.length) % cruisePackages.length
    );
  };

  return (
    <section className='py-20 bg-gray-50' id='booking-tour'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Affordable Cruise Packages
          </h2>
          <p className='text-lg text-gray-600 max-w-4xl mx-auto'>
            Discover amazing value with our carefully selected cruise packages
            that don&apos;t compromise on quality or experience
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Cruise Slider */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='relative'
          >
            <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
              <div className='aspect-[4/3] overflow-hidden relative'>
                <img
                  src={cruisePackages[currentSlide].image}
                  alt={cruisePackages[currentSlide].name}
                  className='w-full h-full object-cover object-center'
                />
                <div className='absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium'>
                  Save $
                  {cruisePackages[currentSlide].originalPrice -
                    cruisePackages[currentSlide].currentPrice}
                </div>
              </div>
              <div className='p-6'>
                <div className='flex items-center justify-between mb-4'>
                  <h3 className='text-xl font-bold text-gray-900'>
                    {cruisePackages[currentSlide].name}
                  </h3>
                  <div className='flex items-center space-x-1'>
                    <Star className='w-4 h-4 text-yellow-400 fill-current' />
                    <span className='font-medium'>
                      {cruisePackages[currentSlide].rating}
                    </span>
                    <span className='text-gray-500 text-sm'>
                      ({cruisePackages[currentSlide].reviews})
                    </span>
                  </div>
                </div>

                <div className='flex items-center space-x-4 text-sm text-gray-600 mb-4'>
                  <div className='flex items-center space-x-1'>
                    <Calendar className='w-4 h-4' />
                    <span>{cruisePackages[currentSlide].duration}</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <MapPin className='w-4 h-4' />
                    <span>{cruisePackages[currentSlide].location}</span>
                  </div>
                </div>

                <div className='flex flex-wrap gap-2 mb-6'>
                  {cruisePackages[currentSlide].highlights.map(
                    (highlight, index) => (
                      <span
                        key={index}
                        className='px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full'
                      >
                        {highlight}
                      </span>
                    )
                  )}
                </div>

                <div className='flex items-center justify-between'>
                  <div>
                    <div className='flex items-center space-x-2'>
                      <span className='text-lg text-gray-500 line-through'>
                        ${cruisePackages[currentSlide].originalPrice}
                      </span>
                      <span className='text-2xl font-bold text-blue-600'>
                        ${cruisePackages[currentSlide].currentPrice}
                      </span>
                    </div>
                    <span className='text-sm text-gray-500'>/person</span>
                  </div>
                  <button className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors'>
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors'
            >
              <ChevronLeft className='w-5 h-5 text-gray-600' />
            </button>
            <button
              onClick={nextSlide}
              className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors'
            >
              <ChevronRight className='w-5 h-5 text-gray-600' />
            </button>

            {/* Slide Indicators */}
            <div className='flex justify-center space-x-2 mt-4'>
              {cruisePackages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={stagger}
            className='bg-white rounded-2xl shadow-lg p-8'
          >
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              Quick Booking
            </h3>

            <form className='space-y-6'>
              <motion.div
                variants={fadeInUp}
                className='grid md:grid-cols-2 gap-4'
              >
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Departure Date
                  </label>
                  <input
                    type='date'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Return Date
                  </label>
                  <input
                    type='date'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className='grid md:grid-cols-2 gap-4'
              >
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Adults
                  </label>
                  <select className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>3 Adults</option>
                    <option>4+ Adults</option>
                  </select>
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Children
                  </label>
                  <select className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option>0 Children</option>
                    <option>1 Child</option>
                    <option>2 Children</option>
                    <option>3+ Children</option>
                  </select>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Cruise Package
                </label>
                <select className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option>Orchid Classic Cruise</option>
                  <option>Paradise Elegance</option>
                  <option>Dragon Legend Cruise</option>
                </select>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Special Requests
                </label>
                <textarea
                  rows={3}
                  placeholder='Any special requirements or requests...'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </motion.div>

              <motion.button
                variants={fadeInUp}
                type='submit'
                className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium'
              >
                Check Availability & Book
              </motion.button>
            </form>

            {/* Contact Info */}
            <motion.div
              variants={fadeInUp}
              className='mt-8 pt-8 border-t border-gray-200'
            >
              <h4 className='font-semibold text-gray-900 mb-4'>
                Need Help? Contact Us
              </h4>
              <div className='space-y-3 text-sm'>
                <div className='flex items-center space-x-3'>
                  <Phone className='w-4 h-4 text-blue-600' />
                  <span>+84 24 38364212</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <Mail className='w-4 h-4 text-blue-600' />
                  <span>info@halongbaytours.com</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <User className='w-4 h-4 text-blue-600' />
                  <span>24/7 Customer Support</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
