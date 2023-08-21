import React from "react";
import Marquee from "react-fast-marquee";
import { Tooltip } from "flowbite-react";

const backgroundColorAlpha = "0.2";

const colors = {
	red: `rgba(239, 68, 68, ${backgroundColorAlpha})`, // Red
	orange: `rgba(249, 115, 22, ${backgroundColorAlpha})`, // Orange
	yellow: `rgba(250, 204, 21, ${backgroundColorAlpha})`, // Yellow
	green: `rgba(16, 185, 129, ${backgroundColorAlpha})`, // Green
	blue: `rgba(14, 165, 233, ${backgroundColorAlpha})`, // Blue
	purple: `rgba(168, 85, 247, ${backgroundColorAlpha})`, // Purple
	pink: `rgba(236, 72, 153, ${backgroundColorAlpha})`, // Pink
	gray: `rgba(107, 114, 128, ${backgroundColorAlpha})`, // Gray
};

const IconContainer = ({ children, backgroundColor, tooltipText }) => {
	return (
		<Tooltip content={tooltipText} className="relative z-30">
			<div
				className="flex items-center justify-center px-2 mx-1 h-12 w-12 rounded-full hover:scale-110 transition-transform "
				style={{ backgroundColor: backgroundColor }}
			>
				{children}
			</div>
		</Tooltip>
	);
};

const AWSIcon = () => {
	return (
		<IconContainer tooltipText="AWS" backgroundColor={colors.orange}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-full w-full"
				viewBox="0 0 24 24"
				strokeWidth="2"
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M17 18.5a15.198 15.198 0 0 1 -7.37 1.44a14.62 14.62 0 0 1 -6.63 -2.94"></path>
				<path d="M19.5 21c.907 -1.411 1.451 -3.323 1.5 -5c-1.197 -.773 -2.577 -.935 -4 -1"></path>
				<path d="M3 11v-4.5a1.5 1.5 0 0 1 3 0v4.5"></path>
				<path d="M3 9h3"></path>
				<path d="M9 5l1.2 6l1.8 -4l1.8 4l1.2 -6"></path>
				<path d="M18 10.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75"></path>
			</svg>
		</IconContainer>
	);
};

const PythonIcon = () => {
	return (
		<IconContainer tooltipText="Python" backgroundColor={colors.yellow}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-full w-full"
				viewBox="0 0 24 24"
				strokeWidth="2"
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3"></path>
				<path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3"></path>
				<path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4"></path>
				<path d="M11 6l0 .01"></path>
				<path d="M13 18l0 .01"></path>
			</svg>
		</IconContainer>
	);
};

const AzureIcon = () => {
	return (
		<IconContainer tooltipText="Azure" backgroundColor={colors.blue}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-full w-full"
				viewBox="0 0 24 24"
				strokeWidth="2"
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M6 7.5l-4 9.5h4l6 -15z"></path>
				<path d="M22 20l-7 -15l-3 7l4 5l-8 3z"></path>
			</svg>
		</IconContainer>
	);
};

const GithubIcon = () => {
	return (
		<IconContainer tooltipText="Github" backgroundColor={colors.gray}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="w-full h-full"
				viewBox="0 0 24 24"
				stroke-width={2}
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
			</svg>
		</IconContainer>
	);
};

const GraphQLIcon = () => {
	return (
		<IconContainer tooltipText="GraphQL" backgroundColor={colors.pink}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-brand-graphql"
				viewBox="0 0 24 24"
				stroke-width={2}
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M5.308 7.265l5.385 -3.029"></path>
				<path d="M13.308 4.235l5.384 3.03"></path>
				<path d="M20 9.5v5"></path>
				<path d="M18.693 16.736l-5.385 3.029"></path>
				<path d="M10.692 19.765l-5.384 -3.03"></path>
				<path d="M4 14.5v-5"></path>
				<path d="M12.772 4.786l6.121 10.202"></path>
				<path d="M18.5 16h-13"></path>
				<path d="M5.107 14.988l6.122 -10.201"></path>
				<path d="M12 3.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"></path>
				<path d="M12 20.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"></path>
				<path d="M4 8m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"></path>
				<path d="M4 16m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"></path>
				<path d="M20 16m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"></path>
				<path d="M20 8m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"></path>
			</svg>
		</IconContainer>
	);
};

const HTMLIcon = () => {
	return (
		<IconContainer tooltipText="HTML" backgroundColor={colors.orange}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-brand-html5"
				viewBox="0 0 24 24"
				stroke-width={2}
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
				<path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path>
			</svg>
		</IconContainer>
	);
};

const JavascriptIcon = () => {
	return (
		<IconContainer tooltipText="JavaScript" backgroundColor={colors.yellow}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-brand-javascript"
				viewBox="0 0 24 24"
				stroke-width={2}
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
				<path d="M7.5 8h3v8l-2 -1"></path>
				<path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path>
			</svg>
		</IconContainer>
	);
};

const MongodbIcon = () => {
	return (
		<IconContainer tooltipText="MongoDB" backgroundColor={colors.green}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-brand-mongodb"
				viewBox="0 0 24 24"
				stroke-width={2}
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M12 3v19"></path>
				<path d="M18 11.227c0 3.273 -1.812 4.77 -6 9.273c-4.188 -4.503 -6 -6 -6 -9.273c0 -4.454 3.071 -6.927 6 -9.227c2.929 2.3 6 4.773 6 9.227z"></path>
			</svg>
		</IconContainer>
	);
};

