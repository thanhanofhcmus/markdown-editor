import * as React from "react";

interface Props {
	icon: JSX.Element;
	className?: string;
	width?: number;
	height?: number;
	onClick?: React.MouseEventHandler;
};

export const IconButton = ({ icon, className, width, height, onClick }: Props) => {
	return (
		<button className={`relative flex items-center justify-center ${className ?? className}`}
		style={{
			width: width ?? 32,
			height: height ?? 32,
		}}
		onClick={onClick}>
			{icon}
		</button>
	);
};