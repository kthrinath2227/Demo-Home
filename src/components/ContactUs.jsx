
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

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
    toast({
      title: "Message Sent! 📧",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
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
      details: ["123 Design Street, Sector 15", "Gurgaon, Haryana 122001", "India"],
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 11 4567 8900", "Mon-Sat: 9AM-7PM"],
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@homesowcase.com", "sales@homesowcase.com", "support@homesowcase.com"],
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 7PM", "Saturday: 10AM - 6PM", "Sunday: Closed"],
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
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-6 border-b border-stone-200">
                <h4 className="text-lg font-semibold text-stone-800">Find Us Here</h4>
                <p className="text-stone-600 text-sm">Visit our showroom to see our products in person</p>
              </div>
              
              <div className="h-64 bg-stone-200 relative">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.0266%2C28.4595%2C77.0866%2C28.5195&layer=mapnik&marker=28.4895%2C77.0566"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HomeSowCase Showroom Location"
                />
                <div className="absolute inset-0 bg-green-700 bg-opacity-10 pointer-events-none"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-700 to-green-500 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Dream Project?</h3>
            <p className="text-lg mb-6">
              Schedule a free consultation with our design experts and get a personalized quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
                Get Free Quote
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
