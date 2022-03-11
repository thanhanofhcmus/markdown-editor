import { fromMonacoThemeToDarkTheme } from ".";
import { IAppTheme } from ".";
import { Dracula as DraculaEditor } from "../editor/Dracula";
import { base } from "./base";

export const Dracula: IAppTheme = {
	...base,
	...fromMonacoThemeToDarkTheme(DraculaEditor),
	name: "Dracula",
}