import React from 'react';
import Carousel from './Carousel'; // Adjust the import path

interface ArchitectureProps {
	title: string;
	slides: string[];
}

const Architecture: React.FC<ArchitectureProps> = ({ title, slides }) => {
	return (
		<div
			className='flex flex-row justify-center items-center h-[50vh] sm:h-[50vh] md:h-[50vh] lg:h-[100vh] w-full'
			style={{
				background: "#262828 0% 0% no-repeat padding-box",
				opacity: "1",
			}}
		>
			<div
				className='flex justify-center items-center h-[50vh] sm:h-[50vh] md:h-[50vh] lg:h-[100vh] w-[70%] z-20'
				style={{
					background: "0% 0% no-repeat padding-box",
					opacity: "1",
				}}
			>
				<div className='h-[60%] w-[100%] lg:w-[80%] relative'>
					<Carousel slides={slides} autoSlide={false} autoSlideInterval={3000} />
				</div>
				<div className='absolute top-[20px] left-[20px] justify-self-start self-start z-20 w-[181px] h-[140px] '>
					<div
						className="absolute fontsample z-10 text-white text-3xl text-nowrap"
						style={{
							width: "27px",
							height: "140px",
							background: "#BB903A 0% 0% no-repeat padding-box",
							opacity: "1",
						}}
					>
						{title}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Architecture;
