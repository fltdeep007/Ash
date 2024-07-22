"use client";
import "../../styles/about/staff-element.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { staffData } from "@/constants";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type StaffCategory = 'onSite' | 'office' | 'sales';

function StaffElement() {
  const [toggle, setToggle] = useState<StaffCategory>('onSite');

  useEffect(() => {
    gsap.fromTo(
      '.StaffElementWrapper',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.StaffElementWrapper',
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      }
    );
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.StaffMemChip', {
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      onComplete: () => {
        gsap.to('.StaffMemChip', {
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        });
      },
    });
  }, [toggle]);

  const renderStaffMembers = (category: StaffCategory) => {
    return staffData[category].map((member, index) => (
      <div key={index} className="StaffMemChip rounded-md h-auto w-[80px]  sm:w-[100px] lg:w-[220px] ">
        <div className="StaffMemImg h-[70px] w-[70px] sm:h-[85px] sm:w-[85px] lg:h-[200px] lg:w-[200px] bg-white rounded-md mx-auto mt-1 lg:mt-[14px] relative">
          <Image src={member.imgSrc} alt={member.name} layout="fill" objectFit="cover" className="rounded-md" />
        </div>
        <div className="StaffMemInfo text-center">
          <div className="StaffMemName headerFont text-[8px] lg:text-[15px]">
            {member.name}
          </div>
          <div className="StaffMemPost paraFont text-[8px] lg:text-[12px]">
            {member.post}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="StaffElementWrapper bg-[#d1cfbf] w-full h-auto pb-2">
      <div className="StaffCataBtns px-3 py-10 flex justify-between">
        <span
          className={`CataBtn headerFont rounded-[15px] border-2 px-5 lg:px-[74px] text-xs sm:text-sm lg:text-2xl ${toggle === 'onSite' ? 'active' : ''}`}
          onClick={() => setToggle('onSite')}
        >
          On-Site
        </span>
        <span
          className={`CataBtn headerFont rounded-[15px] border-2 px-5 lg:px-[74px] text-xs sm:text-sm lg:text-2xl ${toggle === 'office' ? 'active' : ''}`}
          onClick={() => setToggle('office')}
        >
          Office
        </span>
        <span
          className={`CataBtn headerFont rounded-[15px] border-2 px-5 lg:px-[74px] text-xs sm:text-sm lg:text-2xl ${toggle === 'sales' ? 'active' : ''}`}
          onClick={() => setToggle('sales')}
        >
          Sales
        </span>
      </div>
      {toggle === 'onSite' && <div className="StaffMemChips OnSiteMems flex flex-wrap gap-5 justify-center">{renderStaffMembers('onSite')}</div>}
      {toggle === 'office' && <div className="StaffMemChips OfficeMems flex flex-wrap gap-5 justify-center">{renderStaffMembers('office')}</div>}
      {toggle === 'sales' && <div className="StaffMemChips SalesMems flex flex-wrap gap-5 justify-center">{renderStaffMembers('sales')}</div>}
      <div className="StaffDotsWrapper place-content-center h-24 flex justify-center align-middle">
        <div className="StaffDots self-center flex gap-3">
          <div className={`${toggle === 'onSite' ? "opacity-50" : "opacity-100"} StaffDot bg-green-800 h-2 w-2 rounded-full`}></div>
          <div className={`${toggle === 'office' ? "opacity-50" : "opacity-100"} StaffDot bg-green-800 h-2 w-2 rounded-full`}></div>
          <div className={`${toggle === 'sales' ? "opacity-50" : "opacity-100"} StaffDot bg-green-800 h-2 w-2 rounded-full`}></div>
        </div>
      </div>
    </div>
  );
}

export default StaffElement;
