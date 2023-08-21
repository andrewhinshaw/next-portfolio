"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

import {
	ArrowLongRightIcon,
	AcademicCapIcon,
	CheckCircleIcon,
	ChevronRightIcon,
	ChevronLeftIcon,
} from "@heroicons/react/24/solid";
import useEmblaCarousel from "embla-carousel-react";

import SkillsIcons from "@/components/SkillsIcons";
import projectsList from "@/app/data/projects";
import SDSULogo from "@/public/sdsu-logo.png";
import MemojiPFP from "@/public/memoji-pfp.png";

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

	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
	useEffect(() => {
		if (emblaApi) {
			console.log(emblaApi.slideNodes()); // Access API
		}
	}, [emblaApi]);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);
	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	const skills = [
		"SQL",
		"Python",
		"Excel",
		"Azure",
		"Data Visualization",
		"Automation",
		"Query Analysis",
	];

	return (
		<div className="flex flex-col w-full h-full items-start overflow-auto">

			<h1 className="text-4xl font-semibold dark:text-white">
				Hi, I&#39;m Andrew 👋
			</h1>
			<p className="text-gray-200 my-3 max-w-lg">
				I help implement solutions to novel business problems by
				analyzing complex datasets.
			</p>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-2 h-full">
				<div
					className="grid gap-4"
					style={{ gridTemplateRows: "min-content" }}
				>
					<div className="w-full min-w-0 max-w-full overflow-x-clip rounded-lg bg-gray-100/20 dark:bg-gray-700/30 border border-gray-100/30 dark:border-gray-700/50 shadow-lg">
						<div className="w-full max-w-full p-3">
							<h2 className="text-xl font-medium dark:text-white">
								Tech Stack
							</h2>
							<p className="text-xs text-gray-200">
								Software, frameworks, and platforms I love.
							</p>
						</div>
						<SkillsIcons />
						<div className="p-3">
							<Link
								href="/resume"
								className="inline-flex flex-row w-auto justify-start items-center text-sm text-white hover:text-gray-200"
							>
								See full resume
								<ArrowLongRightIcon className="w-4 h-4 ml-1" />
							</Link>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4 h-full">
						<div className="flex flex-col h-full rounded-lg bg-gray-100/20 dark:bg-gray-700/30 col-span-1 border border-gray-100/30 dark:border-gray-700/50 shadow-lg p-3">
							<h2 className="text-xl font-medium dark:text-white mb-3">
								Experience
							</h2>
							<div className="flex flex-col justify-start items-center w-full h-auto flex-grow rounded-lg mb-2">
								<div className="flex flex-col w-full max-h-full text-xs p-2 mb-2 rounded-md text-white border border-gray-100/30 dark:border-gray-600/50">
									Calpine
									<div className="flex flex-col h-full">
										<Link
											href="/resume"
											className="inline-flex flex-row justify-between w-full items-center text-xs px-2 py-1 mt-1 rounded-md text-white border border-gray-100/30 dark:border-gray-600/50 hover:border-gray-100/50 dark:hover:border-gray-600/90"
										>
											<div className="flex flex-col">
												<p>IS Business Analyst</p>
												<p className="uppercase text-[0.6rem] text-gray-200 font-medium">
													Jan 2023 - Present
												</p>
											</div>
											<ChevronRightIcon className="w-4 h-4" />
										</Link>
									</div>
								</div>
								<div className="flex flex-col w-full max-h-full text-xs p-2 rounded-md text-white border border-gray-100/30 dark:border-gray-600/50">
									Upstrem
									<div className="flex flex-col h-full">
										<Link
											href="/resume"
											className="inline-flex flex-row justify-between w-full items-center text-xs px-2 py-1 mt-1 rounded-md text-white border border-gray-100/30 dark:border-gray-600/50 hover:border-gray-100/50 dark:hover:border-gray-600/90 mb-2"
										>
											<div className="flex flex-col">
												<p>Data Analyst</p>
												<p className="uppercase text-[0.6rem] text-gray-200 font-medium">
													Feb 2020 - Dec 2022
												</p>
											</div>
											<ChevronRightIcon className="w-4 h-4" />
										</Link>
										<Link
											href="/resume"
											className="inline-flex flex-row justify-between w-full items-center text-xs px-2 py-1 rounded-md text-white border border-gray-100/30 dark:border-gray-600/50 hover:border-gray-100/50 dark:hover:border-gray-600/90"
										>
											<div className="flex flex-col">
												<p>Marketplace Analyst</p>
												<p className="uppercase text-[0.6rem] text-gray-200 font-medium">
													Aug 2019 - Feb 2020
												</p>
											</div>
											<ChevronRightIcon className="w-4 h-4" />
										</Link>
									</div>
								</div>
							</div>
							<Link
								href="/resume"
								className="inline-flex flex-row w-auto justify-start items-center text-sm text-white hover:text-gray-200"
							>
								See all skills
								<ArrowLongRightIcon className="w-4 h-4 ml-1" />
							</Link>
						</div>
						<div className="h-full rounded-lg bg-gray-100/20 dark:bg-gray-700/30 col-span-1 border border-gray-100/30 dark:border-gray-700/50 shadow-lg p-3">
							<div className="flex flex-col w-full h-full max-h-full">
								<h2 className="text-xl font-medium dark:text-white">
									AndrewGPT
								</h2>
								<p className="text-xs text-gray-200 mb-3">
									Have questions about my skills or
									experience? Ask AndrewGPT!
								</p>
								<div className="flex flex-col justify-end items-center w-full h-auto flex-grow rounded-lg p-2 mb-2">
									<div className="flex flex-col justify-center items-center w-full h-full flex-grow mb-2">
										<div className="relative flex rounded-full h-12 w-12 bg-white/50 dark:bg-gray-500/30 p-[5px] cursor-pointer">
											<div className="relative flex h-full w-full">
												<Image
													src={MemojiPFP}
													alt="Memoji profile picture"
													fill={true}
													className=""
												/>
											</div>
											<span className="bg-green-400 absolute right-0 bottom-0 h-3 w-3 p-1 rounded-full"></span>
										</div>
										<span className="text-lg font-medium text-center pt-2">
											AndrewGPT
										</span>
										<div className="flex flex-row items-center justify-center text-xs text-center">
											<CheckCircleIcon className="w-3.5 h-3.5 text-green-400 rounded-full mr-1" />
											Available
										</div>
									</div>
									<Link
										href="/andrewgpt"
										className="inline-flex flex-row w-full justify-start items-center text-xs p-2 rounded-md text-gray-100 border border-gray-100/30 dark:border-gray-600/50 hover:border-gray-100/50 dark:hover:border-gray-600/90"
									>
										Send a message
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className="grid gap-4"
					style={{ gridTemplateRows: "min-content" }}
				>
					<div className="grid grid-cols-2 gap-4">
						<div className="h-full rounded-lg bg-gray-100/20 dark:bg-gray-700/30 col-span-1 border border-gray-100/30 dark:border-gray-700/50 shadow-lg p-3">
							<h2 className="text-xl font-medium dark:text-white mb-3">
								Skills
							</h2>
							<div className="flex flex-col justify-center items-center w-full h-auto flex-grow rounded-lg mb-2">
								{skills.map((item, index) => {
									return (
										<Link
											href="/resume"
											className="inline-flex flex-row justify-between w-full items-center text-sm px-2 py-1 rounded-md text-white border border-gray-100/30 dark:border-gray-600/50 hover:border-gray-100/50 dark:hover:border-gray-600/90 mb-2"
											key={index}
										>
											{item}
											<ChevronRightIcon className="w-4 h-4" />
										</Link>
									);
								})}
							</div>
							<Link
								href="/resume"
								className="inline-flex flex-row w-auto justify-start items-center text-sm text-white hover:text-gray-200"
							>
								See all skills
								<ArrowLongRightIcon className="w-4 h-4 ml-1" />
							</Link>
						</div>
						<div className="relative h-full rounded-lg bg-gray-100/20 dark:bg-gray-700/30 col-span-1 border border-gray-100/30 dark:border-gray-700/50 shadow-lg p-3 overflow-clip">
							<div className="flex flex-col w-full h-full max-h-full">
								<h2 className="text-xl font-medium dark:text-white mb-2 text-opacity-100">
									Education
								</h2>
								<div className="flex flex-col justify-center items-center w-full h-auto flex-grow rounded-lg px-2 py-12 mb-2">
									<AcademicCapIcon className="h-6 w-6" />
									<span className="uppercase text-xs font-medium text-center py-1">
										Bachelor of Science: Computer Science
									</span>
									<p className="text-xl font-semibold text-white text-center">
										San Diego State University
									</p>
								</div>
								<Link
									href="/resume"
									className="inline-flex flex-row w-auto justify-start items-center text-sm text-white hover:text-gray-200"
								>
									See full resume
									<ArrowLongRightIcon className="w-4 h-4 ml-1" />
								</Link>
							</div>
							<Image
								src={SDSULogo}
								alt="SDSU school logo"
								width={1200}
								height={1200}
								className="h-auto absolute -z-10 -right-20 -bottom-10 opacity-20"
							/>
						</div>
					</div>
					<div className="h-full rounded-lg bg-gray-100/20 dark:bg-gray-700/30 col-span-1 border border-gray-100/30 dark:border-gray-700/50 shadow-lg p-3">
						<div className="flex flex-col w-full h-full max-h-full">
							<div className="flex flex-row justify-between items-center w-full">
								<h2 className="text-xl font-medium dark:text-white mb-2">
									Projects
								</h2>
								<div className="flex flex-row h-full items-start">
									<button
										className="p-1 rounded-md bg-transparent dark:hover:bg-gray-300/10 hover:bg-gray-700/20 mr-2"
										onClick={scrollPrev}
									>
										<ChevronLeftIcon className="w-5 h-5" />
									</button>
									<button
										className="p-1 rounded-md bg-transparent dark:hover:bg-gray-300/10 hover:bg-gray-700/20"
										onClick={scrollNext}
									>
										<ChevronRightIcon className="w-5 h-5" />
									</button>
								</div>
							</div>

							<div className=" flex flex-col justify-start items-center w-full h-auto flex-grow rounded-lg mb-2">
								<div
									className="embla relative w-full h-full"
									ref={emblaRef}
								>
									<div className="embla__container w-full h-full">
										{projectsList.map((item, index) => {
											return (
												<div
													className="embla__slide flex flex-col justify-between w-full max-h-full text-xs p-2 mb-2 rounded-md text-white border border-gray-100/30 dark:border-gray-600/50"
													key={index}
												>
													<div className="flex flex-col">
														<h3 className="text-sm font-semibold">
															{item.title}
														</h3>
														<h4 className="italic mb-1">
															{item.subtitle}
														</h4>
														<p className="">
															{item.description}
														</p>
													</div>
													<div className="flex flex-row">
														{item.tags.map(
															(
																itemTag,
																indexTag
															) => {
																return (
																	<span
																		class="bg-blue-100 text-blue-500 text-xs font-medium mr-1 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-500 border dark:border-blue-500 flex flex-row items-center"
																		key={
																			indexTag
																		}
																	>
																		{itemTag}
																	</span>
																);
															}
														)}
													</div>
												</div>
											);
										})}
									</div>
								</div>
							</div>

							<Link
								href="/projects"
								className="inline-flex flex-row w-auto justify-start items-center text-sm text-white hover:text-gray-200"
							>
								See all projects
								<ArrowLongRightIcon className="w-4 h-4 ml-1" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
