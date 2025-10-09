import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, PlayCircle, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoTestimonial = {
    clientName: "The Sharma Family",
    location: "Mumbai, MH",
    review:
      "HomeSowCase completely transformed our home. The craftsmanship is impeccable, and their team was a pleasure to work with. We couldn't be happier!",
    videoUrl:
      "https://res.cloudinary.com/dzwxkhkvi/video/upload/v1759917257/WhatsApp_Video_2025-10-08_at_15.13.23_80a74623_p363rz.mp4",
    poster:
      "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759999368/f2ab8be9-82da-4314-a88a-b0d5cf196e74.png",
  };

  const chatTestimonials = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759915140/WhatsApp_Image_2025-10-08_at_11.38.44_f4e6c795_fiwiey.jpg",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759915140/WhatsApp_Image_2025-10-08_at_11.33.42_f8cd8043_oypz5o.jpg",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759915140/WhatsApp_Image_2025-10-08_at_11.34.55_a9714d53_n08fga.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            What Our Clients Say
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            We take pride in our work, but don't just take our word for it. Here's what our clients think.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 🎥 Video Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            {!isPlaying ? (
              <>
                <img
                  src={videoTestimonial.poster}
                  alt="Client testimonial thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg lg:text-xl font-semibold mb-4 italic">
                    "{videoTestimonial.review}"
                  </blockquote>
                  <p className="font-bold">{videoTestimonial.clientName}</p>
                  <p className="text-sm text-stone-300">{videoTestimonial.location}</p>
                </div>

                <Button
                  size="icon"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm"
                  onClick={() => setIsPlaying(true)}
                >
                  <PlayCircle className="h-12 w-12 text-white" />
                </Button>
              </>
            ) : (
             <video
  src={videoTestimonial.videoUrl}
  controls
  autoPlay
  className="w-full h-auto max-h-[500px] object-contain rounded-2xl"
/>
            )}
          </motion.div>

          {/* 💬 WhatsApp Chat Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <MessageSquare className="h-8 w-8 text-green-600" />
              <h3 className="text-2xl font-bold text-stone-800">From Our Chats</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {chatTestimonials.map((chat) => (
                <motion.div
                  key={chat.id}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
                >
                  <img
                    className="w-full h-auto object-contain"
                    alt={`WhatsApp chat testimonial ${chat.id}`}
                    src={chat.image}
                  />
                </motion.div>
              ))}
            </div>
            <p className="text-stone-600 text-center">
              Real feedback from our happy clients, shared with their permission.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
