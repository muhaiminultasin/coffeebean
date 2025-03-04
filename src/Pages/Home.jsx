import React from 'react'
import Hero from '../Components/Hero'
import Story from '../Components/Story'
import SpecialMenus from '../Components/SpecialMenus'
import Services from '../Components/Services'
import Carousel from '../Components/Slider'
import OurMenu from '../Components/OurMenu'
import ReservationSec from '../Components/ReservationSec'
import ContactDetails from '../Components/ContactDetails'


const Home = () => {
  return (
    <>
      <Hero/>
      <Story/>
      <SpecialMenus/>
      <Services/>
      {/* From Slider.jsx */}
      <Carousel/>
      <OurMenu/>
      <ReservationSec/>
      <ContactDetails/>
    </>
  )
}

export default Home;
