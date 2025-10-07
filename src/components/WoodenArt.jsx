import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const WoodenArt = () => {
  const [selectedArt, setSelectedArt] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const woodenArts = [
    {
      id: 1,
      name: "3D Lord Balaji",
      category: "Traditional",
      material: "Birch Plywood, Oak",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759849389/Heritage-Inspired_Wooden_Sculptures_Wall_Decor_Panels_Brackets_q8jehv.jpg"
    },
    {
      id: 2,
      name: "Hand-Carved Wooden Brackets",
      category: "Architectural",
      material: "Teak Wood",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759849409/download_8_uksgb5.jpg"
    },
    {
      id: 3,
      name: "Abstract Wooden Sculpture",
      category: "Sculptures",
      material: "Walnut Wood",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759849377/download_7_rbui1r.jpg"
    },
    {
      id: 4,
      name: "Lord Krishna Idol",
      category: "Traditional",
      material: "Teak Wood",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759849379/download_6_o60rca.jpg"
    },
    {
      id: 5,
      name: "Decorative Wall Panel",
      category: "Wall Art",
      material: "Rosewood",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759849387/download_5_cmgb4a.jpg"
    },
    {
      id: 6,
      name: "Antique Wooden Frame",
      category: "Decor",
      material: "Oak",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759849411/Heritage-Inspired_Wooden_Sculptures_Wall_Decor_Panels_Brackets_1_qxwu52.jpg"
    },
  ];

  const handleInquiry = (artName) => {
    toast({
      title: "Inquiry Sent!",
      description: `Our team will contact you shortly regarding the ${artName}.`,
    });
  };

  const handleViewDetails = (art) => {
    setSelectedArt(art);
    setShowModal(true);
  };

  return (
    <section id="wooden-art" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Masterful Wooden Art
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Experience the warmth and beauty of handcrafted wooden artistry for your home.
          </p>
        </motion.div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {woodenArts.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-80 object-cover transition-opacity duration-500 group-hover:opacity-80"
                  alt={art.name}
                  src={art.image}
                />
                {art.category && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Handcrafted
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-stone-800 h-14">
                  {art.name}
                </h3>
                <p className="text-stone-600 mb-4 text-sm">Material: {art.material}</p>
                <div className="flex gap-2">
                  <Button
                    className="flex-1 bg-green-700 hover:bg-green-800 text-white"
                     onClick={() => handleViewDetails(art)}
                  >
                     View Details
                  </Button>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {showModal && selectedArt && (
          <div
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl p-4 w-full max-w-lg max-h-[85vh] overflow-auto relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl font-bold"
              >
                ×
              </button>
              <h2 className="text-2xl font-semibold mb-4 text-center text-amber-800">
                {selectedArt.name}
              </h2>
              <img
                src={selectedArt.image}
                alt={selectedArt.name}
                className="w-full h-auto max-h-[60vh] object-contain mx-auto rounded-lg mb-4"
              />
              <p className="text-stone-600 text-center mb-2">
                <strong>Material:</strong> {selectedArt.material}
              </p>
              {selectedArt.category && (
                <p className="text-stone-600 text-center mb-2">
                  <strong>Category:</strong> {selectedArt.category}
                </p>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WoodenArt;
