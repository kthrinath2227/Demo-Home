import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const MarbleArt = () => {
  const [selectedArt, setSelectedArt] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const marbleArts = [
    {
      id: 1,
      name: "Marble Mandir Design",
      category: "Mandir",
      material: "Makrana Marble, Semi-precious Stones",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759848021/Reiner_Makrana-Marmor_gro%C3%9Fer_Mandir_Luxuri%C3%B6ser_Wohnkultur-Marmortempel_2_m_Marmors%C3%A4ulen-Schubladen-Mandir_Hindu-Puja-Mandir-_Installation_erforderlich_phmcap.jpg"
    },
    {
      id: 2,
      name: "Marble Complete Mandir Concept",
      category: "Mandir",
      material: "Italian Marble",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759848024/Mandir_in_white_marble_dzgfbv.jpg"
    },
    {
      id: 3,
      name: "Customised Mandir Setup",
      category: "Sculptures",
      material: "Vietnamese White Marble",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759847994/temple___mandir_for_home_o3y6vl.jpg"
    },
    {
      id: 4,
      name: "WashBasin",
      category: "",
      material: "Vietnamese White Marble",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759847985/Arezzo_500_x_390mm_Curved_Rectangular_Counter_Top_Basin_-_Gloss_White_Marble_Effect___Victorian_Plumbing_UK_smg23v.jpg"
    },
    {
      id: 5,
      name: "Musium Art",
      category: "Musium Art",
      material: "Makarana Marble Purest Marble",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759847984/Museum_sson6f.jpg"
    },
    {
      id: 6,
      name: "Nelson Side Table",
      category: "Decor",
      material: "Makarana",
      image : "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759847982/Nelson_Side_Table_Breccia_Pernice_Marble_jf7w7n.jpg"
    }
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
    <section id="marble-art" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Exquisite Marble Art
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Timeless elegance carved in stone. Discover our collection of bespoke marble masterpieces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marbleArts.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-80 object-cover"
                  alt={art.name}
                  src={art.image}
                />
                {art.category && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {art.category}
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
                    onClick={() => handleInquiry(art.name)}
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
              className="bg-white rounded-2xl shadow-2xl p-4 w-full max-w-lg max-h-[80vh] overflow-auto relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl font-bold"
              >
                ×
              </button>
              <h2 className="text-2xl font-semibold mb-4 text-center text-green-700">
                {selectedArt.name}
              </h2>
              <img
                src={selectedArt.image}
                alt={selectedArt.name}
                className="w-full h-auto max-h-[60vh] object-contain mx-auto rounded-lg mb-4"
              />
              <p className="text-stone-600 text-center mb-2">Material: {selectedArt.material}</p>
              {selectedArt.category && (
                <p className="text-stone-600 text-center">Category: {selectedArt.category}</p>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MarbleArt;
