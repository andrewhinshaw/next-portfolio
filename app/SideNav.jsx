"use client";

import React from "react";
import Link from "next/link";
import { useAppContext } from "../app/AppContext";
import { usePathname } from "next/navigation";
import { useWindowSize } from "../lib/useWindowSize";

import {
	UserIcon,
	ClipboardDocumentListIcon,
	CommandLineIcon,
	ChatBubbleLeftEllipsisIcon,
	ChatBubbleLeftRightIcon,
	EnvelopeIcon,
	SparklesIcon
} from "@heroicons/react/24/solid";

const SideNav = () => {
	const pathname = usePathname();
  const size = useWindowSize();

	const { menuOpen, setMenuOpen } = useAppContext();
	console.log(menuOpen);
	const styles = {
		active: "dark:bg-gray-300/10 bg-gray-700/20",
		inactive:
			"bg-transparent dark:hover:bg-gray-300/10 hover:bg-gray-700/20",
	};

	const handleCopyEmail = () => {
		navigator.clipboard.writeText(this.state.textToCopy);
	};

	const SideNavContentsMarkup = (
		<>
			<div className="text-sm text-gray-200 dark:text-gray-400 font-normal mb-2 ">
				Favorites
			</div>
			<p>{menuOpen}</p>
			<Link
				href="/"
				className={`flex flex-row justify-start items-center rounded-md p-2  ${
					pathname == "/" ? styles.active : styles.inactive
				}`}
			>
				<UserIcon className="w-4 h-4 mr-2" />
				About
			</Link>
			<Link
				href="/resume"
				className={`flex flex-row justify-start items-center rounded-md p-2 ${
					pathname == "/resume" ? styles.active : styles.inactive
				}`}
			>
				<ClipboardDocumentListIcon className="w-4 h-4 mr-2" />
				Resume
			</Link>
			<Link
				href="/projects"
				className={`flex flex-row justify-start items-center rounded-md p-2 ${
					pathname == "/projects" ? styles.active : styles.inactive
				}`}
			>
				<CommandLineIcon className="w-4 h-4 mr-2" />
				Projects
			</Link>
			<Link
				href="/andrewgpt"
				className={`flex flex-row justify-start items-center rounded-md p-2 ${
					pathname == "/andrewgpt" ? styles.active : styles.inactive
				}`}
			>
				<ChatBubbleLeftRightIcon className="w-4 h-4 mr-2" />
				AndrewGPT
				<span className="bg-blue-100 text-blue-500 text-xs font-medium ml-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-500 border dark:border-blue-500 flex flex-row items-center">
					<SparklesIcon className="h-3 w-3 mr-1"/>
					NEW
				</span>
			</Link>
			<Link
				href="/contact"
				className={`flex flex-row justify-start items-center rounded-md p-2 ${
					pathname == "/contact" ? styles.active : styles.inactive
				}`}
			>
				<ChatBubbleLeftEllipsisIcon className="w-4 h-4 mr-2" />
				Contact
			</Link>

			<div className="text-sm text-gray-200 dark:text-gray-400 font-normal mt-3 mb-2">
				Connect
			</div>

			<div className="flex flex-row justify-start items-center text-white">
				<a
					href="https://github.com/andrewhinshaw/"
					className="p-2 rounded-md bg-transparent dark:hover:bg-gray-300/10 hover:bg-gray-700/20"
					target="_blank"
					el="noopener noreferrer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="#ffffff"
						viewBox="0 0 24 24"
					>
						<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
					</svg>
				</a>
				<a
					href="https://www.linkedin.com/in/andrew-hinshaw/"
					className="p-2 rounded-md bg-transparent dark:hover:bg-gray-300/10 hover:bg-gray-700/20"
					target="_blank"
					el="noopener noreferrer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="#ffffff"
						viewBox="0 0 24 24"
					>
						<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
					</svg>
				</a>
				<a
					href="mailto:andrewthinshaw@gmail.com"
					className="p-2 rounded-md bg-transparent dark:hover:bg-gray-300/10 hover:bg-gray-700/20"
				>
					<EnvelopeIcon className="h-5 w-5 text-white" />
				</a>
			</div>
		</>
	);

	return (
		<>
			{menuOpen && size.width <= 768 ? (
				<div className="md:relative absolute z-10 left-0 top-0 bottom-0 md:block w-60 md:basis-60 border-r-[1px] p-6 backdrop-blur-lg text-white overflow-auto shrink-0 border-white/30 dark:border-gray-500/30 text-sm font-normal">
          {SideNavContentsMarkup}
        </div>
			) : (
				<div className="hidden md:block basis-60 border-r-[1px] p-6 text-white overflow-auto shrink-0 backdrop-blur-lg border-white/30 dark:border-gray-500/30 text-sm font-normal">
          {SideNavContentsMarkup}
        </div>
			)}
		</>
	);
};

export default SideNav;
