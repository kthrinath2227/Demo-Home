import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const heroRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "Transform Your Home with Premium Designs",
      subtitle:
        "Discover our exclusive collection of doors, wall arts, and interior solutions",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759660034/krishna_new_site_tg0jwy.jpg",
    },
    {
      id: 2,
      title: "Exquisite Door Designs for Every Style",
      subtitle:
        "From traditional to contemporary, find the perfect door for your space",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759670431/Site_pic_jzlkjn.jpg",
    },
    {
      id: 3,
      title: "Traditional pooja room with divine decor",
      subtitle: "Create a divine space with our beautiful pooja room solutions",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759663016/Pooja_Inside_18_xmy949.jpg",
    },
  ];

  // --- Auto slide ---
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // --- Story bar progress ---
  useEffect(() => {
    setProgress(0);
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // --- Parallax effect based on scroll position ---
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 80]); // smaller range = subtle parallax

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative h-[100vh] sm:h-screen overflow-hidden bg-black"
    >
      {/* --- SLIDES with Parallax --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div
          style={{
            transform: `translate3d(-${currentSlide * 100}%, 0, 0)`,
            willChange: "transform",
          }}
          className="flex h-full transition-transform duration-700 ease-in-out"
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full relative flex items-center justify-center bg-black overflow-hidden"
            >
              {/* ✅ Parallax background image */}
              <motion.img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                style={{
                  y,
                }}
                className="absolute inset-0 w-full h-full object-cover sm:object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- TEXT (Bottom Left) --- */}
      <div className="absolute bottom-10 left-5 sm:left-12 z-20 max-w-[90%] sm:max-w-xl text-left text-white">
        <motion.h1
          key={`title-${currentSlide}`}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3 sm:mb-4 drop-shadow-lg"
        >
          {slides[currentSlide].title}
        </motion.h1>
        <motion.p
          key={`subtitle-${currentSlide}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-sm sm:text-lg md:text-xl text-gray-200 drop-shadow-md"
        >
          {slides[currentSlide].subtitle}
        </motion.p>
      </div>

      {/* --- ARROWS --- */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 sm:p-3 transition-all"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 sm:p-3 transition-all"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
      </button>

      {/* --- INSTAGRAM STORY STYLE PROGRESS BAR --- */}
      <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center space-x-2 px-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className="w-16 sm:w-24 h-[3px] bg-white/40 rounded-full overflow-hidden"
          >
            <motion.div
              className={`h-full rounded-full ${
                index === currentSlide ? "bg-white" : "bg-white/30"
              }`}
              initial={{ width: 0 }}
              animate={{
                width: index === currentSlide ? `${progress}%` : "0%",
              }}
              transition={{ duration: 0.1 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
