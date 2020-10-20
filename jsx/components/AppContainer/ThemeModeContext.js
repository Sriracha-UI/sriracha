import React from "react";

export const ThemeModeContext = React.createContext([{}, () => {}]);

export default function ThemeModeProvider({ theme, children }) {
  return (
    <ThemeModeContext.Provider value={{ theme }}>
      {children}
    </ThemeModeContext.Provider>
  );
}
