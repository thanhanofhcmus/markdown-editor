import * as React from "react";
import { useState, useContext } from "react";
import { DarkModeToggler } from "./DarkModeToggler";
import { IconButton } from "./IconButton";
import { RiSideBarFill, RiPencilFill, RiLayout4Fill, RiEyeFill, RiSettings3Fill } from "react-icons/ri";
import { GlobalContext } from "../App";

export const NavBar = () => {
	const SIZE = 20;
	const { fileBarOpen, setFileBarOpen } = useContext(GlobalContext);
	const { viewMode, setViewMode } = useContext(GlobalContext);
	const [menuOpen, setMenuOpen] = useState(false);

	const opacity = (isActive: boolean) => isActive ? 1.0 : 0.5;

	return (
		<div className="flex-1 flex flex-col transition
		bg-bg-light text-fg-light
		dark:bg-bg-dark dark:text-fg-dark
		border-2 border-x-0 border-t-gray-200 dark:border-t-gray-600
		">
			<nav className="px-4 flex justify-between h-[5vh] border-0">
				{/* Left */}
				<ul className="flex items-center justify-center">
					<li>
						<IconButton
							icon={<RiSideBarFill size={SIZE} opacity={opacity(fileBarOpen)} />}
							onClick={() => { setFileBarOpen(!fileBarOpen); }} />
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
							icon={<RiPencilFill size={SIZE} opacity={opacity(viewMode === "editor")} />}
							onClick={() => setViewMode("editor")}
						/>
					</li>
					<li>
						<IconButton
							icon={<RiLayout4Fill size={SIZE} opacity={opacity(viewMode === "both")} />}
							onClick={() => setViewMode("both")}
						/>
					</li>
					<li>
						<IconButton
							icon={<RiEyeFill size={SIZE} opacity={opacity(viewMode === "preview")} />}
							onClick={() => setViewMode("preview")}
						/>
					</li>
					<li>
						<DarkModeToggler />
					</li>
					<li className="relative">
						<IconButton
							icon={<RiSettings3Fill size={SIZE} opacity={opacity(menuOpen)} />}
							onClick={() => setMenuOpen(!menuOpen)}
						/>
						<div className={`absolute px-5 py-3 bottom-12 right-2 w-max rounded-md
						origin-bottom-right transition duration-150
						text-fg-light bg-bg-light dark:text-fg-dark dark:bg-bg-dark
						border-2 border-fg-light dark:border-fg-dark
						${menuOpen ? "scale-100" : "scale-0"}
						`}>
							<ul>
								<li className="my-4">App theme</li>
								<li className="my-4">Editor theme</li>
								<li className="my-4">Sync app theme with editor theme</li>
							</ul>
						</div>
					</li>
				</ul>
			</nav>
		</div>
	);
};