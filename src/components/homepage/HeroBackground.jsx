import React from 'react'
import Navbar from '../navbar/Navbar'
import HomepageHero from './HomepageHero'
import TrustedBy from './TrustedBy'
import About from './About'
import Services from './Service'
import Project from './Project'
import See from './See'
import Faq from './Faq'
import Discover from './Discover'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Team from './Team'
import CTA from './CTA'

function HeroBackground() {
  return (
    <div  className="relative min-h-screen">
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b 
        from-purple-300/30 via-blue-400/60 via-transparent to-transparent
        blur-2xl opacity-90">
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HomepageHero />
      </div>
      <TrustedBy  />
      <About />
      <Services />
      <Project />
      <See />
      <Faq />
      <Discover />
      <Testimonials />
      <Contact />
      <Team />
      <CTA />
    </div>
  )
}

export default HeroBackground
