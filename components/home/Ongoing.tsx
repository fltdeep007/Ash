'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../../styles/home/ongoing.css';

const Ongoing = () => {
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

    // Clean up the observer on component unmount
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

  const [windowWidth, setWindowWidth] = useState<number | null>(null);

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
    <div className="overflow-hidden relative h-auto w-[100vw] min-w-[100vw] mx-0 bg-[#D1CFBF] overflow-x-hidden">
      <div>
        {windowWidth !== null && (
          <div>
            {windowWidth > 840 ? (
              <div>
                <div className=" coming3 text-wrap ">ONGOING</div>
                <div className=" coming4 text-wrap ">PROJECTS</div>
              </div>
            ) : (
              <div>
                <div className="coming text-wrap ">ONG</div>
                <div className="coming1 text-wrap ">OING</div>
                <div className=" coming2 text-wrap ">PROJ</div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="mt-5 relative w-full flex flex-row h-28px" style={{ justifyContent: 'center' }}>
        <button className="butto2 w-[203px] h-[48px] lg:h-[58px] lg:w-[355px] text-[21px] lg:text-[31px] z-30">
          
          Ongoing projects
        </button>
      </div>
      <div className="relative fadeL top-[20%] md:top-[10%] flex flex-row w-full md:h-[394px] h-248px lg:px-16">
        <div className="ashiyanavill w-128px md:w-[201px] lg:w-[229px] h-[248px] md:h-[394px] z-30">
          <Image src="/ashiyana-village.jpg" alt="ashiyana village" fill className="rounded-ss-[45px] rounded-se-[45px]" />
        </div>
        <div className="absolute w-[390px] md:w-[530px] lg:w-[645px] h-[128px] md:h-[12rem] villdetails2 z-20" style={{ bottom: 0 }}>
          <div className="ml-7">
            <p className="mt-2 ashifont">Ashiyana Village </p>
            <p className="mt-2 nofloors">4 Buildings</p>
            <p className="nofloors">7 Storey Buildings</p>
            <p className="mb-1 nofloors">1BHK , 2BHK , 3BHK</p>
            {windowWidth !== null && (
              <div>
                {windowWidth > 1024 && (
                  <p className="paratext text-wrap" style={{ maxWidth: '60%' }}>
                    RCC & Brick work complete (60% complete). External & Internal Plaster in Progress.
                    Click on More to view Project Progress. Book now!!!!
                  </p>
                )}
              </div>
            )}
            <Link href="/ongoing-projects/ashiyana-village" passHref>
              <button className="butto1  z-40 ">More</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative fadeR mb-10 top-[60%] md:top-[50%] flex flex-row-reverse w-full md:h-[394px] h-248px lg:px-16">
        <div className="absolute w-[390px] md:w-[530px] lg:w-[645px] h-[128px] md:h-[12rem] villdetails2 z-20" style={{ bottom: 0 }}>
          <div className="ml-7">
            <p className="mt-2 infifont">Ashiyana Infinity</p>
            <p className="mt-2 nofloors1">7 Floors</p>
            <p className="nofloors1">28 Apartments</p>
            <p className="mb-1 nofloors1">1RK , 1BHK , 2BHK</p>
            {windowWidth !== null && (
              <div>
                {windowWidth > 1024 && (
                  <p className="paratext1 text-wrap" style={{ maxWidth: '60%' }}>
                    Luxurious Spacious well designed articulated. Khopoli. ongoing.
                    Luxurious Spacious well designed articulated. Khopoli. ongoing.
                  </p>
                )}
              </div>
            )}
            <Link href="/ongoing-projects/ashiyana-infinity" passHref>
              <button className="butto1 z-40">More</button>
            </Link>
          </div>
        </div>
        <div className="ashiyanainf w-128px md:w-[201px] lg:w-[229px] h-[248px] md:h-[394px] z-30 mr-2.5">
          <Image src="/Infinity.jpg" alt="ashiyana infinity" fill className="rounded-ss-[45px] rounded-se-[45px]" />
        </div>
      </div>
    </div>
  );
};

export default Ongoing;
