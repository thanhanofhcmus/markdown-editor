import * as React from "react";
import { NavBar } from "./NavBar";
import { TextEditor } from "./TextEditor";
import { SplitView } from "./SplitView";
import { Preview } from "./Preview";

export const ContentContainer = () => {
		const [text, setText] = React.useState("");

	return (
		<div className="h-screen">
			<NavBar />
			<SplitView
			left={<TextEditor setText={setText}/>}
			right={<Preview value={text}/>}
			/>
		</div>

	)
};