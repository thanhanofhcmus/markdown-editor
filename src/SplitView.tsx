import * as React from "react";

interface LeftPanelProps {
	leftWidth?: number;
	setLeftWidth: (value: number) => void;
	children?: React.ReactNode;
}

const LeftPanel = ({ leftWidth, setLeftWidth, children} : LeftPanelProps) => {
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
}

export const SplitView = ({left, right}: SplitViewProps) => {
	const [leftWidth, setLeftWidth] = React.useState<number | undefined>(100);
	const [sepXPos, setSepXPos] = React.useState<number | undefined>(undefined);
	const [dragging, setDragging] = React.useState(false);

	const onMouseDown  = (e: React.MouseEvent) => {
		setSepXPos(e.clientX);
		setDragging(true);
	};

	const onMouseMove = (e: MouseEvent) => {
		e.preventDefault();
		if (dragging && leftWidth && sepXPos) {
			const newLeftWidth = leftWidth + e.clientX - sepXPos;
			setSepXPos(e.clientX);
			setLeftWidth(newLeftWidth);
		}
	};

	const onMouseUp = () => {
		setDragging(false);
	}

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
			<LeftPanel leftWidth={leftWidth} setLeftWidth={setLeftWidth}>{left}</LeftPanel>
			<div className="cursor-col-resize flex self-stretch items-center"
			onMouseDown={onMouseDown}
			>
				<div className="h-screen border-[1px] border-gray-300 dark:border-gray-400"></div>
			</div>
			<div className="flex-1">{right}</div>
		</div>
	);
};