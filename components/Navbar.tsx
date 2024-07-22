"use client";

import Image from "next/image";
import "../styles/navbar.css"
import {FaFacebookF, FaInstagram, FaSquareXTwitter, FaWhatsapp} from "react-icons/fa6";
import {useState} from "react";
import Link from "next/link";
import {BiChevronDown} from "react-icons/bi";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const handleLink = () =>{
		setIsOpen(false);
	}

	const handleDrop = () =>{
		setIsDropdownOpen(false);
	}

	return (<>
		<div
			className="navbar w-full h-20 fixed top-0 z-40 flex justify-between px-4 md:px-5 lg:px-6 md:py-6 bg-313233">
			<div className="menuWrapper flex justify-between items-center w-full lg:w-auto">
				<div className="menu lg:hidden pr-3 md:pr-6 cursor-pointer" onClick={toggleNavbar}>
					<Image src="/burgermenu.svg" alt="menu icon" width={25} height={25}/>
				</div>
				<div className="logo cursor-pointer">
					<Link href="/"><Image src="/logo.png" alt="logo" width={90} height={90}/></Link>
				</div>
				<div
					className="contactUs ml-auto lg:hidden px-3 py-1 border rounded-lg text-xs sm:text-base lg:text-xl">
					<Link href="/contact-us">Contact Us</Link>
				</div>
			</div>

			{/* Navbar links for large screens only */}
			<div
				className="hidden lg:flex lg:flex-row justify-evenly items-center lg:static w-auto lg:bg-transparent">
				<div className="navbarLink mx-6 text-xs lg:text-xl my-2 lg:my-0">
					<Link href="/about-us"><span>About Us</span></Link>
				</div>
				<div className="navbarLink mx-6 text-xs lg:text-xl my-2 lg:my-0 relative">
					<div className="flex flex-row items-center justify-center ">
            <span className="lg:hidden  cursor-pointer"
                  onClick={toggleDropdown}>Ongoing Projects </span><BiChevronDown className="size-8"/>
					</div>
					{isDropdownOpen && (<div className="dropdownMenuMobile lg:hidden mt-2">
						<Link href="/ongoing-projects/ashiyana-infinity"
						      className="block px-4 py-2 text-xs sm:text-base lg:text-xl text-807860 hover:bg-gray-700 rounded">Ashiyana
						                                                                                                        Infinity</Link>
						<Link href="/ongoing-projects/ashiyana-village"
						      className="block px-4 py-2 text-xs sm:text-base lg:text-xl text-807860  hover:bg-gray-700 rounded">Ashiyana
						                                                                                                         Village</Link>
					</div>)}
					<div className="dropdownMenu hidden lg:block absolute bg-313233 rounded-lg shadow-lg mt-2 p-2">
						<Link href="/ongoing-projects/ashiyana-infinity"
						      className="block px-4 py-2 text-xs sm:text-base lg:text-xl  hover:bg-gray-700 rounded">Ashiyana
						                                                                                             Infinity</Link>
						<Link href="/ongoing-projects/ashiyana-village"
						      className="block px-4 py-2 text-xs sm:text-base lg:text-xl  hover:bg-gray-700 rounded">Ashiyana
						                                                                                             Village</Link>
					</div>
					{/*<span>Ongoing Projects</span>*/}
				</div>
				<div className="navbarLink mx-6 text-xs lg:text-xl my-2 lg:my-0">
					<Link href="/completed-projects"><span>Completed Projects</span></Link>
				</div>
				<div
					className="contactUs hidden lg:block ml-6 px-3 py-1 border rounded-lg text-xs sm:text-base lg:text-xl">
					<Link href="/contact-us">Contact Us</Link>
				</div>
			</div>
		</div>


		<div
			className={`sidebar ${isOpen ? "open" : ""} lg:hidden fixed top-0 left-0 h-full w-2/4 bg-313233 shadow-lg z-50 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
			<div className="sidebarContent flex flex-col justify-start items-start p-10 space-y-4">
				<div className="flex flex-row gap-0 logo mb-4 cursor-pointer">
					<Image src="/x.svg" alt="x circle" width={90} height={90} onClick={toggleNavbar}
					       className="mx-0 my-0 absolute size-4"/>
					<Link href="/" onClick={handleLink}><Image src="/logo.png" alt="logo" width={90} height={90}
					                      className="mt-16"/></Link>
				</div>
				<div className="sidebarLink text-base">
					<Link  href="/about-us" onClick={handleLink} ><span>About Us</span></Link>
				</div>
				<div className="sidebarLink text-base relative">
					<div className="flex flex-row items-center justify-center">
            <span className="lg:hidden  cursor-pointer"
                  onClick={toggleDropdown}>Ongoing Projects </span><BiChevronDown className="size-6"/>
					</div>
					{isDropdownOpen && (<div className="dropdownMenuMobile lg:hidden mt-2">
						<Link href="/ongoing-projects/ashiyana-infinity" onClick={handleLink}
						      className="block px-4   text-sm sm:text-base lg:text-xl  hover:bg-gray-700 rounded">Ashiyana
						                                                                                             Infinity</Link>
						<Link href="/ongoing-projects/ashiyana-village" onClick={handleLink}
						      className="block px-4   text-sm sm:text-base lg:text-xl  hover:bg-gray-700 rounded">Ashiyana
						                                                                                             Village</Link>
					</div>)}
					<div className="dropdownMenu hidden lg:block absolute bg-313233 rounded-lg shadow-lg mt-2 p-2">
						<Link href="/ongoing-projects/ashiyana-infinity"  onClick={handleDrop}
						      className="block px-4   text-sm sm:text-base lg:text-xl  hover:bg-gray-700 rounded">Ashiyana
						                                                                                             Infinity</Link>
						<Link href="/ongoing-projects/ashiyana-village" onClick={handleDrop}
						      className="block px-4   text-sm sm:text-base lg:text-xl  hover:bg-gray-700 rounded">Ashiyana
						                                                                                             Village</Link>
					</div>
				</div>
				<div className="sidebarLink text-base">
					<Link href="/completed-projects" onClick={handleLink}><span>Completed Project</span></Link>
				</div>
				<div className="sidebarLink text-base">
					<Link href="/contact-us" onClick={handleLink}><span>Contact Us</span></Link>
				</div>
				<div className="socialLinks flex mt-auto mx-0 px-0 w-full">
					<div className="socialIcon">
						<Link href="https://www.facebook.com/ashiyanadreamhomes?mibextid=rS40aB7S9Ucbxw6v" className="text-gray" onClick={handleLink}><FaFacebookF className="size-4"/></Link>
					</div>
					<div className="socialIcon">
						<Link href="https://twitter.com/ashiyanal?lang=en" className="text-gray" onClick={handleLink}><FaSquareXTwitter/></Link>
					</div>
					<div className="socialIcon">
						<Link href="https://www.instagram.com/ashiyanadreamhomes?igsh=cWFsdW1uOG5raXho" className="text-gray" onClick={handleLink}><FaInstagram/></Link>
					</div>
					<div className="socialIcon">
						<Link href="https://wa.me/<918448448714>" className="text-gray" onClick={handleLink}><FaWhatsapp/></Link>
					</div>
				</div>
			</div>
		</div>
	</>);
}

export default Navbar;
