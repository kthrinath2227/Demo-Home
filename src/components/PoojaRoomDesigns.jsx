import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Heart, X } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const PoojaRoomDesigns = () => {
  const [activeTab, setActiveTab] = useState("room-designs");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
      name: "",
      phone: "",
      image: null,
      preview: "",
    });

  const roomDesigns = [
    {
      id: 1,
      name: "Complete Pooja Room",
      tag: "Premium",
      dic: "Elegant full-room temple setup with traditional decor.",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759830524/Pooja_Inside_9_waf62f.jpg",
    },
    {
      id: 2,
      name: "Tradition Shines in Every Detail",
      tag: "Trending",
      dic: "Minimal pooja corner with clean detailing and natural finish.",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759830520/Pooja_Inside_1_kyjeuh.jpg",
    },
    {
      id: 3,
      name: "Natural Temple Room",
      tag: "Trending",
      dic: "Modern mandir with warm lighting and serene vibes.",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759830522/Pooja_Inside_4_zzs1z9.jpg",
    },
    {
      id: 4,
      name: "Dasavathaaram Concept",
      tag: "Premium",
      dic: "The Dasavathaaram beautifully reflects the evolution of life and consciousness.",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759830526/Pooja_Inside_3_zi5ttv.jpg",
    }
    ,
    {
      id: 5,
      name: "The Destroyer of Evil, the Creator of Peace.",
      tag: "Premium",
      dic: "Lord Shive Concept With Borders.",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759830529/Pooja_Inside_14.1_uyfugz.jpg",
    },
    {
      id: 6,
      name: "Lord Balaji Concept",
      tag: "Trending",
      dic: "Thanjavur Art with Lord Balaji combines divine grace with royal South Indian artistry.",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759830528/Pooja_Room_Thanjur_Arts_3_k8eom9.jpg",
    },
    {
      id: 7,
      name: "Classic Design With Omkarm",
      tag: "Modern",
      dic: "Modern mandir with warm lighting and serene vibes.",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759830522/Pooja_Inside_4_zzs1z9.jpg",
    },
    {
      id: 8,
      name: "Lord Balaji Concept",
      tag: "Premium",
      dic: "Thanjavur Art with Lord Balaji combines divine grace with royal South Indian artistry.",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759830527/Pooja_Room_Thanjur_Arts_1_etayb9.jpg",
    },{
      id: 9,
      name: "Luxury Temple Room",
      tag: "Premium",
      dic: "Thanjavur mandir with warm lighting and serene vibes.",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759830528/Pooja_Room_Thanjur_Arts_2_bspas3.jpg",
    },
    {
      id: 10,
      name: "Luxury Temple Room",
      tag: "Premium",
      dic: " mandir with warm lighting and serene vibes.",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759830526/Pooja_Inside_16_schcyo.jpg",
    }
  ];

  const PujaDoorDesigns = [
    {
      id: 11,
      name: "Grand Temple Design",
      tag: "Premium",
      dic: "Classic temple entrance with ornate carvings.",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759835294/PD_handle_2_f20elu.jpg",
    },
    {
      id: 12,
      name: "Royal Heritage Mandir",
      tag: "Premium",
      dic: "Traditional double-door mandir with brass detailing.",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759835293/PD_handle_1_j6ozns.jpg",
    },
    {
      id: 13,
      name: "Contemporary Double Door",
      tag: "Premium",
      dic: "Modern pooja door with glass panels and sleek wood frame.",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759835293/Site_pic_PD_1_ruds44.jpg",
    },
     {
      id: 14,
      name: "Contemporary Double Door",
      tag: "Premium",
      dic: "Modern pooja door with glass panels and sleek wood frame.",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759835292/PD_13_efoqna.jpg",
    },
     {
      id: 15,
      name: "Contemporary Double Door",
      tag: "Premium",
      dic: "Modern pooja door with glass panels and sleek wood frame.",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759835292/PD_A_c0ocad.jpg",
    },
     {
      id: 16,
      name: "Contemporary Double Door",
      tag: "Premium",
      dic: "Modern pooja door with glass panels and sleek wood frame.",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759835290/PD_10_iedhic.jpg",
    },
    {
      id: 17,
      name: "Contemporary Double Door",
      tag: "Premium",
      dic: "Modern pooja door with glass panels and sleek wood frame.",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759835291/PD_12_twazzc.jpg",
    },
    {
      id: 18,
      name: "Contemporary Double Door",
      tag: "Premium",
      dic: "Modern pooja door with glass panels and sleek wood frame.",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759835290/PD_5_qutn6z.jpg",
    },
    {
      id: 19,
      name: "Contemporary Double Door",
      tag: "Premium",
      dic: "Modern pooja door with glass panels and sleek wood frame.",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759835277/PD_1_afagnk.jpg",
    },
    {
      id: 20,
      name: "Contemporary Double Door",
      tag: "Premium",
      dic: "Modern pooja door with glass panels and sleek wood frame.",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759835280/PD_2_sizes_y2ibid.jpg",
    },
    {
      id: 18,
      name: "Contemporary Double Door",
      tag: "Premium",
      dic: "Modern pooja door with glass panels and sleek wood frame.",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759835283/PD_6_A_xpakkt.jpg",
    },
    
  ];
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

  const DesignCard = ({ design }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group relative max-w-[320px] mx-auto"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={design.image}
          alt={design.name}
           loading="lazy"
    className="w-full h-[380px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover Mask */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

        {/* Tag */}
        <div className="absolute top-4 left-4">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {design.tag || "Featured"}
          </span>
        </div>
      </div>

      {/* Text Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-stone-800">{design.name}</h3>
        <p className="text-sm text-stone-600 mb-3">{design.dic}</p>

        <Button
          className="w-full bg-green-700 hover:bg-green-800 text-white text-sm py-2"
          onClick={() => setSelectedImage(design.image)}
        >
          View Details
        </Button>
      </div>
    </motion.div>
  );

  return (
    <section id="pooja-room" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Pooja Room Designs
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Create a sacred space with our divine collection of pooja room
            solutions
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-12 border-b border-gray-200">
            <TabsTrigger
              value="room-designs"
              className="text-sm md:text-base py-3 rounded-t-lg
               data-[state=active]:bg-green-500 data-[state=active]:text-white
               data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-500"
            >
              Room Designs
            </TabsTrigger>

            <TabsTrigger
              value="Puja-Door-Designs"
              className="text-sm md:text-base py-3 rounded-t-lg
               data-[state=active]:bg-green-500 data-[state=active]:text-white
               data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-500"
            >
              Puja Door Designs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="room-designs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              {roomDesigns.map((design) => (
                <DesignCard key={design.id} design={design} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="Puja-Door-Designs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              {PujaDoorDesigns.map((design) => (
                <DesignCard key={design.id} design={design} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
         <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mt-16"
              >
                <div className="bg-gradient-to-r from-green-700 to-green-500 text-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">Custom Puja Room/Door Solutions</h3>
                <p className="text-lg mb-6 leading-relaxed text-emerald-50">
          Need a 
          <span className="font-bold bg-gradient-to-r from-yellow-300 via-amber-200 to-lime-200 text-transparent bg-clip-text">
            {" "}custom Puja Room / Door design
          </span>
          ? <br />
          Our expert craftsmen create 
          <span className="font-semibold text-emerald-100"> bespoke Puja Design</span> 
          tailored to your unique style and space. <br /><br />
          Simply 
          <span className="font-medium text-white"> upload your Puja Room/Door images</span> 
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
        
              {/* ✅ Modal Popup */}
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

        
       </div>
    </section>
  );
};

export default PoojaRoomDesigns;
