
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import NewArrivals from '@/components/NewArrivals';
import OurProcess from '@/components/OurProcess';
import WallArts from '@/components/WallArts';
import MarbleArt from '@/components/MarbleArt';
import WoodenArt from '@/components/WoodenArt';
import DoorDesigns from '@/components/DoorDesigns';
import PoojaRoomDesigns from '@/components/PoojaRoomDesigns';
import RailingSection from '@/components/RailingSection';
import DoorHandles from '@/components/DoorHandles';
import OurProjects from '@/components/OurProjects';
import BlogSection from '@/components/BlogSection';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import SearchModal from '@/components/SearchModal';
import FloatingIcons from '@/components/FloatingIcons';
import Testimonials from '@/components/Testimonials';
import ThanjavurPainting from '@/components/ThanjavurPainting';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    "name": "HomeSowCase",
    "description": "Exquisite bespoke home artistry, specializing in premium door designs, Thanjavur paintings, marble and wooden art, and complete interior solutions.",
    "url": "https://www.homesowcase.co.in",
    "logo": "https://www.homesowcase.co.in/logo.png",
    "image": "https://www.homesowcase.co.in/hero-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "branch, Kondapur 1st Floor Shivam Building Sriram Nagar 1st floor of Union bank kothaguda near Botanical Garden Rd, Kondapur, ",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500084",
      "addressCountry": "IN"
    },
    "telephone": "+91 70934 56461",
    "email": "info@homesowcase.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturaday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/homesowcase",
      "https://www.instagram.com/homeshowcasehyd?igsh=MThnb2oxeG9xZzhhdw==",
      "https://www.twitter.com/homesowcase"
    ],
    "priceRange": "$$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Home Decor & Artistry",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Custom Door Designs" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Thanjavur Paintings" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Marble Wall Art" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Wooden Sculptures" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Pooja Room Mandirs" } }
      ]
    }
  };


  return (
    <div className="min-h-screen bg-stone-50">
      <Helmet>
        <title>HomeSowCase | Premium Home Artistry & Bespoke Interior Design</title>
        <meta name="description" content="Elevate your home with HomeSowCase. Discover exquisite, handcrafted door designs, Thanjavur paintings, marble art, and complete interior solutions. Quality craftsmanship for luxury living." />
        <meta name="keywords" content="home design, interior design, wooden doors, marble art, Thanjavur painting, pooja room, custom furniture, home decor, luxury interiors, bespoke design, Gurgaon interiors, home artistry" />
        <link rel="canonical" href="https://www.homesowcase.com" />
        <meta property="og:title" content="HomeSowCase | Premium Home Artistry & Bespoke Interior Design" />
        <meta property="og:description" content="Discover exquisite, handcrafted door designs, Thanjavur paintings, marble art, and complete interior solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.homesowcase.co.in" />
        <meta property="og:image" content="https://www.homesowcase.co.in/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HomeSowCase | Premium Home Artistry & Bespoke Interior Design" />
        <meta name="twitter:description" content="Elevate your home with bespoke art and design from HomeSowCase." />
        <meta name="twitter:image" content="https://www.homesowcase.com/twitter-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <Header onSearchClick={() => setIsSearchOpen(true)} />
      
      <main>
        <HeroSection />
        <OurProcess />
        <NewArrivals />
        <WallArts />
        <DoorDesigns />
        <PoojaRoomDesigns />
        <ThanjavurPainting />
        <DoorHandles />
        <RailingSection />
        <MarbleArt />
        <WoodenArt />
        <OurProjects />
        <Testimonials />
         <ContactUs />
        <BlogSection />
       
      </main>
      
      <Footer />
      <Chatbot />
      <FloatingIcons />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <Toaster />
    </div>
  );
}

export default App;
