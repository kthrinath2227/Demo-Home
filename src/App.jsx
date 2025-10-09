
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

  return (
    <div className="min-h-screen bg-stone-50">
      <Helmet>
        <title>HomeSowCase - Exquisite Home Artistry & Design</title>
        <meta name="description" content="Explore bespoke home artistry with HomeSowCase. We specialize in premium door designs, marble and wooden art, pooja rooms, and complete interior solutions to elevate your living space." />
        <meta name="keywords" content="home design, interior design, wooden doors, marble art, pooja room, custom furniture, home decor, luxury interiors" />
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
