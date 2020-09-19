import { useContext } from "react";
import { ToggleThemeContext } from "../components/AppContainer/ToggleThemeContext";

export const useToggleTheme = () => {
  const { toggleTheme, theme } = useContext(ToggleThemeContext);

  return { toggleTheme, theme };
};
