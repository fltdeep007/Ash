"use client";

import React from 'react';
import '../../styles/about/awards.css';
import { awards } from '@/constants';
import { PinContainer } from './PinContainer';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Awards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-[#262828] max-sm:px-2 px-8 py-8 lg:h-[850px] overflow-hidden">
      <div className="brandValuesMain bg-[#262828] mx-8 sm:mx-12 lg:mx-16 border-2 h-full p-6">
        <div className="relative my-3 lg:my-5 h-[60px] w-[120px] sm:w-[130px] sm:h-[85px] lg:h-[150px] lg:w-[200px]">
          <h1 className="mb-10 absolute -left-[20%] h-full flex items-center text-2xl sm:text-[35px] lg:text-5xl text-[#d1c1bf]">
            AWARDS
          </h1>
        </div>
        <Slider {...settings} className="pt-10 p-6 md:pt-2 max-sm:px-0">
          {awards.map(({ id, title, des, img }) => (
            <div key={id} className="mt-10 mb-36 lg:mb-20 z-20 max-sm:mb-28 md:mb-52">
              <PinContainer title={title}>
                <div className="shadow-lg rounded-lg h-[300px] w-[150px] mx-auto md:h-[450px] md:w-[300px] lg:h-[380px] lg:w-[250px] flex flex-col items-center">
                  <div className="w-full h-[70%] max-sm:h-[50%] flex items-center justify-center p-4 max-sm:p-0">
                    <div className="relative bg-transparent w-full h-full max-sm:w-[100%] max-sm:mt-0">
                      <Image src={img} fill objectFit="contain" alt={title} className="rounded-lg" />
                    </div>
                  </div>
                  <div className="mt-20 max-sm:mt-0 flex flex-col items-center text-center text-white p-4 max-sm:p-0 w-full h-[30%] max-sm:h-[50%]">
                    <h2 className="font-bold text-xl text-[#efcf8f]">{title}</h2>
                    <p className="text-sm mt-6 text-[#707070]">{des}</p>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
