import React from 'react'
import Hero from '../components/Hero'
import WorkSection from '../components/WorkSection'
import Reviews from '../components/Reviews'
import Services from '../components/Services'
import Pricing from '../components/Price'
import OurTeam from '../components/OurTeam'

const Home = () => {
  return (
    <div className="overflow-x-hidden"> {/* Add this line */}
      <Hero/>
      <WorkSection/>
      <Services/>
      <Reviews/>
      <OurTeam/>
    </div>
  )
}

export default Home