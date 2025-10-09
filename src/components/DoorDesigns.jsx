import React, { useState } from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const DoorDesigns = () => {
  const [activeTab, setActiveTab] = useState("single");
  const [viewMoreSingle, setViewMoreSingle] = useState(false);
  const [viewMoreDouble, setViewMoreDouble] = useState(false);
  const [viewImage, setViewImage] = useState(null);

  const singleDoors = [
    { id: 1, name: "Classic Design", material: "Brass With Patina Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759816604/Main_Door_Single_new_1_uuqpye.jpg" },
    { id: 2, name: "Modern Flower Design", material: "Brass With Gloss Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759816605/Main_Door_single_nfr7cp.jpg" },
    { id: 3, name: "Nature Inspired Design", material: "Brass With Matte Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759816607/Main_door_site_umwuv5.jpg" },
    { id: 4, name: "Peacock Inspired Design", material: "Brass with Semi Antique Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759816607/MD_copy_t9gtjy.jpg" },
    { id: 5, name: "Butterfly Design", material: "Brass With Matte Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759816637/Room_Door_7_mdltul.jpg" },
    { id: 6, name: "Music Inspired Design", material: "Brass With Semi Antique Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759816636/Room_Door_3_h3pu7l.jpg" },
    { id: 7, name: "Geometric Pattern Design", material: "Brass With Gloss Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759816605/Main_door_2_ecnfi8.jpg" },
    { id: 8, name: "Floral Elegance Design", material: "Brass With Gloss Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759816608/Main_door_A_uv9wlt.jpg" },
    { id: 9, name: "Panel Design", material: "Brass With Matte Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759816603/Main_Door_Single_copy_fmvm03.jpg" }
  ];

  const doubleDoors = [
    { id: 1, name: "Regal Design", material: "Brass With Semi Antique Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759818063/Site_piic_copy_q4rcuj.jpg" },
    { id: 2, name: "Floral Design With Borders", material: "Brass With Antique Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759818057/Site_pic_nusclt.jpg" },
    { id: 3, name: "Traditional Design", material: "Brass With Semi Antique Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759818056/MD_5_copyyyyyyyy_hgaoeq.jpg" },
    { id: 4, name: "Mandala Design", material: "Brass With Semi Antique Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759818044/5_fvjpw0.jpg" },
    { id: 5, name: "Modern Plate Design", material: "Brass With Semi Antique Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759818050/Main_Door_Double_new_1_g6uyz8.jpg" },
    { id: 6, name: "Sun Inspired Design", material: "Brass With Rose Gold Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759818043/4_copy_ewho7l.jpg" },
    { id: 7, name: "Modern Design", material: "Brass With Matte Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759818042/4.2_copy_mkoclv.jpg" },
    { id: 8, name: "Plate Design", material: "Brass with Semi Antique Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759818052/Main_Door_Double_new_2_k05lee.jpg" },
    { id: 9, name: "Elegant Design", material: "Brass With Antique Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759818054/Main_Door_Double_new_ukp6ch.jpg" }
  ];

  const renderDoors = (doors, viewMore, setViewMore) => {
    const displayedDoors = viewMore ? doors : doors.slice(0, 3);
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedDoors.map((door, index) => (
            <motion.div
              key={door.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <LazyLoadImage
                  src={door.image}
                  alt={door.name}
                  effect="blur"
                  className="w-full h-70 object-cover"
                />
              </motion.div>
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold mb-1 text-stone-800">{door.name}</h3>
                <p className="text-sm text-stone-600 mb-3">{door.material}</p>
                <Button
                  className="bg-green-700 hover:bg-green-800 text-white text-sm px-5 py-2"
                  onClick={() => setViewImage(door.image)}
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        {doors.length > 3 && (
          <div className="text-center mt-8">
            <Button
              onClick={() => setViewMore(!viewMore)}
              className="bg-green-700 hover:bg-green-800 text-white px-8"
            >
              {viewMore ? "View Less" : "View More"}
            </Button>
          </div>
        )}
      </>
    );
  };

  return (
    <section id="door-designs" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Door Designs</h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Discover our premium collection of single and double door designs
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-gray-100 p-1 rounded-xl shadow-sm">
            {["single", "double"].map((type) => (
              <TabsTrigger
                key={type}
                value={type}
                className={`text-lg py-3 rounded-lg transition-all duration-300 ${
                  activeTab === type
                    ? "bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 text-white shadow-md scale-[1.02]"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {type === "single" ? "Single Door" : "Double Door"}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="single">{renderDoors(singleDoors, viewMoreSingle, setViewMoreSingle)}</TabsContent>
          <TabsContent value="double">{renderDoors(doubleDoors, viewMoreDouble, setViewMoreDouble)}</TabsContent>
        </Tabs>
      </div>

      {/* View Details Modal */}
      {viewImage && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4 overflow-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-xl w-full relative p-4 mx-auto"
          >
            <button
              onClick={() => setViewImage(null)}
              className="absolute top-2 right-1 text-gray-500 hover:text-red-600 text-xl z-50"
            >
              ×
            </button>
            <img
              src={viewImage.replace("/w_600,h_400,c_fill/", "/w_1200,h_800,c_fill/")}
              alt="Door"
              className="w-full h-auto max-h-[80vh] rounded-xl object-contain"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default DoorDesigns;
