import React from "react";
import Image from "next/image";

import BackgroundImage2 from "../public/macos-wallpaper-2.jpg";

const Background = () => {
	return (
		<div className="fixed right-0 top-0 w-full h-full">
			<div className="dark:opacity-0 opacity-100 absolute inset-0 w-full h-screen bg-white/30 backdrop-saturate-[3]"></div>
			<Image
				src={BackgroundImage2}
				alt="MacOS stock wallpaper"
				fill={true}
				className="-z-10"
			/>
		</div>
	);
};

export default Background;
