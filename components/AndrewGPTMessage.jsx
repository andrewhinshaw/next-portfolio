import React from "react";

const testMessage = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
const AndrewGPTMessage = (props) => {
	const { isUserMessage, messageText } = props;

	const messageColors = isUserMessage
		? "text-white bg-blue-500"
		: "text-gray-900 dark:text-white bg-gray-300 dark:bg-gray-700";

	return (
		<div className={`flex flex-row w-full pt-2 pr-1 ${isUserMessage ? "justify-end" : "justify-start"}`}>
			<div
				className={
					"flex flex-row text-xs py-2 px-3 max-w-[75%] lg:max-w-[66%] rounded-xl break-words " +
					messageColors
				}
			>
        {messageText}
      </div>
		</div>
	);
};

export default AndrewGPTMessage;
