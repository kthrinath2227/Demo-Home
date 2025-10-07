
import React from 'react';
import { motion } from 'framer-motion';
import { Users, PencilRuler, Hammer, Sparkles } from 'lucide-react';

const OurProcess = () => {
  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "We start by understanding your vision, requirements, and lifestyle to create a personalized plan.",
      icon: Users
    },
    {
      step: "02",
      title: "Design & Concept",
      description: "Our designers craft detailed concepts and 3D renderings, bringing your ideas to life visually.",
      icon: PencilRuler
    },
    {
      step: "03",
      title: "Execution",
      description: "Our skilled artisans and craftsmen meticulously build and install each element with precision.",
      icon: Hammer
    },
    {
      step: "04",
      title: "The Reveal",
      description: "We present your transformed space, ensuring every detail is perfect and exceeds your expectations.",
      icon: Sparkles
    }
  ];

  return (
    <section id="our-process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Our Creative Process
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            From initial idea to final reveal, we follow a meticulous process to ensure perfection in every project.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-stone-200 -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center relative bg-white p-6 rounded-lg"
              >
                <div className="relative mb-6 inline-block">
                  <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                    <item.icon className="h-12 w-12 text-green-700" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-stone-800">{item.title}</h3>
                <p className="text-stone-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
