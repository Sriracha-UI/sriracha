import { useContext } from "react";
import { ThemeModeContext } from "../components/AppContainer/ThemeModeContext";
export var useTheme = function () {
    var theme = useContext(ThemeModeContext).theme;
    return { theme: theme };
};
