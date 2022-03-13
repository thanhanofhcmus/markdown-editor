import * as React from "react";
import { ContentContainer } from "./components/ContentContainer";
import { SplitView } from "./components/SplitView";
import { ChannelBar } from "./components/ChannelBar";
import { applyAppTheme, IAppTheme } from "./themes/app";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Solarized } from "./themes/app/Solarized";
// import { Dracula } from "./themes/app/Dracula";

const ThemeContext = React.createContext({
	darkMode: "",
	setDarkMode: (_: string) => { }, // placeholder
	theme: Solarized,
	setTheme: (_: IAppTheme) => { }
});

const App = () => {
	const [darkMode, setDarkMode] = useLocalStorage("dark-mode", "light");
	const [theme, setTheme] = useLocalStorage('theme', Solarized);

	React.useEffect(() => {
		applyAppTheme(theme);
	})

	return (
		<ThemeContext.Provider value={{ darkMode,  setDarkMode, theme, setTheme }}>
			<div className={`${darkMode} overflow-hidden`}>
				<SplitView
					left={<ChannelBar />}
					right={<ContentContainer />}
					defaultLeftWidth={150}
					leftMinWidth={60}
					leftMaxWidth={200}
					separatorClassName="h-screen"
				/>
			</div>
		</ThemeContext.Provider>
	);
}

export { App, ThemeContext };
