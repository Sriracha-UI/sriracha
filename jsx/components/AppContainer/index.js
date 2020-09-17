import React from "react";
import AppWrapper from "../../../styled/components/AppWrapper";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "../../../styled/components/GlobalStyles";
import { useDarkMode } from "../../hooks/useDarkMode";

export default function AppContainer({ children, ...rest }) {
  const [theme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <AppWrapper {...rest}>{children}</AppWrapper>
    </ThemeProvider>
  );
}
