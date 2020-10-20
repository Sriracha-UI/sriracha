import { useContext } from "react";
import { ThemeModeContext } from "../components/ColorModeContainer/ThemeModeContext";

export const useTheme = () => {
  const { toggleTheme, theme, themeString, lightTheme, darkTheme } = useContext(
    ThemeModeContext
  );

  return { toggleTheme, theme, themeString, lightTheme, darkTheme };
};
