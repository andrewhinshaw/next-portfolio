import React from "react";

const VideoBackground = () => {
	return (
		<div className="fixed right-0 top-0 w-full h-full dark:before:opacity-0 before:bg-white/50 before:absolute before:left-0 before:top-0 before:w-full before:h-screen before:backdrop-saturate-[3]">
			<video
				className="w-full h-full object-cover"
				width="320"
				height="240"
				autoPlay
				loop
				muted
			>
				<source
					src="https://assets.codepen.io/3364143/7btrrd.mp4"
					type="video/mp4"
				/>
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default VideoBackground;
