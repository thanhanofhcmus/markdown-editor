import { IAppTheme } from "./themes/app";

export type DarkMode = "light" | "dark";

export type ViewMode = "editor" | "preview" | "both";

export interface IGlobalContext {
	darkMode: DarkMode;
	setDarkMode: (mode: DarkMode) => void;
	theme: IAppTheme;
	setTheme: (theme: IAppTheme) => void;
	fileBarOpen: boolean;
	setFileBarOpen: (open: boolean) => void;
	viewMode: "editor" | "preview" | "both";
	setViewMode: (mode: "editor" | "preview" | "both") => void;
}
