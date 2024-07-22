import AboutAshiyana from "@/components/home/AboutAshiyana"
import Ongoing from "@/components/home/Ongoing";
import WhyKhopoli from "@/components/home/WhyKhopoli";
import AboutUs from "@/components/home/AboutUs";
import Hero from "@/components/Hero/Hero";

export default function Home() {
	return (
		<div className="">
			<Hero/>
			<AboutAshiyana/>
			<Ongoing/>
			<WhyKhopoli/>
			<AboutUs/>
		</div>
	);
}
