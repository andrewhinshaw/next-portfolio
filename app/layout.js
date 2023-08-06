import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { AppContextProvider } from "./AppContext";
import AppWindowHeader from "@/components/AppWindowHeader";
import Background from "@/components/Background";

import Link from "next/link";
import SideNav from "./SideNav";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
	title: "Andrew Hinshaw",
	description: "Andrew Hinshaw is a data professional passionate about powering data-driven teams.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${poppins.className} bg-cover bg-center flex flex-col justify-center items-center p-3 md:p-8 w-full h-screen`}
			>
				<AppContextProvider>
					<Background />
					<div className="flex flex-col overflow-hidden relative w-full rounded-xl backdrop-blur-xl text-base font-medium max-w-[1250px] max-h-[860px] h-[90vh] bg-white/30 dark:bg-gray-900/40">
						<AppWindowHeader />
						<div className="relative flex flex-grow overflow-hidden">
							{/* SIDE NAV */}
							<SideNav />

							{/* MAIN CONTENT */}
							<div className="flex flex-col h-full w-full">
								<main className="text-white p-6 font-normal flex h-full w-full flex-col">
								{children}
								</main>
								</div>
						</div>
					</div>
				</AppContextProvider>
			</body>
		</html>
	);
}
