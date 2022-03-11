import * as React from "react";
import { NavBar } from "./NavBar";
import { TextEditor } from "./TextEditor";
import { SplitView } from "./SplitView";

export const ContentContainer = () => {

	return (
		<div className="h-screen">
			<NavBar />
			<SplitView
			left={<TextEditor />}
			right={
			<div className="bg-bg-light text-fg-light dark:text-fg-dark dark:bg-bg-dark h-screen p-3 font-bold">
				PREVIEW
			</div>}
			defaultLeftWidth={800}
			/>
		</div>

	)
};