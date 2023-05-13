"use client";

import React, { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		if (typeof window !== "undefined") {
			if (localStorage.theme === "dark") {
				document.documentElement.classList.add("dark");
			} else if (
				!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches
			) {
				document.documentElement.classList.add("dark");
				localStorage.setItem("theme", "dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
		}
	}, []);

	return (
		<main className="flex min-h-screen w-full flex-col items-center justify-center">
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod odio sit amet auctor scelerisque. Nunc hendrerit malesuada ipsum, at condimentum neque consectetur dapibus. Curabitur vehicula nibh sem, id semper sem placerat vel. Fusce ut justo pharetra, accumsan nisl sed, tristique urna. Nam interdum neque nec eros mollis pharetra. Fusce et pretium ipsum. Quisque eget lorem non sem dictum tempor at ut lorem. Etiam diam nibh, viverra in justo vitae, tincidunt sodales tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque eleifend urna quam, vel dictum odio bibendum id. Nulla congue volutpat libero in ultricies. Quisque maximus massa sed ligula lacinia, quis pretium lectus tristique. Fusce dictum massa nec nisl efficitur ullamcorper. Praesent justo tellus, congue vitae ultrices tempus, vestibulum non lectus.
			</p>
		</main>
	);
}
