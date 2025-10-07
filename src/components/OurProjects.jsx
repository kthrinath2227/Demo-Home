
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const OurProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'residential', 'commercial', 'luxury', 'traditional'];

  const projects = [
    {
      id: 1,
      title: "Luxury Villa Interior",
      category: "luxury",
      location: "Gurgaon, Delhi NCR",
      completedDate: "March 2024",
      clientType: "Private Residence",
      description: "Complete interior transformation with custom doors, wall arts, and pooja room design",
      image: "Luxury villa interior with custom wooden doors and elegant wall decorations",
      features: ["Custom Doors", "Wall Arts", "Pooja Room", "Railings"]
    },
    {
      id: 2,
      title: "Modern Office Complex",
      category: "commercial",
      location: "Bangalore, Karnataka",
      completedDate: "January 2024",
      clientType: "Corporate Office",
      description: "Contemporary office design with modern door solutions and artistic wall installations",
      image: "Modern office complex with glass doors and contemporary wall art installations",
      features: ["Glass Doors", "Modern Railings", "Wall Installations"]
    },
    {
      id: 3,
      title: "Traditional Heritage Home",
      category: "traditional",
      location: "Jaipur, Rajasthan",
      completedDate: "February 2024",
      clientType: "Heritage Property",
      description: "Restoration and enhancement of traditional home with authentic designs",
      image: "Traditional heritage home with carved wooden doors and classical architecture",
      features: ["Heritage Doors", "Traditional Carvings", "Antique Hardware"]
    },
    {
      id: 4,
      title: "Contemporary Apartment",
      category: "residential",
      location: "Mumbai, Maharashtra",
      completedDate: "April 2024",
      clientType: "Apartment Complex",
      description: "Modern apartment interiors with sleek door designs and minimalist aesthetics",
      image: "Contemporary apartment with minimalist door designs and modern interiors",
      features: ["Minimalist Doors", "Modern Hardware", "Clean Lines"]
    },
    {
      id: 5,
      title: "Boutique Hotel Design",
      category: "commercial",
      location: "Goa",
      completedDate: "December 2023",
      clientType: "Hospitality",
      description: "Unique hotel interior with custom artistic elements and luxury finishes",
      image: "Boutique hotel with artistic door designs and luxury interior elements",
      features: ["Artistic Doors", "Luxury Finishes", "Custom Hardware"]
    },
    {
      id: 6,
      title: "Penthouse Transformation",
      category: "luxury",
      location: "Pune, Maharashtra",
      completedDate: "May 2024",
      clientType: "Private Residence",
      description: "Complete penthouse makeover with premium materials and bespoke designs",
      image: "Luxury penthouse with premium door designs and sophisticated interiors",
      features: ["Premium Materials", "Bespoke Designs", "Smart Integration"]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleViewProject = (projectTitle) => {
    toast({
      title: "Project Details",
      description: `🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
    });
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Our Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across residential and commercial spaces
          </p>
        </motion.div>

        {/* Filters */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group"
            >
              <div className="relative overflow-hidden">
                <img 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={project.title}
                 src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.category === 'luxury' ? 'bg-gold-500 text-white' :
                    project.category === 'commercial' ? 'bg-blue-500 text-white' :
                    project.category === 'residential' ? 'bg-green-500 text-white' :
                    'bg-purple-500 text-white'
                  }`}>
                    {project.category}
                  </span>
                </div>

                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Button
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleViewProject(project.title)}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-purple-600" />
                    {project.completedDate}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-purple-600" />
                    {project.clientType}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={() => handleViewProject(project.title)}
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-purple-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg mb-6">
              Let's discuss your vision and create something extraordinary together. Our team is ready to bring your ideas to life.
            </p>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Start Your Project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProjects;