const MySQLIcon = () => {
	return (
		<IconContainer tooltipText="MySQL" backgroundColor={colors.blue}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-brand-mysql"
				viewBox="0 0 24 24"
				stroke-width={2}
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3"></path>
				<path d="M9 7h.01"></path>
			</svg>
		</IconContainer>
	);
};

const NextJSIcon = () => {
	return (
		<IconContainer tooltipText="NextJS" backgroundColor={colors.gray}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-brand-nextjs"
				viewBox="0 0 24 24"
				stroke-width={2}
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
				<path d="M15 12v-3"></path>
			</svg>
		</IconContainer>
	);
};

const NodeJSIcon = () => {
	return (
		<IconContainer tooltipText="NodeJS" backgroundColor={colors.green}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-brand-nodejs"
				viewBox="0 0 24 24"
				stroke-width={2}
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0"></path>
				<path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5"></path>
			</svg>
		</IconContainer>
	);
};

const MSOfficeIcon = () => {
	return (
		<IconContainer tooltipText="Microsoft Office" backgroundColor={colors.orange}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-brand-office"
				viewBox="0 0 24 24"
				stroke-width={2}
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M4 18h9v-12l-5 2v5l-4 2v-8l9 -4l7 2v13l-7 3z"></path>
			</svg>
		</IconContainer>
	);
};

const PowershellIcon = () => {
	return (
		<IconContainer tooltipText="Powershell" backgroundColor={colors.blue}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-brand-powershell"
				viewBox="0 0 24 24"
				stroke-width={2}
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M4.887 20h11.868c.893 0 1.664 -.665 1.847 -1.592l2.358 -12c.212 -1.081 -.442 -2.14 -1.462 -2.366a1.784 1.784 0 0 0 -.385 -.042h-11.868c-.893 0 -1.664 .665 -1.847 1.592l-2.358 12c-.212 1.081 .442 2.14 1.462 2.366c.127 .028 .256 .042 .385 .042z"></path>
				<path d="M9 8l4 4l-6 4"></path>
				<path d="M12 16h3"></path>
			</svg>
		</IconContainer>
	);
};

const PHPIcon = () => {
	return (
		<IconContainer tooltipText="PHP" backgroundColor={colors.purple}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-brand-php"
				viewBox="0 0 24 24"
				stroke-width={2}
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M12 12m-10 0a10 9 0 1 0 20 0a10 9 0 1 0 -20 0"></path>
				<path d="M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653"></path>
				<path d="M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653"></path>
				<path d="M12 7.5l-1 5.5"></path>
				<path d="M11.6 10h2.4l-.5 3"></path>
			</svg>
		</IconContainer>
	);
};

const ReactIcon = () => {
	return (
		<IconContainer tooltipText="React" backgroundColor={colors.blue}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-brand-react"
				viewBox="0 0 24 24"
				stroke-width={2}
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
				<path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
				<path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
				<path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
				<path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
				<path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
				<path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
			</svg>
		</IconContainer>
	);
};

const ExcelIcon = () => {
	return (
		<IconContainer tooltipText="Excel" backgroundColor={colors.green}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-table"
				viewBox="0 0 24 24"
				stroke-width={2}
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"></path>
				<path d="M3 10h18"></path>
				<path d="M10 3v18"></path>
			</svg>
		</IconContainer>
	);
};

const CSSIcon = () => {
	return (
		<IconContainer tooltipText="CSS" backgroundColor={colors.blue}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-brand-css3"
				viewBox="0 0 24 24"
				stroke-width={2}
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
				<path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path>
			</svg>
		</IconContainer>
	);
};

const GitIcon = () => {
	return (
		<IconContainer tooltipText="Git" backgroundColor={colors.orange}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-brand-git"
				viewBox="0 0 24 24"
				stroke-width={2}
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
				<path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
				<path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
				<path d="M12 15v-6"></path>
				<path d="M15 11l-2 -2"></path>
				<path d="M11 7l-1.9 -1.9"></path>
				<path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z"></path>
			</svg>
		</IconContainer>
	);
};

const SkillsIcons = () => {
	return (
		<Marquee pauseOnHover speed={3} className="py-2 overflow-x-clip w-full">
			<div className="flex flex-col">
				{/* ROW 1 */}
				<div className="flex flex-row overflow-x-clip w-full pb-1">
					<PythonIcon />
					<MySQLIcon />
					<ExcelIcon />
					<MongodbIcon />
					<AWSIcon />
					<MSOfficeIcon />
					<AzureIcon />
					<GraphQLIcon />
					<GitIcon />

					<PythonIcon />
					<MySQLIcon />
					<ExcelIcon />
					<MongodbIcon />
					<AWSIcon />
					<MSOfficeIcon />
					<AzureIcon />
					<GraphQLIcon />
					<GitIcon />
				</div>

				{/* ROW 2 */}
				<div className="flex flex-row overflow-x-clip w-full translate-x-7">
					<GithubIcon />
					<HTMLIcon />
					<CSSIcon />
					<JavascriptIcon />
					<NodeJSIcon />
					<ReactIcon />
					<NextJSIcon />
					<PHPIcon />
					<PowershellIcon />

					<GithubIcon />
					<HTMLIcon />
					<CSSIcon />
					<JavascriptIcon />
					<NodeJSIcon />
					<ReactIcon />
					<NextJSIcon />
					<PHPIcon />
					<PowershellIcon />
				</div>
			</div>
		</Marquee>
	);
};

export default SkillsIcons;
