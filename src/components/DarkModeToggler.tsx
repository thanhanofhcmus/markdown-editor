import * as React from "react";
import { IconButton } from "./IconButton";
import { ThemeContext } from "../App";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

export const DarkModeToggler = () => {
	const SIZE = 16
	const { darkMode, setDarkMode } = React.useContext(ThemeContext);
	const [themeIcon, setThemeIcon] = React.useState(<BsSunFill size={SIZE}/>);

	const toggleTheme = () => {
		if (darkMode === "light") {
			setDarkMode("dark");
			setThemeIcon(<BsMoonFill size={SIZE}/>);
		} else {
			setDarkMode("light");
			setThemeIcon(<BsSunFill size={SIZE}/>);
		}
	}

	return (
		<IconButton
		icon={themeIcon}
		onClick={toggleTheme} />
	)
};