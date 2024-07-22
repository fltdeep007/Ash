import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: 'Ashiyana Dream Homes',
	description: 'Welcome to Ashiyana Dream Homes',
	metadataBase: new URL("http://localhost:3000"), // Add custom domain name for ashiyana website.
	alternates: {
		canonical: "/",
	},
	icons: {
		icon: '/logoHead.png', // Path to your favicon or site icon
	},
	openGraph: {
		title: 'Ashiyana Dream Homes',
		description: 'Find your dream home with us',
		images: [
			{
				url: '/ongoing/infiniti.png', // Path to the Open Graph image
				width: 800,
				height: 600,
				alt: 'Og Image Alt',
			},
		],
	},
};

export default function RootLayout({children}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<body className={inter.className}>
		<Navbar/>
		<main className="min-h-screen w-full overflow-x-hidden">
			{children}
		</main>
		<Footer />
		</body>
		</html>
	);
}
