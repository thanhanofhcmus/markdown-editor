import * as React from 'react';

import { GlobalContext } from '../globalConfig';

import type { SetStateType } from '../types';

import NavBar from './NavBar';
import Preview from './Preview';
import SplitView from './SplitView';
import TextEditor from './TextEditor';

interface Props {
  text?: string;
  setText: SetStateType<string>;
}

export default function ContentContainer({ text = '', setText }: Props) {
  const { viewMode } = React.useContext(GlobalContext);

  return (
    <div className="h-screen">
      <SplitView
        left={viewMode === 'preview' ? undefined : <TextEditor text={text} setText={setText} />}
        right={viewMode === 'editor' ? undefined : <Preview value={text || ''} />}
        separatorClassName="h-[95vh]"
        leftMinWidth={200}
        leftMaxWidth={1200}
      />
      <NavBar />
    </div>
  );
}
