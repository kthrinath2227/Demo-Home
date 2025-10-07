import React, { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { X } from "lucide-react";

const DoorDesigns = () => {
  const [activeTab, setActiveTab] = useState("single");
  const [viewMoreSingle, setViewMoreSingle] = useState(false);
  const [viewMoreDouble, setViewMoreDouble] = useState(false);
  const [selectedDoor, setSelectedDoor] = useState(null);

   const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", preview: null });
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


  // ---------- Door Data ----------
  const singleDoors = [
    { id: 1, name: "Classic Design", material: "Brass With Patina Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759816604/Main_Door_Single_new_1_uuqpye.jpg" },
    { id: 2, name: "Modern Flower Design", material: "Brass With Gloss Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759816605/Main_Door_single_nfr7cp.jpg" },
    { id: 3, name: "Nature Inspired Design", material: "Brass With Matte Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759816607/Main_door_site_umwuv5.jpg" },
    { id: 4, name: "Peacock Inspired Design", material: "Brass with Semi Antique Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759816607/MD_copy_t9gtjy.jpg" },
    { id: 5, name: "Butterfly Design", material: "Brass With Matte Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759816637/Room_Door_7_mdltul.jpg" },
    { id: 6, name: "Music Inspired Design", material: "Brass With Semi Antique Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759816636/Room_Door_3_h3pu7l.jpg" },
    { id: 7, name: "Geometric Pattern Design", material: "Brass With Gloss Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759816605/Main_door_2_ecnfi8.jpg" },
    { id: 8, name: "Floral Elegance Design", material: "Brass With Gloss Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759816608/Main_door_A_uv9wlt.jpg" },
    { id: 9, name: "Panel Design", material: "Brass With Matte Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759816603/Main_Door_Single_copy_fmvm03.jpg" }
  ];

  const doubleDoors = [
    { id: 1, name: "Regal Design", material: "Brass With Semi Antique Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759818063/Site_piic_copy_q4rcuj.jpg" },
    { id: 2, name: "Floral Design With Borders", material: "Brass With Antique Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759818057/Site_pic_nusclt.jpg" },
    { id: 3, name: "Traditional Design", material: "Brass With Semi Antique Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759818056/MD_5_copyyyyyyyy_hgaoeq.jpg" },
    { id: 4, name: "Mandala Design", material: "Brass With Semi Antique Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759818044/5_fvjpw0.jpg" },
    { id: 5, name: "Modern Plate Design", material: "Brass With Semi Antique Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759818050/Main_Door_Double_new_1_g6uyz8.jpg" },
    { id: 6, name: "Sun Inspired Design", material: "Brass With Rose Gold Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759818043/4_copy_ewho7l.jpg" },
    { id: 7, name: "Modern Design", material: "Brass With Matte Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759818042/4.2_copy_mkoclv.jpg" },
    { id: 8, name: "Plate Design", material: "Brass with Semi Antique Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759818052/Main_Door_Double_new_2_k05lee.jpg" },
    { id: 9, name: "Elegant Design", material: "Brass With Antique Finish", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759818054/Main_Door_Double_new_ukp6ch.jpg" }
  ];

  // ---------- Memoized Door Card ----------
  const DoorCard = memo(({ door }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden relative group transition-all duration-300 hover:shadow-xl">
    <div className="relative w-full overflow-hidden">
  <LazyLoadImage
    src={door.image}
    alt={door.name}
    loading="lazy"
    className="w-full h-[320px] object-cover block"
    
  />
  <div className="absolute top-4 right-4">
    <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm font-medium">
  {door.tag || "Featured"}
</span>
  </div>
</div>


    {/* Text content aligned left */}
    <div className="p-4 text-left">
      <h3 className="text-lg font-semibold mb-1 text-stone-800">{door.name}</h3>
      <p className="text-sm text-stone-600 mb-3">{door.material}</p>
      <Button
        className="bg-green-700 hover:bg-green-800 text-white text-sm px-5 py-2"
        onClick={() => setSelectedDoor(door)}
      >
        View Details
      </Button>
    </div>
  </div>
));

  const renderDoors = (doors, viewMore, setViewMore) => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(viewMore ? doors : doors.slice(0, 6)).map((door) => (
          <DoorCard key={door.id} door={door} />
        ))}
      </div>
      {doors.length > 6 && (
        <div className="text-center mt-10">
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

  return (
    <section id="door-designs" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
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

        {/* Tabs Section */}
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

      {/* Responsive Modal */}
       <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-16"
            >
              <div className="bg-green-700 text-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Custom Door Design Solutions</h3>
              <p className="text-lg mb-6 leading-relaxed text-emerald-50">
        Need a 
        <span className="font-bold bg-gradient-to-r from-yellow-300 via-amber-200 to-lime-200 text-transparent bg-clip-text">
          {" "}custom Door designs
        </span>
        ? <br />
        Our expert craftsmen create 
        <span className="font-semibold text-emerald-100"> bespoke Door Design</span> 
        tailored to your unique style and space. <br /><br />
        Simply 
        <span className="font-medium text-white"> upload your door images</span> 
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
     
    </section>
  );
};

export default DoorDesigns;
