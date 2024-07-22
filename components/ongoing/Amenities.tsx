import React from 'react';
import Image from 'next/image';
import '@/styles/ongoing/amenities.css';
import { amenities } from '@/constants';

export default function Amenities() {
	return (
		<div className="full-screen-container">
			<div className="content-container relative">
				{/* Title positioned outside of the grid */}
				<div className="heading-container -ml-2 md:-ml-6 lg:-ml-10">
					<div className="fontsample"
					     style={{
						     width: "27px",
						     height: "140px",
						     background: "#BB903A 0% 0% no-repeat padding-box",
						     opacity: "1",
					     }}>Amenities</div>
				</div>
				
				
				<div className="amenities-grid">
				
					<div className="amenity-item placeholder"></div>
					{amenities.map((amenity, index) => (
						<div key={index} className="amenity-item">
							<div className="image-container">
								<Image className="image" src={amenity.img} fill objectFit="cover" alt={amenity.heading} unoptimized={true} />
								<div className="text-overlay">
									<h3 className="image-heading">{amenity.heading}</h3>
									<p className="image-paragraph">{amenity.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
