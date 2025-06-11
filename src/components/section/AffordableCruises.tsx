"use client";

import { motion } from "framer-motion";
import { TourCard } from "@/components/ui";

export default function AffordableCruises() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
      routing: "Ha Noi - Ha Long - Ha Noi",
      tourStyle: "Nature, Culture & History Tour",
      tourStart: "In Ha Noi",
      tourEnd: "In Ha Noi",
      tripDuration: "2 Days 1 Night",
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
      routing: "Ha Noi - Lan Ha - Ha Noi",
      tourStyle: "Luxury, Adventure",
      tourStart: "In Ha Noi",
      tourEnd: "In Ha Noi",
      tripDuration: "3 Days 2 Nights",
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
      routing: "Ha Noi - Bai Tu Long - Ha Noi",
      tourStyle: "Classic, Local Experience",
      tourStart: "In Ha Noi",
      tourEnd: "In Ha Noi",
      tripDuration: "2 Days 1 Night",
    },
  ];

  return (
    <section className='py-20' id='booking-tour'>
      <div className='container mx-auto md:!px-20 !py-20 !px-4 bg-gradient-to-br from-slate-50 via-sky-50 to-sky-50 rounded-[20px] space-y-12'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='text-center'
        >
          <h2 className='text-4xl font-bold text-blue-800 mb-4'>
            Affordable Cruise Packages
          </h2>
          <p className='text-sm text-neutral-900'>
            With over 20 years of expertise, Asia Pacific Travel has been
            crafting memorable journeys for travelers worldwide. Our experienced
            tour guides and dedicated advisor team ensure every detail of your
            adventure is seamless and unforgettable.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-3 gap-6 items-center *:w-full'>
          {cruisePackages.map((cruise) => (
            <TourCard key={cruise.id} {...cruise} />
          ))}
        </div>
      </div>
    </section>
  );
}
