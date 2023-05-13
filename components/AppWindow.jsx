import React from "react";
import AppWindowHeader from "./AppWindowHeader";
import AppWindowContent from "./AppWindowContent";

const AppWindow = () => {
	return (
		<div className="app-window flex flex-col overflow-hidden relative w-full rounded-xl backdrop-blur-xl text-base font-medium max-w-[1250px] max-h-[860px] h-[90vh] bg-white/30 dark:bg-gray-900/40">
			<AppWindowHeader />
      <AppWindowContent />
		</div>
	);
};

export default AppWindow;
