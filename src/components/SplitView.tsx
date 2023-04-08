import * as React from 'react';
import { useState, useEffect, createRef, ReactNode, ReactElement } from 'react';

interface LeftPanelProps {
  leftWidth?: number;
  children?: ReactNode;
}

const LeftPanel = ({ leftWidth, children }: LeftPanelProps) => (<div style={{ width: leftWidth }}>{children}</div>);

interface SplitViewProps {
  left?: ReactElement;
  right?: ReactElement;
  defaultLeftWidth?: number;
  leftMinWidth?: number;
  leftMaxWidth?: number;
  separatorClassName?: string;
}

const SplitViewInternal = (props: SplitViewProps) => {
  const { left, right, defaultLeftWidth, leftMinWidth, leftMaxWidth, separatorClassName } = props;
  const [leftWidth, setLeftWidth] = useState<number | undefined>(defaultLeftWidth);
  const [sepXPos, setSepXPos] = useState<number | undefined>();
  const [dragging, setDragging] = useState(false);
  const ref = createRef<HTMLDivElement>();

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.bubbles = false;

    setSepXPos(e.clientX);
    setDragging(true);
  };

  const onMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

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

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  });

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const { width } = ref.current.getBoundingClientRect();
    if (!leftWidth) {
      setLeftWidth(width / 2);
    }
  }, [leftWidth, ref]);

  return (
    <div className="flex flex-row items-start" ref={ref}>
      <LeftPanel leftWidth={leftWidth}>
        {left}
      </LeftPanel>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className={`cursor-col-resize border-2 transition
			${separatorClassName ?? ''}
			${dragging ? 'border-blue-500' : 'border-slate-200 dark:border-gray-500'}
			`}
        onMouseDown={onMouseDown}
      />
      <div className="flex-1">{right}</div>
    </div>
  );
};

export default function SplitView(props: SplitViewProps) {
  const { separatorClassName, defaultLeftWidth, leftMinWidth, leftMaxWidth, left, right } = props;

  if (left && !right) {
    return left;
  }
  if (right && !left) {
    return right;
  }

  return (
    <SplitViewInternal
      left={left}
      right={right}
      defaultLeftWidth={defaultLeftWidth}
      leftMaxWidth={leftMaxWidth}
      leftMinWidth={leftMinWidth}
      separatorClassName={separatorClassName}
    />
  );
}
