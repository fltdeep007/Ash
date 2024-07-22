
import CompletedProjectsSection from "@/components/completed/CompletedProjectsSection";

const CompletedProjectsPage = () => {
	return <>
		<div className="bg-[#3D3B3A] text-white">
			<h1 className="pt-28 py-8 font text-6xl text-center font-lucida">COMPLETED PROJECTS</h1>
			<div className="bg-[#BB903A] size-1 w-full" />
			<div className="flex flex-col">
				<div className="flex flex-row justify-end">
					<div className="size-5"></div>
					<div className="lg:w-[55.7%] text-[#707070] p-5 lg:border-l-[#BB903A] lg:border-b-0 lg:border-r-0 lg:border-t-0 lg:border-solid lg:border-2">
					At Ashiyana Group, we are committed to establishing ourselves as the most trusted, reliable, and innovative real estate brands of India. Established in 1992, Ashiyana Group is one of Khopoli’s premier real estate developers, operating in the residential, commercial and organized retail verticals.</div>
				</div>
				<CompletedProjectsSection />
			</div>
		</div>
	</>
}

export default CompletedProjectsPage;
