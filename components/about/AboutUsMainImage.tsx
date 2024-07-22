"use client";
import Image from 'next/image';
import '../../styles/about/about-us-main.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);


function AboutUSMainImage() {
	useEffect(() => {
   
		gsap.fromTo(".mainContent  p", 
		  { y: '-100%', opacity: 0 }, 
		  {
			y: '0%',
			opacity: 1,
			duration: 2,
			ease: 'power2.out',
			scrollTrigger: {
			  trigger: ".mainContent",
			  start: "top 80%",
			  toggleActions: "play none none reset"
			}
		  }
		);
	  }, []);

	return (
		<div className='AboutUSWrapper'>
			<div className="mainImg lg:h-[600px] h-[400px] max-sm:h-[150px] md:h-[300px] mt-20 relative max-sm:mb-16 md:mb-20">
				<Image src="/about-us-main.png" alt=" " className="object-contain" fill />
			</div>

			<div
				className="mainContent mx-7 sm:mx-9 lg:mx-24 h-[400px] relative "
			>
				<div className="mainContentEle absolute -top-[26%] sm:-top-[34%] lg:-top-[38%] px-3 py-1 sm:p-5 lg:px-14 lg:py-8" >
					<h1 className="text-2xl lg:text-5xl pb-2 sm:pb-5 lg:pb-9 headerFont">
						Building Dreams on the Legacy of Trust and Excellence
					</h1>
					<p className='text-[10px] sm:text-sm headerFont'>
						Introducing to you Aashiyana Group, a leading real estate company
						residing in the heart of Khopoli that specializes in building homes,
						commercial space, and organized retail properties. Our legacy’s
						foundation dates back to 1992, ever since which we have continued to
						provide excellence in every project we undertake, guaranteeing
						exceptional quality and comfort. We are also determined in our
						pursuit of shaping the ever-evolving real estate landscape of India.
						Our aim is simple: we want to be the epitome of trust and innovation
						by becoming the most reliable real estate brands in the Indian
						market.<br/><br/> Our vision guides us in achieving unmatched excellence in
						the real estate industry, where we constantly put our client needs
						at the forefront,by delivering outstanding quality, maintaining
						business ethics, and demonstrating transparency along the way. At
						Ashiyana Group, we are not just about crafting structures; we aspire
						to build the home of your dreams and foster vibrant communities. Our
						long-enduring success reflects our consistent efforts to provide
						client satisfaction through cutting-edge construction and create
						aesthetically pleasing yet comforting homes, bundled with valuable
						service.
					</p>
				</div>
			</div>
		</div>
	);
}

export default AboutUSMainImage;
