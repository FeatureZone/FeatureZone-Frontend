import { Link } from 'react-router-dom';
import K from '../components/constants/index';

const CallToAction = () => {
  return (
    <section className="py-16 bg-[#2ecc71] text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">{K.CTA_TEXT.main}</h2>
        <p className="text-lg mb-8">{K.CTA_TEXT.sub}</p>
        <div className="flex justify-center space-x-4">
          <Link to="/signup" className="bg-white text-[#3498db] px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200">
            {K.CTA_TEXT.primaryButton}
          </Link>
          <Link to="/learn-more" className="bg-transparent border border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-[#3498db]">
            {K.CTA_TEXT.secondaryButton}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
