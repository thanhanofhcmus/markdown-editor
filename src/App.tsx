import * as React from "react";
// import { Sidebar } from "./Sidebar";
import { ContentContainer } from "./ContentContainer";
import { SplitView } from "./SplitView";
import { ChannelBar } from "./ChannelBar";
import { applyTheme } from "./themes/utils";

const ThemeContext = React.createContext({
	theme: "",
	setTheme: (_: string) => { } // placeholder
});

const App = () => {
	const [theme, setTheme] = React.useState("light");
	React.useEffect(() => {
		applyTheme("base");
	})
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
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
		</ThemeContext.Provider>
	);
}

export { App, ThemeContext };
