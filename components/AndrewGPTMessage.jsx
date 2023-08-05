import React from "react";

const testMessage =
	"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.";
const AndrewGPTMessage = (props) => {
	const { isUserMessage, messageText, messageTimestamp } = props;

	const getDateFormatted = () => {
		const currentDate = new Date();
		const inputDate = new Date(messageTimestamp);
		const oneDay = 24 * 60 * 60 * 1000;
		const oneWeek = 7 * oneDay;
		const oneYear = 365 * oneDay;

		if (inputDate.toDateString() === currentDate.toDateString()) {
			// Today
			return `Today at ${inputDate.toLocaleTimeString("en-US", {
				hour: "numeric",
				minute: "numeric",
				hour12: true,
			})}`;
		} else if (
			inputDate.toDateString() ===
			new Date(currentDate - oneDay).toDateString()
		) {
			// Yesterday
			return `Yesterday at ${inputDate.toLocaleTimeString("en-US", {
				hour: "numeric",
				minute: "numeric",
				hour12: true,
			})}`;
		} else if (messageTimestamp > currentDate - oneWeek) {
			// Past week
			return `${inputDate.toLocaleString("en-US", {
				weekday: "short",
			})} at ${inputDate.toLocaleTimeString("en-US", {
				hour: "numeric",
				minute: "numeric",
				hour12: true,
			})}`;
		} else if (messageTimestamp > currentDate - oneYear) {
			// Past year
			return `${inputDate.toLocaleString("en-US", {
				weekday: "short",
				month: "short",
				day: "numeric",
			})} at ${inputDate.toLocaleTimeString("en-US", {
				hour: "numeric",
				minute: "numeric",
				hour12: true,
			})}`;
		} else {
			// All other cases
			const optionsDate = {
				year: "numeric",
				month: "short",
				day: "numeric",
			};

			const optionsTime = {
				hour: "numeric",
				minute: "numeric",
				hour12: true,
			};

			const formattedDate = new Intl.DateTimeFormat(
				"en-US",
				optionsDate
			).format(inputDate);
			const formattedTime = new Intl.DateTimeFormat(
				"en-US",
				optionsTime
			).format(inputDate);

			return `${formattedDate} at ${formattedTime}`;
		}
	};

	const messageColors = isUserMessage
		? "text-white bg-blue-500"
		: "text-gray-900 dark:text-white bg-gray-300 dark:bg-gray-700";

	return (
		<>
			{isUserMessage && (
				<div className="flex flex-row w-full justify-center text-xs text-gray-300">
					{getDateFormatted()}
				</div>
			)}
			<div
				className={`flex flex-row w-full pt-2 pr-1 ${
					isUserMessage ? "justify-end" : "justify-start"
				}`}
			>
				<div
					className={
						"flex flex-row text-xs py-2 px-3 max-w-[75%] lg:max-w-[66%] rounded-xl break-words " +
						messageColors
					}
				>
					{messageText}
				</div>
			</div>
		</>
	);
};

export default AndrewGPTMessage;
