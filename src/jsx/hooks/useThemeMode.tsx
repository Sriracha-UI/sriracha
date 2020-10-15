import { useContext } from "react";
import { ThemeModeContext } from "../components/ColorModeWrapper/ThemeModeContext";

export const useThemeMode = () => {
  const { toggleTheme, theme, themeString, lightTheme, darkTheme } = useContext(
    ThemeModeContext
  );

  return { toggleTheme, theme, themeString, lightTheme, darkTheme };
};
