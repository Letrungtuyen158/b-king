"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Users,
  ChevronLeft,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { cruisePackages } from "@/data/cruises";
import { Header, Footer } from "@/components/layout";
import {
  TravelBlog,
  AffordableCruises,
  CruiseItineraries,
} from "@/components/section";
import IconHeart from "@/components/icon/IconHeart";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Animation variants
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

  // Testimonials data
  const testimonials = [
    {
      name: "Jane Smith",
      role: "Business owner",
      content:
        "We wanted a quick getaway, and the Cat Ba tour was perfect. In just a few days, we experienced breathtaking views and thrilling adventures. The team was professional and made everything easy for us.",
      avatar: "/images/home/testimonials/image_testimonials1.png",
    },
    {
      name: "Cody Fisher",
      role: "Business owner",
      content:
        "What stood out to us was the attention to detail in the itinerary. Each stop was well-planned, allowing us to explore the beauty of Cat Ba without feeling rushed. The documentation provided was also very helpful.",
      avatar: "/images/home/testimonials/image_testimonials2.png",
    },
    {
      name: "Guy Hawkins",
      role: "Business owner",
      content:
        "The Cat Ba tour package was a delightful experience! The guides were knowledgeable and friendly, making every moment enjoyable. The stunning landscapes and vibrant marine life left us in awe. Highly recommend this adventure!",
      avatar: "/images/home/testimonials/image_testimonials3.png",
    },
    {
      name: "Kristin Watson",
      role: "Business owner",
      content:
        "The Cat Ba tour package was fantastic! The guides were attentive and ensured we had a great time. The scenery was breathtaking, and the activities were well thought out. We&apos;ll definitely be back!",
      avatar: "/images/home/testimonials/image_testimonials4.png",
    },
    {
      name: "Eleanor Pena",
      role: "Business owner",
      content:
        "The tour exceeded our expectations! The activities were engaging, and the local cuisine was a highlight. We appreciated the seamless communication throughout the trip.",
      avatar: "/images/home/testimonials/image_testimonials5.png",
    },
    {
      name: "Darlene Robertson",
      role: "Business owner",
      content:
        "This was our second time booking a tour with them, and once again, they did not disappoint. Everything was perfectly organized, from the transportation to the accommodations. A truly memorable experience!",
      avatar: "/images/home/testimonials/image_testimonials6.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* {loading && <Loading />} */}
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        id="daily-departure"
        className="relative min-h-screen flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('/images/home/image_hero.png')`,
            filter: "brightness(0.7)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl script-font mb-4 leading-tight">
              Unforgettable{" "}
              <span className="text-yellow-300">Halong Bay Cruises</span>
            </h1>
            <p className="text-xl md:text-5xl mb-12 font-bold">
              with Asia Pacific Travel - Since 2002
            </p>
          </motion.div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="px-6 py-4 bg-white/30 rounded-2xl flex backdrop-blur-lg max-w-7xl w-full mx-auto"
          >
            <div className="flex flex-col w-full md:flex-row *:px-3 md:divide-x md:divide-white">
              <div className="w-full relative">
                <div className="flex items-center">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white size-6" />
                  <input
                    type="text"
                    placeholder="Search destinations, hotels"
                    className="w-full pl-10 pr-4 py-3.5 rounded-lg text-white focus:outline-none bg-transparent"
                  />
                </div>
              </div>
              <div className="w-full relative">
                <div className="flex items-center">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-white size-6" />
                  <select className="w-full pl-10 pr-4 py-3.5 rounded-lg text-white focus:outline-none bg-transparent appearance-none">
                    <option>Cruise category</option>
                    <option>Luxury Cruise</option>
                    <option>Budget Cruise</option>
                    <option>Family Cruise</option>
                  </select>
                </div>
              </div>
              <button
                data-state="Default"
                className="min-w-40 px-6 py-3.5 bg-white rounded-[32px] shadow-[0px_5px_12px_0px_rgba(130,130,130,0.10)] outline outline-1 outline-offset-[-1px] flex justify-center items-center gap-3 overflow-hidden"
              >
                <div className="justify-start text-blue-700 text-lg font-bold font-['Be_Vietnam_Pro']">
                  Search
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Choose Your Perfect Experience */}
      <section id="cruise-category" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-800 mb-6">
              Choose Your Perfect Halong Bay Experience
            </h2>
            <p className="text-sm text-gray-900">
              With over 20 years of expertise, Asia Pacific Travel has been
              crafting memorable journeys for travelers worldwide. Our
              experienced tour guides and dedicated advisor team ensure every
              detail of your adventure is seamless and unforgettable.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
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
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-3 text-white">
                  <h3 className="text-lg font-bold text-center p-6 rounded-xl overflow-hidden bg-black/10 shadow-[0px_4px_48px_0px_rgba(31,93,151,0.15)] backdrop-blur-[5px]">
                    {item.title}
                  </h3>
                  {/* <p className='text-sm opacity-90'>{item.description}</p> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cruise Packages */}
      <section id="cruise-packages" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-2.5">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="text-4xl font-bold text-blue-800"
            >
              Cruise Packages
            </motion.h2>
            <motion.button
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-stone-950 hover:text-blue-700 font-medium text-lg flex items-center gap-1 leading-relaxed"
            >
              <span>View All</span>
              <ArrowRight className="size-6" />
            </motion.button>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {cruisePackages.slice(0, 6).map((cruise) => (
              <motion.div
                key={cruise.id}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <Link href={`/cruise/${cruise.slug}`}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={cruise.images.main}
                      alt={cruise.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-7 line-clamp-2">
                      {cruise.name}
                    </h3>
                    <p className="text-neutral-500 text-sm mb-4 line-clamp-3 leading-tight">
                      {cruise.subtitle}
                    </p>
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-xs text-neutral-500">
                          Starting from
                        </span>
                        <div className="text-2xl font-semibold leading-loose tracking-wide text-blue-800">
                          ${cruise.currentPrice}
                        </div>
                        <span className="text-xs text-neutral-500">
                          /person
                        </span>
                      </div>
                      <div className="flex flex-col items-end gap-3">
                        <IconHeart />
                        <button className="bg-white text-blue-800 px-4 py-2 rounded hover:bg-blue-50 text-xs border border-blue-800 transition-colors">
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

      {/* Discover Section with Slider */}
      <section
        id="best-seller"
        className="py-20 lg:min-h-[800px] lg:gap-32 bg-gray-900 flex items-center text-white relative overflow-hidden"
      >
        <div className="overflow-hidden absolute inset-0 ">
          <div className="bg-gradient-to-r absolute inset-0 z-[1] bg-blend-linear-burn bg-blue-800/20 backdrop-blur-[5px]" />
          <img
            src={"/images/home/image_discover.png"}
            alt={"Discover Banner"}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <h2 className="text-4xl text-white leading-loose mb-3 script-font">
                Vietnam Adventure Travel
              </h2>
              <h3 className="text-4xl md:text-5xl font-black mb-3">
                Discover The Magic Of
                <br />
                Halong Bay And Beyond
              </h3>
              <ul className="space-y-2 text-md text-white">
                <li className="flex items-center gap-3 ml-3">
                  <div className="size-1 bg-white rounded-full flex-shrink-0" />
                  <span>Titov Island: A Scenic Spot With Panoramic Views.</span>
                </li>
                <li className="flex items-center gap-3 ml-3">
                  <div className="size-1 bg-white rounded-full flex-shrink-0" />
                  <span>
                    Sung Sot Cave: Explore The Mesmerizing Stalactites And
                    Stalagmites.
                  </span>
                </li>
                <li className="flex items-center gap-3 ml-3">
                  <div className="size-1 bg-white rounded-full flex-shrink-0" />
                  <span>
                    Luon Cave: Experience Kayaking Or Bamboo Boat Rides.
                  </span>
                </li>
                <li className="flex items-center gap-3 ml-3">
                  <div className="size-1 bg-white rounded-full flex-shrink-0" />
                  <span>
                    Bai Tu Long Bay: A Tranquil Alternative To Halong Bay.
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Slider */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <img
                  src={discoverSlides[currentSlide].image}
                  alt={discoverSlides[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-2xl font-bold mb-2">
                    {discoverSlides[currentSlide].title}
                  </h4>
                  <p className="text-blue-200">
                    {discoverSlides[currentSlide].subtitle}
                  </p>
                </div>

                {/* Slide indicators */}
                <div className="absolute bottom-6 right-6 flex space-x-2">
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
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() =>
                  setCurrentSlide((currentSlide + 1) % discoverSlides.length)
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advisor Team Section */}
      <section id="why-us" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our advisor team is ready to help you
              <br />
              plan your dream trip to Halong Bay
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="size-1 bg-blue-600 rounded-full flex-shrink-0" />
                <span className="text-gray-700">
                  20+ Years Of Expertise As A Top-Rated Tour Operator.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-1 bg-blue-600 rounded-full flex-shrink-0" />
                <span className="text-gray-700">
                  Professional, Friendly, And Knowledgeable Tour Guides.
                </span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="size-1 bg-blue-600 rounded-full flex-shrink-0" />
                <span className="text-gray-700">
                  Customizable Packages To Suit Every Traveler&apos;s Needs.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-1 bg-blue-600 rounded-full flex-shrink-0" />
                <span className="text-gray-700">
                  Commitment To Quality And Safety.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-1 bg-blue-600 rounded-full flex-shrink-0" />
                <span className="text-gray-700">
                  Include Testimonials From Past Customers.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Tour Options Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                image: "/images/home/tour_options/image_tour_option1.png",
                title: "2 Days Cruise",
                description: "Experience The Ancient History & Beaches",
              },
              {
                image: "/images/home/tour_options/image_tour_option2.png",
                title: "3 Days Cruise",
                description: "Discover The Land Of Pharaohs & Pyramids",
              },

              {
                image: "/images/home/tour_options/image_tour_option3.png",
                title: "Cat Ba Island",
                description: "Embark On A Journey For Your Lifetime",
                fullWidth: true,
              },
              {
                image: "/images/home/tour_options/image_tour_option4.png",
                title: "Halong Bay",
                description: "Indulge In The Art, Culture, And Cuisine",
                isHighlight: true,
              },
            ].map((option, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group overflow-hidden rounded-2xl"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-sm opacity-90 mb-4">
                    {option.description}
                  </p>
                  {option.isHighlight && (
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      All Packages
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cruise Itineraries Section */}
      <CruiseItineraries />

      {/* Testimonials Section */}
      <section
        id="activities"
        className="py-20 bg-blue-900 text-white relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('/images/home/testimonials/image_testimonials.png')`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Unforgettable Travel Experiences
            </h2>
            <p className="text-lg text-blue-100 max-w-4xl mx-auto">
              With over 20 years of expertise, Asia Pacific Travel has been
              crafting memorable journeys for travelers worldwide. Our
              experienced tour guides and dedicated advisor team ensure every
              detail of your adventure is seamless and unforgettable.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 ${
                  index === 1 || index === 3 || index === 4 ? "bg-blue-600" : ""
                }`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm opacity-80">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Affordable Cruises Section */}
      <AffordableCruises />

      {/* Travel Blog Section */}
      <TravelBlog />

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sign Up For Our Free Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Receive news and offers from Halong Bay Tours
            </p>

            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your Email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Subscribe Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

