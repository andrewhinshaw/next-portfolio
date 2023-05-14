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
		<div>
			<h1 className="text-2xl text-white">Hi, I&#39;m Andrew 👋</h1>
		</div>
		
	);
}
