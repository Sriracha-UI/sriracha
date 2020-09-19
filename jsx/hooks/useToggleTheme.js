import { useContext } from "react";
import { ToggleThemeContext } from "../components/AppContainer/ToggleThemeContext";

export const useToggleTheme = () => {
  const { toggleTheme } = useContext(ToggleThemeContext);

  return toggleTheme;
};
