import React from "react";
export var ThemeModeContext = React.createContext(null);
export default function ThemeModeProvider(_a) {
    var toggleTheme = _a.toggleTheme, theme = _a.theme, themeString = _a.themeString, lightTheme = _a.lightTheme, darkTheme = _a.darkTheme, children = _a.children;
    return (React.createElement(ThemeModeContext.Provider, { value: { toggleTheme: toggleTheme, theme: theme, themeString: themeString, lightTheme: lightTheme, darkTheme: darkTheme } }, children));
}
