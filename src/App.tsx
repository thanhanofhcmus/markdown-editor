import * as React from "react";
// import { Sidebar } from "./Sidebar";
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
			<div className={`${theme} transition-all ease-in`}>
				{/* <Sidebar /> */}

				<SplitView
					left={<ChannelBar />}
					right={<ContentContainer />}
					defaultLeftWidth={150}
					leftMinWidth={60}
					leftMaxWidth={200}
				/>
			</div>
		</ThemeContext.Provider>
	);
}

export { App, ThemeContext };
