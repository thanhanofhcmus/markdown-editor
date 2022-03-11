import * as React from "react";
import { ThemeContext } from "../App";
import Editor, { useMonaco } from "@monaco-editor/react";
import { SolarizedDark } from "../themes/editor/Solarized-Dark";
import { SolarizedLight } from "../themes/editor/SolarizedLight";
import { Dracula } from "../themes/editor/Dracula";

export const TextEditor = () => {
	const monaco = useMonaco();

	const { darkMode, theme } = React.useContext(ThemeContext);

	React.useEffect(() => {
		if (!monaco) {
			return;
		}
		monaco.editor.defineTheme(SolarizedLight.name, SolarizedLight)
		monaco.editor.defineTheme(SolarizedDark.name, SolarizedDark)
		monaco.editor.defineTheme(Dracula.name, Dracula)
	}, [monaco]);

	React.useEffect(() => {
		if (!monaco) {
			return;
		}
		if (darkMode === "light" && theme.editorLightTheme) {
			monaco.editor.setTheme(theme.editorLightTheme.name);
		} else if (theme.editorDarkTheme) {
			monaco.editor.setTheme(theme.editorDarkTheme.name);
		}
	}, [monaco, theme, darkMode]);

	return (
		<Editor
		height="95vh"
		language="markdown"
		options={{ minimap: { enabled: false } }}
		/>
	)
}