import React from "react";

export const ThemeModeContext = React.createContext([{}, () => {}]);

export default function ThemeModeProvider({
  toggleTheme,
  theme,
  themeString,
  lightTheme,
  darkTheme,
  children,
}) {
  return (
    <ThemeModeContext.Provider
      value={{ toggleTheme, theme, themeString, lightTheme, darkTheme }}
    >
      {children}
    </ThemeModeContext.Provider>
  );
}
