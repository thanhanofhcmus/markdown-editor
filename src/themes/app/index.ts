import { editor } from "monaco-editor/esm/vs/editor/editor.api";

export interface IEditorTheme extends editor.IStandaloneThemeData {
	name: string;
}

export interface IAppTheme {
	name: string;
	foregroundLight?: string;
	backgroundLight?: string;
	foregroundLightSecondary?: string;
	backgroundLightSecondary?: string;
	foregroundDark?: string;
	backgroundDark?: string;
	foregroundDarkSecondary?: string;
	backgroundDarkSecondary?: string;
	editorLightTheme?: IEditorTheme;
	editorDarkTheme?: IEditorTheme;
};

export interface IMappedAppTheme {
	[key: string]: string | null;
}

export const DEFAULT_THEME = "base";

export const mapTheme = (vars: IAppTheme): IMappedAppTheme => {
	return {
		"--color-fg-light": vars.foregroundLight || '',
		"--color-bg-light": vars.backgroundLight || '',
		"--color-fg-light-secondary": vars.foregroundLightSecondary || '',
		"--color-bg-light-secondary": vars.backgroundLightSecondary || '',
		"--color-fg-dark": vars.foregroundDark || '',
		"--color-bg-dark": vars.backgroundDark || '',
		"--color-fg-dark-secondary": vars.foregroundDarkSecondary || '',
		"--color-bg-dark-secondary": vars.backgroundDarkSecondary || '',
	}
}

export const fromMonacoThemeToLightTheme = (editorTheme: IEditorTheme): IAppTheme => {
	const colors = editorTheme.colors;
	return {
		name: editorTheme.name,
		foregroundLight: colors["editor.foreground"],
		backgroundLight: colors["editor.background"],
		foregroundLightSecondary: colors["editorCursor.foreground"],
		backgroundLightSecondary: colors["editor.selectionBackground"],
		editorLightTheme: editorTheme,
	}
}

export const fromMonacoThemeToDarkTheme = (editorTheme: IEditorTheme): IAppTheme => {
	const colors = editorTheme.colors;
	return {
		name: editorTheme.name,
		foregroundDark: colors["editor.foreground"],
		backgroundDark: colors["editor.background"],
		foregroundDarkSecondary: colors["editorCursor.foreground"],
		backgroundDarkSecondary: colors["editor.selectionBackground"],
		editorDarkTheme: editorTheme,
	}
}

export const applyAppTheme = (theme: IAppTheme): void => {
	const themeObject = mapTheme(theme);

	const root = document.documentElement;

	Object.keys(themeObject).forEach(property => {
		if (property === 'name') {
			return;
		}

		root.style.setProperty(property, themeObject[property]);
	})
};