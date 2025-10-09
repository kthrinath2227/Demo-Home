
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const message = `
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}
*Message:* ${formData.message}
  `;


  const encodedMessage = encodeURIComponent(message);

  const whatsappNumber = "917093456461"; 

  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");


  setFormData({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
};

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Showroom",
      details: [ "branch, Kondapur 1st Floor", "Shivam Building Sriram Nagar 1st floor of Union bank kothaguda", "near Botanical Garden Rd, Kondapur, Telangana 500084"],
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 70934 56461", "+91 98850 63446",],
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@homesowcase.com","support@homesowcase.com"],
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday: 10AM - 9PM", "Sunday: 10AM - 8.30PM"],
      color: "text-orange-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Ready to transform your space? Let's discuss your project and bring your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-stone-800">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="door-design">Door Design Inquiry</option>
                    <option value="wall-art">Wall Art Consultation</option>
                    <option value="pooja-room">Pooja Room Design</option>
                    <option value="railings">Railing Solutions</option>
                    <option value="hardware">Door Hardware</option>
                    <option value="project-quote">Project Quote</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-green-700 hover:bg-green-800 text-white"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
             <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden mt-5"
            >
              <div className="p-6 border-b border-stone-200">
                <h4 className="text-lg font-semibold text-stone-800">Find Us Here / BZA Branch</h4>
                <p className="text-stone-600 text-sm">Visit our showroom to see our products in person</p>
              </div>
              
              <div className="h-50 bg-stone-200 relative">
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.747774544375!2d80.59619227419002!3d16.538826426697288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35ef2c195edd4d%3A0xee7ca7b7e4395a30!2sHOME%20SHOW%20CASE%20BHAVANIPURAM!5e0!3m2!1sen!2sin!4v1759922442583!5m2!1sen!2sin" 
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="HomeShowcase Showroom Location"
  />
  <div className="absolute inset-0 bg-green-700 bg-opacity-10 pointer-events-none"></div>
</div>

            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className={`w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center mb-4`}>
                    <info.icon className={`h-6 w-6 ${info.color}`} />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-stone-800">
                    {info.title}
                  </h4>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-stone-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden mt-5"
            >
              <div className="p-6 border-b border-stone-200">
                <h4 className="text-lg font-semibold text-stone-800">Find Us Here / HYD Branch</h4>
                <p className="text-stone-600 text-sm">Visit our showroom to see our products in person</p>
              </div>
              
              <div className="h-50 bg-stone-200 relative">
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.994923009079!2d78.35213457421123!3d17.45995710071237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dd06cda891%3A0x3803627406eeccb7!2sHomeshowcase!5e0!3m2!1sen!2sin!4v1760018888438!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="HomeShowcase Showroom Location"
  />
  <div className="absolute inset-0 bg-green-700 bg-opacity-10 pointer-events-none"></div>
</div>

            </motion.div>
             <div className="absolute bottom-5 left-5 flex space-x-4 z-20">
    <a
      href="https://www.instagram.com/yourpage"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/80 p-2 rounded-full hover:bg-green-700 hover:text-white transition"
    >
      <Instagram className="w-5 h-5" />
    </a>

    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/80 p-2 rounded-full hover:bg-green-700 hover:text-white transition"
    >
      <MessageCircle className="w-5 h-5" />
    </a>

    <a
      href="https://www.facebook.com/yourpage"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/80 p-2 rounded-full hover:bg-green-700 hover:text-white transition"
    >
      <Facebook className="w-5 h-5" />
    </a>

    <a
      href="https://www.youtube.com/@yourchannel"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/80 p-2 rounded-full hover:bg-green-700 hover:text-white transition"
    >
      <Youtube className="w-5 h-5" />
    </a>
  </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
