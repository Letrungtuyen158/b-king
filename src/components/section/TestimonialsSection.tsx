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
      className='py-20 bg-blue-900 text-white relative overflow-hidden'
    >
      <div
        className='absolute inset-0 bg-cover bg-center opacity-20'
        style={{
          backgroundImage: `url('/images/home/testimonials/image_testimonials.png')`,
        }}
      />
      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Unforgettable Travel Experiences
          </h2>
          <p className='text-lg text-blue-100 max-w-4xl mx-auto'>
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
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 ${
                index === 1 || index === 3 || index === 4 ? "bg-blue-600" : ""
              }`}
            >
              <div className='flex items-center mb-4'>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className='w-12 h-12 rounded-full mr-4'
                />
                <div>
                  <h4 className='font-bold'>{testimonial.name}</h4>
                  <p className='text-sm opacity-80'>{testimonial.role}</p>
                </div>
              </div>
              <p className='text-sm leading-relaxed'>
                &quot;{testimonial.content}&quot;
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
