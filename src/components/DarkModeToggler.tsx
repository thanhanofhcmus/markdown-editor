import * as React from "react";
import { IconButton } from "./IconButton";
import { GlobalContext } from "../App";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

export const DarkModeToggler = () => {
	const SIZE = 16
	const SUN_ICON = <BsSunFill size={SIZE} />;
	const MOON_ICON = <BsMoonFill size={SIZE} />;
	const { darkMode, setDarkMode } = React.useContext(GlobalContext);
	const [themeIcon, setThemeIcon] = React.useState(darkMode === "light" ? SUN_ICON : MOON_ICON);

	const toggleTheme = () => {
		if (darkMode === "light") {
			setDarkMode("dark");
			setThemeIcon(MOON_ICON);
		} else {
			setDarkMode("light");
			setThemeIcon(SUN_ICON);
		}
	}

	return (<IconButton icon={themeIcon} onClick={toggleTheme} />);
};