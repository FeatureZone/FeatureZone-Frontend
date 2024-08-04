import Footer from "../../assets/components/constants/footer"
import NavBar from "../../assets/components/navBar"
import CallToAction from "./callToAction"
import Features from "./features"
import Hero from "./hero"
import HowItWorks from "./howItWorks"
import Testimonials from "./testimonials"


const LandingPage = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
        <Footer />
    </div>
  )
}

export default LandingPage