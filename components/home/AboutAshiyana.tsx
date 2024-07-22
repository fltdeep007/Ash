"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import "../../styles/home/about-ashiyana.css";

export default function AboutAshiyana() {
  useEffect(() => {
    const aniUpElements = document.querySelectorAll('.aniUp');
    const fadeLElements = document.querySelectorAll('.fadeL');
    const fadeRElements = document.querySelectorAll('.fadeR');

    const aniUpObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-bottom');
        } else {
          entry.target.classList.remove('fade-in-bottom');
        }
      });
    });

    const fadeLObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-left');
        } else {
          entry.target.classList.remove('fade-in-left');
        }
      });
    });

    const fadeRObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-right');
        } else {
          entry.target.classList.remove('fade-in-right');
        }
      });
    });

    aniUpElements.forEach(element => {
      aniUpObserver.observe(element);
    });

    fadeLElements.forEach(element => {
      fadeLObserver.observe(element);
    });

    fadeRElements.forEach(element => {
      fadeRObserver.observe(element);
    });

    return () => {
      aniUpElements.forEach(element => {
        aniUpObserver.unobserve(element);
      });
      fadeLElements.forEach(element => {
        fadeLObserver.unobserve(element);
      });
      fadeRElements.forEach(element => {
        fadeRObserver.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="flex flex-col w-full h-720px relative ">
    <div className="absolute w-full  h-720px bg-mattegray box"></div>
    <div className="absolute w-3/5 sm:w-3/4 md:w-4/5 lg:w-5/6 xl:w-3/5 left-153px lg:left-256px xl:left-478px h-720px bg-duskygray z-10 box2 overlay"></div>

     <div className="fadeR absolute  h-221px text-left left-9 xl:left-801px top-10 xl:top-102px drop-shadow-[0_3px_6px_rgba(0,0,0,0.29)] w-73px  bg-transparent text-cream font-lucida text-[30px]  lg:text-[43px] z-20">Ashiyana <br/>through years</div>
     <div className='boujee1 lg:left-148px bg-transparent absolute top-148px lg:top-171px w-379px sm:w-617px h-317px lg:flex xl:top-60px  z-20'>
      <Image src="/stock-image-ashiyana-min.jpg" alt="background image" layout='fill' className="flex flex-col absolute h-317px xl:h-617px"/>
     <div className=' flex flex-row-reverse relative lg:w-617px h-317px xl:h-617px'> 
      <div className='absolute flex flex-col justify-end items-end'>
       <div className='fadeR delay-0 pl-3 relative boujee3 self-end font-lucida text-[11px] z-50'><span className=' text-[20px]'>30+</span> years of trust</div>
       <div className='fadeR delay-1 relative  boujee4  self-end sm:font-lucida text-[11px] z-50 '><span className=' pl-3 pr-3 text-[20px]'>28</span>completed projects</div>
       <div className='fadeR delay-2 relative boujee5 self-end font-lucida text-[11px] z-50'><span className=' pl-2 pr-2 text-[20px]'>10+</span>lakh sq. Ft Delivered</div>
       <div className='fadeR delay-3 relative boujee6 self-end font-lucida text-[11px] z-50'><span className=' pl-2 pr-8 text-[20px]'>1000+</span>Happy Family</div>
     </div>
     </div>
     </div>
     
     <div className="fadeL self-center md:self-end md:mr-4  px-3.5 py-3.5  absolute drop-shadow-[0_3px_6px_rgba(0,0,0,0.29)] top-494px bg-mattegray lg:bg-transparent z-30 w-357px lg:w-700px h-193px text-[12px] lg:text-[18px] xl:text-[16px] lg:opacity-100 text-lightcream font-lucida text-wrap xl:w-468px xl:h-240px xl:bg-transparent xl:left-790px xl:top-256px">Ashiyana Group is a firm that believes in delivering the Best Quality Homes to its customers. The group&apos;s core focus is on Quality, keeping in mind the Usability and Practicality of the homes that it delivers. The key values and pillars of the group are Transparency and Reliability. Ashiyana Group has constructed more than 1 million sq. ft. of Residential and Commercial spaces and is known for creating and Building Landmarks in Khopoli.</div>
  </div>
  );
}
