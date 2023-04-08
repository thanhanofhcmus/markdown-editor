import * as React from 'react';

import ContentContainer from './components/ContentContainer';
import FileBar from './components/FileBar';
import SplitView from './components/SplitView';
import { GlobalContext, DarkMode, ViewMode } from './globalConfig';
import useLocalStorage from './hooks/useLocalStorage';
import { applyAppTheme } from './themes/app';
import Dracula from './themes/app/Dracula';

export default function App() {
  const [darkMode, setDarkMode] = useLocalStorage<DarkMode>('dark-mode', 'light');
  const [theme, setTheme] = useLocalStorage('theme', Dracula);
  const [fileBarOpen, setFileBarOpen] = useLocalStorage('file-bar-open', true);
  const [viewMode, setViewMode] = useLocalStorage<ViewMode>('view-mode', 'both');
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    applyAppTheme(theme);
  });

  return (
    <GlobalContext.Provider
      value={{ darkMode, setDarkMode, theme, setTheme, fileBarOpen, setFileBarOpen, viewMode, setViewMode }}
    >
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
    </GlobalContext.Provider>
  );
}
