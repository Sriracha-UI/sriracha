import React from "react";

export const ToggleThemeContext = React.createContext([{}, () => {}]);

export default function ToggleThemeProvider({ toggleTheme, theme, children }) {
  return (
    <ToggleThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ToggleThemeContext.Provider>
  );
}
