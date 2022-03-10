import * as React from "react";
import { ChangeThemeButton } from "./ChangeThemeButton";
import { DiReact } from "react-icons/di";

export const NavBar = () => {
	return (
		<div className="flex-1 flex flex-col
		transition
		bg-bg-light text-fg-light
		dark:bg-bg-dark dark:text-fg-dark">
			<nav className="px-4 flex justify-between h-[5vh] border-b-2">
				{/* Left */}
				<ul className="flex items-center justify-center">
					<li className="h-6 w-6">
						<DiReact size={24} />
					</li>
				</ul>

				{/* center */}
				<ul className="flex items-center">
					<li>
						<h1 className="pl-8 lg:pl-0">
							My App
						</h1>
					</li>
				</ul>

				{/* Right*/}
				<ul className="flex items-center">
					<li>
						<ChangeThemeButton />
					</li>
				</ul>
			</nav>
		</div>
	)
}