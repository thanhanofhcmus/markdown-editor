import * as React from "react";
import { DarkModeContext } from "../App";
import { DiReact, DiAngularSimple, DiVisualstudio, DiClojure } from "react-icons/di";
import { BsSunFill, BsMoonFill } from "react-icons/bs";


const Sidebar = () => {
	const ICON_SIZE = 28;
	const { theme, setTheme } = React.useContext(DarkModeContext);
	const [themeIcon, setThemeIcon] = React.useState(<BsSunFill size={ICON_SIZE - 8}/>);

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
			setThemeIcon(<BsMoonFill size={ICON_SIZE - 6}/>);
		} else {
			setTheme("light");
			setThemeIcon(<BsSunFill size={ICON_SIZE - 6}/>);
		}
	}

	return (
		<div className="h-screen w-20 flex flex-col
		bg-gray-100 text-blue-500 border-r-2 border-blue-100
    dark:bg-gray-700 dark:text-orange-400 dark:border-gray-500
		">
			<SidebarIcon icon={<DiReact size={ICON_SIZE} />} tooltips="React"/>
			<SidebarIcon icon={<DiAngularSimple size={ICON_SIZE} />} tooltips="Angular"/>
			<SidebarIcon icon={<DiVisualstudio size={ICON_SIZE} />} tooltips="Visual Studio"/>
			<SidebarIcon icon={<DiClojure size={ICON_SIZE} />} tooltips="Closure"/>
			<SidebarIcon icon={themeIcon} onClick={toggleTheme} className="mt-auto mb-3"/>
		</div>
	);
};

interface SidebarIconProps {
	icon: JSX.Element;
	tooltips?: string;
	className?: string;
	onClick?: React.MouseEventHandler;
};

const SidebarIcon = ({ icon, tooltips, className, onClick }: SidebarIconProps) => {
	return (
		<button className={`relative flex items-center justify-center
		h-12 w-12 my-2 mx-auto rounded-xl
		${className ?? className}
		bg-gray-200 border-2 border-blue-500
		hover:bg-blue-500 hover:text-gray-200
		dark:bg-gray-600 dark:border-orange-400
		dark:hover:bg-orange-400 dark:hover:text-gray-600
		transition-all ease-in duration-150
		active:scale-100 group`}
		onClick={onClick}>
			{icon}
			{tooltips &&
			<div className="absolute w-auto px-2 py-1 m-2 min-w-max left-14
			rounded-md shadow-md
			bg-gray-700 text-white
			dark:bg-gray-100 dark:text-gray-800
			scale-0 group-hover:scale-100">
				{tooltips}
			</div>
			}
		</button>
	);
};

export { Sidebar };