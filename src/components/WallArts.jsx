import React, { useState } from "react";
import { motion } from "framer-motion";
import { Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const WallArts = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false); // Custom request modal
  const [viewImage, setViewImage] = useState(null); // View details modal
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    image: null,
    preview: "",
  });

  const categories = ["all", "abstract", "nature", "modern", "traditional"];
  const wallArts = [
    { id: 1, name: "Nature's Serenity", category: "nature", size: "20x30 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727093/wall_art_8_jdizrj.jpg" },
    { id: 2, name: "Modern Minimalist", category: "nature", size: "30x40 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727092/Wall_Art_7_qkws0l.jpg" },
    { id: 3, name: "Traditional Mandala", category: "traditional", size: "36x36 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727097/wall_art_B_rzlox8.jpg" },
    { id: 4, name: "Floral Elegance", category: "nature", size: "20x24 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727077/Flower_art_rsr4hf.jpg" },
    { id: 5, name: "Abstract Harmony", category: "abstract", size: "24x36 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727095/wall_art_A_nlqsb4.jpg" },
    { id: 6, name: "Geometric Patterns", category: "abstract", size: "30x30 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727076/2_egukd6.jpg" },
    { id: 7, name: "Landscape", category: "abstract", size: "40x20 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727075/1.3_eami8j.jpg" },
    { id: 8, name: "Cubic Art", category: "abstract", size: "36x24 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727078/2.1_qspuzv.jpg" },
    { id: 9, name: "Fiber Art", category: "abstract", size: "30x20 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727089/Wall_Art_3_khtrja.jpg" },
    { id: 10, name: "Radha Krishna", category: "traditional", size: "24x24 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727087/Wall_Art_2_foczxq.jpg" },
    { id: 11, name: "Krishna with Flute", category: "traditional", size: "30x30 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727088/Wall_Art_2dem_egubsw.jpg" },
    { id: 12, name: "Krishna with Nature", category: "traditional", size: "36x24 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727083/krishna_new_site_tpy612.jpg" },
    { id: 13, name: "Pin Art", category: "traditional", size: "40x30 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727077/5_aav2ed.jpg" },
    { id: 14, name: "Mahabharatam Concept", category: "traditional", size: "24x36 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727081/krishna_arjuna_1_jg7g0q.jpg" },
    { id: 15, name: "Lord Balaji Wall Art", category: "traditional", size: "30x20 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727080/Ganesh_art_xxmxsa.jpg" },
    { id: 16, name: "Krishna Wall Art", category: "traditional", size: "30x30 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727082/little_krishna_rncpyk.jpg" },
    { id: 17, name: "Krishana with Flute Fiber Art", category: "traditional", size: "24x36 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727084/krishna_wall_art_ip9acy.jpg" },
    { id: 18, name: "Buddha Fiber Wall Art", category: "traditional", size: "36x24 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727091/Wall_Art_4dem1_t79nrb.jpg" },
    { id: 19, name: "Creeper Wall Art", category: "nature", size: "30x20 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727075/1_uum68j.jpg" },
    { id: 20, name: "Horse Wall Art", category: "modern", size: "40x20 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727089/Wall_Art_4_xflpum.jpg" },
    { id: 21, name: "Fish Wall Art", category: "modern", size: "36x24 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727102/wall_art_H_flnpkf.jpg" },
    { id: 22, name: "Plate Design Wall Art", category: "modern", size: "30x20 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727085/peacock_wall_art_p7vknf.jpg" },
    { id: 23, name: "Butterfly Wall Art", category: "modern", size: "24x36 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727107/wall_butterfly1_copy_jzb9ui.jpg" },
    { id: 24, name: "reverse Man Wall Art", category: "modern", size: "24x36 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727102/wall_art_G_yaly2i.jpg" },
    { id: 25, name: "Tree Wall Art", category: "nature", size: "30x20 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727101/wall_art_D_dpgjqj.jpg" },
    { id: 26, name: "Plate Design Tree Art", category: "nature", size: "36x24 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727098/wall_art_C_ugqm6v.jpg" },
    { id: 27, name: "Lotus Wall Art", category: "nature", size: "40x20 inches", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727087/Wall_Art_1_qpajdx.jpg" },
  ];

  const filteredArts =
    activeFilter === "all"
      ? wallArts
      : wallArts.filter((art) => art.category === activeFilter);

  const displayedArts = showAll ? filteredArts : filteredArts.slice(0, 6);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello! 👋 I would like a custom wall art design.%0A
Name: ${formData.name}%0A
Phone: ${formData.phone}%0A
${formData.preview ? `I've uploaded an image for reference: ${formData.preview}` : ""}`;

    window.open(`https://wa.me/919381187905?text=${message}`, "_blank");

    toast({
      title: "Opening WhatsApp...",
      description: "Please send your request message in WhatsApp.",
    });
    setShowModal(false);
    setFormData({ name: "", phone: "", image: null, preview: "" });
  };

  return (
    <section id="wall-arts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Wall Arts Collection
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Transform your walls with our curated collection of stunning artwork
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => {
                  setActiveFilter(category);
                  setShowAll(false);
                }}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Wall Arts Grid */}
        <div
          className={`grid gap-10 ${
            viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          }`}
        >
          {displayedArts.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden relative group ${
                viewMode === "list" ? "flex" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  viewMode === "list" ? "w-1/2" : "w-full"
                }`}
              >
                <motion.img
                  src={art.image}
                  alt={art.name}
                  className="object-cover w-full h-80 transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                  initial={{ scale: 1 }}
                  whileInView={{
                    scale: 1.01,
                    transition: { type: "spring", stiffness: 40 },
                  }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500"></div>
              </div>

              <div
                className={`p-5 ${
                  viewMode === "list"
                    ? "w-1/2 flex flex-col justify-center"
                    : "pt-4"
                }`}
              >
                <h3 className="text-lg font-semibold mb-2 text-stone-800 line-clamp-2">
                  {art.name}
                </h3>
                <div className="flex justify-between items-center text-sm text-stone-500 mb-3">
                  <span className="capitalize text-green-700 font-medium">
                    {art.category}
                  </span>
                  <span>{art.size}</span>
                </div>
                <Button
                  size="sm"
                  className="bg-green-700 hover:bg-green-800 text-white mt-auto"
                  onClick={() => setViewImage(art.image)}
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All / Show Less */}
        {filteredArts.length > 6 && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="px-8 py-2 text-lg font-medium bg-green-700 text-white hover:bg-white hover:text-green-700 transition-all duration-300"
            >
              {showAll ? "Show Less" : "View All"}
            </Button>
          </div>
        )}

        {filteredArts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-stone-500 text-lg">
              No wall arts found in this category.
            </p>
          </div>
        )}
      </div>

      {/* ✅ Custom Request Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16"
      >
        <div className="bg-gradient-to-r from-green-700 to-green-500 text-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Custom Wall Arts Solutions</h3>
          <p className="text-lg mb-6 leading-relaxed text-emerald-50">
            Need a 
            <span className="font-bold bg-gradient-to-r from-yellow-300 via-amber-200 to-lime-200 text-transparent bg-clip-text">
              {" "}custom wall art design
            </span>
            ? <br />
            Our expert craftsmen create 
            <span className="font-semibold text-emerald-100"> bespoke wall art</span> 
            tailored to your unique style and space. <br /><br />
            Simply 
            <span className="font-medium text-white"> upload your wall images</span> 
            or 
            <span className="font-medium text-white"> share your ideas</span>, <br />
            and we’ll bring them to life with precision, creativity, and quality.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-black hover:bg-white hover:text-green-700"
            onClick={() => setShowModal(true)}
          >
            Request Custom Design
          </Button>
        </div>
      </motion.div>

      {/* ✅ Custom Request Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md relative"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-center text-green-700">
              Request Custom Design
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-stone-300 rounded-lg px-4 py-2"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full border border-stone-300 rounded-lg px-4 py-2"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <label className="block text-sm font-medium text-stone-600">
                Upload Reference Image
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full border border-stone-300 rounded-lg px-4 py-2"
                onChange={handleImageUpload}
              />
              {formData.preview && (
                <img
                  src={formData.preview}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg mt-2 border"
                />
              )}
              <Button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white"
              >
                Send to WhatsApp
              </Button>
              <p className="text-xs text-center text-stone-500">
                By submitting, WhatsApp will open automatically.
              </p>
            </form>
          </motion.div>
        </div>
      )}

      {/* ✅ View Details Modal */}
{/* ✅ View Details Modal */}
{viewImage && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4 overflow-auto">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-2xl shadow-2xl max-w-xl w-full relative p-4 mx-auto"
    >
      <button
        onClick={() => setViewImage(null)}
        className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl z-50"
      >
        ×
      </button>
      <img
        src={viewImage}
        alt="Wall Art"
        className="w-full h-auto max-h-[80vh] rounded-xl object-contain"
      />
    </motion.div>
  </div>
)}

    </section>
  );
};

export default WallArts;
