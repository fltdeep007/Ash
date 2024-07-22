import Image from 'next/image';
import "@/styles/ongoing/feature-section.css" // Assuming your CSS is saved in Carousel.module.css

const FeatureSection = ({ features }: {features: {imageUrl: string, title: string}[]}) => {
	return (
		<div className="fcarousel-container">
			<div className="fcarousel-track">
				{features.map(({ imageUrl, title }, i) => (
					<div key={i} className="fcarousel-slide">
						<Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
						<div className="fcarousel-text">{title}</div>
					</div>
				))}
				{/* Duplicate slides for smooth infinite scroll */}
				{features.map(({ imageUrl, title }, i) => (
					<div key={`dup-${i}`} className="fcarousel-slide">
						<Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
						<div className="fcarousel-text">{title}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FeatureSection;
