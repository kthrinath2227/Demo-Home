import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const NewArrivals = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    {
      id: 1,
      name: "Premium Wooden Door",
      rating: 4.8,
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759670431/Site_pic_jzlkjn.jpg",
      badge: "New",
    },
    {
      id: 2,
      name: "Modern Wall Art Set",
      rating: 4.9,
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759727092/Wall_Art_7_qkws0l.jpg",
      badge: "Trending",
    },
    {
      id: 3,
      name: "Designer Pooja Mandir",
      rating: 4.7,
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759660798/Pooja_Inside_1_zamyic.jpg",
      badge: "Premium",
    },
    {
      id: 4,
      name: "Luxury Marble Inlay",
      rating: 4.9,
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759726742/marble_bowgzt.jpg",
      badge: "Artisan",
    },
  ];

  const handleViewImage = (imageUrl, name) => {
    setSelectedImage({ imageUrl, name });
    toast({
      title: "Viewing Product",
      description: `${name} opened in full view.`,
    });
  };

  return (
    <section id="new-arrivals" className="py-20 bg-stone-100 relative">
      <div className="container mx-auto px-4">
        {/* --- Section Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            New Arrivals
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Discover our latest collection of premium home design solutions
          </p>
        </motion.div>

        {/* --- Product Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500"
            >
              {/* --- Image with slow zoom --- */}
              <div className="relative overflow-hidden h-80 sm:h-96">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-[6000ms] ease-in-out group-hover:scale-110"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.08 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'linear',
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      product.badge === 'New'
                        ? 'bg-green-500 text-white'
                        : product.badge === 'Trending'
                        ? 'bg-orange-500 text-white'
                        : product.badge === 'Premium'
                        ? 'bg-purple-500 text-white'
                        : 'bg-amber-600 text-white'
                    }`}
                  >
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* --- Text Section --- */}
              <div className="p-4 sm:p-5 flex flex-col items-center text-center space-y-3">
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-stone-800 h-12">
                  {product.name}
                </h3>
                <Button
                  className="w-full bg-green-700 hover:bg-green-800 text-white"
                  onClick={() => handleViewImage(product.image, product.name)}
                >
                  View
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- View All Button --- */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="px-8 border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
          >
            View All Products
          </Button>
        </motion.div> */}
      </div>

      {/* --- Popup Modal --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
            >
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.name}
                className="w-auto max-w-full max-h-[85vh] object-contain rounded-lg"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition"
              >
                <X className="h-6 w-6 text-black" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default NewArrivals;
