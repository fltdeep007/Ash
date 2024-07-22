"use client";

import Image from 'next/image';
import "../../styles/home/about-us.css";
import { useEffect } from 'react';




function AboutUs() {
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
		<div className="aboutUsWrapper">
			<div className="auHeader text-sm flex justify-center align-middle">
				<h2 className='my-4 sm:my-10 text-xl sm:text-3xl py-1 sm:py-3 px-8 sm:px-16 border-2 rounded-2xl sm:rounded-3xl'>About Us</h2>
			</div>
			<div className="md:px-[65px] md:pb-[65px] p-5">
			<div className="about-us bg-gray-700 text-white py-12">
				<div className="about-us-content max-w-6xl mx-auto px-4 lg:px-8">
					<div className="about-us-section flex flex-col lg:flex-row items-center lg:items-start">
						<div className="fadeL about-us-image mb-6 md:mb-0 md:mr-6 flex-shrink-0">
							<Image src="/img.png" alt="Ashiyana Building"
							     className="rounded-lg shadow-lg z-50" height={416} width={565}/>
						</div>
						<div className="fadeR about-us-text md:ml-6 flex-grow">
							<h3 className="text-2xl text-white mt-3">Since 1992</h3>
							<div className=" h-1 w-[200px] lg:left-[51.4%] bg-[#bb903a] mb-5" />
							<p className="tagline text-lg mt-4 mb-4 text-yellow-400">
								<span className="font-bold text-white">Innovation</span> • <span
								className="font-bold text-white">Trust</span> • <span
								className="font-bold text-white">Experience</span> • <span
								className="font-bold text-white">Legacy</span>
							</p>
							<p className="description text-base leading-relaxed text-justify">
								With three decades of steadfast dedication, we stand as a beacon of trust, reliability,
								and innovation within India&apos;s real estate landscape. Since our establishment in 1992,
								Ashiyana Group has been a cornerstone of Khopoli&apos;s real estate development, excelling
								across residential, commercial, and organized retail sector.
							</p>
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>
	);
}

export default AboutUs;
