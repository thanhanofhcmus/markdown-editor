import * as React from "react";
import { ChangeThemeButton } from "./ChangeThemeButton";

export const NavBar = () => {
	return (
		<div className="flex-1 flex flex-col">
			<nav className="px-4 flex justify-between bg-white h-[5vh] border-b-2">
				{/* Left */}
				<ul className="flex items-center">
					<li className="h-6 w-6">
						<img className="h-full w-full mx-auto"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
							alt="svelte logo" />
					</li>
				</ul>

				{/* center */}
				<ul className="flex items-center">
					<li>
						<h1 className="pl-8 lg:pl-0 text-gray-700">Svelte
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