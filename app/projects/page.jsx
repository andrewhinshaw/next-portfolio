"use client";

import React from "react";
import Link from "next/link";

import { GlobeAltIcon } from "@heroicons/react/24/outline";

import projectsList from "@/app/data/projects";

const Projects = () => {
	return (
		<>
			<h1 className="text-4xl font-semibold dark:text-white mb-3">
				Projects
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{projectsList.map((item, index) => {
					return (
						<div
							className="embla__slide flex flex-col justify-between w-full max-h-full text-sm p-3 rounded-md text-white border border-gray-100/30 dark:border-gray-600/50"
							key={index}
						>
							<div className="flex flex-col mb-2">
								<h3 className="text-base font-semibold">
									{item.title}
								</h3>
								<h4 className="italic mb-1">{item.subtitle}</h4>
								<p className="text-xs">{item.description}</p>
							</div>
							<div className="flex flex-row flex-wrap">
								{item.tags.map((itemTag, indexTag) => {
									return (
										<span
											className="bg-gray-100 text-gray-500 text-xs font-medium mr-1 mt-1 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border dark:border-gray-400 flex flex-row items-center"
											key={indexTag}
										>
											{itemTag}
										</span>
									);
								})}
							</div>
							<div className="flex flex-row mt-3 space-x-2">
								{item.links.map((itemLink, indexLink) => {
									if (itemLink.status != "active") return;
									return (
										<Link
											key={indexLink}
											href={itemLink.url}
											alt={`Link to Github for project ${item.title}`}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center justify-center w-full text-sm p-1 rounded-md text-white border border-gray-100/30 dark:border-gray-600/50 hover:border-gray-100/50 dark:hover:border-gray-600/90"
										>
											{itemLink.source == "github" ? (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-5 w-5"
													fill="#ffffff"
													viewBox="0 0 24 24"
												>
													<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
												</svg>
											) : (
												<GlobeAltIcon className="w-5 h-5" />
											)
											}
										</Link>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Projects;
