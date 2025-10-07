
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const DoorHandles = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'modern', 'traditional', 'luxury', 'minimalist'];

  const doorHandles = [
    {
      id: 1,
      name: "Premium Brass Handle",
      category: "luxury",
      rating: 4.8,
      material: "Solid Brass",
      finish: "Antique Gold",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759842226/handle_33_pcqsem.jpg"
    },
    {
      id: 2,
      name: "Modern Steel Handle",
      category: "modern",
      rating: 4.6,
      material: "Brass",
      finish: "Brushed Steel",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759842256/handle_34_xnjllu.jpg"
    },
    {
      id: 3,
      name: "Traditional Round Handle",
      category: "traditional",
      rating: 4.7,
      material: "Brass",
      finish: "Natural Wood",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759842270/IMG-20210611-WA0065_xd87rl.jpg"
    },
    {
      id: 4,
      name: "Minimalist Handle",
      category: "minimalist",
      rating: 4.9,
      material: "Brass",
      finish: "Matte",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759842267/handle_40_tt5hhf.jpg"
    },
    {
      id: 5,
      name: "Crystal Handle",
      category: "luxury",
      rating: 4.9,
      material: "White Metal",
      finish: "Clear",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759842257/handle_35_wckrzp.jpg"
    },
    {
      id: 6,
      name: "Pipe Handle",
      category: "modern",
      rating: 4.5,
      material: "Brass",
      finish: "Rose Gold",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759842273/WhatsApp_Image_2020-06-18_at_9.48.03_PM_ea74u4.jpg"
    },
    {
      id: 7,
      name: "Vintage Copper Handle",
      category: "traditional",
      rating: 4.8,
      material: "Brass",
      finish: "Copper",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759842223/handle_11_dar2mg.jpg"
    },
    {
      id: 8,
      name: "Sleek Chrome Handle",
      category: "minimalist",
      rating: 4.7,
      material: "Chrome",
      finish: "Polished Chrome",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759842264/handle_37_aizclt.jpg"
    }
  ];

  const filteredHandles = activeFilter === 'all' 
    ? doorHandles 
    : doorHandles.filter(handle => handle.category === activeFilter);

  const handleInquiry = (handleName) => {
    toast({
      title: "Inquiry Sent!",
      description: `Our team will contact you shortly about the ${handleName}.`,
    });
  };

  const handleQuickView = (handleName) => {
    toast({
      title: "Quick View",
      description: `🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
    });
  };

  return (
    <section id="door-handles" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Door Handles Collection
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Complete your doors with our premium collection of handles and hardware
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="capitalize px-6 py-2"
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredHandles.map((handle, index) => (
            <motion.div
              key={handle.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group border border-gray-100"
            >
              <div className="relative overflow-hidden flex items-center justify-center h-48 bg-gray-100">
  <img
    className="max-h-full w-auto object-contain transition-transform duration-500 ease-in-out transform group-hover:scale-105"
    alt={handle.name}
    src={handle.image}
  />
      
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    handle.category === 'luxury' ? 'bg-amber-500 text-white' :
                    handle.category === 'modern' ? 'bg-blue-500 text-white' :
                    handle.category === 'traditional' ? 'bg-amber-800 text-white' :
                    'bg-gray-500 text-white'
                  }`}>
                    {handle.category}
                  </span>
                </div>

                
              </div>

              <div className="p-4">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(handle.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-stone-600 ml-1">({handle.rating})</span>
                </div>

                <h3 className="text-sm font-semibold mb-2 text-stone-800 line-clamp-2 h-10">
                  {handle.name}
                </h3>

                <div className="text-xs text-stone-600 mb-2">
                  <p>Material: {handle.material}</p>
                  <p>Finish: {handle.finish}</p>
                </div>

             
              </div>
            </motion.div>
          ))}
        </div>

        {filteredHandles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-stone-500 text-lg">No door handles found in this category.</p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-700 to-green-500 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Complete Hardware Solutions</h3>
            <p className="text-lg mb-6">
              Beyond handles, we offer complete door hardware including hinges, locks.
            </p>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoorHandles;
