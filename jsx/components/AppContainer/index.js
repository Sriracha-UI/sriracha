import React from "react";
import AppWrapper from "../../../styled/components/AppWrapper";
import { ThemeProvider } from "styled-components";
import { lightColors, darkColors, nickNacks } from "./theme";
// import { useDarkMode } from "../../hooks/useDarkMode";
import { GlobalStyles } from "../../../styled/components/GlobalStyles";
import ToggleThemeProvider from "./ToggleThemeContext";

export default function AppContainer({
  theme,
  toggleTheme,
  children,
  ...rest
}) {
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
      <ToggleThemeProvider theme={theme} toggleTheme={toggleTheme}>
        <GlobalStyles />
        <AppWrapper {...rest}>{children}</AppWrapper>
      </ToggleThemeProvider>
    </ThemeProvider>
  );
}
