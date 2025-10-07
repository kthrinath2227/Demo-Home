import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const RailingSection = () => {
  const [activeCategory, setActiveCategory] = useState('partition');
  const [selectedRailing, setSelectedRailing] = useState(null); // for modal
  const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        image: null,
        preview: "",
      });

  const categories = [
    { id: "partition", name: 'Partitions'},
    { id: 'staircase', name: 'Staircase Railings' },
    { id: 'balcony', name: 'Balcony Railings' },
    { id: 'terrace', name: 'Terrace Railings' },
    { id: 'garden', name: 'Garden Railings' }
  ];

  const railings = {
    partition: [
      {
        id: 1,
        name: "Modern PVD Partition",
        material: "PVD",
        image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759843595/PAGE_96_copy_zpdwri.jpg"
      },
      {
        id: 2,
        name: "PVD Capcul Design",
        material: "PVD",
        image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759843594/PAGE_96_copy3333333333_ci9cwt.jpg"
      },
      {
        id: 3,
        name: "Brass Partition",
        material: "Brass",
        image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759843568/3_kd6ww5.jpg"
      }
    ],

    staircase: [
      {
        id: 1,
        name: "Modern Steel Staircase Railing",
        material: "Stainless Steel",
        image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759846147/WhatsApp_Image_2020-10-12_at_9.32.29_PM_orc6p1.jpg"
      },
      {
        id: 2,
        name: "Nature Inspired Steel Staircase Railing",
        material: "Brass",
        image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759846157/WhatsApp_Image_2023-02-09_at_16.09.51_5_bco7gb.jpg"
      },
      {
        id: 3,
        name: "Royal Look Brass Railing",
        material: "Brass",
        image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759846159/WhatsApp_Image_2023-04-19_at_17.29.42_3_ukjsdt.jpg"
      }
    ],
    balcony: [
      {
        id: 4,
        name: "Decorative Brass Balcony Railing",
        material: "Brass",
        image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759846144/WhatsApp_Image_2019-07-30_at_11.30.59_zjbwct.jpg"
      },
      {
        id: 5,
        name: "Minimalist Steel Railing",
        material: "Mild Steel",
        image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759846795/download_1_cy9cqb.jpg"
      },
      {
        id: 6,
        name: "Traditional Brass Railing",
        material: "Brass",
        image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759846934/Grille_de_balcon_imp57c.jpg"
      }
    ],
    terrace: [
      {
        id: 7,
        name: "Weather Resistant Railing",
        material: "Galvanized Steel",
        image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759847009/download_2_yfhifd.jpg"
      },
      {
        id: 8,
        name: "Cable Wire Railing",
        material: "Steel Cable",
        image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759847007/Baranda_balcon_chapa_decorada_corte_laser_Idea_inspiracion_gy1cnz.jpg"
      },
      {
        id: 9,
        name: "Composite Deck Railing",
        material: "Composite",
        image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759846144/WhatsApp_Image_2019-07-30_at_11.30.59_zjbwct.jpg"
      }
    ],
    garden: [
      {
        id: 10,
        name: "Decorative Garden Fence",
        material: "Aluminum",
        image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759847034/download_3_jq4mzh.jpg"
      },
      {
        id: 11,
        name: "Picket Fence Railing",
        material: "Wood",
        image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759847024/download_4_o3co8q.jpg"
      },
      {
        id: 12,
        name: "Modern Panel Fencing",
        material: "Composite",
        image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759847022/Hot_selling_most_modern_house_railing_design_securityretro_luxury_outdoor_balcony_aluminum_alloy_k7id3d.jpg"
      }
    ]
  };

  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "All railings meet safety standards and building codes"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "High-grade materials with superior craftsmanship"
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      description: "Expert installation"
    }
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

  return (
    <section id="railings" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Railing & Partition
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Premium railings & Partition for safety, style, and sophistication
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-stone-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="px-6 py-3"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Railing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {railings[activeCategory].map((railing, index) => (
            <motion.div
              key={railing.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-[340px] object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={railing.name}
                  src={railing.image}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    In Stock
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-stone-800">
                  {railing.name}
                </h3>
                <p className="text-stone-600 mb-4">Material: {railing.material}</p>
                <Button 
                  className="flex-1 bg-green-700 hover:bg-green-800 text-white"
                  onClick={() => handleGetQuote(railing)}
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
       {/* Modal */}
{showModal && selectedRailing && (
  <div
    className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4 overflow-auto"
    onClick={() => setShowModal(false)} // click outside closes
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
      className="bg-white rounded-2xl shadow-2xl p-4 w-full max-w-xl relative max-h-[90vh] overflow-auto"
    >
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
      >
        ×
      </button>
      <h2 className="text-2xl font-semibold mb-4 text-center text-green-700">
        {selectedRailing.name}
      </h2>
      <img
        src={selectedRailing.image}
        alt={selectedRailing.name}
        className="w-full h-auto rounded-lg object-contain mb-4"
      />
      <p className="text-stone-600 text-center">Material: {selectedRailing.material}</p>
    </motion.div>
  </div>
)}


        





 <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mt-16"
              >
                <div className="bg-gradient-to-r from-green-700 to-green-500 text-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">Custom Railing / Partition Solutions</h3>
                <p className="text-lg mb-6 leading-relaxed text-emerald-50">
          Need a 
          <span className="font-bold bg-gradient-to-r from-yellow-300 via-amber-200 to-lime-200 text-transparent bg-clip-text">
            {" "}custom railings for your unique space
          </span>
          ? <br />
          Our expert craftsmen create 
          <span className="font-semibold text-emerald-100"> bespoke Design</span> 
          tailored to your unique style and space. <br /><br />
          Simply 
          <span className="font-medium text-white"> upload your images</span> 
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

export default RailingSection;
