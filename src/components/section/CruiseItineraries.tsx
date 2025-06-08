"use client";

import { motion } from "framer-motion";
import { Calendar, Star, Users } from "lucide-react";

export default function CruiseItineraries() {
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

  const halongBayItineraries = [
    {
      id: 1,
      title: "Halong Bay Luxury Cruise",
      duration: "2 Days 1 Night",
      price: "$299",
      image: "images/home/itineraries/image_itineraries1.png",
      rating: 4.8,
      reviews: 234,
    },
    {
      id: 2,
      title: "Royal Palace Cruise",
      duration: "3 Days 2 Nights",
      price: "$489",
      image: "images/home/itineraries/image_itineraries5.png",
      rating: 4.9,
      reviews: 156,
    },
    {
      id: 3,
      title: "Paradise Peak Cruise",
      duration: "2 Days 1 Night",
      price: "$349",
      image: "images/home/itineraries/image_itineraries3.png",
      rating: 4.7,
      reviews: 189,
    },
    {
      id: 4,
      title: "Dragon Legend Cruise",
      duration: "3 Days 2 Nights",
      price: "$599",
      image: "images/home/itineraries/image_itineraries4.png",
      rating: 4.8,
      reviews: 267,
    },
  ];

  const catBaItineraries = [
    {
      id: 5,
      title: "Cat Ba Island Explorer",
      duration: "2 Days 1 Night",
      price: "$249",
      image: "images/home/itineraries/image_itineraries5.png",
      rating: 4.6,
      reviews: 143,
    },
    {
      id: 6,
      title: "Lan Ha Bay Adventure",
      duration: "3 Days 2 Nights",
      price: "$399",
      image: "images/home/itineraries/image_itineraries3.png",
      rating: 4.7,
      reviews: 198,
    },
    {
      id: 7,
      title: "Cat Ba National Park Tour",
      duration: "1 Day",
      price: "$89",
      image: "images/home/itineraries/image_itineraries2.png",
      rating: 4.5,
      reviews: 87,
    },
  ];

  return (
    <section className='py-20 bg-white' id='customize'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Cruise Itineraries
          </h2>
          <p className='text-lg text-gray-600 max-w-4xl mx-auto'>
            Explore our carefully crafted itineraries for Halong Bay and Cat Ba
            Island, designed to showcase the best of Vietnam&apos;s natural
            wonders
          </p>
        </motion.div>

        {/* Halong Bay Section */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='mb-16'
        >
          <h3 className='text-3xl font-bold text-gray-900 mb-8'>
            Halong Bay Cruises
          </h3>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {halongBayItineraries.map((cruise, index) => (
              <motion.div
                key={cruise.id}
                variants={fadeInUp}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group ${
                  index === 1 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`overflow-hidden ${
                    index === 1 ? "aspect-[2/1]" : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={cruise.image}
                    alt={cruise.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                </div>
                <div className='p-6'>
                  <div className='flex items-center justify-between mb-3'>
                    <h4 className='font-bold text-gray-900 text-lg'>
                      {cruise.title}
                    </h4>
                    <div className='flex items-center space-x-1'>
                      <Star className='w-4 h-4 text-yellow-400 fill-current' />
                      <span className='text-sm font-medium'>
                        {cruise.rating}
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center space-x-4 text-sm text-gray-600 mb-4'>
                    <div className='flex items-center space-x-1'>
                      <Calendar className='w-4 h-4' />
                      <span>{cruise.duration}</span>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <Users className='w-4 h-4' />
                      <span>{cruise.reviews} reviews</span>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-2xl font-bold text-blue-600'>
                      {cruise.price}
                    </span>
                    <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm'>
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cat Ba Island Section */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={stagger}
          className='mb-16'
        >
          <h3 className='text-3xl font-bold text-gray-900 mb-8'>
            Cat Ba Island Tours
          </h3>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {catBaItineraries.map((tour, index) => (
              <motion.div
                key={tour.id}
                variants={fadeInUp}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group ${
                  index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                } ${index === 1 ? "lg:col-span-2" : ""}`}
              >
                <div
                  className={`overflow-hidden ${
                    index === 1 ? "aspect-[2/1]" : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                </div>
                <div className='p-6'>
                  <div className='flex items-center justify-between mb-3'>
                    <h4 className='font-bold text-gray-900 text-lg'>
                      {tour.title}
                    </h4>
                    <div className='flex items-center space-x-1'>
                      <Star className='w-4 h-4 text-yellow-400 fill-current' />
                      <span className='text-sm font-medium'>{tour.rating}</span>
                    </div>
                  </div>
                  <div className='flex items-center space-x-4 text-sm text-gray-600 mb-4'>
                    <div className='flex items-center space-x-1'>
                      <Calendar className='w-4 h-4' />
                      <span>{tour.duration}</span>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <Users className='w-4 h-4' />
                      <span>{tour.reviews} reviews</span>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-2xl font-bold text-blue-600'>
                      {tour.price}
                    </span>
                    <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm'>
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='text-center bg-blue-50 rounded-2xl p-12'
        >
          <h3 className='text-3xl font-bold text-gray-900 mb-4'>
            Can&apos;t Find What You&apos;re Looking For?
          </h3>
          <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
            Our expert travel advisors can create a custom itinerary tailored to
            your preferences, budget, and schedule.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium'>
              Customize Your Trip
            </button>
            <button className='border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium'>
              Speak to an Expert
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
