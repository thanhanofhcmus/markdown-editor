import * as React from "react";

interface LeftPanelProps {
	leftWidth?: number;
	setLeftWidth: (value: number) => void;
	children?: React.ReactNode;
}

const LeftPanel = ({ leftWidth, setLeftWidth, children }: LeftPanelProps) => {
	const leftRef = React.createRef<HTMLDivElement>();

	React.useEffect(() => {
		if (!leftRef.current) {
			return;
		}

		if (!leftWidth) {
			setLeftWidth(leftRef.current?.clientWidth);
			return;
		}

		leftRef.current.style.width = `${leftWidth}px`;
	}, [leftRef, leftWidth, setLeftWidth])

	return (<div ref={leftRef}>{children}</div>);
};

interface SplitViewProps {
	left: React.ReactElement;
	right: React.ReactElement;
	defaultLeftWidth?: number;
	leftMinWidth?: number;
	leftMaxWidth?: number;
}

export const SplitView = ({ left, right, defaultLeftWidth, leftMinWidth, leftMaxWidth }: SplitViewProps) => {
	const [leftWidth, setLeftWidth] = React.useState<number | undefined>(defaultLeftWidth);
	const [sepXPos, setSepXPos] = React.useState<number | undefined>(undefined);
	const [dragging, setDragging] = React.useState(false);

	const onMouseDown = (e: React.MouseEvent) => {
		setSepXPos(e.clientX);
		setDragging(true);
	};

	const onMouseMove = (e: MouseEvent) => {
		if (dragging && leftWidth && sepXPos) {
			let newLeftWidth = leftWidth + e.clientX - sepXPos;

			if (leftMinWidth) {
				newLeftWidth = Math.max(leftMinWidth, newLeftWidth);
			}
			if (leftMaxWidth) {
				newLeftWidth = Math.min(leftMaxWidth, newLeftWidth);
			}

			setSepXPos(e.clientX);
			setLeftWidth(newLeftWidth);
		}
	};

	const onMouseUp = () => {
		setDragging(false);
	};

	React.useEffect(() => {
		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseup", onMouseUp);

		return () => {
			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseup", onMouseUp);
		}
	});


	return (
		<div className="flex flex-row items-start">
			<LeftPanel
				leftWidth={leftWidth}
				setLeftWidth={setLeftWidth}
			>
				{left}
			</LeftPanel>
			<div className="cursor-col-resize flex self-stretch items-center
			border-2 border-gray-300 dark:border-gray-400
			shadow-md
			h-screen
			"
				onMouseDown={onMouseDown}
			>
			</div>
			<div className="flex-1">{right}</div>
		</div>
	);
};