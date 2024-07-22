import React from 'react';
import "@/styles/ongoing/sample-flats.css";
import SampleFlatCarousel from "@/components/ongoing/SampleFlatCarousel";

export default function SampleFlats() {
	return (
		<div className='flex flex-col min-h-screen w-full' style={{background: "#262828 0% 0% no-repeat padding-box", opacity: "1"}}>
			<div className='flex-1 overflow-y-auto'>
				<div className='p-2 relative top-[20px]  sm:top-0 sm:left-0 justify-self-start self-start z-20 w-[181px] h-[140px]'>
					<div className=" fontsample absolute z-10 text-nowrap" style={{width: "27px", height: "140px", background:" #BB903A 0% 0% no-repeat padding-box", opacity: "1"}}>
						Sample Flats
					</div>
				</div>
				<div className='sampo w-full h-[400px] sm:h-[80vh] relative mt-8'>
					<SampleFlatCarousel />
				</div>
			</div>
		</div>
	);
}
