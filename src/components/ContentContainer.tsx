import * as React from "react";
import { NavBar } from "./NavBar";
import { TextEditor } from "./TextEditor";
import { SplitView } from "./SplitView";
import { Preview } from "./Preview";
import { GlobalContext } from "../App";

interface Props {
	text?: string;
	setText: (text: string) => void;
}

export const ContentContainer = ({ text, setText }: Props) => {
	const { viewMode } = React.useContext(GlobalContext);

	return (
		<div className="h-screen">
			<SplitView
				left={viewMode !== "preview" ? <TextEditor text={text} setText={setText} /> : undefined}
				right={viewMode !== "editor" ? <Preview value={text || ''} /> : undefined}
				separatorClassName="h-[95vh]"
				leftMinWidth={200}
				leftMaxWidth={1200}
			/>
			<NavBar />
		</div>

	)
};