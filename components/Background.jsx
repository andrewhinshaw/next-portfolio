"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// import BackgroundImage2 from "../public/macos-wallpaper-2.jpg";
import BackgroundImageLight from "../public/macos-wallpaper-light.jpg";
import BackgroundImageDark from "../public/macos-wallpaper-dark.jpg";

const Background = () => {
	const [theme, setTheme] = useState("");

	useEffect(() => {
		if (typeof window !== "undefined") {
			const loadedTheme = localStorage.theme || "";
			setTheme(loadedTheme);
		}
	}, []);

	return (
		<div className="fixed right-0 top-0 w-full h-full">
			{/* <div className="dark:opacity-0 opacity-100 absolute inset-0 w-full h-screen bg-white/30"></div> */}
			<Image
				src={BackgroundImageDark}
				alt="MacOS stock wallpaper dark"
				fill={true}
				className="-z-10 hidden dark:block"
			/> 
			<Image
				src={BackgroundImageLight}
				alt="MacOS stock wallpaper light"
				fill={true}
				className="-z-10 block dark:hidden"
			/>
			
		</div>
	);
};

export default Background;
