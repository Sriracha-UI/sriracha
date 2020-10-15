import React from "react";
export var ThemeModeContext = React.createContext(null);
export default function ThemeModeProvider(_a) {
    var theme = _a.theme, children = _a.children;
    return (React.createElement(ThemeModeContext.Provider, { value: { theme: theme } }, children));
}
