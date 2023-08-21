"use client";

import React from "react";
import Link from "next/link";

import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const Resume = () => {
	return (
		<>
			<h1 className="text-4xl font-semibold dark:text-white mb-3">
				Resume
			</h1>

			<div className="flex flex-row w-full">
				<Link
					href="/files/Resume.pdf"
					alt="alt text"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex flex-row justify-start items-center text-sm p-2 rounded-md text-white border border-gray-100/30 dark:border-gray-600/50 hover:border-gray-100/50 dark:hover:border-gray-600/90"
				>
					<ArrowDownTrayIcon className="w-5 h-5 mr-2" />
					Download resume
				</Link>
			</div>
		</>
	);
};

export default Resume;
