import * as React from "react";
// import { Sidebar } from "./Sidebar";
import { ContentContainer } from "./components/ContentContainer";
import { SplitView } from "./components/SplitView";
import { ChannelBar } from "./components/ChannelBar";
import { applyTheme } from "./themes/utils";
import { useLocalStorage } from "./hooks/useLocalStorage";

const DarkModeContext = React.createContext({
	theme: "",
	setTheme: (_: string) => { } // placeholder
});

const App = () => {
	const [storedTheme, setStoredTheme] = useLocalStorage("dark-mode", "light");
	const [theme, setTheme] = React.useState(storedTheme);

	const setAndStoreTheme = (t: string) => {
		setTheme(t);
		setStoredTheme(t);
	};

	React.useEffect(() => {
		applyTheme("base");
	})

	return (
		<DarkModeContext.Provider value={{ theme, setTheme: setAndStoreTheme }}>
			<div className={`${theme}`}>
				{/* <Sidebar /> */}

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
