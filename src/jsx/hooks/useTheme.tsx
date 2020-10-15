import { useContext } from "react";
import { ThemeModeContext } from "../components/AppContainer/ThemeModeContext";

export const useTheme = () => {
  const { theme } = useContext(ThemeModeContext);

  return { theme };
};
