import DraculaEditor from '../editor/Dracula';

import base from './base';

import { fromMonacoThemeToDarkTheme, IAppTheme } from '.';

const Dracula: IAppTheme = {
  ...base,
  ...fromMonacoThemeToDarkTheme(DraculaEditor),
  name: 'Dracula',
};

export default Dracula;
