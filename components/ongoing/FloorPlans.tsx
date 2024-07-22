"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "@/styles/ongoing/floor-plans.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface FloorPlansProps {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: string[];
  labels: string[] | null ;
  type: 'infinity' | 'village';
}

const FloorPlans: React.FC<FloorPlansProps> = ({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides,
  labels = null,
  type, 
}) => {

  // Define different settings based on the type prop
  const settingsVillage = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: autoSlide,
    autoplaySpeed: autoSlideInterval,
    responsive: [
      
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsInfinity = {
    dots: true,
    infinite: false, // Changed for "infinity"
    speed: 700, // Changed speed for "infinity"
    slidesToShow: 4, // Changed number of slides to show
    slidesToScroll: 1,
    autoplay: autoSlide,
    autoplaySpeed: autoSlideInterval,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Choose the appropriate settings based on the type prop
  const settings = type === "village" ? settingsVillage : settingsInfinity;


  return (
    <div className="relative p-5 mb-10 bg-black">
      <div className="top-[20px] left-[20px] sm:top-0 sm:left-0 justify-self-start self-start z-20 w-[181px] h-[140px]">
        <div className="fontsample absolute z-10 text-nowrap" style={{ width: "27px", height: "140px", background: "#BB903A 0% 0% no-repeat padding-box", opacity: "1" }}>
          Floor Plan
        </div>
      </div>
      <div className="relative top-[50px] height-100vh">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div className="slide-content relative flex flex-col items-center justify-center bg-black p-2">
                <Image src={slide} alt={`Slide ${index}`} layout="responsive" width={280} height={280} objectFit="cover" className="w-full h-auto" />
                {labels && labels[index] && (
                  <div className="slide-label absolute bottom-2 left-2 text-[#D1CFBF]">
                    {labels[index]}
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FloorPlans;
