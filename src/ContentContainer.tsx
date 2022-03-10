import * as React from "react";
import { NavBar } from "./NavBar";

export const ContentContainer = () => {

	return (
		<div className="h-screen">
			<NavBar />
			<div className="p-3 h-[95vh] bg-bg-light dark:bg-bg-dark dark:text-gray-100">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, temporibus ipsa minima recusandae reprehenderit laboriosam unde quaerat molestias expedita reiciendis ipsum suscipit consequuntur dolores quam, modi accusamus numquam aperiam in, sint itaque deleniti animi doloremque possimus. Nihil consectetur ducimus ipsam?
			</div>
		</div>

	)
};