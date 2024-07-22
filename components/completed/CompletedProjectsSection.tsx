"use client";

import React, {useEffect, useRef} from "react";
import {useInView} from "react-intersection-observer";
import {gsap} from "gsap";
import "@/styles/completed/completed-projects-section.css";
import Image from "next/image"
import { projects } from "@/constants";



interface YearSectionProps {
	projects?: any;
}

const YearSection = ({year, projects}: any) => {
	const {ref, inView} = useInView({
		threshold: 0.5, rootMargin: "0px 0px -50% 0px",
	});

	const sectionRef = useRef(null);

	// useEffect(() => {
	// 	if (inView) {
	// 		gsap.to(sectionRef.current, {height: 'auto', duration: 0.5, ease: 'power2.out'});
	// 	} else {
	// 		gsap.to(sectionRef.current, {height: 50, duration: 0.5, ease: 'power2.in'});
	// 	}
	// }, [inView]);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {

				if (entry.isIntersecting) {
					gsap.to(entry.target, {
						height: "auto", duration: 0.5, ease: "power2.out", onComplete: () => {
							//@ts-ignore
							entry.target.style.height = "auto"; // Ensure the height is set to auto after animation
						},
					});
				} else {
					if (entry.intersectionRatio < 0.3) {
						gsap.to(entry.target, {
							height: 50, duration: 0.5, ease: "power2.in",
						});
					}
				}
			});
		}, {
			threshold: 0, rootMargin: "0px 0px -50% 0px",
		});

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	return (<div
			ref={ref}
			className="year-section overflow-hidden transition-all duration-500 mb-5 mr-5"
		>
			<div ref={sectionRef} className="year-content flex gap-10">
				<h2 className="text-2xl font-bold mb-3">{year}</h2>
				<div className="mt-4 relative">
					<div
						className="projects p-5 border-t-[#BB903A] border-l-[#BB903A] border-b-0 border-r-0 border-solid border-2">
						<div className="size-6 bg-white rounded-[50%] absolute -top-3 -left-3"/>
						{projects.map((project: any, index: any) => (
							<div key={index} className="project mb-4 md:flex block">
								<Image
									src={project.image}
									alt={project.name}
									className="size-[200px] mb-2 rounded-md"
									width={200}
									height={200}
								/>
								<div className="mt-5">
								<h3 className="text-2xl text-black font-semibold bg-[#D1CFBF] border-l-0 border-y-[#BB903A] border-r-[#BB903A] border-solid border-[5px] md:w-[28rem] lg:w-[40rem]">										{project.name}
									</h3>
									<p className="text-center text-[#707070]">
										{project.details}
									</p>
								</div>
							</div>))}
					</div>
				</div>
			</div>
		</div>);
};

const CompletedProjects = () => {
	return (<div className="completed-projects flex flex-col items-end">
			{Object.keys(projects).sort((a: any, b: any) => (b - a)).map((year) => (// @ts-ignore
				<YearSection key={year} year={year} projects={projects[year]}/>))}
		</div>);
};

export default CompletedProjects;
