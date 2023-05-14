"use client";
import React, { useState, useEffect } from "react";
import { useAppContext } from "../app/AppContext";
import {
	MinusIcon,
	ArrowsPointingOutIcon,
	XMarkIcon,
	UserCircleIcon,
	SunIcon,
	MoonIcon,
	MagnifyingGlassIcon,
	Bars3Icon,
} from "@heroicons/react/24/solid";

const AppWindowHeader = () => {
	const [windowOptionsHovered, setWindowOptionsHovered] = useState(false);
	const [pageLoaded, setPageLoaded] = useState(false);
	const [theme, setTheme] = useState("");
	const [searchFocused, setSearchFocused] = useState(false);

	const { menuOpen, setMenuOpen } = useAppContext();

	console.log(menuOpen);
	useEffect(() => {
		if (typeof window !== "undefined") {
			setPageLoaded(true);
			const loadedTheme = localStorage.theme || "";
			setTheme(loadedTheme);
		}
	}, []);

	const enableDarkMode = () => {
		// When the moon icon is clicked, enable dark mode
		document.documentElement.classList.add("dark");
		localStorage.theme = "dark";
		setTheme("dark");
	};

	const disableDarkMode = () => {
		// When the moon icon is clicked, enable dark mode
		document.documentElement.classList.remove("dark");
		localStorage.theme = "";
		setTheme("");
	};

	const handleOpenSearch = () => {
		setSearchFocused(true);
	};

	const handleCloseSearch = () => {
		setSearchFocused(false);
	};

	const handleMenuClicked = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className="flex justify-between items-center shrink-0 h-14 w-full py-0 px-6 whitespace-nowrap border-b-[1px] border-white/30 dark:border-gray-500/30">
			{/* WINDOW OPTIONS BUTTONS */}
			<div
				className="flex flex-row"
				onMouseOver={() => setWindowOptionsHovered(true)}
				onMouseOut={() => setWindowOptionsHovered(false)}
			>
				<div className="rounded-full w-3.5 h-3.5 mr-2 bg-red-500 text-red-900">
					{windowOptionsHovered && <XMarkIcon className="w-full" />}
				</div>
				<div className="rounded-full w-3.5 h-3.5 mr-2 bg-yellow-500 text-yellow-900">
					{windowOptionsHovered && <MinusIcon className="w-full" />}
				</div>
				<div className="rounded-full w-3.5 h-3.5 p-0.5 mr-2 bg-green-500 text-green-900">
					{windowOptionsHovered && (
						<ArrowsPointingOutIcon className="w-full" />
					)}
				</div>
			</div>

			<div className="md:hidden flex flex-row items-center text-gray-100">
				{theme == "dark" ? (
					<button
						onClick={disableDarkMode}
						className="flex justify-center items-center rounded-md w-7 h-7 p-1 bg-transparent dark:hover:bg-gray-300/10 hover:bg-gray-700/20 backdrop-blur-lg mr-2"
					>
						<SunIcon
							disabled={!pageLoaded}
							className="h-full w-full"
						/>
					</button>
				) : (
					<button
						onClick={enableDarkMode}
						className="flex justify-center items-center rounded-md w-7 h-7 p-1 bg-transparent dark:hover:bg-gray-300/10 hover:bg-gray-700/20 backdrop-blur-lg mr-2"
					>
						<MoonIcon
							disabled={!pageLoaded}
							className="h-full w-full"
						/>
					</button>
				)}
				<button
					onClick={handleMenuClicked}
					className="flex justify-center items-center rounded-md w-7 h-7 p-1 bg-transparent dark:hover:bg-gray-300/10 hover:bg-gray-700/20 backdrop-blur-lg mr-2"
				>
					<Bars3Icon
						disabled={!pageLoaded}
						className="h-full w-full"
					/>
				</button>
			</div>
			{/* HEADER RIGHT SIDE */}
			<div className="hidden md:flex flex-row items-center text-gray-100">
				<div className="hidden md:flex justify-center items-center mr-2 text-sm">
					<div
						id="search-bar"
						className="flex flex-row justify-start items-center font-normal h-9 rounded-md transition-all bg-gray-100/20 dark:bg-gray-700/30"
						style={{ width: searchFocused ? "18rem" : "10rem" }}
					>
						<MagnifyingGlassIcon className="text-sm text-white h-6 w-6 ml-2 cursor-pointer" />
						<input
							className="p-2 w-full h-full bg-transparent text-white placeholder:text-gray-300 dark:placeholder:text-gray-500 placeholder:font-normal"
							onFocus={handleOpenSearch}
							onBlur={handleCloseSearch}
							placeholder="Search"
						></input>
					</div>
				</div>
				{theme == "dark" ? (
					<button
						onClick={disableDarkMode}
						className="flex justify-center items-center rounded-md w-7 h-7 p-1 bg-transparent dark:hover:bg-gray-300/10 hover:bg-gray-700/20 backdrop-blur-lg mr-2"
					>
						<SunIcon
							disabled={!pageLoaded}
							className="h-full w-full"
						/>
					</button>
				) : (
					<button
						onClick={enableDarkMode}
						className="flex justify-center items-center rounded-md w-7 h-7 p-1 bg-transparent dark:hover:bg-gray-300/10 hover:bg-gray-700/20 backdrop-blur-lg mr-2"
					>
						<MoonIcon
							disabled={!pageLoaded}
							className="h-full w-full"
						/>
					</button>
				)}
				<UserCircleIcon className="h-8 w-8 cursor-pointer" />
			</div>
		</div>
	);
};

export default AppWindowHeader;
