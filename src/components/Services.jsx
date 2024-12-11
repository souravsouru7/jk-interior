import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building2, UtensilsCrossed, Sofa, Palette, PiggyBank, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handlePrevService = (e) => {
    e.stopPropagation();
    const currentIndex = services.findIndex(service => service.title === selectedService.title);
    const prevIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    setSelectedService(services[prevIndex]);
  };

  const handleNextService = (e) => {
    e.stopPropagation();
    const currentIndex = services.findIndex(service => service.title === selectedService.title);
    const nextIndex = currentIndex === services.length - 1 ? 0 : currentIndex + 1;
    setSelectedService(services[nextIndex]);
  };

  const services = [
    {
      icon: Home,
      title: "Residential Design",
      subtitle: "Turning Houses into Homes",
      description: "Your home is a reflection of your personality and lifestyle. We create cozy, functional, and elegant living spaces tailored to your taste.",
      features: [
        "Living Rooms: Comfortable and stylish areas perfect for relaxation and gatherings",
        "Bedrooms: Serene and functional sanctuaries for rest and rejuvenation",
        "Bathrooms: Modern and luxurious designs for a spa-like experience",
        "Kids' Rooms: Vibrant, playful spaces that spark creativity"
      ],
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200"
    },
    {
      icon: Building2,
      title: "Commercial Design",
      subtitle: "Creating Professional Spaces That Inspire",
      description: "We understand the importance of a productive and appealing workspace. Our designs focus on functionality, branding, and customer experience.",
      features: [
        "Office Spaces: Ergonomic layouts and inspiring designs for optimal productivity",
        "Retail Stores: Eye-catching displays and customer-friendly layouts",
        "Hospitality Spaces: Welcoming and luxurious interiors for hotels, cafes, and restaurants"
      ],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200"
    },
    {
      icon: UtensilsCrossed,
      title: "Modular Kitchens",
      subtitle: "Cooking Made Effortless and Elegant",
      description: "The kitchen is the heart of every home, and our modular designs combine style with utility.",
      features: [
        "Customized Layouts: Designs that maximize your space",
        "Premium Materials: Durable and easy-to-maintain finishes",
        "Smart Storage: Innovative solutions to keep your kitchen organized"
      ],
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200"
    },
    {
      icon: Sofa,
      title: "Customized Furniture",
      subtitle: "Furniture Tailored to Your Space and Style",
      description: "Mass-produced furniture often doesn't fit unique spaces or personal tastes. That's why we offer bespoke furniture solutions.",
      features: [
        "Sofas and Seating: Crafted for comfort and elegance",
        "Wardrobes and Storage: Maximizing space while blending with the interior",
        "Tables and Desks: Perfectly designed for your functional needs"
      ],
      image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200"
    },
    {
      icon: Palette,
      title: "Interior Styling",
      subtitle: "Finishing Touches That Elevate Your Space",
      description: "Interior styling is about transforming a good design into a great one.",
      features: [
        "Decor Elements: Selecting art, accessories, and textiles",
        "Lighting Solutions: Enhancing ambiance and functionality",
        "Furniture Placement: Arranging furniture for optimal flow"
      ],
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200"
    },
    {
      icon: PiggyBank,
      title: "Budget-Friendly Solutions",
      subtitle: "Great Design Doesn't Have to Be Expensive",
      description: "We believe everyone deserves a beautifully designed space. We offer creative and cost-effective solutions without compromising on quality.",
      features: [
        "Smart Material Selection: High-quality, budget-friendly options",
        "Efficient Space Planning: Making the most of every square foot",
        "Affordable Finishing Touches: Stylish decor at a fraction of the cost"
      ],
      image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1200"
    }
  ];

  const ServiceCard = ({ service, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative"
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="relative h-[400px] rounded-xl overflow-hidden cursor-pointer"
        onClick={() => setSelectedService(service)}
      >
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <div className="w-12 h-12 rounded-full bg-[#b08968]/20 flex items-center justify-center mb-4">
            <service.icon className="w-6 h-6 text-[#b08968]" />
          </div>
          <h2 className="text-2xl font-bold">{service.title}</h2>
          <p className="text-white/80">{service.subtitle}</p>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 bg-[#b08968]/10 mt-16"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl font-bold text-white text-center mb-6"
          >
            Comprehensive Interior Design Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 text-center max-w-3xl mx-auto"
          >
            At JK Interior Services, we offer a wide range of services designed to meet your unique
            requirements. Click on any service to learn more.
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors z-[60]"
              onClick={handlePrevService}
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors z-[60]"
              onClick={handleNextService}
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1a1a1a] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <motion.img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-[300px] object-cover"
                  layoutId={`service-image-${selectedService.title}`}
                />
                <button
                  className="absolute top-4 right-4 p-2 bg-black/50 rounded-full"
                  onClick={() => setSelectedService(null)}
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#b08968]/20 flex items-center justify-center">
                    <selectedService.icon className="w-6 h-6 text-[#b08968]" />
                  </div>
                  <div>
                    <motion.h2 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-3xl font-bold text-white"
                    >
                      {selectedService.title}
                    </motion.h2>
                    <motion.p 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-[#b08968]"
                    >
                      {selectedService.subtitle}
                    </motion.p>
                  </div>
                </div>

                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-white/70 mb-6"
                >
                  {selectedService.description}
                </motion.p>

                <div className="flex justify-between items-center mb-6">
                  <button
                    onClick={handlePrevService}
                    className="flex items-center gap-2 text-[#b08968] hover:text-[#b08968]/80 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous Service
                  </button>
                  <button
                    onClick={handleNextService}
                    className="flex items-center gap-2 text-[#b08968] hover:text-[#b08968]/80 transition-colors"
                  >
                    Next Service
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">Key Features:</h3>
                  {selectedService.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-3 text-white/70"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#b08968]" />
                      {feature}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;