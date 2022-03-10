import * as React from "react";
import { Sidebar } from "./Sidebar";
import { ContentContainer } from "./ContentContainer";
import { SplitView } from "./SplitView";
import { ChannelBar } from "./ChannelBar";

const ThemeContext = React.createContext({
	theme: "",
	setTheme: (_: string) => { } // placeholder
});

const App = () => {
	const [theme, setTheme] = React.useState("light");
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div className={`${theme} flex flex-row h-full`}>
				<Sidebar />
				<SplitView
					left={<ChannelBar />}
					right={<ContentContainer />} />
			</div>
		</ThemeContext.Provider>
	);
}

export { App, ThemeContext };
