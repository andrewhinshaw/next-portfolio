"use client";

import AppWindow from "@/components/AppWindow";
import VideoBackground from "@/components/VideoBackground";
import Image from "next/image";
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
			<VideoBackground />
			<AppWindow />
		</main>
	);
}
