import React from "react";
import AppWrapper from "../../../styled/components/AppWrapper";
import { ThemeProvider } from "styled-components";
import { lightColors, darkColors, nickNacks } from "./theme";
import { GlobalStyles } from "../../../styled/components/GlobalStyles";
import ToggleThemeProvider from "./ToggleThemeContext";

export default function AppContainer({ theme, children, ...rest }) {
  const lightTheme = {
    colors: lightColors,
    ...nickNacks,
  };

  const darkTheme = {
    colors: darkColors,
    ...nickNacks,
  };

  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <ToggleThemeProvider>
        <GlobalStyles />
        <AppWrapper {...rest}>{children}</AppWrapper>
      </ToggleThemeProvider>
    </ThemeProvider>
  );
}
