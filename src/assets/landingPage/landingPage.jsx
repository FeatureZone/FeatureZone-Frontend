import React from 'react'
import NavBar from '../components/navBar'
import Hero from './hero'
import Features from './features'
import HowItWorks from './howItWorks'
import Testimonials from './testimonials'
import CallToAction from './callToAction'
import Footer from '../components/constants/footer'

const LandingPage = () => {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <Features/>
        <HowItWorks/>
        <Testimonials/>
        <CallToAction/>
        <Footer/>
    </div>
  )
}

export default LandingPage