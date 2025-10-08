import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Instagram } from 'lucide-react';

const FloatingIcons = () => {
  const [hovered, setHovered] = useState(null);

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageSquare,
      href: 'https://wa.me/+917093456461',
      color: 'bg-green-500',
      tooltip: 'Chat with us on WhatsApp 💬',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/homeshowcasehyd?igsh=MThnb2oxeG9xZzhhdw==',
      color: 'bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600',
      tooltip: 'See our Reels & posts on Instagram 📸',
    },
  ];

  const tooltipVariants = {
    hidden: { opacity: 0, x: 12, transition: { duration: 0.18 } },
    visible: { opacity: 1, x: 0, transition: { duration: 0.18 } },
  };

  return (
    <div className="fixed bottom-3 right-2 z-50 flex flex-col gap-3">
      {socialLinks.map((link, idx) => (
        <motion.div
          key={link.name}
          className="relative"
          onHoverStart={() => setHovered(idx)}
          onHoverEnd={() => setHovered(null)}
          initial={{ y: 40, scale: 0.9, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ delay: 0.35 + idx * 0.08, type: 'spring', stiffness: 120 }}
        >
          <motion.a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.08, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            className={`${link.color} w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg`}
            aria-label={link.tooltip}
          >
            <link.icon className="h-7 w-7" />
          </motion.a>

          {/* Tooltip (pointer-events-none so it doesn't capture the hover) */}
          <motion.span
            className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg shadow-md whitespace-nowrap pointer-events-none z-50"
            variants={tooltipVariants}
            animate={hovered === idx ? 'visible' : 'hidden'}
          >
            {link.tooltip}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
