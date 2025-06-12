import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from "react";

const images = [
  {
    url: "/images/home/discover/image_discover1.png",
    alt: "Cruise 1",
  },
  {
    url: "/images/home/discover/image_discover2.png",
    alt: "Cruise 2",
  },
  {
    url: "/images/home/discover/image_discover3.png",
    alt: "Cruise 3",
  },
  {
    url: "/images/home/discover/image_discover4.png",
    alt: "Cruise 4",
  },
  {
    url: "/images/home/discover/image_discover5.png",
    alt: "Cruise 5",
  },
];

export default function HomeGallerySlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative flex items-center justify-center">
        <Swiper
          effect="coverflow"
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          slideToClickedSlide={true}
          spaceBetween={-120}
          coverflowEffect={{
            rotate: 0,
            stretch: -100,
            depth: 300,
            modifier: 1.5,
            slideShadows: false,
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
          modules={[EffectCoverflow, Navigation, Pagination]}
          className="w-[1200px] h-[480px]"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={img.url}>
              <div className="relative w-[400px] h-[480px] bg-gradient-to-b from-white/10 to-black/10 shadow-[20px_20px_70px_0px_rgba(0,0,0,0.60)] rounded-2xl overflow-hidden group cursor-pointer transition-transform duration-300">
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-4 left-4 text-3xl font-bold text-white/80 drop-shadow-lg select-none">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
            </SwiperSlide>
          ))}
          {/* Prev Arrow */}
          <button
            ref={prevRef}
            className="z-10 absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full shadow-lg w-10 h-10 flex items-center justify-center transition-colors"
            // style={{ marginLeft: "-24px" }}
            aria-label="Previous"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* Next Arrow */}
          <button
            ref={nextRef}
            className="z-10 absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full shadow-lg w-10 h-10 flex items-center justify-center transition-colors"
            // style={{ marginRight: "-24px" }}
            aria-label="Next"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </Swiper>
      </div>
      {/* Dots */}
      <div
        className="custom-swiper-pagination flex gap-4 justify-center mt-4"
        style={{ marginTop: "16px" }}
      />
      <style jsx global>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #ddd;
          opacity: 0.5;
          border-radius: 9999px;
          margin: 0 4px;
          transition: opacity 0.2s;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          background: #2563eb;
        }
      `}</style>
    </div>
  );
}

