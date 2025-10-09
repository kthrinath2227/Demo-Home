import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { X } from "lucide-react";

const ThanjavurPainting = () => {
  const [selectedArt, setSelectedArt] = useState(null);

  const paintings = [
    {
      id: 1,
      name: "Classic Balaji Thanjavur Painting",
      material: "22K Gold Foil, Jaipur Stones",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759997216/Handmade_Tirupati_Balaji_3D_Painting__Gold_Foil_Ruby_Emerald_-_Etsy_zmdym9.jpg",
    },
    {
      id: 2,
      name: "Goddess Lakshmi Painting",
      material: "Teak Wood Frame, Gold Leaf",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759997218/WhatsApp_Image_2025-10-09_at_13.34.35_7a02cebd_kyukcf.jpg",
    },
    {
      id: 3,
      name: "Devine Procession Scene",
      material: "Plywood Base, Natural Colors",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759997218/WhatsApp_Image_2025-10-09_at_13.34.34_d55b308a_sfuizb.jpg",
    },
    {
      id: 4,
      name: "Lord Ganesh",
      material: "24K Gold Foil, Wooden Frame",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759997217/WhatsApp_Image_2025-10-09_at_13.34.35_871d7afc_jjucuz.jpg",
    },
  ];

  const handleInquiry = (artName) => {
    toast({
      title: "Inquiry Sent!",
      description: `Our team will contact you shortly regarding the ${artName}.`,
    });
  };

  return (
    <section id="thanjavur-painting" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Thanjavur Paintings
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            A divine art form from Southern India, known for its rich colors and
            gold foil embellishments.
          </p>
        </motion.div>

        {/* Paintings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {paintings.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all"
            >
              <div className="relative overflow-hidden bg-white">
                <img
                  src={art.image}
                  alt={art.name}
                  className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-1 text-stone-800 line-clamp-2">
                  {art.name}
                </h3>
                <p className="text-stone-600 mb-3 text-sm line-clamp-1">
                  {art.material}
                </p>
                <Button
                  className="w-full bg-green-700 hover:bg-green-800 text-white"
                  onClick={() => setSelectedArt(art)}
                >
                  View
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedArt && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setSelectedArt(null)} // click outside closes modal
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()} // prevent close on inner click
            className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-3xl md:max-w-4xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedArt(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black z-10"
            >
              <X size={24} />
            </button>

            {/* Image (non-stretch, centered) */}
            <div className="flex items-center justify-center bg-black/5 w-full h-[65vh] sm:h-[70vh]">
              <img
                src={selectedArt.image}
                alt={selectedArt.name}
                className="max-w-full max-h-full object-contain rounded-xl"
              />
            </div>

            {/* Details */}
            <div className="p-4 md:p-6 text-center bg-white">
              <h3 className="text-xl md:text-2xl font-semibold text-stone-800 mb-1">
                {selectedArt.name}
              </h3>
              <p className="text-stone-600 text-sm">{selectedArt.material}</p>

              <Button
                className="mt-4 bg-green-700 hover:bg-green-800 text-white"
                onClick={() => {
                  handleInquiry(selectedArt.name);
                  setSelectedArt(null);
                }}
              >
                Send Inquiry
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ThanjavurPainting;
