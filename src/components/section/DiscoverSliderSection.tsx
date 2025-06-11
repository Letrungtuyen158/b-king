import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface DiscoverSliderSectionProps {}

export default function DiscoverSliderSection({}: DiscoverSliderSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider data
  const discoverSlides = [
    {
      title: "Titov Island: A Scenic Spot With Panoramic Views.",
      subtitle: "Embark On A Journey For Your Lifetime",
      image: "/images/home/discover/image_discover1.png",
    },
    {
      title:
        "Sung Sot Cave: Explore The Mesmerizing Stalactites And Stalagmites.",
      subtitle: "Discover Hidden Wonders",
      image: "/images/home/discover/image_discover2.png",
    },
    {
      title: "Luon Cave: Experience Kayaking Or Bamboo Boat Rides.",
      subtitle: "Adventure Awaits",
      image: "/images/home/discover/image_discover3.png",
    },
  ];

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
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

  return (
    <section
      id='best-seller'
      className='py-20 lg:min-h-[800px] lg:gap-32 bg-gray-900 flex items-center text-white relative overflow-hidden'
    >
      <div className='overflow-hidden absolute inset-0 '>
        <div className='bg-gradient-to-r absolute inset-0 z-[1] bg-blend-linear-burn bg-blue-800/20 backdrop-blur-[5px]' />
        <img
          src={"/images/home/image_discover.png"}
          alt={"Discover Banner"}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='container mx-auto relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <h2 className='text-4xl text-white leading-loose mb-3 script-font'>
              Vietnam Adventure Travel
            </h2>
            <h3 className='text-4xl md:text-5xl font-black mb-3'>
              Discover The Magic Of
              <br />
              Halong Bay And Beyond
            </h3>
            <ul className='space-y-2 text-md text-white'>
              <li className='flex items-center gap-3 ml-3'>
                <div className='size-1 bg-white rounded-full flex-shrink-0' />
                <span>Titov Island: A Scenic Spot With Panoramic Views.</span>
              </li>
              <li className='flex items-center gap-3 ml-3'>
                <div className='size-1 bg-white rounded-full flex-shrink-0' />
                <span>
                  Sung Sot Cave: Explore The Mesmerizing Stalactites And
                  Stalagmites.
                </span>
              </li>
              <li className='flex items-center gap-3 ml-3'>
                <div className='size-1 bg-white rounded-full flex-shrink-0' />
                <span>
                  Luon Cave: Experience Kayaking Or Bamboo Boat Rides.
                </span>
              </li>
              <li className='flex items-center gap-3 ml-3'>
                <div className='size-1 bg-white rounded-full flex-shrink-0' />
                <span>
                  Bai Tu Long Bay: A Tranquil Alternative To Halong Bay.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Slider */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='relative'
          >
            <div className='aspect-[4/3] rounded-2xl overflow-hidden relative'>
              <img
                src={discoverSlides[currentSlide].image}
                alt={discoverSlides[currentSlide].title}
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
              <div className='absolute bottom-6 left-6 right-6'>
                <h4 className='text-2xl font-bold mb-2'>
                  {discoverSlides[currentSlide].title}
                </h4>
                <p className='text-blue-200'>
                  {discoverSlides[currentSlide].subtitle}
                </p>
              </div>

              {/* Slide indicators */}
              <div className='absolute bottom-6 right-6 flex space-x-2'>
                {discoverSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() =>
                setCurrentSlide(
                  (currentSlide - 1 + discoverSlides.length) %
                    discoverSlides.length
                )
              }
              className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors'
            >
              <ChevronLeft className='w-6 h-6' />
            </button>
            <button
              onClick={() =>
                setCurrentSlide((currentSlide + 1) % discoverSlides.length)
              }
              className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors'
            >
              <ChevronRight className='w-6 h-6' />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
