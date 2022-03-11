import * as React from "react";
import Editor, { useMonaco } from "@monaco-editor/react";
import { SolarizedDark } from "../themes/Solarized-Dark";
import { Dracula } from "../themes/Dracular";

export const TextEditor = () => {
	const monaco = useMonaco();

	React.useEffect(() => {
		if (!monaco) {
			return;
		}
		monaco.editor.defineTheme("Solarized-Dark", SolarizedDark)
		monaco.editor.defineTheme("Dracula", Dracula)
		monaco.editor.setTheme("Dracula");
	}, [monaco]);

	return (
		<Editor
		height="95vh"
		language="markdown"
		options={{ minimap: { enabled: false } }}
		/>
	)
}