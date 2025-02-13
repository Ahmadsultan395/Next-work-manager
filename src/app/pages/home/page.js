import React from 'react'
import Hero from './hero/Hero'
import Feature from './Feature/Feature'
import CardControl from './CardControl/CardControl'
import Testimonial from './testimonnial/Testimonial'
import Contact from './contact/Contact'

const HomePage = () => {
  return (
    <div className='bg-[url("/hero/heroBg.jpg")] bg-cover bg-center  place-items-center  shadow-lg shadow-gray-300 w-screen  min-h-[100vh]'>
      <div className='bg-[#316391b2] w-full min-h-[100vh]'>
      <Hero/>
      <Feature/>
      <CardControl/>
      <Testimonial/>
      <Contact/>
      </div>
    </div>
  )
}

export default HomePage