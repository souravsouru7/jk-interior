import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample gallery images (replace URLs with your chosen images)
  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
      title: "Modern Living Room"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1616137466211-f939a420be84",
      title: "Contemporary Kitchen"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
      title: "Luxury Bedroom"
    },
    // Add more images as needed
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-black pt-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-[#b08968] mb-4">Our Gallery</h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          Explore our portfolio of stunning interior designs and transformations
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {galleryImages.map((image) => (
          <motion.div
            key={image.id}
            variants={imageVariants}
            whileHover={{ scale: 1.05 }}
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <motion.img
              src={image.url}
              alt={image.title}
              className="w-full h-72 object-cover rounded-lg"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">{image.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for selected image */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage.url}
            alt={selectedImage.title}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </motion.div>
      )}
    </div>
  );
};

export default Gallery; 