"use client";
import Image from "next/image";
import "../../styles/home/why-khopoli.css"
import { useEffect } from "react";





function WhyKhopoli() {
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
 
	


	return (
		<div className="whykhopoli bg-gray-500  py-1 relative">
			<div className="header mt-12 sm:mt-16 lg:mt-20 h-auto mb-10 sm:mb-10 lg:mb-16">
				<div
					className="w-44 h-16 sm:w-80 sm:h-32 lg:w-72 lg:h-28 text-3xl sm:text-5xl lg:text-5xl
                        pl-8 sm:pl-10 lg:pl-32 box-content "
				>
					Why choose Khopoli?
				</div>
			</div>
			<div className="midContent z-10">
				<div className="fadeL bg-transparent z-10 relative mainImage mx-auto  sm:absolute sm:left-10">
					<Image
						src="/Khopoli2x.png"
						className="khopoliImage z-10 relative h-64 sm:h-72 lg:h-auto"
						alt="khopoliImg"
						width={934}
						height={561}
					/>
				</div>
				<div className="fadeR mainTypo mx-auto z-2 border-0 sm:absolute px-5 sm:px-10 lg:pl-20 py-4 sm:py-10">
					<div className="typoHeader flex mb-3 justify-between align-middle text-center">
						<div className="typoHeaderEle align-middle text-center mx-1 md:mx-6 lg:text-xl font-bold">
							Tranquility
						</div>
						<div className="typoHeaderEle align-middle text-center mx-1 md:mx-6 lg:text-xl font-bold">
							Potential
						</div>
						<div className="typoHeaderEle align-middle text-center mx-1 md:mx-6 lg:text-xl font-bold">
							Nature
						</div>
					</div>
					<div className="typoPara mt-6 text-center sm:text-left mb-3">
						Nestled within the majestic Western Ghats, Khopoli offers a
						harmonious blend of serenity and natural beauty. As a burgeoning
						real estate hub near Mumbai, this city provides a peaceful haven
						away from the hustle and bustle, with its lush green surroundings
						and the serene Patalganga River meandering through. Experience the
						quietude and solace of nature in Khopoli.
					</div>
				</div>
			</div>
			<div className="mb-2 footTypo align-middle text-center text-sm sm:text-2xl px-8 lg:hidden" >
				Choose Khopoli and discover tranquility amidst nature&apos;s embrace.
			</div>
		</div>
	);
}

export default WhyKhopoli;
