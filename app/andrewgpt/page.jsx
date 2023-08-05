"use client";
import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import useSWR from "swr";

import AndrewGPTMessage from "../../components/AndrewGPTMessage";

import {
	PaperAirplaneIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	EllipsisHorizontalCircleIcon,
	EllipsisHorizontalIcon,
	TrashIcon,
} from "@heroicons/react/24/solid";
import { VideoCameraIcon } from "@heroicons/react/24/outline";
import MemojiPFP from "../../public/memoji-pfp.png";

const AndrewGPT = () => {
	const [debug, setDebug] = useState(false);

	const [showSettingsMenu, setShowSettingsMenu] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [prompt, setPrompt] = useState("");
	const [messageHistory, setMessageHistory] = useState([]);
	const [isResponding, setIsResponding] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			// Get message history from storage
			const loadedMessageHistory = localStorage.getItem("messageHistory");
			if (loadedMessageHistory) {
				const parsedMessageHistory = JSON.parse(loadedMessageHistory);
				setMessageHistory(parsedMessageHistory);
			}

			resetScroll();

			resetTextAreaSizing();
		}
	}, []);

	const resetScroll = () => {
		let scroller = document.getElementById("scroller");
		scroller.scrollTop = scroller.scrollHeight - scroller.clientHeight;

		document
			.querySelector("#prompt-message")
			.addEventListener("input", function () {
				this.style.height = "0px";
				this.style.height = this.scrollHeight + "px";
			});
	};

	const resetTextAreaSizing = () => {
		// Initialize textarea height to row height to remove phantom space
		document.querySelector("#prompt-message").style.height = "1.25rem";
		document
			.querySelector("#prompt-message")
			.addEventListener("input", function () {
				this.style.height = "0px";
				this.style.height = this.scrollHeight + "px";
			});
	};

	const handlePromptChange = (e) => {
		setPrompt(e.target.value);
	};

	const handlePromptSubmit = async (e) => {
		e.preventDefault();

		// Get the message text from the textarea in the form
		let messageText = "";
		if (e.target.name == "promptmessage") {
			messageText = e.target.value;
		} else {
			messageText = e.target.promptmessage.value;
		}

		// Update message history immediately after the user's message is submitted
		const updatedMessageHistoryAfterUser = [
			...messageHistory,
			{
				messageId: messageHistory.length + 1,
				messageText: messageText,
				isUserMessage: true,
				messageTimestamp: Date.now(),
			},
		];
		setMessageHistory(updatedMessageHistoryAfterUser);
		localStorage.setItem(
			"messageHistory",
			JSON.stringify(updatedMessageHistoryAfterUser)
		);

		setPrompt("");
		resetTextAreaSizing();

		// Send the user message to the backend to be processed
		setIsResponding(true);
		const response = await fetch("/api/andrewgpt/send", {
			method: "POST",
			body: JSON.stringify({
				messageText: messageText,
			}),
		});
		const data = await response.json();
		
		// Update message history immediately after the user's message is submitted
		const updatedMessageHistoryAfterResponse = [
			...updatedMessageHistoryAfterUser,
			{
				messageId: updatedMessageHistoryAfterUser.length + 1,
				messageText: data.responseMessageText,
				isUserMessage: false,
				messageTimestamp: Date.now(),
			},
		];
		setMessageHistory(updatedMessageHistoryAfterResponse);
		localStorage.setItem(
			"messageHistory",
			JSON.stringify(updatedMessageHistoryAfterResponse)
		);

		setIsResponding(false);
	};

	const handleKeyDown = (e) => {
		if (e.keyCode == 13 && e.shiftKey == false) {
			e.preventDefault();
			handlePromptSubmit(e);
		}
	};

	const toggleSettingsMenu = (e) => {
		e.preventDefault();
		setShowSettingsMenu(!showSettingsMenu);
	};

	const handleOpenDeleteMessageHistoryModal = () => {
		setIsDeleteModalOpen(true);
	};

	const handleDeleteMessageHistory = () => {
		localStorage.setItem("messageHistory", JSON.stringify([]));
		setMessageHistory([]);
		setIsDeleteModalOpen(false);
	};

	return (
		<div
			className="flex flex-col h-full w-full border-red-500"
			style={{ borderWidth: debug ? "1px" : "0px" }}
		>
			<Dialog
				as="div"
				className="relative z-50"
				open={isDeleteModalOpen}
				onClose={() => setIsDeleteModalOpen(false)}
			>
				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
							<Dialog.Title
								as="h3"
								className="text-lg font-medium leading-6 text-gray-900"
							>
								Delete history
							</Dialog.Title>
							<div className="mt-2">
								<p className="text-sm text-gray-500">
									Your payment has been successfully
									submitted. We’ve sent you an email with all
									of the details of your order.
								</p>
							</div>
							<div className="mt-4">
								<button
									type="button"
									className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
									onClick={handleDeleteMessageHistory}
								>
									Delete
								</button>
							</div>
						</Dialog.Panel>
					</div>
				</div>
			</Dialog>
			<div
				className="flex flex-row w-full border-red-500"
				style={{ borderWidth: debug ? "1px" : "0px" }}
			>
				<div className="flex flex-col w-full h-full px-2 pb-2 border-b-[1px] border-white/30 dark:border-gray-500/30">
					<div className="flex flex-row justify-between w-full pb-1">
						<div className="flex w-1/3 justify-start items-center">
							<ChevronLeftIcon className="w-6 h-6 text-white cursor-pointer" />
						</div>
						<div className="flex w-1/3 justify-center items-center">
							<div className="relative flex rounded-full h-12 w-12 bg-white/50 dark:bg-gray-500/30 p-[5px] cursor-pointer transition-all">
								<div className="relative flex h-full w-full">
									<Image
										src={MemojiPFP}
										alt="Memoji profile picture"
										fill={true}
										className=""
									/>
								</div>
							</div>
						</div>
						<div className="relative flex w-1/3 justify-end items-center">
							<VideoCameraIcon className="w-6 h-6 text-white cursor-pointer mr-3" />
							<button onClick={toggleSettingsMenu}>
								<EllipsisHorizontalIcon className="w-6 h-6 text-white cursor-pointer" />
							</button>
							<div
								id="dropdown"
								className="absolute top-[40px] z-10 bg-gray-100 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
								style={{
									display: showSettingsMenu ? "" : "none",
								}}
							>
								<ul
									className="py-2 text-sm text-gray-700 dark:text-gray-200"
									aria-labelledby="dropdownDefaultButton"
								>
									<li
										onClick={
											handleOpenDeleteMessageHistoryModal
										}
										className="flex flex-row items-center px-3 py-2 text-red-600 dark:text-red-500 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
									>
										<TrashIcon className="h-4 w-4 mr-2" />
										Clear history
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="flex flex-row justify-center items-center w-full">
						<span className="cursor-pointer flex flex-row items-center justify-ceter">
							<p className="text-xs">AndrewGPT</p>
							<ChevronRightIcon className="w-3 h-3 text-gray-300" />
						</span>
					</div>
				</div>
			</div>
			<div
				id="scroller"
				className="relative block w-full h-full border-red-500 overflow-auto"
				style={{ borderWidth: debug ? "1px" : "0px" }}
			>
				<div className="flex flex-col-reverse min-h-full">
					<div className="flex flex-col">
						{messageHistory.map((item) => {
							return (
								<AndrewGPTMessage
									isUserMessage={item?.isUserMessage}
									messageText={item?.messageText}
									messageTimestamp={item?.messageTimestamp}
									key={item.messageId}
								/>
							);
						})}
					</div>
				</div>
			</div>
			<div
				className="flex flex-row items-center min-h-12 pt-6 w-full border-red-500"
				style={{ borderWidth: debug ? "1px" : "0px" }}
			>
				<form
					action=""
					className="w-full h-full"
					onSubmit={handlePromptSubmit}
				>
					<div className="flex flex-row w-full h-full py-2 px-3 rounded-2xl border-[1px] border-white/30 dark:border-gray-500/30">
						<textarea
							id="prompt-message"
							name="promptmessage"
							placeholder="Send a message"
							rows="1"
							onChange={handlePromptChange}
							onKeyDown={handleKeyDown}
							value={prompt}
							className="flex items-center justify-center w-full h-full mr-2 bg-transparent border-none resize-none p-0 m-0 focus:ring-0 focus-visible:ring-0 text-sm placeholder:text-gray-300 dark:placeholder:text-gray-500"
						/>
						<div className="flex items-end justify-end h-full">
							<button
								type="submit"
								disabled={prompt == ""}
								className="text-white disabled:text-gray-300 hover:text-gray-200 dark:disabled:text-gray-500"
							>
								<PaperAirplaneIcon className="h-5 w-5" />
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AndrewGPT;
