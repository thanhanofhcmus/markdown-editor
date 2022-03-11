import { SolarizedLight } from "../editor/SolarizedLight";
import { SolarizedDark } from "../editor/Solarized-Dark";
import { fromMonacoThemeToDarkTheme, fromMonacoThemeToLightTheme  } from ".";
import { IAppTheme } from ".";

export const Solarized: IAppTheme = {
	...fromMonacoThemeToLightTheme(SolarizedLight),
	...fromMonacoThemeToDarkTheme(SolarizedDark),
}