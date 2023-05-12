import React from 'react'
import Feature1 from '../components/Feature1'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
// import Multi from '../components/Multi'
// import HeroSection from '../components/HeroSection'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'

const Homepage = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Feature1 />
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Footer/>
    </>
  )
}

export default Homepage