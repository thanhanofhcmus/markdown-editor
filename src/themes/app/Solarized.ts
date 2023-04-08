import SolarizedDark from '../editor/SolarizedDark';
import SolarizedLight from '../editor/SolarizedLight';

import { fromMonacoThemeToDarkTheme, fromMonacoThemeToLightTheme, IAppTheme } from '.';

const Solarized: IAppTheme = {
  ...fromMonacoThemeToLightTheme(SolarizedLight),
  ...fromMonacoThemeToDarkTheme(SolarizedDark),
  name: 'Solarized',
};

export default Solarized;
