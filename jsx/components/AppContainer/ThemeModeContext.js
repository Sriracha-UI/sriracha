import React from "react";

export const ThemeModeContext = React.createContext([{}, () => {}]);

export default function ThemeModeProvider({ toggleTheme, theme, children }) {
  return (
    <ThemeModeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeModeContext.Provider>
  );
}
