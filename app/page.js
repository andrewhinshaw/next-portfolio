"use client";

import AppWindow from "@/components/AppWindow";
import VideoBackground from "@/components/VideoBackground";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<VideoBackground />
			<AppWindow />
		</main>
	);
}
