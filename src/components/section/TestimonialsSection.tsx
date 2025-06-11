import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

interface TestimonialsSectionProps {}

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

export default function TestimonialsSection({}: TestimonialsSectionProps) {
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
    <section
      id='activities'
      className='py-20 text-white relative overflow-hidden '
    >
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: `url('/images/home/testimonials/image_testimonials.png')`,
        }}
      />
      <div className='absolute inset-0 z-[1] bg-gradient-to-b from-black/40 to-neutral-600/0 backdrop-blur-[5px]' />
      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='text-center mb-12'
        >
          <h2 className='text-4xl text-white font-bold mb-4'>
            Unforgettable Travel Experiences
          </h2>
          <p className='text-sm text-white mx-auto'>
            With over 20 years of expertise, Asia Pacific Travel has been
            crafting memorable journeys for travelers worldwide.
            <br /> Our experienced tour guides and dedicated advisor team ensure
            every detail of your adventure is seamless and unforgettable.
          </p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={stagger}
          className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:grid-rows-9 gap-6'
        >
          {testimonials.map((testimonial, index) => {
            const gridClasses = [
              "lg:row-span-4 lg:col-start-1 lg:row-start-2 max-lg:order-1 md:order-1",
              "lg:row-span-4 lg:col-start-1 lg:row-start-6 max-lg:order-2 md:order-2",
              "lg:row-span-4 lg:col-start-2 lg:row-start-1 max-lg:order-4 md:order-3",
              "lg:row-span-4 lg:col-start-2 lg:row-start-5 max-lg:order-3 md:order-4",
              "lg:row-span-4 lg:col-start-3 lg:row-start-2 max-lg:order-5 md:order-5",
              "lg:row-span-4 lg:col-start-3 lg:row-start-6 max-lg:order-6 md:order-6",
            ];

            const activeCard = index === 1 || index === 2 || index === 5;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`rounded-xl p-6 outline outline-1 flex flex-col outline-offset-[-1px] ${
                  gridClasses[index]
                } ${
                  activeCard
                    ? "bg-blue-800 outline-blue-800"
                    : "bg-white outline-blue-200"
                }`}
              >
                <div className='flex items-center mb-2'>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className='w-12 h-12 rounded-full mr-4'
                  />
                  <div>
                    <h4
                      className={`font-bold text-sm md:text-lg ${
                        activeCard ? "text-white" : "text-blue-800"
                      }`}
                    >
                      {testimonial.name}
                    </h4>
                    <h4
                      className={`text-sm md:text-base font-medium ${
                        activeCard ? "text-neutral-300" : "text-neutral-500"
                      }`}
                    >
                      {testimonial.role}
                    </h4>
                  </div>
                </div>
                <p
                  className={`leading-normal mt-auto text-sm md:text-base ${
                    activeCard ? "text-white" : "text-black"
                  }`}
                >
                  &quot;{testimonial.content}&quot;
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
