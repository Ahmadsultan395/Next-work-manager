"use client"
import React from 'react'
import { FaStudiovinari } from "react-icons/fa";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialList = [
  {
    name: 'John Doe',
    image: <FaStudiovinari className='text-cyan-600' />,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia!'
  },
  {
    name: 'John Doe',
    image: <FaStudiovinari className='text-cyan-600' />,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia!'
  },
  {
    name: 'John Doe',
    image: <FaStudiovinari className='text-cyan-600' />,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia!'
  },
]

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className='bg-gray-900 px-40 py-20'>
      <Slider {...settings} >
        {testimonialList.map((items, index) => (
          <div key={index} className='bg-white flex flex-col p-10  rounded'>
            <p className='text-lg'>{items.description}</p>
            <div className='flex items-center mt-5'>
              <span className='text-[3rem] mr-5'>{items.image}</span>
              <h1 className='text-xl font-semibold text-gray-800'>{items.name}</h1>
            </div>
          </div>
        ))}
      </Slider>

        
      {/* Add CSS styles inside the component */}
      <style jsx global>{`
        .slick-track {
          display: flex;
          gap: 1rem;
        }
      `}</style>
    </div>
  )
}

export default Testimonial
