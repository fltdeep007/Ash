"use client";

import "@/styles/ongoing/hero.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

interface HeroSmallProps {
	type: 'infinity' | 'village'
}

function Hero({type}: HeroSmallProps) {

	const container = useRef<HTMLInputElement>(null);

	useGSAP(
		() => {
			//pinned Wrapper
			gsap.to(".HeroWrapper", {
				scrollTrigger: {
					trigger: ".HeroWrapper",
					start: "bottom bottom",
					end: "bottom -=1400px",
					pin: ".HeroWrapper",
					scrub: true,
					// markers: true,
					id: "wrap",
				},
				ease: "power4.out",
			});

			//animation begin
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".bgWrapper",
					start: "bottom bottom",
					end: "bottom -=850px",
					scrub: 1.5,
					// markers: true,
					id: "bg",
				},
			});

			//scrolling animation part 1
			tl.to(".BgBuilding", {
				// scale: "0.5",
				width: "180px",
				height:"80px",
				y: "20%",
				x: "0",
				ease: "power4.out",
			})
				.to(".BgBuildingUnderlay", {
					opacity: "100%",
				})
				.to(".Nearby1", {
					opacity: "100%",
				})
				.to(".Nearby2", {
					opacity: "100%",
				})
				.to(".Nearby3", {
					opacity: "100%",
				})
				.to(".Nearby4", {
					opacity: "100%",
				})
				.to(".Nearby5", {
					opacity: "100%",
				})
				.to(".Nearby6", {
					opacity: "100%",
				})
				.to(".bgWrapper", {
					y: "20%",
				})
				.fromTo(
					".locationWindow",
					{
						opacity: "0%",
					},
					{
						opacity: "100%",
						duration: 0.1,
					}
				);

			let tl2 = gsap.timeline({
				scrollTrigger: {
					trigger: ".bgWrapper",
					toggleActions: "restart pause reverse reset",
					start: "bottom bottom",
					end: "bottom -=10px",
					// scrub: true,
					// markers: true,
					id: "bg2",
				},
			});

			tl2
				.fromTo(
					".HeroHeader",
					{
						opacity: "100%",
					},
					{
						opacity: "0%",
						duration: 0.1,
					}
				)
				.fromTo(
					".HeroBottomEle",
					{
						opacity: "100%",
					},
					{
						opacity: "0%",
						duration: 0.1,
					}
				)
				.fromTo(
					".locationWrapper",
					{
						opacity: "0%",
					},
					{
						opacity: "100%",
						duration: 0.1,
					}
				);
		},

		{ scope: container }
	);

	gsap.registerPlugin(useGSAP, ScrollTrigger);

	return (
		<div className="hero" ref={container}>
			<div className="HeroWrapper min-h-screen relative overflow-hidden">
				<div className="HeroHeader headerColor headerFont text-lg sm:text-2xl lg:text-4xl absolute top-[20%] translate-x-[-50%] left-1/2 z-20">
					<h1 className="HeroHeaderText p-5 ">Ashiyana {type === "village" ? "Village" : "Infinity"}</h1>
				</div>
				<div className="locationWrapper absolute top-[20%] left-[6%]">
					<div className="locationEle relative">
						<div className="locationHeader relative">
							<div className="locationBg w-7 h-32 bg-orange-400"></div>
							<div className="locationText headerFont headerColor text-3xl absolute top-0 left-[40%]">
								Location
							</div>
						</div>
						<div className="locationWindow absolute top-[35%] left-[150%] opacity-0">
							<iframe
								loading="lazy"
								allowFullScreen
								referrerPolicy="no-referrer-when-downgrade"
								src={type === "infinity" ? "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30216.401248184997!2d73.330151!3d18.795918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be807a36879652b%3A0x328985ce1fcc889!2sAshiyana%20Infinity!5e0!3m2!1sen!2sus!4v1720179575935!5m2!1sen!2sus": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.3240889156973!2d73.3361919751981!3d18.783704882361516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8076cd9f1f075%3A0x3c932a771fa7aa8!2sAshiyana%20Village%2C%20Katrang%20Gove%2C%20Sri%20Swami%20Samarth%20Nagar%2C%20Khopoli%2C%20Maharashtra%20410203!5e0!3m2!1sen!2sin!4v1720179894227!5m2!1sen!2sin"}
								className="md:h-[270px] md:w-[480px] h-[200px] w-[270px]"
							></iframe>
						</div>
					</div>
				</div>

				<div className="bgWrapper w-full min-h-screen relative overflow-hidden">
					<div className="BgBuilding  w-full h-[175px] sm:h-1/3 absolute bottom-[37%] bg-transparent z-10" >
						<Image
							src={type === "infinity" ? "/ongoing/infinti.png" : "/village/village.png"}
							fill={true}
							alt="infinity"
							unoptimized={true}
						/>
					</div>
					<div className="eclipseWrapper opacity-100 overflow-y-hidden w-full min-h-screen">
						<div className="BgBuildingUnderlay w-[160px] h-[140px] opacity-0 absolute bottom-[37%] after:  translate-x-[10%] translate-y-1/3 left-0 bg-transparent z-0">
							<Image
								src="/ongoing/mobile/eclipse.svg"
								fill={true}
								alt="elipse"
								unoptimized={true}
							/>
							<div className="relative">
								{type === "infinity" && <div
									id="Nearby1"
									className="Nearby1 w-[135px] h-[170px] absolute opacity-0 bottom-[-55px] left-[50px] -z-20"
								>
									<Image
										src="/ongoing/mobile/Adlabs_imagica.svg"
										fill={true}
										alt="Adlabs_imagica"
										unoptimized={true}
									/>
								</div>}
								<div
									id="Nearby2"
									className="Nearby2 w-[220px] h-[68px] absolute opacity-0 bottom-[-15px] left-[90px] -z-20"
								>
									<Image
										src={type === "infinity" ? "/ongoing/mobile/khopoliRailwayStation.svg" : "/ongoing/mobile/vkrs.svg"}
										fill={true}
										alt="khopoliRailwayStation"
										unoptimized={true}
									/>
								</div>
								<div
									id="Nearby3"
									className="Nearby3 w-[175px] h-[100px] absolute opacity-0 bottom-[-60px] left-[135px] -z-20"
								>
									<Image
										src={type === "infinity" ? "/ongoing/mobile/NH48.svg" : "/ongoing/mobile/vbs.svg"}
										fill={true}
										alt="NH48"
										unoptimized={true}
									/>
								</div>
								<div
									id="Nearby4"
									className="Nearby4 w-[235px] h-[70px] absolute opacity-0 bottom-[-125px] right-[-195px] -z-20"
								>
									<Image
										src={type === "infinity" ? "/ongoing/mobile/KhopoliIndustrialEstate.svg" : "/ongoing/mobile/vsch.svg"}
										fill={true}
										alt="KhopoliIndustrialEstate"
										unoptimized={true}
									/>
								</div>
								<div
									id="Nearby5"
									className="Nearby5 w-[200px] h-[70px] absolute opacity-0 bottom-[-185px] right-[-170px] -z-20"
								>
									<Image
										src={type === "infinity" ? "/ongoing/mobile/zenithWaterfall.svg" : "/ongoing/mobile/vbp.svg"}
										fill={true}
										alt="zenithWaterfall"
										unoptimized={true}
									/>
								</div>
								{type === "infinity" && <div
									id="Nearby6"
									className="Nearby6 w-[150px] h-[110px] absolute opacity-0 bottom-[-220px] right-[20px] -z-20"
								>
									<Image
										src="/ongoing/mobile/khandalaGhat.svg"
										fill={true}
										alt="khandalaGhat"
										unoptimized={true}
									/>
								</div>}
							</div>
						</div>
					</div>
				</div>
				<div className="HeroBottomEle headerFont opacity-100 absolute bottom-[0%] z-20 right-0">
					<div className="registationWrapper w-full py-5 opacity-80">
						<div className="RegisImgWrapper flex justify-evenly">
						<Image src="/ongoing/MahaRera.png" fill={true} alt='MahaRera'/>
						<div className="regisImg w-20 h-20"></div>
						</div>
						<div className="regisText paraFont text-sm w-full text-center">
							Maha Rera Registration No. P52000017538, P52000030015 .
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
