"use client";

import {useState, useEffect} from "react";
import HeroSmall from "@/components/ongoing/HeroSmall";
import HeroBig from "@/components/ongoing/HeroBig";
import FeatureSection from "@/components/ongoing/FeatureSection";
import {features, floorSlides, labels, slides, villageFP, VilProgress} from "@/constants";
import Architecture from "@/components/ongoing/Architecture";
import SampleFlats from "@/components/ongoing/SampleFlats";
import FloorPlans from "@/components/ongoing/FloorPlans";
import Amenities from "@/components/ongoing/Amenities";
import Brochure from "@/components/ongoing/Brochure";

const AshiyanaInfinityPage = () => {
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		console.log(window.innerWidth);
		setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return <>
		<div className="bg-[#262828]">
			{windowWidth === 0 ? null : windowWidth <= 1024 ? (<HeroSmall type="village"/>) : (
				<HeroBig type="village"/>)}
			<div className="bg-white mt-2 py-2 border-solid border-4 border-[#BB903A] border-x-0 border-b-0">
				<FeatureSection features={features}/>
			</div>
			<div className="p-4 border-solid border-4 border-[#BB903A] border-x-0 border-b-0">
				<div className="relative">
					<Architecture title="Architecture" slides={slides}/>
				</div>
			</div>
			{/* <div className="p-7 border-solid border-4 border-[#BB903A] border-x-0 border-b-0">
				<SampleFlats/>
			</div> */}
			<div className="p-4 relative bg-black border-solid border-4 border-[#BB903A] border-x-0 border-b-0">
				
					<FloorPlans slides={villageFP} labels={null} autoSlide={false} type="village"/>
				
			</div>
			<div className="p-4 border-solid border-4 border-[#BB903A] border-x-0 border-b-0">
				<div className="relative">
					<Architecture title="Project Progress" slides={VilProgress}/>
				</div>
			</div>
			<div className="relative  pr-0 md:py-20 border-solid border-4 border-[#BB903A] border-x-0 border-b-0">
				<Amenities/>
			</div>
			<div className="relative p-0 border-solid border-4 border-[#BB903A] border-x-0">
				<Brochure type="village"/>
			</div>
		</div>
	</>
}

export default AshiyanaInfinityPage;
