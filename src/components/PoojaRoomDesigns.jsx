import React, { useState } from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const PoojaRoomDesigns = () => {
  const [activeTab, setActiveTab] = useState("room-designs");
  const [viewMoreRoom, setViewMoreRoom] = useState(false);
  const [viewMoreDoor, setViewMoreDoor] = useState(false);
  const [viewImage, setViewImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", image: null, preview: "" });

  const roomDesigns = [
    { id: 1, name: "Complete Pooja Room", tag: "Premium", dic: "Elegant full-room temple setup with traditional decor.", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759830524/Pooja_Inside_9_waf62f.jpg" },
    { id: 2, name: "Tradition Shines in Every Detail", tag: "Trending", dic: "Minimal pooja corner with clean detailing and natural finish.", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759830520/Pooja_Inside_1_kyjeuh.jpg" },
    { id: 3, name: "Natural Temple Room", tag: "Trending", dic: "Modern mandir with warm lighting and serene vibes.", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759830522/Pooja_Inside_4_zzs1z9.jpg" },
    { id: 4, name: "Dasavathaaram Concept", tag: "Premium", dic: "The Dasavathaaram beautifully reflects the evolution of life and consciousness.", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759830526/Pooja_Inside_3_zi5ttv.jpg" },
    { id: 5, name: "The Destroyer of Evil, the Creator of Peace.", tag: "Premium", dic: "Lord Shive Concept With Borders.", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759830529/Pooja_Inside_14.1_uyfugz.jpg" },
    { id: 6, name: "Lord Balaji Concept", tag: "Trending", dic: "Thanjavur Art with Lord Balaji combines divine grace with royal South Indian artistry.", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759830528/Pooja_Room_Thanjur_Arts_3_k8eom9.jpg" },
  ];

  const PujaDoorDesigns = [
    { id: 11, name: "Grand Temple Design", tag: "Premium", dic: "Classic temple entrance with ornate carvings.", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759835294/PD_handle_2_f20elu.jpg" },
    { id: 12, name: "Royal Heritage Mandir", tag: "Premium", dic: "Traditional double-door mandir with brass detailing.", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759835293/PD_handle_1_j6ozns.jpg" },
    { id: 13, name: "Contemporary Double Door", tag: "Premium", dic: "Modern pooja door with glass panels and sleek wood frame.", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759835293/Site_pic_PD_1_ruds44.jpg" },
    { id: 14, name: "Contemporary Double Door", tag: "Premium", dic: "Modern pooja door with glass panels and sleek wood frame.", image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/w_600,h_400,c_fill/v1759835292/PD_13_efoqna.jpg" },
  ];

  const renderDesigns = (designs, viewMore, setViewMore) => {
    const displayed = viewMore ? designs : designs.slice(0, 4);
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {displayed.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden group max-w-[320px]"
            >
              <motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
  className="overflow-hidden relative w-full"
>
  <LazyLoadImage
    src={design.image}
    alt={design.name}
    effect="blur"
    className="w-full sm:h-64 md:h-64 lg:h-64 transition-transform duration-500"
  />
  <div className="absolute top-4 left-4">
    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
      {design.tag || "Featured"}
    </span>
  </div>
</motion.div>

              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-stone-800">{design.name}</h3>
                <p className="text-sm text-stone-600 mb-3">{design.dic}</p>
                <Button
                  className="w-full bg-green-700 hover:bg-green-800 text-white text-sm py-2"
                  onClick={() => setViewImage(design.image)}
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        {designs.length > 3 && (
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello! 👋 I would like a custom pooja room/door design.%0A
Name: ${formData.name}%0A
Phone: ${formData.phone}%0A
${formData.preview ? `I've uploaded an image for reference: ${formData.preview}` : ""}`;
    window.open(`https://wa.me/919381187905?text=${message}`, "_blank");
    toast({ title: "Opening WhatsApp...", description: "Please send your request message in WhatsApp." });
    setShowModal(false);
    setFormData({ name: "", phone: "", image: null, preview: "" });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setFormData({ ...formData, image: file, preview: URL.createObjectURL(file) });
  };

  return (
    <section id="pooja-room" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Pooja Room Designs</h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Create a sacred space with our divine collection of pooja room solutions
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-gray-100 p-1 rounded-xl shadow-sm">
            <TabsTrigger value="room-designs" className="text-lg py-3 rounded-lg">Room Designs</TabsTrigger>
            <TabsTrigger value="puja-door-designs" className="text-lg py-3 rounded-lg">Puja Door Designs</TabsTrigger>
          </TabsList>

          <TabsContent value="room-designs">{renderDesigns(roomDesigns, viewMoreRoom, setViewMoreRoom)}</TabsContent>
          <TabsContent value="puja-door-designs">{renderDesigns(PujaDoorDesigns, viewMoreDoor, setViewMoreDoor)}</TabsContent>
        </Tabs>
      </div>

      {/* View Details Modal */}
      {viewImage && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl shadow-2xl max-w-xl w-full relative p-4 mx-auto">
            <button onClick={() => setViewImage(null)} className="absolute top-2 right-1 text-gray-500 hover:text-red-600 text-xl z-50">×</button>
            <img src={viewImage.replace("/w_600,h_400,c_fill/", "/w_1200,h_800,c_fill/")} alt="Pooja Design" className="w-full h-auto max-h-[80vh] rounded-xl object-contain" />
          </motion.div>
        </div>
      )}

      {/* Request Custom Design Section & Modal */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-center mt-16">
        <div className="bg-gradient-to-r from-green-700 to-green-500 text-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Custom Puja Room/Door Solutions</h3>
          <p className="text-lg mb-6 leading-relaxed text-emerald-50">
            Need a <span className="font-bold bg-gradient-to-r from-yellow-300 via-amber-200 to-lime-200 text-transparent bg-clip-text">custom Puja Room / Door design</span>? <br />
            Our expert craftsmen create <span className="font-semibold text-emerald-100">bespoke Puja Design</span> tailored to your style and space. Upload images or share ideas, and we’ll bring them to life.
          </p>
          <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-green-700" onClick={() => setShowModal(true)}>
            Request Custom Design
          </Button>
        </div>
      </motion.div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md relative">
            <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl">×</button>
            <h2 className="text-2xl font-semibold mb-4 text-center text-green-700">Request Custom Design</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full border border-stone-300 rounded-lg px-4 py-2" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <input type="tel" placeholder="Your Phone Number" className="w-full border border-stone-300 rounded-lg px-4 py-2" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              <label className="block text-sm font-medium text-stone-600">Upload Reference Image</label>
              <input type="file" accept="image/*" className="w-full border border-stone-300 rounded-lg px-4 py-2" onChange={handleImageUpload} />
              {formData.preview && <img src={formData.preview} alt="Preview" className="w-full h-48 object-cover rounded-lg mt-2 border" />}
              <Button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white">Send to WhatsApp</Button>
              <p className="text-xs text-center text-stone-500">By submitting, WhatsApp will open automatically.</p>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default PoojaRoomDesigns;
