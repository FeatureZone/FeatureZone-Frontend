import { Link } from 'react-router-dom';
import { heroBgv } from '../images';

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden z-10">
      <div className="absolute inset-0">
        <video
          src={heroBgv}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover object-center"
        >
        </video>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="relative container mx-auto flex flex-col items-center justify-center h-screen px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-center">
          Unlock the Power of Code with AI-Driven Insights
        </h1>
        <p className="mt-4 text-lg md:text-xl text-center">
          Share, manage, and document your code snippets effortlessly with our AI-powered platform.
        </p>
        <div className="mt-8 flex space-x-4">
          <Link to="/get-started" className="bg-[#2ecc71] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#2980b9]">
            Get Started
          </Link>
          <Link to="/learn-more" className="bg-transparent border border-[#2ecc71] text-[#2ecc71] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#3498db] hover:text-white">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
