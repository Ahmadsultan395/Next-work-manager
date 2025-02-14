"use client";
import React from 'react';
import { FaStudiovinari } from "react-icons/fa";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialList = [
  {
    name: 'John Doe',
    image: <FaStudiovinari className='text-cyan-600' />,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia!'
  },
  {
    name: 'Jane Doe',
    image: <FaStudiovinari className='text-cyan-600' />,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia!'
  },
  {
    name: 'Sam Smith',
    image: <FaStudiovinari className='text-cyan-600' />,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia!'
  },
  {
    name: 'Alice Brown',
    image: <FaStudiovinari className='text-cyan-600' />,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia!'
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for medium screens
    slidesToScroll: 3,
    responsive: [
      {
        // For screens 1300px and above
        breakpoint: 3000,
        settings: {
          slidesToShow: 4, // 4 slides on larger screens
          slidesToScroll: 4,
        },
      },
      {
        // For screens between 900px and 1300px (medium screens)
        breakpoint: 1300,
        settings: {
          slidesToShow: 3, // 3 slides on medium-large screens
          slidesToScroll: 3,
        },
      },
      {
        // For screens between 600px and 900px (smaller medium screens)
        breakpoint: 900,
        settings: {
          slidesToShow: 2, // 2 slides on smaller medium screens
          slidesToScroll: 2,
        },
      },
      {
        // For screens below 600px (mobile)
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div className="bg-gray-900 px-10 py-20">
      <Slider {...settings}>
        {testimonialList.map((items, index) => (
          <div key={index} className="bg-white flex flex-col p-10 rounded-lg shadow-md">
            <p className="text-lg">{items.description}</p>
            <div className="flex items-center mt-5">
              <span className="text-[3rem] mr-5">{items.image}</span>
              <h1 className="text-xl font-semibold text-gray-800">{items.name}</h1>
            </div>
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        .slick-track {
          display: flex;
          gap: 1rem;
        }
        .slick-slide {
          display: flex !important;
          justify-content: center; /* Center the items */
        }
      `}</style>
    </div>
  );
};

export default Testimonial;
