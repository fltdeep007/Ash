
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import '@/styles/ongoing/carousel.css';

const Carousel = ({ slides, autoSlide = true, autoSlideInterval = 3000 }: {slides: string[], autoSlide?: boolean, autoSlideInterval?: number}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const slideInterval = useRef(null);

	useEffect(() => {
		if (autoSlide) {
			// @ts-ignore
			slideInterval.current = setInterval(() => {
				setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
			}, autoSlideInterval);
		}

		// @ts-ignore
		return () => clearInterval(slideInterval.current);
	}, [autoSlide, autoSlideInterval, slides.length]);

	const prevSlide = () => {
		setCurrentIndex(prevIndex => (prevIndex - 1 + slides.length) % slides.length);
	};

	const nextSlide = () => {
		setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
	};

	return (
		<div className="carousel-container">
			<button className="carousel-button left" onClick={prevSlide}>
				&#10094;
			</button>
			<div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
				{slides.map((slide, index) => (
					<div className="carousel-slide" key={index}>
						<Image src={slide} alt={`Slide ${index + 1}`} layout="fill" objectFit="contain" />
					</div>
				))}
			</div>
			<button className="carousel-button right" onClick={nextSlide}>
				&#10095;
			</button>
		</div>
	);
};

export default Carousel;
