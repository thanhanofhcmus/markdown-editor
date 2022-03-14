import * as React from "react";
import { GlobalContext } from "../App";
import Editor, { useMonaco } from "@monaco-editor/react";
import { SolarizedDark } from "../themes/editor/Solarized-Dark";
import { SolarizedLight } from "../themes/editor/SolarizedLight";
import { Dracula } from "../themes/editor/Dracula";

interface Props {
	text?: string;
	setText: (text: string) => void
}

export const TextEditor = ({ text, setText }: Props) => {
	const monaco = useMonaco();

	const { darkMode, theme } = React.useContext(GlobalContext);

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

	const onChange = (value: string | undefined) => { value && setText(value)};

	return (
		<Editor
		height="95vh"
		language="markdown"
		value={text}
		options={{
			fontSize: 14,
			fontFamily: "SFMono Nerd Font",
			minimap: { enabled: false }
		}}
		onChange={onChange}
		theme={darkMode === "light" ? theme.editorLightTheme?.name : theme.editorDarkTheme?.name}
		className="border-r-[1px] border-r-fg-light-secondary dark:border-r-fg-dark-secondary"
		/>
	)
}