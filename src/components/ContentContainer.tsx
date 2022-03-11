import * as React from "react";
import { NavBar } from "./NavBar";
import { TextEditor } from "./TextEditor";
import { SplitView } from "./SplitView";
import { Preview } from "./Preview";

export const ContentContainer = () => {

	return (
		<div className="h-screen">
			<NavBar />
			<SplitView
			left={<TextEditor />}
			right={<Preview />}
			defaultLeftWidth={800}
			/>
		</div>

	)
};