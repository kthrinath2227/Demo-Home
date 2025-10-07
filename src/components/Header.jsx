import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = ({ onSearchClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 useEffect(() => {
  const sections = document.querySelectorAll("section[id]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: "-80px 0px 0px 0px", // 80px offset for fixed header
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => {
    sections.forEach((section) => observer.unobserve(section));
  };
}, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Our Process", href: "#our-process" },
     { name: "New Arrivals", href: "#new-arrivals" },
    { name: "Wall Arts", href: "#wall-arts" },
    { name: "Door Designs", href: "#door-designs" },
    { name: "Pooja Room", href: "#pooja-room" },
    { name: "Railings", href: "#railings" },
    { name: "Marble Art", href: "#marble-art" },
    { name: "Wooden Art", href: "#wooden-art" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Get In Touch", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <img
              src="https://res.cloudinary.com/do5dyebav/image/upload/v1759237702/Logo-home-Photoroom_kxghjw.png"
              alt="logo"
              className="w-40 h-auto"
            />
          </motion.div>

          {/* Nav Items */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className={`font-medium text-sm transition-all duration-300 ${
                  activeSection === item.href
                    ? "text-green-700 border-b-2 border-green-700 pb-1"
                    : "text-stone-700 hover:text-green-700"
                }`}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Search + Menu */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onSearchClick}
              className="hover:bg-green-100"
            >
              <Search className="h-5 w-5 text-stone-700" />
            </Button>
           <div className="lg:hidden relative z-50">
  <Button
    variant="ghost"
    size="icon"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="hover:bg-green-100"
  >
    {isMenuOpen ? (
      <X className="h-5 w-5 text-stone-700" />
    ) : (
      <Menu className="h-5 w-5 text-stone-700" />
    )}
  </Button>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="lg:hidden fixed top-16 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-40"
    >
      <ul className="flex flex-col space-y-4 p-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              onClick={() => setIsMenuOpen(false)} // close menu when clicked
              className={`block font-medium text-sm transition-all duration-300 ${
                activeSection === item.href
                  ? "text-green-700"
                  : "text-stone-700 hover:text-green-700"
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )}
</div>
          </div>
        </div>
      </div>

      {/* Decorative element under header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1 mt-1"
      >
        <div
          className={`w-[180px] h-[50px] rounded-b-full flex items-center justify-center transition-all duration-300 ${
            isScrolled
              ? "bg-white/90 shadow-lg"
              : " backdrop-blur-[2px]"
          }`}
        >
          <img
            src="https://res.cloudinary.com/do5dyebav/image/upload/v1759314077/scn-Photoroom_kyrlxc.png"
            alt="decorative underline"
            className="w-[130px] h-auto opacity-90 mb-2"
          />
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
