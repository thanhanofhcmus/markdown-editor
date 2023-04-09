import React from 'react';

import useLocalStorage from './hooks/useLocalStorage';
import { IAppTheme } from './themes/app';
import Dracula from './themes/app/Dracula';
import Solarized from './themes/app/Solarized';

export type DarkMode = 'light' | 'dark';

export type ViewMode = 'editor' | 'preview' | 'both';

export interface IGlobalContext {
  darkMode: DarkMode;
  setDarkMode: (mode: DarkMode) => void;
  theme: IAppTheme;
  setTheme: (theme: IAppTheme) => void;
  fileBarOpen: boolean;
  setFileBarOpen: (open: boolean) => void;
  viewMode: 'editor' | 'preview' | 'both';
  setViewMode: (mode: 'editor' | 'preview' | 'both') => void;
}

export const GlobalContext = React.createContext<IGlobalContext>({
  darkMode: 'light',
  setDarkMode: (_: DarkMode) => { }, // placeholder
  theme: Solarized,
  setTheme: (_: IAppTheme) => { },
  fileBarOpen: true,
  setFileBarOpen: (_: boolean) => { },
  viewMode: 'both',
  setViewMode: (_: ViewMode) => { },
});

export function GlobalContextProvider({ children }: { children: React.ReactChild }) {
  const [darkMode, setDarkMode] = useLocalStorage<DarkMode>('dark-mode', 'light');
  const [theme, setTheme] = useLocalStorage('theme', Dracula);
  const [fileBarOpen, setFileBarOpen] = useLocalStorage('file-bar-open', true);
  const [viewMode, setViewMode] = useLocalStorage<ViewMode>('view-mode', 'both');

  const value = React.useMemo<IGlobalContext>(() => ({
    darkMode, setDarkMode, theme, setTheme, fileBarOpen, setFileBarOpen, viewMode, setViewMode,
  }),
  [darkMode, setDarkMode, theme, setTheme, fileBarOpen, setFileBarOpen, viewMode, setViewMode]);

  return (
    <GlobalContext.Provider
      value={value}
    >
      {children}
    </GlobalContext.Provider>
  );
}
