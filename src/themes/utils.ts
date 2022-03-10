import { themes } from ".";

export interface ITheme {
	[key: string]: string;
}

export interface IThemes {
	[key: string]: ITheme;
}

export interface IMappedTheme {
	[key: string]: string | null;
}

export const mapTheme = (vars: ITheme): IMappedTheme => {
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

export const applyTheme = (theme: string): void => {
	const themeObject = mapTheme(themes[theme]);
	if (!themeObject) {
		return;
	}

	const root = document.documentElement;

	Object.keys(themeObject).forEach(property => {
		if (property === 'name') {
			return;
		}

		root.style.setProperty(property, themeObject[property]);
	})
}