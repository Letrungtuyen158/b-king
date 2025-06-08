export interface CruisePackage {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  location: string;
  duration: string;
  rating: number;
  reviewCount: number;
  originalPrice: number;
  currentPrice: number;
  images: {
    main: string;
    gallery: string[];
  };
  overview: {
    hotel: string;
    highlights: string[];
    location: string;
  };
  highlights: string[];
  aboutHotel: string;
  aboutCruise: string;
  included: string[];
  notIncluded: string[];
  meetingPoint: {
    address: string;
    description: string;
  };
  healthPrecautions: string[];
  notes: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const cruisePackages: CruisePackage[] = [
  {
    id: "1",
    slug: "orchid-classic-cruise-2-days-1-night",
    name: "Orchid Classic Cruise 2 Days/1 Night",
    subtitle:
      "Immerse yourself in the rich culture of Hanoi with a stay at the Hanoi Boutique Hotel followed by a scenic cruise on the Dragon Legend, exploring the stunning limestone karsts of Halong Bay!",
    location: "Hanoi, Halong Bay",
    duration: "2 Days 1 Nights",
    rating: 4.8,
    reviewCount: 345,
    originalPrice: 290,
    currentPrice: 249.99,
    images: {
      main: "/images/home/packages/image_package1.png",
      gallery: [
        "/images/home/packages/image_package2.png",
        "/images/home/packages/image_package3.png",
        "/images/home/packages/image_package4.png",
        "/images/home/packages/image_package5.png",
        "/images/home/packages/image_package6.png",
        "/images/home/packages/image_package7.png",
      ],
    },
    overview: {
      hotel: "Oriental Jade Hotel",
      highlights: [
        "Stellar of the Seas",
        "4 Days 3 Nights",
        "Hanoi, Halong Bay",
      ],
      location: "Hanoi, Halong Bay",
    },
    highlights: [
      "Comfortable and spacious room with full-length windows in the 5-star hotel amidst Hanoi Old Quarter",
      "Overnight on the luxury cruise with state-of-the-art facilities",
      "Less touristy Lan Ha Bay route with highlights: Dark, Bright Cave & An Ech Area",
      "Transfer door-to-door by luxury car and limousine van",
      "The best view for our top-seller combo: the Oriental Jade Hotel + Stellar of the Seas Cruiser",
    ],
    aboutHotel:
      "Located at the heart of Hanoi Old Quarter, the Oriental Jade Hotel is a go-to place for a luxury stay. The hotel boasts a beautiful Old Quarter location with a rooftop pool, outdoor gym, swimming pool, and spa. Rooms at Oriental Jade measure from 25 to 150 sqm and are well equipped with premium room and bath amenities. The quick access to the hotspots of Hanoi, delicious dining options makes the stay even more convenient.",
    aboutCruise:
      "A perfect luxury touch matching with Oriental Jade Hotel must be Stellar of the Seas Cruise. The 5-star Cruise launched in 2018 but is never getting better among travel enthusiasts including 22 suites with a private balcony and ensuite bathroom with tub. The ship facilitates the utmost comfort for every single traveler. That is not to mention the top-of-the-range facilities such as mini golf course, outdoor & outdoor pool, wine & cigar cellar, fitness room, spa, etc.",
    included: [
      "Round trip airport pick up and drop off",
      "2-night stay at Oriental Emerald (panoramic windows, no view) - Oriental Jade Hotel",
      "1-night stay at junior suite cabin - Stellar of the Seas",
      "Entry pick up and drop off by Halong Limousine van from hotel to cruise and back",
    ],
    notIncluded: [
      "International airfares",
      "Beauty & spa services",
      "Other beverages, tips and personal expenses",
      "All other services not clearly mentioned in the inclusions list",
      "Peak season surcharge: Surcharge 10$ 30| per for cruise date for Lunar New Year (5, 10, 17/02/2024) (1 nights)",
    ],
    meetingPoint: {
      address:
        "Meet your guide inside the west entrance of Altab Ali Park (Whitechapel Road). It's opposite the entrance to Altgate East Tube Station and the Whitechapel Gallery.",
      description:
        "Look for a guide wearing SMT attire and holding a red SMT flag.",
    },
    healthPrecautions: [
      "All required protective equipment is provided",
      "All areas that customers touch are frequently cleaned",
      "You must keep social distance while in vehicles",
      "Temperature checks for all participants",
    ],
    notes: [
      "Cruise itinerary and schedule are subject to change due to weather, tide levels and operating conditions without prior notice.",
      "Please inform us your flight details (flight number and departure/arrival time so we can schedule the pick up and drop off)",
      "Meals on board are fusion, Vietnamese, seafood & international. Please advise us of any special dietary requirements when you make your journey flyer.",
      "Advance registration is mandatory with full name, passport number and visa expiration date.",
      "Wifi is available onboard. However, intermittent service is expected due to nature of internet signals at sea.",
    ],
    seo: {
      title:
        "Orchid Classic Cruise 2 Days/1 Night - Halong Bay Tours | Asia Pacific Travel",
      description:
        "Experience luxury with Orchid Classic Cruise 2 Days/1 Night in Halong Bay. Stay at Oriental Jade Hotel & cruise on Stellar of the Seas. Book now from $249.99",
      keywords: [
        "halong bay cruise",
        "orchid classic cruise",
        "2 days 1 night halong bay",
        "oriental jade hotel",
        "stellar of the seas",
        "luxury halong bay tour",
        "vietnam cruise package",
        "halong bay travel",
      ],
    },
  },
  {
    id: "2",
    slug: "luxury-duo-sofitel-legend-metropole-paradise-elegance",
    name: "Luxury Duo: Sofitel Legend Metropole + Paradise Elegance",
    subtitle:
      "Immerse yourself in the rich culture of Hanoi with a stay at the Hanoi Boutique Hotel followed by a scenic cruise on the Dragon Legend, exploring the stunning limestone karsts of Halong Bay!",
    location: "Hanoi, Halong Bay",
    duration: "3 Days 2 Nights",
    rating: 4.9,
    reviewCount: 278,
    originalPrice: 850,
    currentPrice: 770.0,
    images: {
      main: "/images/home/packages/image_package2.png",
      gallery: [
        "/images/home/packages/image_package3.png",
        "/images/home/packages/image_package4.png",
        "/images/home/packages/image_package5.png",
        "/images/home/packages/image_package6.png",
        "/images/home/packages/image_package7.png",
        "/images/home/packages/image_package8.png",
      ],
    },
    overview: {
      hotel: "Sofitel Legend Metropole",
      highlights: [
        "Paradise Elegance Cruise",
        "3 Days 2 Nights",
        "Hanoi, Halong Bay",
      ],
      location: "Hanoi, Halong Bay",
    },
    highlights: [
      "Stay at the legendary Sofitel Legend Metropole Hanoi - a luxury heritage hotel",
      "Cruise on Paradise Elegance with premium amenities and services",
      "Private balcony suites with panoramic bay views",
      "Fine dining experiences with international and Vietnamese cuisine",
      "Exclusive activities including cooking class and tai chi",
    ],
    aboutHotel:
      "Sofitel Legend Metropole Hanoi is a legendary luxury hotel that has been hosting distinguished guests since 1901. Located in the heart of Hanoi, this heritage property combines French colonial charm with modern luxury. The hotel features elegant rooms and suites, award-winning restaurants, a luxurious spa, and beautifully landscaped gardens.",
    aboutCruise:
      "Paradise Elegance is a boutique cruise vessel offering the pinnacle of luxury on Halong Bay. With only 17 suites featuring private balconies, guests enjoy personalized service and exclusive experiences. The cruise features fine dining restaurants, a spa, sundeck pool, and various recreational activities.",
    included: [
      "2-night stay at Sofitel Legend Metropole Hanoi",
      "1-night stay on Paradise Elegance cruise",
      "Private transfer by luxury vehicle",
      "All meals as mentioned in itinerary",
      "English-speaking tour guide",
    ],
    notIncluded: [
      "International flights",
      "Personal expenses",
      "Spa treatments",
      "Alcoholic beverages",
      "Travel insurance",
    ],
    meetingPoint: {
      address: "Sofitel Legend Metropole Hanoi lobby",
      description:
        "Meet your guide at the hotel lobby for departure to Halong Bay.",
    },
    healthPrecautions: [
      "Temperature checks for all guests",
      "Sanitization protocols in place",
      "Social distancing measures",
      "Regular cleaning of all facilities",
    ],
    notes: [
      "Advance booking required due to limited availability",
      "Special dietary requirements can be accommodated",
      "Weather conditions may affect cruise schedule",
      "Dress code applies for fine dining restaurants",
    ],
    seo: {
      title:
        "Luxury Duo: Sofitel Legend Metropole + Paradise Elegance Cruise | Halong Bay Tours",
      description:
        "Experience ultimate luxury with Sofitel Legend Metropole Hanoi and Paradise Elegance cruise. 3 days 2 nights premium package from $770. Book now!",
      keywords: [
        "sofitel legend metropole",
        "paradise elegance cruise",
        "luxury halong bay",
        "hanoi luxury hotel",
        "premium cruise package",
        "halong bay luxury tour",
        "vietnam luxury travel",
      ],
    },
  },
  {
    id: "3",
    slug: "cultural-escape-hanoi-boutique-hotel-dragon-legend-cruise",
    name: "Cultural Escape: Hanoi Boutique Hotel + Dragon Legend Cruise",
    subtitle:
      "Immerse yourself in the rich culture of Hanoi with a stay at the Hanoi Boutique Hotel followed by a scenic cruise on the Dragon Legend, exploring the stunning limestone karsts of Halong Bay!",
    location: "Hanoi, Halong Bay",
    duration: "2 Days 1 Night",
    rating: 4.7,
    reviewCount: 192,
    originalPrice: 380,
    currentPrice: 320.0,
    images: {
      main: "/images/home/packages/image_package3.png",
      gallery: [
        "/images/home/packages/image_package4.png",
        "/images/home/packages/image_package5.png",
        "/images/home/packages/image_package6.png",
        "/images/home/packages/image_package7.png",
        "/images/home/packages/image_package8.png",
        "/images/home/packages/image_package9.png",
      ],
    },
    overview: {
      hotel: "Hanoi Boutique Hotel",
      highlights: [
        "Dragon Legend Cruise",
        "2 Days 1 Night",
        "Cultural Activities",
      ],
      location: "Hanoi, Halong Bay",
    },
    highlights: [
      "Boutique accommodation in Hanoi's cultural district",
      "Traditional Dragon Legend cruise experience",
      "Cultural activities including cooking class and village visit",
      "Authentic Vietnamese cuisine experiences",
      "Small group tours for personalized experience",
    ],
    aboutHotel:
      "Hanoi Boutique Hotel offers an intimate cultural experience in the heart of Hanoi's Old Quarter. This charming property showcases traditional Vietnamese architecture and design while providing modern comforts. Guests can explore nearby cultural attractions, traditional markets, and authentic restaurants.",
    aboutCruise:
      "Dragon Legend Cruise provides an authentic Halong Bay experience with traditional Vietnamese hospitality. The cruise features comfortable cabins, local cuisine, and cultural activities that showcase the rich heritage of the bay area.",
    included: [
      "1-night stay at Hanoi Boutique Hotel",
      "1-night stay on Dragon Legend cruise",
      "Cultural activities and village visit",
      "All meals during cruise",
      "Transportation between destinations",
    ],
    notIncluded: [
      "International airfare",
      "Personal expenses",
      "Additional activities not mentioned",
      "Alcoholic beverages",
      "Travel insurance",
    ],
    meetingPoint: {
      address: "Hanoi Boutique Hotel reception",
      description:
        "Meet your cultural guide at the hotel reception for departure.",
    },
    healthPrecautions: [
      "Health screening for all participants",
      "Sanitization of all equipment",
      "Small group sizes maintained",
      "Cultural sites follow safety protocols",
    ],
    notes: [
      "Cultural activities may vary based on local conditions",
      "Respectful attire required for cultural sites",
      "Photography restrictions may apply in some areas",
      "Local customs and traditions should be respected",
    ],
    seo: {
      title:
        "Cultural Escape: Hanoi Boutique Hotel + Dragon Legend Cruise | Cultural Tours Vietnam",
      description:
        "Immerse in Vietnamese culture with Hanoi Boutique Hotel and Dragon Legend cruise. Authentic 2-day cultural experience from $320. Book your cultural journey!",
      keywords: [
        "vietnam cultural tour",
        "hanoi boutique hotel",
        "dragon legend cruise",
        "cultural escape vietnam",
        "authentic vietnam experience",
        "halong bay cultural tour",
        "vietnamese culture",
      ],
    },
  },
  {
    id: "4",
    slug: "adventure-package-ogallery-premier-hotel-azalea-cruise",
    name: "Adventure Package: O'Gallery Premier Hotel + Azalea Cruise",
    subtitle:
      "Immerse yourself in the rich culture of Hanoi with a stay at the Hanoi Boutique Hotel followed by a scenic cruise on the Dragon Legend, exploring the stunning limestone karsts of Halong Bay!",
    location: "Hanoi, Halong Bay",
    duration: "3 Days 2 Nights",
    rating: 4.6,
    reviewCount: 156,
    originalPrice: 520,
    currentPrice: 450.0,
    images: {
      main: "/images/home/packages/image_package4.png",
      gallery: [
        "/images/home/packages/image_package5.png",
        "/images/home/packages/image_package6.png",
        "/images/home/packages/image_package7.png",
        "/images/home/packages/image_package8.png",
        "/images/home/packages/image_package9.png",
        "/images/home/packages/image_package3.png",
      ],
    },
    overview: {
      hotel: "O'Gallery Premier Hotel",
      highlights: [
        "Azalea Cruise Adventure",
        "3 Days 2 Nights",
        "Adventure Activities",
      ],
      location: "Hanoi, Halong Bay",
    },
    highlights: [
      "Stay at modern O'Gallery Premier Hotel",
      "Adventure cruise on Azalea with exciting activities",
      "Kayaking, cave exploration, and beach activities",
      "Rock climbing and hiking opportunities",
      "Water sports and recreational activities",
    ],
    aboutHotel:
      "O'Gallery Premier Hotel is a contemporary hotel designed for adventure travelers. Located conveniently in Hanoi, it offers modern amenities and serves as the perfect base for your Halong Bay adventure. The hotel features comfortable rooms, fitness facilities, and adventure tour planning services.",
    aboutCruise:
      "Azalea Cruise specializes in adventure tourism, offering exciting activities and exploration opportunities in Halong Bay. The cruise features well-equipped adventure gear, experienced guides, and access to the bay's most thrilling locations.",
    included: [
      "2-night stay at O'Gallery Premier Hotel",
      "1-night adventure cruise on Azalea",
      "All adventure activities and equipment",
      "Professional adventure guides",
      "All meals during the tour",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Personal adventure gear",
      "Additional activities",
      "Personal expenses",
    ],
    meetingPoint: {
      address: "O'Gallery Premier Hotel adventure center",
      description:
        "Meet your adventure guide at the hotel's dedicated adventure center.",
    },
    healthPrecautions: [
      "Safety briefing for all adventure activities",
      "Professional safety equipment provided",
      "Experienced adventure guides",
      "Emergency procedures in place",
    ],
    notes: [
      "Physical fitness required for adventure activities",
      "Weather conditions may affect some activities",
      "Safety equipment must be worn at all times",
      "Age restrictions apply for certain activities",
    ],
    seo: {
      title:
        "Adventure Package: O'Gallery Premier Hotel + Azalea Cruise | Halong Bay Adventure Tours",
      description:
        "Experience thrilling adventures with O'Gallery Premier Hotel and Azalea cruise. 3-day adventure package with kayaking, climbing, and more from $450!",
      keywords: [
        "halong bay adventure",
        "ogallery premier hotel",
        "azalea cruise",
        "adventure tour vietnam",
        "halong bay kayaking",
        "vietnam adventure package",
        "halong bay activities",
      ],
    },
  },
  {
    id: "5",
    slug: "orchid-classic-cruise-2-days-1-night1",
    name: "Orchid Classic Cruise 2 Days/1 Night",
    subtitle:
      "Immerse yourself in the rich culture of Hanoi with a stay at the Hanoi Boutique Hotel followed by a scenic cruise on the Dragon Legend, exploring the stunning limestone karsts of Halong Bay!",
    location: "Hanoi, Halong Bay",
    duration: "2 Days 1 Nights",
    rating: 4.8,
    reviewCount: 345,
    originalPrice: 290,
    currentPrice: 249.99,
    images: {
      main: "/images/home/packages/image_package1.png",
      gallery: [
        "/images/home/packages/image_package2.png",
        "/images/home/packages/image_package3.png",
        "/images/home/packages/image_package4.png",
        "/images/home/packages/image_package5.png",
        "/images/home/packages/image_package6.png",
        "/images/home/packages/image_package7.png",
      ],
    },
    overview: {
      hotel: "Oriental Jade Hotel",
      highlights: [
        "Stellar of the Seas",
        "4 Days 3 Nights",
        "Hanoi, Halong Bay",
      ],
      location: "Hanoi, Halong Bay",
    },
    highlights: [
      "Comfortable and spacious room with full-length windows in the 5-star hotel amidst Hanoi Old Quarter",
      "Overnight on the luxury cruise with state-of-the-art facilities",
      "Less touristy Lan Ha Bay route with highlights: Dark, Bright Cave & An Ech Area",
      "Transfer door-to-door by luxury car and limousine van",
      "The best view for our top-seller combo: the Oriental Jade Hotel + Stellar of the Seas Cruiser",
    ],
    aboutHotel:
      "Located at the heart of Hanoi Old Quarter, the Oriental Jade Hotel is a go-to place for a luxury stay. The hotel boasts a beautiful Old Quarter location with a rooftop pool, outdoor gym, swimming pool, and spa. Rooms at Oriental Jade measure from 25 to 150 sqm and are well equipped with premium room and bath amenities. The quick access to the hotspots of Hanoi, delicious dining options makes the stay even more convenient.",
    aboutCruise:
      "A perfect luxury touch matching with Oriental Jade Hotel must be Stellar of the Seas Cruise. The 5-star Cruise launched in 2018 but is never getting better among travel enthusiasts including 22 suites with a private balcony and ensuite bathroom with tub. The ship facilitates the utmost comfort for every single traveler. That is not to mention the top-of-the-range facilities such as mini golf course, outdoor & outdoor pool, wine & cigar cellar, fitness room, spa, etc.",
    included: [
      "Round trip airport pick up and drop off",
      "2-night stay at Oriental Emerald (panoramic windows, no view) - Oriental Jade Hotel",
      "1-night stay at junior suite cabin - Stellar of the Seas",
      "Entry pick up and drop off by Halong Limousine van from hotel to cruise and back",
    ],
    notIncluded: [
      "International airfares",
      "Beauty & spa services",
      "Other beverages, tips and personal expenses",
      "All other services not clearly mentioned in the inclusions list",
      "Peak season surcharge: Surcharge 10$ 30| per for cruise date for Lunar New Year (5, 10, 17/02/2024) (1 nights)",
    ],
    meetingPoint: {
      address:
        "Meet your guide inside the west entrance of Altab Ali Park (Whitechapel Road). It's opposite the entrance to Altgate East Tube Station and the Whitechapel Gallery.",
      description:
        "Look for a guide wearing SMT attire and holding a red SMT flag.",
    },
    healthPrecautions: [
      "All required protective equipment is provided",
      "All areas that customers touch are frequently cleaned",
      "You must keep social distance while in vehicles",
      "Temperature checks for all participants",
    ],
    notes: [
      "Cruise itinerary and schedule are subject to change due to weather, tide levels and operating conditions without prior notice.",
      "Please inform us your flight details (flight number and departure/arrival time so we can schedule the pick up and drop off)",
      "Meals on board are fusion, Vietnamese, seafood & international. Please advise us of any special dietary requirements when you make your journey flyer.",
      "Advance registration is mandatory with full name, passport number and visa expiration date.",
      "Wifi is available onboard. However, intermittent service is expected due to nature of internet signals at sea.",
    ],
    seo: {
      title:
        "Orchid Classic Cruise 2 Days/1 Night - Halong Bay Tours | Asia Pacific Travel",
      description:
        "Experience luxury with Orchid Classic Cruise 2 Days/1 Night in Halong Bay. Stay at Oriental Jade Hotel & cruise on Stellar of the Seas. Book now from $249.99",
      keywords: [
        "halong bay cruise",
        "orchid classic cruise",
        "2 days 1 night halong bay",
        "oriental jade hotel",
        "stellar of the seas",
        "luxury halong bay tour",
        "vietnam cruise package",
        "halong bay travel",
      ],
    },
  },
  {
    id: "6",
    slug: "luxury-duo-sofitel-legend-metropole-paradise-elegances",
    name: "Luxury Duo: Sofitel Legend Metropole + Paradise Elegance",
    subtitle:
      "Immerse yourself in the rich culture of Hanoi with a stay at the Hanoi Boutique Hotel followed by a scenic cruise on the Dragon Legend, exploring the stunning limestone karsts of Halong Bay!",
    location: "Hanoi, Halong Bay",
    duration: "3 Days 2 Nights",
    rating: 4.9,
    reviewCount: 278,
    originalPrice: 850,
    currentPrice: 770.0,
    images: {
      main: "/images/home/packages/image_package2.png",
      gallery: [
        "/images/home/packages/image_package3.png",
        "/images/home/packages/image_package4.png",
        "/images/home/packages/image_package5.png",
        "/images/home/packages/image_package6.png",
        "/images/home/packages/image_package7.png",
        "/images/home/packages/image_package8.png",
      ],
    },
    overview: {
      hotel: "Sofitel Legend Metropole",
      highlights: [
        "Paradise Elegance Cruise",
        "3 Days 2 Nights",
        "Hanoi, Halong Bay",
      ],
      location: "Hanoi, Halong Bay",
    },
    highlights: [
      "Stay at the legendary Sofitel Legend Metropole Hanoi - a luxury heritage hotel",
      "Cruise on Paradise Elegance with premium amenities and services",
      "Private balcony suites with panoramic bay views",
      "Fine dining experiences with international and Vietnamese cuisine",
      "Exclusive activities including cooking class and tai chi",
    ],
    aboutHotel:
      "Sofitel Legend Metropole Hanoi is a legendary luxury hotel that has been hosting distinguished guests since 1901. Located in the heart of Hanoi, this heritage property combines French colonial charm with modern luxury. The hotel features elegant rooms and suites, award-winning restaurants, a luxurious spa, and beautifully landscaped gardens.",
    aboutCruise:
      "Paradise Elegance is a boutique cruise vessel offering the pinnacle of luxury on Halong Bay. With only 17 suites featuring private balconies, guests enjoy personalized service and exclusive experiences. The cruise features fine dining restaurants, a spa, sundeck pool, and various recreational activities.",
    included: [
      "2-night stay at Sofitel Legend Metropole Hanoi",
      "1-night stay on Paradise Elegance cruise",
      "Private transfer by luxury vehicle",
      "All meals as mentioned in itinerary",
      "English-speaking tour guide",
    ],
    notIncluded: [
      "International flights",
      "Personal expenses",
      "Spa treatments",
      "Alcoholic beverages",
      "Travel insurance",
    ],
    meetingPoint: {
      address: "Sofitel Legend Metropole Hanoi lobby",
      description:
        "Meet your guide at the hotel lobby for departure to Halong Bay.",
    },
    healthPrecautions: [
      "Temperature checks for all guests",
      "Sanitization protocols in place",
      "Social distancing measures",
      "Regular cleaning of all facilities",
    ],
    notes: [
      "Advance booking required due to limited availability",
      "Special dietary requirements can be accommodated",
      "Weather conditions may affect cruise schedule",
      "Dress code applies for fine dining restaurants",
    ],
    seo: {
      title:
        "Luxury Duo: Sofitel Legend Metropole + Paradise Elegance Cruise | Halong Bay Tours",
      description:
        "Experience ultimate luxury with Sofitel Legend Metropole Hanoi and Paradise Elegance cruise. 3 days 2 nights premium package from $770. Book now!",
      keywords: [
        "sofitel legend metropole",
        "paradise elegance cruise",
        "luxury halong bay",
        "hanoi luxury hotel",
        "premium cruise package",
        "halong bay luxury tour",
        "vietnam luxury travel",
      ],
    },
  },
];

export const getCruiseBySlug = (slug: string): CruisePackage | undefined => {
  return cruisePackages.find((cruise) => cruise.slug === slug);
};

export const getAllCruiseSlugs = (): string[] => {
  return cruisePackages.map((cruise) => cruise.slug);
};
