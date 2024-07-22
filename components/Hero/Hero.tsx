"use client";
import ThreeFacade from "./ThreeFacade";
import { Suspense, useEffect, useRef } from "react";
import ExperienceAshiyana from "@/components/home/ExperienceAshiyana";
import '../../styles/home/hero.css'

function Hero() {
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
    <>
      <div className="bg-black h-[80vh] mt-20">
        <Suspense fallback={<ExperienceAshiyana />}>
          <div className="fadeL hidden lg:block  absolute hover:bg-[#00000039] opacity-90 hover:opacity-100 text-white top-[15%] left-[3%] p-8 z-10 h-[260px] w-[960px] hover:z-10">
            <h2 className="text-4xl mb-16">
              Experience the fine life. Experience Ashiyana.
            </h2>
            <p className="text-lg">
              &quot;Step into a world where tranquility meets sophistication,
              where the essence of nature intertwines seamlessly with modern
              convenience. Explore our diverse portfolio and experience the
              artistry of Ashiyana - where dreams find expression, and
              aspirations soar beyond boundaries.&quot;
            </p>
          </div>
          <ThreeFacade />
          {/* <div className="lg:hidden w-[100%] h-auto bg-[#26282800] flex flex-col justify-center items-center pt-40 absolute top-12 z-10 text-white"> */}
            <h2 className="lg:hidden   absolute top-[20%] md:left-[50%] md:translate-x-[-50%] text-2xl font-bold mb-16 text-center text-white">
              Experience the fine life. Experience Ashiyana.
            </h2>
            <p className="lg:hidden fadeL  absolute top-[50%] md:top-[60%] text-sm text-center mt-20 p-8 text-white">
              &quot;Step into a world where tranquility meets sophistication,
              where the essence of nature intertwines seamlessly with modern
              convenience. Explore our diverse portfolio and experience the
              artistry of Ashiyana - where dreams find expression, and
              aspirations soar beyond boundaries.&quot;
            </p>
          {/* </div> */}
        </Suspense>
      </div>
    </>
  );
}

export default Hero;
