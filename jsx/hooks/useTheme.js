import { useContext } from "react";
import { ThemeModeContext } from "../components/AppContainer/ThemeModeContext";

export const useTheme = () => {
  const { toggleTheme, theme, themeString, lightTheme, darkTheme } = useContext(
    ThemeModeContext
  );

  return { toggleTheme, theme, themeString, lightTheme, darkTheme };
};
