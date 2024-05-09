import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
// import Navbar from '../Components/Navbar'

function Home() {
  return (
    <>
    <Navbar/>
    <Hero heroTitle="Dzidi GH" heroCaption="This is the resturant of the century" heroButton="Menu"/>
    </>
  )
}

export default Home