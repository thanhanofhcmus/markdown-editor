import * as React from "react";
import { IconButton } from "./IconButton";
import { ThemeContext } from "./App";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

export const ChangeThemeButton = () => {
	const { theme, setTheme } = React.useContext(ThemeContext);
	const [themeIcon, setThemeIcon] = React.useState(<BsSunFill/>);

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
			setThemeIcon(<BsMoonFill/>);
		} else {
			setTheme("light");
			setThemeIcon(<BsSunFill/>);
		}
	}

	return (
		<IconButton icon={themeIcon} onClick={toggleTheme} />
	)
};