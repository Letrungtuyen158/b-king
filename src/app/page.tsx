"use client";

import { Header, Footer } from "@/components/layout";
import {
  TravelBlog,
  AffordableCruises,
  CruiseItineraries,
  AdvisorTeamSection,
  HeroSection,
  ExperienceSection,
  CruisePackagesSection,
  DiscoverSliderSection,
  TestimonialsSection,
  NewsletterSection,
} from "@/components/section";

export default function HomePage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* {loading && <Loading />} */}
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Choose Your Perfect Experience */}
      <ExperienceSection />

      {/* Cruise Packages */}
      <CruisePackagesSection />

      {/* Discover Section with Slider */}
      <DiscoverSliderSection />

      {/* Advisor Team Section */}
      <AdvisorTeamSection />

      {/* Cruise Itineraries Section */}
      <CruiseItineraries />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Affordable Cruises Section */}
      <AffordableCruises />

      {/* Travel Blog Section */}
      <TravelBlog />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
