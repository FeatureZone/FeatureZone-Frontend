import { motion } from 'framer-motion';
import K from "../components/constants/index";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-[#D9EEE1]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          How It <span className="text-[#2ecc71]">Works</span>
        </h2>
        <div className="flex flex-col items-center space-y-8">
          {K.HOWITWORKS.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full bg-[#2ecc71] text-white shadow-lg"
              >
                {step.icon}
              </div>
              <div className="ml-6 p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
              {index < K.HOWITWORKS.length - 1 && (
                <div className="w-4 h-4 bg- rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
