'use client';

import "../../styles/about/about-us-main.css";
import Image from "next/image";
import { brandValues } from "@/constants";
import { useEffect } from "react";

function AboutUSMainElement() {
  useEffect(() => {
    const fadeLElements = document.querySelectorAll('.fadeL');

    

    const fadeLObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-left');
        } else {
          entry.target.classList.remove('fade-in-left');
        }
      });
    });

    

    fadeLElements.forEach(element => {
      fadeLObserver.observe(element);
    });

    // Clean up the observer on component unmount
    return () => {
      
      fadeLElements.forEach(element => {
        fadeLObserver.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="AboutUSMainELe AboutUSWrapper">
      <div className="w-full AboutUSWrapper h-auto  bg-[#262828]">
        <div className="brandValuesMain bg-transparent mx-8 sm:mx-12 lg:mx-16 border-2 h-full">
          <div className="headerWarpper my-3 lg:mt-5 h-[60px] w-[120px] sm:w-[130px] sm:h-[85px] lg:h-[150px] lg:w-[200px] relative">
            <h1 className="brandValuesHeader fadeL AboutUSWrapper headerFont absolute -left-[20%] h-full place-content-evenly text-2xl sm:text-[35px] lg:text-5xl sm:py-3">
              BRAND VALUES
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-20 lg:gap-y-16 lg:gap-x-24 mb-8 p-8 px-28">
            {brandValues.map(({ icon, title, description }, index) => (
              <div key={index} className="text-center">
                <div className="flex flex-col items-center justify-center mb-0 ">
                  <Image src={icon} alt={title} width={100} height={100}  />
                  <h2 className="fadeL font-bold text-[#CFB47E] text-3xl max-sm:text-2xl mt-2">{title}</h2>
                  <div className="max-md:h-[100px] max-md:w-[200px] pt-3">
                    <p className="fadeL text-gray-400 text-md max-sm:text-xs">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="vision AboutUSWrapper py-20 lg:py-40">
        <div className="visionWrapper border-y-2 pb-5 px-2">
          <div className="visionHeader text-xl lg:text-4xl relative h-10 lg:h-12">
            <h1 className="headerFont AboutUSWrapper rounded border-x-2 w-60 lg:w-[450px] text-center absolute -top-1/2 left-1/2 -translate-x-2/4 translate-y-0 px-3 py-1">
              MISSION STATEMENT
            </h1>
          </div>
          <div className="visionDesc text-center px-32">
            <p className="paraFont text-[10px] sm:text-[13px] lg:text-[40px] font-semibold">
              Building Dreams on the Legacy of Trust and Excellence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUSMainElement;
