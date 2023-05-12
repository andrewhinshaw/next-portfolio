import React, { useState } from "react";
import {
	MinusIcon,
	ArrowsPointingOutIcon,
	XMarkIcon,
} from "@heroicons/react/24/solid";

const AppWindowHeader = () => {
	const [windowOptionsHovered, setWindowOptionsHovered] = useState(false);

	return (
		<div className="flex items-center shrink-0 h-14 w-full py-0 px-6 whitespace-nowrap border-b-[1px] border-white/30 dark:border-gray-500/30">
			
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
		</div>
	);
};

export default AppWindowHeader;
