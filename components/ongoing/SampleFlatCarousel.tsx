"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '@/styles/ongoing/sample-flats.css'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { allImages, oneBHKImages, oneBHKShowImages, twoBHKImages, twoBHKShowImages } from '@/constants'
import Image from 'next/image';

const imageGroups = {
	'1bhk-show': oneBHKShowImages,
	'2bhk-show': twoBHKShowImages,
	'1bhk': oneBHKImages,
	'2bhk': twoBHKImages,
	all: [...oneBHKShowImages, ...twoBHKShowImages, ...oneBHKImages, ...twoBHKImages],
};

export default function SampleFlatCarousel() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [filter, setFilter] = useState("1bhk-show");
	// @ts-ignore
	const filteredImages = imageGroups[filter];

	return (
		<>
			<div className='buttons flex flex-wrap justify-center gap-2 mb-4'>
				<button
					className='px-4 py-2 bg-transparent text-white border border-white rounded-md hover:bg-[#a67830]'
					onClick={() => setFilter("1bhk-show")}>1BHK Show Flat
				</button>
				<button
					className='px-4 py-2 bg-transparent text-white border border-white rounded-md hover:bg-[#a67830]'
					onClick={() => setFilter("2bhk-show")}>2BHK Show Flat
				</button>
				<button
					className='px-4 py-2 bg-transparent text-white border border-white rounded-md hover:bg-[#a67830]'
					onClick={() => setFilter("1bhk")}>1BHK Flat
				</button>
				<button
					className='px-4 py-2 bg-transparent text-white border border-white rounded-md hover:bg-[#a67830]'
					onClick={() => setFilter("2bhk")}>2BHK Flat
				</button>
				<button
					className='px-4 py-2 bg-transparent text-white border border-white rounded-md hover:bg-[#a67830]'
					onClick={() => setFilter("all")}>All
				</button>
			</div>
			<div className='h-[calc(100%-100px)]'>
				<Swiper
					style={{
						// @ts-ignore
						'--swiper-navigation-color': '#fff',
						'--swiper-pagination-color': '#fff',
					}}
					spaceBetween={10}
					navigation={true}
					thumbs={{swiper: thumbsSwiper}}
					modules={[FreeMode, Navigation, Thumbs]}
					className="mySwiper2 mb-2"
				>
					{filteredImages.map((image: string, index: number) => (
						<SwiperSlide key={index} className="bg-black">
							<Image src={image} alt='Sample Flat' layout='fill' objectFit='contain' className="w-full h-full bg-black"/>
						</SwiperSlide>
					))}
				</Swiper>
				<Swiper
					// @ts-ignore
					onSwiper={setThumbsSwiper}
					spaceBetween={10}
					slidesPerView={4}
					freeMode={true}
					watchSlidesProgress={true}
					modules={[FreeMode, Navigation, Thumbs]}
					className="mySwiper"
				>
					{filteredImages.map((image: string, index: number) => (
						<SwiperSlide key={index}>
							<Image src={image} alt='' layout='fill' objectFit='cover'/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
}
