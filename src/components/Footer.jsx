
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Door Designs", href: "#door-designs" },
        { name: "Wall Arts", href: "#wall-arts" },
        { name: "Marble Art", href: "#marble-art" },
        { name: "Wooden Art", href: "#wooden-art" },
        { name: "Pooja Room Designs", href: "#pooja-room" },
        { name: "Railings", href: "#railings" },
        { name: "Door Handles", href: "#door-handles" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Process", href: "#our-process" },
        { name: "Our Projects", href: "#projects" },
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "FAQs", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-stone-900 text-stone-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-green-700 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl font-serif">H</span>
                </div>
                <span className="text-2xl font-bold text-white">HomeSowCase</span>
              </div>
              
              <p className="text-stone-300 leading-relaxed">
                Transform your home with our premium collection of doors, wall arts, and interior design solutions. 
                Quality craftsmanship meets modern aesthetics.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-400" />
                  <span className="text-stone-300">123 Design Street, Gurgaon, Haryana</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-400" />
                  <span className="text-stone-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-400" />
                  <span className="text-stone-300">info@homesowcase.com</span>
                </div>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-stone-800 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              className="space-y-4"
            >
              <span className="text-lg font-semibold text-white">{section.title}</span>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-stone-300 hover:text-green-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-stone-800"
        >
          <div className="max-w-md mx-auto text-center">
            <span className="text-xl font-semibold mb-4 block text-white">Stay Updated</span>
            <p className="text-stone-300 mb-6">
              Subscribe to our newsletter for the latest design trends and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-stone-800 border border-stone-700 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent text-white placeholder-stone-400"
              />
              <Button className="bg-green-700 hover:bg-green-800 text-white px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-stone-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
  <p className="text-stone-400 text-sm text-center md:text-left">
    © 2025 HomeSowCase. All rights reserved. Designed with ❤️ By{" "}
    <a
      href="https://www.thedevstechnologies.online"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-400 hover:underline"
    >
      TheDevsTechnologies
    </a>
  </p>

  <div className="flex items-center space-x-6">
    <a
      href="#"
      className="text-stone-400 hover:text-green-400 text-sm transition-colors"
    >
      Privacy Policy
    </a>
    <a
      href="#"
      className="text-stone-400 hover:text-green-400 text-sm transition-colors"
    >
      Terms of Service
    </a>
    <Button
      variant="ghost"
      size="sm"
      onClick={scrollToTop}
      className="text-stone-400 hover:text-green-400"
    >
      <ArrowUp className="h-4 w-4 mr-1" />
      Back to Top
    </Button>
  </div>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
