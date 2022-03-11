import * as React from "react";
import Editor, { useMonaco } from "@monaco-editor/react";
import { SolarizedDark } from "../themes/editor/Solarized-Dark";
import { SolarizedLight } from "../themes/editor/SolarizedLight";
import { Dracula } from "../themes/editor/Dracula";

export const TextEditor = () => {
	const monaco = useMonaco();

	React.useEffect(() => {
		if (!monaco) {
			return;
		}
		monaco.editor.defineTheme(SolarizedLight.name, SolarizedLight)
		monaco.editor.defineTheme(SolarizedDark.name, SolarizedDark)
		monaco.editor.defineTheme(Dracula.name, Dracula)
		monaco.editor.setTheme(SolarizedDark.name);
	}, [monaco]);

	return (
		<Editor
		height="95vh"
		language="markdown"
		options={{ minimap: { enabled: false } }}
		/>
	)
}