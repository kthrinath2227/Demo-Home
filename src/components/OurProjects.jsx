import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OurProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Creeper Wall Art",
      category: "luxury",
      location: "USA",
      completedDate: "March 2024",
      clientType: "Private Residence",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759903618/WhatsApp_Image_2025-10-07_at_20.34.31_d28527de_ij1nns.jpg",
      features: ["Wall Arts"]
    },
    {
      id: 2,
      title: "Tree Concept",
      category: "traditional",
      location: "Bangalore, Karnataka",
      completedDate: "January 2024",
      clientType: "Corporate Office",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759903619/WhatsApp_Image_2025-10-07_at_20.34.31_c9b219e7_tlqznr.jpg",
      features: ["Glass Doors", "Modern Railings"]
    },
    {
      id: 3,
      title: "Art Of Love",
      category: "traditional",
      location: "Hyderabad",
      completedDate: "February 2024",
      clientType: "Villa",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759903613/5_gfczel.jpg",
      features: ["Heritage Doors", "Carvings"]
    },
    {
      id: 4,
      title: "Mirror Wall Art",
      category: "residential",
      location: "Mumbai, Maharashtra",
      completedDate: "April 2024",
      clientType: "Apartment Complex",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759903609/WhatsApp_Image_2025-10-07_at_20.36.27_154885ec_cnmqxh.jpg",
      features: ["Minimalist Doors"]
    },
    {
      id: 5,
      title: "Tree Concept",
      category: "commercial",
      location: "Vijayawada",
      completedDate: "December 2023",

      clientType: "Hospitality",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759903609/WhatsApp_Image_2025-10-07_at_20.36.26_3a845eef_eqbl73.jpg",
      features: ["Artistic Doors"]
    },
    {
       id: 5,
      title: "Photo frame Concept",
      category: "commercial",
      location: "Hyderabad",
      completedDate: "December 2023",
      clientType: "Hospitality",
      image: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759903606/WhatsApp_Image_2025-10-07_at_20.36.32_72f90917_kslcvk.jpg",
      features: ["Artistic Doors"]

    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            A glimpse of our recent works across India.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden group relative"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-72 object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-4 md:p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-purple-600" /> {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-purple-600" /> {project.completedDate}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-purple-600" /> {project.clientType}
                  </div>
                </div>

                <Button
                  className="w-full mt-4 bg-green-600 hover:bg-purple-700"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4">
            <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 rounded-full p-2"
              >
                <X className="h-5 w-5 text-gray-700" />
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto max-h-[65vh] object-contain"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 text-sm">{selectedProject.location}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurProjects;
