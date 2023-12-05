'use client'
import React, { useState, useEffect } from 'react';


const Hero = () => {
  const images = [
    { src: '/Hero/3.jpg', alt: 'Image 1' },
    { src: '/Hero/1.jpg', alt: 'Image 2' },
    { src: '/Hero/2.jpg', alt: 'Image 3' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      setActiveIndex(nextIndex);
    }, 5000); // Change the interval time as needed

    return () => clearInterval(intervalId);
  }, [activeIndex]);

  const handlePrevClick = () => {
    if (activeIndex === 0) {
      setActiveIndex(images.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (activeIndex === images.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleSlideClick = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <div className="mt-16 relative h-64 overflow-hidden rounded-lg md:h-96 lg:h-128 lg:mt-16">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            activeIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={image.src} alt={image.alt} className="w-full sm:object-center lg:object-center h-full" />
        </div>
      ))}

      <div className="absolute bottom-10 flex justify-center z-30">
        <div className='ml-48 md:ml-96 lg:ml-144'>
        {images.map((_, index) => (
            <div key={index} className='mr-4 text-center inline-block'>
                 <button
            
            type="button"
            className={`w-2 h-2 rounded-full bg-white text-center lg:w-4 lg:h-4 ${
              activeIndex === index ? 'bg-gray-100' : ''
            }`}
            onClick={() => handleSlideClick(index)}
          />
            </div>
         
        ))}
        </div>
       
      </div>


      <div className="relative h-64 top-10 z-10 flex items-center justify-between">
        <div className="absolute left-10">
          <button
            type="button"
            className="w-2 h-2 lg:w-4 lg:h-4 rounded-full"
            onClick={handlePrevClick}
          >
            <svg
              className="w-4 h-4 text-white dark:text-gray-100"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </div>

        <div className="absolute right-20 z-30">
          <button
            type="button"
            className="w-1 h-1 rounded-full lg:w-4 lg:h-4 "
            onClick={handleNextClick}
          >
            <svg
              className="w-4 h-4 text-white dark:text-gray-100"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
