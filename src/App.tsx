import * as React from "react";
import { ContentContainer } from "./components/ContentContainer";
import { SplitView } from "./components/SplitView";
import { ChannelBar } from "./components/ChannelBar";
import { applyAppTheme } from "./themes/app";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Solarized } from "./themes/app/Solarized";

const DarkModeContext = React.createContext({
	darkMode: "",
	setDarkMode: (_: string) => { } // placeholder
});

const App = () => {
	const [storedDarkMode, setStoredDarkMode] = useLocalStorage("dark-mode", "light");
	const [darkMode, setDarkMode] = React.useState(storedDarkMode);

	const setAndStoredDarkMode = (t: string) => {
		setDarkMode(t);
		setStoredDarkMode(t);
	};

	React.useEffect(() => {
		applyAppTheme(Solarized);
	})

	return (
		<DarkModeContext.Provider value={{ darkMode,  setDarkMode: setAndStoredDarkMode }}>
			<div className={`${darkMode} overflow-hidden`}>
				<SplitView
					left={<ChannelBar />}
					right={<ContentContainer />}
					defaultLeftWidth={150}
					leftMinWidth={60}
					leftMaxWidth={200}
				/>
			</div>
		</DarkModeContext.Provider>
	);
}

export { App, DarkModeContext };
