import React from 'react';
import { motion } from 'framer-motion';
import K from '../../assets/components/constants/index';

const Features = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
      },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Key <span className="text-[#2ecc71]">Features</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {K.FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
              style={{ borderColor: feature.color, borderWidth: '2px', borderStyle: 'solid' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              variants={cardVariants}
              whileHover="hover" // Apply hover animation
            >
              <div className="text-4xl mb-4" style={{ color: feature.color }}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
