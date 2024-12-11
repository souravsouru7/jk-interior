import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, UtensilsCrossed, Sofa, Palette, PiggyBank } from 'lucide-react';

const Services = () => {
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
            requirements. Whether you're looking to revamp your living space, elevate your office, or add
            finishing touches to your interiors, we have you covered.
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#b08968]/20 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-[#b08968]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                  <h3 className="text-xl text-[#b08968]">{service.subtitle}</h3>
                  <p className="text-white/70">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="text-white/70 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#b08968]" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-[400px] rounded-xl overflow-hidden"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;


  