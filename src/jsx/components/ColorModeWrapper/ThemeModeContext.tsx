import React from "react";

interface ColorModeThemeContextProps {
  toggleTheme: string;
  theme: string;
  themeString: string;
  lightTheme: string;
  darkTheme: string;
}

export const ThemeModeContext = React.createContext<ColorModeThemeContextProps>(
  null
);

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
