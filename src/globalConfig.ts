import * as React from 'react';

import { IAppTheme } from './themes/app';
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
