import * as React from "react";
import { DarkModeToggler } from "./DarkModeToggler";
import { IconButton } from "./IconButton";
import { RiSideBarFill, RiSideBarLine, RiPencilFill, RiLayout4Fill, RiEyeFill } from "react-icons/ri";
import { GlobalContext } from "../App";

export const NavBar = () => {
	const SIZE = 20;
	const { fileBarOpen, setFileBarOpen } = React.useContext(GlobalContext);
	const [fileBarIcon, setFileBarIcon] = React.useState(<RiSideBarFill size={SIZE}/>);

	const { viewMode, setViewMode } = React.useContext(GlobalContext);

	const toggleFileBar = () => {
		if (fileBarOpen) {
			setFileBarOpen(false);
			setFileBarIcon(<RiSideBarLine size={SIZE} />);
		} else {
			setFileBarOpen(true);
			setFileBarIcon(<RiSideBarFill size={SIZE}/>);
		}
	}

	return (
		<div className="flex-1 flex flex-col transition
		bg-bg-light text-fg-light
		dark:bg-bg-dark dark:text-fg-dark
		border-2 border-t-gray-200 dark:border-t-gray-600
		">
			<nav className="px-4 flex justify-between h-[5vh] border-0">
				{/* Left */}
				<ul className="flex items-center justify-center">
					<li>
						<IconButton
						icon={fileBarIcon}
						onClick={toggleFileBar} />
					</li>
				</ul>

				{/* center */}
				<ul className="flex items-center">
					<li>
						<h1 className="pl-8 lg:pl-0">
						Markdown Editor
						</h1>
					</li>
				</ul>

				{/* Right*/}
				<ul className="flex items-center space-x-4">
					<li>
						<IconButton
						icon={<RiPencilFill size={SIZE} opacity={viewMode === "editor" ? 1 : 0.7}/>}
						onClick={() => setViewMode("editor")}
						/>
					</li>
					<li>
						<IconButton
						icon={<RiLayout4Fill size={SIZE} opacity={viewMode === "both" ? 1 : 0.7}/>}
						onClick={() => setViewMode("both")}
						/>
					</li>
					<li>
						<IconButton
						icon={<RiEyeFill size={SIZE} opacity={viewMode === "preview" ? 1 : 0.7}/>}
						onClick={() => setViewMode("preview")}
						/>
					</li>
					<li>
						<DarkModeToggler />
					</li>
				</ul>
			</nav>
		</div>
	)
}