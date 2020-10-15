import { useContext } from "react";
import { ThemeModeContext } from "../components/ColorModeWrapper/ThemeModeContext";
export var useThemeMode = function () {
    var _a = useContext(ThemeModeContext), toggleTheme = _a.toggleTheme, theme = _a.theme, themeString = _a.themeString, lightTheme = _a.lightTheme, darkTheme = _a.darkTheme;
    return { toggleTheme: toggleTheme, theme: theme, themeString: themeString, lightTheme: lightTheme, darkTheme: darkTheme };
};
