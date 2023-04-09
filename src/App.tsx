import * as React from 'react';

import ContentContainer from './components/ContentContainer';
import FileBar from './components/FileBar';
import SplitView from './components/SplitView';
import { GlobalContext, GlobalContextProvider } from './globalConfig';
import { applyAppTheme } from './themes/app';

export default function App() {
  const { darkMode, theme, fileBarOpen } = React.useContext(GlobalContext);
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    applyAppTheme(theme);
  });

  return (
    <GlobalContextProvider>
      <div className={`${darkMode} overflow-hidden`}>
        <SplitView
          left={fileBarOpen ? <FileBar /> : undefined}
          right={<ContentContainer text={text} setText={setText} />}
          defaultLeftWidth={150}
          leftMinWidth={60}
          leftMaxWidth={200}
          separatorClassName="h-screen"
        />
      </div>
    </GlobalContextProvider>
  );
}
