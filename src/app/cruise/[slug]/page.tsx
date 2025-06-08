"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Star,
  Users,
  Check,
  X,
  Shield,
  Mail,
  Clock,
  Building2,
  Ship,
  ArrowLeft,
} from "lucide-react";
import { getCruiseBySlug } from "@/data/cruises";
import { Button, Input, Select } from "@/components/ui";

interface CruiseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function CruiseDetailPage({ params }: CruiseDetailPageProps) {
  const { slug } = use(params);
  const cruise = getCruiseBySlug(slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("information");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [bookingStep, setBookingStep] = useState("availability"); // "availability" or "summary"

  if (!cruise) {
    notFound();
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleBooking = () => {
    if (bookingStep === "availability") {
      setBookingStep("summary");
    } else {
      // Handle final booking logic
      alert("Booking confirmed! Redirecting to payment...");
    }
  };

  const handleBackToAvailability = () => {
    setBookingStep("availability");
  };

  // Calculate pricing
  const adultPrice = cruise.currentPrice;
  const childPrice = cruise.currentPrice * 0.7; // 70% of adult price
  const adultsTotal = adults * adultPrice;
  const childrenTotal = children * childPrice;
  const grandTotal = adultsTotal + childrenTotal;

  return (
    <div className=" bg-gray-50">
      {/* Header */}
      <div className=" mx-auto px-8 py-8 pt-[180px]">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Cruise Title */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mb-6"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {cruise.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{cruise.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{cruise.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{cruise.rating}</span>
                  <span>({cruise.reviewCount} reviews)</span>
                </div>
              </div>
            </motion.div>

            {/* Image Gallery */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mb-8"
            >
              <div className="mb-4">
                <img
                  src={cruise.images.main}
                  alt={cruise.name}
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              <div className="grid grid-cols-6 gap-2">
                {cruise.images.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden ${
                      selectedImage === index ? "ring-2 ring-blue-500" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Features Icons */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            >
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-medium text-sm">Easy Cancellation</div>
                  <div className="text-xs text-gray-500">
                    Cancel up to 24 hours in advance
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                <Shield className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-medium text-sm">Health Precautions</div>
                  <div className="text-xs text-gray-500">
                    Special health and safety measures
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                <Mail className="w-5 h-5 text-purple-600" />
                <div>
                  <div className="font-medium text-sm">
                    Instant Confirmation
                  </div>
                  <div className="text-xs text-gray-500">
                    Receive confirmation email right
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                <Users className="w-5 h-5 text-orange-600" />
                <div>
                  <div className="font-medium text-sm">Tour Guide</div>
                  <div className="text-xs text-gray-500">
                    English, Vietnamese, French
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tabs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mb-8"
            >
              <div className="border-b border-gray-200 mb-6">
                <div className="flex space-x-8">
                  {[
                    { id: "information", label: "Information" },
                    { id: "itinerary", label: "Itinerary" },
                    { id: "reviews", label: "Reviews" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-3 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab.id
                          ? "border-blue-500 text-blue-600"
                          : "border-transparent text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="bg-white rounded-2xl p-6">
                {activeTab === "information" && (
                  <div className="space-y-8">
                    {/* Highlights */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Highlights
                      </h3>
                      <ul className="space-y-2">
                        {cruise.highlights.map((highlight, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* About Hotel */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        About The {cruise.overview.hotel}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {cruise.aboutHotel}
                      </p>
                    </div>

                    {/* About Cruise */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        About {cruise.name.split("+")[1] || "The Cruise"}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {cruise.aboutCruise}
                      </p>
                    </div>

                    {/* What's Included/Not Included */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                          Includes
                        </h3>
                        <ul className="space-y-2">
                          {cruise.included.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-3"
                            >
                              <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-700">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                          Not Includes
                        </h3>
                        <ul className="space-y-2">
                          {cruise.notIncluded.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-3"
                            >
                              <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-700">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Meeting Point */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        Meeting Point Address
                      </h3>
                      <p className="text-gray-700 mb-2">
                        {cruise.meetingPoint.address}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {cruise.meetingPoint.description}
                      </p>
                    </div>

                    {/* Health Precautions */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        Health Precautions
                      </h3>
                      <ul className="space-y-2">
                        {cruise.healthPrecautions.map((precaution, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{precaution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Notes */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        Note
                      </h3>
                      <ul className="space-y-2">
                        {cruise.notes.map((note, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === "itinerary" && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Detailed Itinerary
                    </h3>

                    {/* Day 1 */}
                    <div className="flex space-x-4">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                        <div className="w-0.5 h-24 bg-blue-200 mt-2"></div>
                      </div>
                      <div className="flex-1 pb-8">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">
                          Day 1
                        </h4>
                        <h5 className="font-semibold text-gray-800 mb-3">
                          Hanoi Arrival
                        </h5>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Pick-up at Noi Bai International Airport</li>
                          <li>• Private transfer to Oriental Jade Hotel</li>
                          <li>• Free time to explore Hanoi Old Quarter</li>
                        </ul>
                      </div>
                    </div>

                    {/* Day 2 */}
                    <div className="flex space-x-4">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                        <div className="w-0.5 h-32 bg-blue-200 mt-2"></div>
                      </div>
                      <div className="flex-1 pb-8">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">
                          Day 2
                        </h4>
                        <h5 className="font-semibold text-gray-800 mb-3">
                          Hanoi → Halong Bay
                        </h5>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Morning pick-up (8:15–8:45 AM) from hotel</li>
                          <li>• 2.5-hour drive to Tuan Chau Marina</li>
                          <li>• Board Stellar of the Seas Cruise</li>
                          <li>• Lunch onboard, cruise through Lan Ha Bay</li>
                          <li>
                            • Activities: Kayaking / Sampan boat, swimming,
                            sunset party, cooking class
                          </li>
                          <li>• Overnight on cruise</li>
                        </ul>
                      </div>
                    </div>

                    {/* Day 3 */}
                    <div className="flex space-x-4">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                        <div className="w-0.5 h-24 bg-blue-200 mt-2"></div>
                      </div>
                      <div className="flex-1 pb-8">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">
                          Day 3
                        </h4>
                        <h5 className="font-semibold text-gray-800 mb-3">
                          Halong Bay → Hanoi
                        </h5>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Morning Tai Chi, explore cave or lagoon</li>
                          <li>• Brunch onboard while cruising back</li>
                          <li>• Return to Hanoi in the afternoon</li>
                          <li>• Overnight at Oriental Jade Hotel</li>
                        </ul>
                      </div>
                    </div>

                    {/* Day 4 */}
                    <div className="flex space-x-4">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">
                          Day 4
                        </h4>
                        <h5 className="font-semibold text-gray-800 mb-3">
                          Hanoi Departure
                        </h5>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Free time in the morning</li>
                          <li>• Airport transfer for your flight home</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "reviews" && (
                  <div className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Customer Review
                      </h3>
                      <div className="flex items-center justify-center space-x-4 mb-6">
                        <div className="text-4xl font-bold text-gray-900">
                          4.30
                        </div>
                        <div>
                          <div className="text-gray-500 mb-2">
                            (254 Reviews)
                          </div>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4].map((star) => (
                              <Star
                                key={star}
                                className="w-5 h-5 text-yellow-400 fill-current"
                              />
                            ))}
                            <Star className="w-5 h-5 text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Review 1 */}
                      <div className="flex space-x-4 p-4 bg-gray-50 rounded-lg">
                        <img
                          src="/images/home/testimonials/image_testimonials5.png"
                          alt="Arlene McCoy"
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="flex space-x-1">
                              {[1, 2, 3, 4].map((star) => (
                                <Star
                                  key={star}
                                  className="w-4 h-4 text-yellow-400 fill-current"
                                />
                              ))}
                              <Star className="w-4 h-4 text-gray-300" />
                            </div>
                          </div>
                          <h5 className="font-semibold text-gray-900 mb-1">
                            Good Tour, Really Well Organised
                          </h5>
                          <p className="text-sm text-gray-500 mb-2">
                            Arlene McCoy • 2 October 2012
                          </p>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            The tour was very well organised. One minus is that
                            you get completely bombarded with information. You
                            also have to stand up for too long at the private
                            entrance to the Tower of London, which leads to a
                            lack of time later. Lunch was the same, too stress,
                            the quality was great but you couldn&apos;t enjoy
                            it. I&apos;d like to ask the organisers: please
                          </p>
                        </div>
                      </div>

                      {/* Review 2 */}
                      <div className="flex space-x-4 p-4 bg-gray-50 rounded-lg">
                        <img
                          src="/images/home/testimonials/image_testimonials1.png"
                          alt="Jenny Wilson"
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="flex space-x-1">
                              {[1, 2, 3, 4].map((star) => (
                                <Star
                                  key={star}
                                  className="w-4 h-4 text-yellow-400 fill-current"
                                />
                              ))}
                              <Star className="w-4 h-4 text-gray-300" />
                            </div>
                          </div>
                          <h5 className="font-semibold text-gray-900 mb-1">
                            Informative But Disappointed Not Seeing Changing Of
                            The Guards
                          </h5>
                          <p className="text-sm text-gray-500 mb-2">
                            Jenny Wilson • 2 October 2012
                          </p>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            The tour was very well organised. One minus is that
                            you get completely bombarded with information. You
                            also have to stand up for too long at the private
                            entrance to the Tower of London, which leads to a
                            lack of time later. Lunch was the same, too stress,
                            the quality was great but you couldn&apos;t enjoy
                            it. I&apos;d like to ask the organisers: please
                          </p>
                        </div>
                      </div>

                      {/* Review 3 */}
                      <div className="flex space-x-4 p-4 bg-gray-50 rounded-lg">
                        <img
                          src="/images/home/testimonials/image_testimonials2.png"
                          alt="Ralph Edwards"
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="flex space-x-1">
                              {[1, 2, 3, 4].map((star) => (
                                <Star
                                  key={star}
                                  className="w-4 h-4 text-yellow-400 fill-current"
                                />
                              ))}
                              <Star className="w-4 h-4 text-gray-300" />
                            </div>
                          </div>
                          <h5 className="font-semibold text-gray-900 mb-1">
                            I Love Their Way Of Style
                          </h5>
                          <p className="text-sm text-gray-500 mb-2">
                            Ralph Edwards • 2 October 2012
                          </p>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            The tour was very well organised. One minus is that
                            you get completely bombarded with information. You
                            also have to stand up for too long at the private
                            entrance to the Tower of London, which leads to a
                            lack of time later. Lunch was the same, too stress,
                            the quality was great but you couldn&apos;t enjoy
                            it. I&apos;d like to ask the organisers: please
                          </p>
                        </div>
                      </div>

                      {/* Review 4 */}
                      <div className="flex space-x-4 p-4 bg-gray-50 rounded-lg">
                        <img
                          src="/images/home/testimonials/image_testimonials3.png"
                          alt="Courtney Henry"
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="flex space-x-1">
                              {[1, 2, 3, 4].map((star) => (
                                <Star
                                  key={star}
                                  className="w-4 h-4 text-yellow-400 fill-current"
                                />
                              ))}
                              <Star className="w-4 h-4 text-gray-300" />
                            </div>
                          </div>
                          <h5 className="font-semibold text-gray-900 mb-1">
                            Enjoyed Very Much
                          </h5>
                          <p className="text-sm text-gray-500 mb-2">
                            Courtney Henry • 2 October 2012
                          </p>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            The tour was very well organised. One minus is that
                            you get completely bombarded with information. You
                            also have to stand up for too long at the private
                            entrance to the Tower of London, which leads to a
                            lack of time later. Lunch was the same, too stress,
                            the quality was great but you couldn&apos;t enjoy
                            it. I&apos;d like to ask the organisers: please
                          </p>
                        </div>
                      </div>

                      {/* Review 5 */}
                      <div className="flex space-x-4 p-4 bg-gray-50 rounded-lg">
                        <img
                          src="/images/home/testimonials/image_testimonials4.png"
                          alt="Devon Lane"
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="flex space-x-1">
                              {[1, 2, 3, 4].map((star) => (
                                <Star
                                  key={star}
                                  className="w-4 h-4 text-yellow-400 fill-current"
                                />
                              ))}
                              <Star className="w-4 h-4 text-gray-300" />
                            </div>
                          </div>
                          <h5 className="font-semibold text-gray-900 mb-1">
                            Nice!!!!!!
                          </h5>
                          <p className="text-sm text-gray-500 mb-2">
                            Devon Lane • 2 October 2012
                          </p>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            The tour was very well organised. One minus is that
                            you get completely bombarded with information. You
                            also have to stand up for too long at the private
                            entrance to the Tower of London, which leads to a
                            lack of time later. Lunch was the same, too stress,
                            the quality was great but you couldn&apos;t enjoy
                            it. I&apos;d like to ask the organisers: please
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                        View More
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Pricing Card */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 shadow-lg mb-6"
              >
                <div className="text-right mb-4">
                  <span className="text-sm text-gray-500">Starting from</span>
                  <div className="flex items-center justify-end space-x-2">
                    <span className="text-lg text-gray-400 line-through">
                      ${cruise.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-3xl font-bold text-blue-600">
                      ${cruise.currentPrice.toFixed(2)}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">/person</span>
                </div>

                {/* Trip Overview */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Trip Overview
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-blue-600 rounded-full" />
                      <span>{cruise.overview.hotel}</span>
                    </div>
                    {cruise.overview.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-600 rounded-full" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Form */}
                <div className="space-y-4">
                  {bookingStep === "availability" ? (
                    <>
                      <h3 className="font-semibold text-gray-900">
                        Check Availability
                      </h3>

                      <Input
                        label="From"
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                        fullWidth
                      />

                      <Input
                        label="To"
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                        fullWidth
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <Select
                          label="No. Of Adults"
                          value={adults}
                          onChange={(e) => setAdults(Number(e.target.value))}
                          fullWidth
                        >
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </Select>

                        <Select
                          label="No. Of Children"
                          value={children}
                          onChange={(e) => setChildren(Number(e.target.value))}
                          fullWidth
                        >
                          {[0, 1, 2, 3, 4].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </Select>
                      </div>

                      <Button
                        onClick={handleBooking}
                        variant="primary"
                        size="lg"
                        fullWidth
                      >
                        Check Availability
                      </Button>

                      <Button variant="outline" size="lg" fullWidth>
                        Save to Wishlist
                      </Button>

                      <Button variant="success" size="lg" fullWidth>
                        Share the Tour
                      </Button>
                    </>
                  ) : (
                    <>
                      {/* Booking Summary */}
                      <div className="space-y-6">
                        <h3 className="font-semibold text-gray-900 text-lg">
                          Trip Overview
                        </h3>

                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <Building2 className="w-5 h-5 text-gray-600" />
                            <span className="text-gray-700">
                              {cruise.overview.hotel}
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Ship className="w-5 h-5 text-gray-600" />
                            <span className="text-gray-700">
                              Stellar of the Seas
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Clock className="w-5 h-5 text-gray-600" />
                            <span className="text-gray-700">
                              4 Days 3 Nights
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-5 h-5 text-gray-600" />
                            <span className="text-gray-700">
                              Hanoi, Halong Bay
                            </span>
                          </div>
                        </div>

                        <Button
                          onClick={handleBackToAvailability}
                          variant="ghost"
                          size="sm"
                          className="flex items-center space-x-2"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Back To Choose Date</span>
                        </Button>

                        <div className="border-t border-gray-200 pt-6 space-y-4">
                          {adults > 0 && (
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-medium text-gray-900">
                                  {adults} Adults
                                </div>
                                <div className="text-sm text-gray-500">
                                  {adults} x ${adultPrice.toFixed(2)}
                                </div>
                              </div>
                              <div className="text-lg font-semibold text-blue-600">
                                ${adultsTotal.toFixed(2)}
                              </div>
                            </div>
                          )}

                          {children > 0 && (
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-medium text-gray-900">
                                  {children} Children
                                </div>
                                <div className="text-sm text-gray-500">
                                  {children} x {childPrice.toFixed(2)}
                                </div>
                              </div>
                              <div className="text-lg font-semibold text-blue-600">
                                ${childrenTotal.toFixed(2)}
                              </div>
                            </div>
                          )}

                          <div className="border-t border-gray-200 pt-4">
                            <div className="flex justify-between items-center">
                              <div className="text-xl font-bold text-gray-900">
                                Total
                              </div>
                              <div className="text-2xl font-bold text-blue-600">
                                ${grandTotal.toFixed(2)}
                              </div>
                            </div>
                          </div>
                        </div>

                        <Button
                          onClick={handleBooking}
                          variant="primary"
                          size="lg"
                          fullWidth
                          className="py-4 text-lg font-semibold"
                        >
                          Book Now
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

