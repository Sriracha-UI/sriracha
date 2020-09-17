import React from "react";
import AppWrapper from "../../../styled/components/AppWrapper";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "../../../styled/components/GlobalStyles";
import { useDarkMode } from "../../hooks/useDarkMode";
import ThemeWrapper from "../ThemeProvider";

export default function AppContainer({ children, ...rest }) {
  const [theme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeWrapper theme={themeMode}>
      <GlobalStyles />
      <AppWrapper {...rest}>{children}</AppWrapper>
    </ThemeWrapper>
  );
}
