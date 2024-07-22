'use client'

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaSquareXTwitter, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  const [windowWidth, setWindowWidth] = useState<number|null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full h-[580px]"> {/* Adjusted height to fit the new text */}
      <hr className="relative left-[10%] self-center w-[80%] top-[440px]" />

      <div className="grid-1 grid items-center justify-items-center grid-cols-2 md:grid-cols-3 w-full h-[560px] text-white" style={{ backgroundColor: '#262828', border: '1px solid #707070', opacity: '1' }}>
        <div className="relative order-2 sm:order-1 w-[190px] h-[112px] sm:w-[246px] sm:h-[214px] ">
          <p className="underline text-[18px] text-lightcream" style={{ fontFamily: 'Lucida Bright' }}>Office</p>
          <p className="text-[12px] sm:text-[16px] text-lightcream mt-[10px]" style={{ fontFamily: 'Lucida Bright' }}>106 to 109,R.K. Tower</p>
          <p className="text-[12px] sm:text-[16px] text-lightcream mt-[10px]" style={{ fontFamily: 'Lucida Bright' }}>Bazarpeth Khopoli - 410203</p>
          <p className="text-[12px] sm:text-[16px] text-lightcream mt-[10px]" style={{ fontFamily: 'Lucida Bright' }}>9:00 am - 6:00 pm (Mon to Sun)</p>
          <p className="text-[12px] sm:text-[16px] text-lightcream mt-[10px]" style={{ fontFamily: 'Lucida Bright' }}>+91-8448448714 | 02192-267712</p>
          <p className="text-[11px] sm:text-[16px] text-lightcream mt-[10px]" style={{ fontFamily: 'Lucida Bright' }}>admin@ashiyanadreamhomes.com</p>
        </div>

        <div className="flex flex-col order-1 sm:order-2 items-center relative w-[108px] h-[112px] sm:w-[259px] sm:h-[214px]">
          <Link href="/about-us" className="underline text-[12px] sm:text-[18px] text-lightcream" style={{ fontFamily: 'Lucida Bright' }}>About Us</Link>
          <Link href="/ongoing-projects/ashiyana-infinity" className="underline text-[12px] sm:text-[18px] text-lightcream mt-[20px]" style={{ fontFamily: 'Lucida Bright' }}>Ashiyana Infinity</Link>
          <Link href="/ongoing-projects/ashiyana-village" className="underline text-[12px] sm:text-[18px] text-lightcream mt-[20px]" style={{ fontFamily: 'Lucida Bright' }}>Ashiyana Village</Link>
          <Link href="/completed-projects" className="underline text-[12px] sm:text-[18px] text-lightcream mt-[20px]" style={{ fontFamily: 'Lucida Bright' }}>Completed Project</Link>
          <Link href="/contact-us" className="underline text-[12px] sm:text-[18px] text-lightcream mt-[20px]" style={{ fontFamily: 'Lucida Bright' }}>Contact Us</Link>
        </div>

        <div className="col-span-2 order-3 md:col-span-1 relative w-[259px] h-[214px]">
          <div className="flex items-center justify-center">
            <div className="logo">
              <Link href="/">
                <Image className='' src="/logo.png" alt="logo" width={145} height={63} />
              </Link>
            </div>
          </div>
          <div className="mt-[10px] flex items-center justify-center">
            <Link href="https://www.facebook.com/ashiyanadreamhomes?mibextid=rS40aB7S9Ucbxw6v" className="ml-4 mr-4 text-gray-300 dark:text-gray-300">
              <FaFacebookF fontSize={"25px"} />
            </Link>
            <Link href="https://twitter.com/ashiyanal?lang=en" className="mr-4 text-gray-300 dark:text-gray-300">
              <FaSquareXTwitter fontSize={"25px"} />
            </Link>
            <Link href="https://www.instagram.com/ashiyanadreamhomes?igsh=cWFsdW1uOG5raXho" className="mr-4 text-gray-300 dark:text-gray-300">
              <FaInstagram fontSize={"25px"} />
            </Link>
            <Link href="https://wa.me/919021138384?text=Interested%20in%20Ashiyana%20Homes" className="mr-4 text-gray-300 dark:text-gray-300">
              <FaWhatsapp fontSize={"25px"} />
            </Link>
          </div>
        </div>
      </div>

   
      <div className=" bg-black flex items-center justify-center  ">
        <p className="text-center text-[14px] text-lightcream" style={{ fontFamily: 'Lucida Bright' }}>
          Designed and developed by <Link href="https://quetraware.com" className="underline text-lightcream">Quetraware</Link>
        </p>
      </div>
    </div>
  )
}
