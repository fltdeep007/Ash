"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import {useProgress} from "@react-three/drei";



const ExperienceAshiyana = () => {
  const { progress } = useProgress();
  console.log(progress);

 

  return (
    <>
      <div className="relative w-[100%] h-[80vh] bg-[#262828] max-lg:hidden overflow-x-hidden">
        <div
          className=" absolute hover:bg-[#00000080] text-white top-[15%] left-[3%] p-8 z-10 h-[260px] w-[960px] hover:z-30">
          <h2 className="text-4xl mb-16">Experience the fine life. Experience Ashiyana.</h2>
          <p className="text-lg">
            &quot;Step into a world where tranquility meets sophistication, where the essence of nature
            intertwines seamlessly with modern convenience. Explore our diverse portfolio and experience
            the artistry of Ashiyana - where dreams find expression, and aspirations soar beyond
            boundaries.&quot;
          </p>
        </div>
        <div className="absolute w-[90%] h-[80%] bottom-0 right-5 z-20">
          <Image src="/ongoing/infinti.png" alt="" fill />
        </div>
      </div>
      <div className="lg:hidden w-[100%] h-auto bg-[#262828] flex flex-col justify-center items-center pt-40 top-12 text-white">
        <h2 className="text-2xl font-bold mb-16 text-center">Experience the fine life. Experience Ashiyana.</h2>
        <div className="h-[360px] w-[100%] bg-[url('/ongoing/infinti.png')] md:bg-cover md:bg-center max-sm:bg-contain max-sm:h-[170px] bg-no-repeat mx-32"></div>
        <p className="text-sm text-center p-16">
          &quot;Step into a world where tranquility meets sophistication, where the essence of nature
          intertwines seamlessly with modern convenience. Explore our diverse portfolio and experience
          the artistry of Ashiyana - where dreams find expression, and aspirations soar beyond
          boundaries.&quot;
        </p>
      </div>
    </>
  );
};

export default ExperienceAshiyana;
