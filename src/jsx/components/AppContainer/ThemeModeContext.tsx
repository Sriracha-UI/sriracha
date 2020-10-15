import React from "react";

interface ThemeContextProps {
  theme: string;
}

export const ThemeModeContext = React.createContext<ThemeContextProps | null>(
  null
);

export default function ThemeModeProvider({ theme, children }) {
  return (
    <ThemeModeContext.Provider value={{ theme }}>
      {children}
    </ThemeModeContext.Provider>
  );
}
