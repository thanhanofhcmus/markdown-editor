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

interface SingleViewProps {
	view: React.ReactElement;
}

const SingleView = ({ view }: SingleViewProps) => {
	return (
		<div>
			{view}
		</div>
	)

}

interface SplitViewProps {
	left?: React.ReactElement;
	right?: React.ReactElement;
	defaultLeftWidth?: number;
	leftMinWidth?: number;
	leftMaxWidth?: number;
	separatorClassName?: string;
}

export const SplitViewInternal = ({ left, right, defaultLeftWidth, leftMinWidth, leftMaxWidth, separatorClassName }: SplitViewProps) => {

	const [leftWidth, setLeftWidth] = React.useState<number | undefined>(defaultLeftWidth);
	const [sepXPos, setSepXPos] = React.useState<number | undefined>(undefined);
	const [dragging, setDragging] = React.useState(false);
	const ref = React.createRef<HTMLDivElement>();


	const onMouseDown = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		e.bubbles = false;

		setSepXPos(e.clientX);
		setDragging(true);
	};

	const onMouseMove = (e: MouseEvent) => {
		e.stopPropagation();
		e.preventDefault();
		e.cancelBubble = true;

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

	React.useEffect(() => {
		if (!ref.current) {
			return;
		}

		const { width }= ref.current.getBoundingClientRect();
		if (!leftWidth) {
			setLeftWidth(width / 2);
		}
	}, [leftWidth, ref])


	return (
		<div className="flex flex-row items-start" ref={ref}>
			<LeftPanel
				leftWidth={leftWidth}
				setLeftWidth={setLeftWidth}
			>
				{left}
			</LeftPanel>
			<div className={`cursor-col-resize border-2 transition
			${separatorClassName ?? ''}
			${dragging
				? "border-blue-500"
				: "border-slate-200 dark:border-gray-500" }
			`}
				onMouseDown={onMouseDown}
			>
			</div>
			<div className="flex-1">{right}</div>
		</div>
	);
};

export const SplitView = (props: SplitViewProps) => {
	const { left, right } = props;

	if (left && !right) {
		return (
			<SingleView view={left} />
		);
	}
	if (right && !left) {
		return (
			<SingleView view={right} />
		);
	}

	return (
		<SplitViewInternal
		left={left}
		right={right}
		defaultLeftWidth={props.defaultLeftWidth}
		leftMaxWidth={props.leftMaxWidth}
		leftMinWidth={props.leftMinWidth}
		separatorClassName={props.separatorClassName}
		/>
	)
	
}