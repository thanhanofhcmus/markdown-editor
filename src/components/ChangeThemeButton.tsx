import * as React from "react";
import { IconButton } from "./IconButton";
import { ThemeContext } from "../App";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

export const ChangeThemeButton = () => {
	const SIZE = 16
	const { theme, setTheme } = React.useContext(ThemeContext);
	const [themeIcon, setThemeIcon] = React.useState(<BsSunFill size={SIZE}/>);

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
			setThemeIcon(<BsMoonFill size={SIZE}/>);
		} else {
			setTheme("light");
			setThemeIcon(<BsSunFill size={SIZE}/>);
		}
	}

	return (
		<IconButton
		icon={themeIcon}
		onClick={toggleTheme} />
	)
};