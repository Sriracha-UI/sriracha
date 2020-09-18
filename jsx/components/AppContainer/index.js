import React from "react";
import AppWrapper from "../../../styled/components/AppWrapper";
import { ThemeProvider } from "styled-components";
import { lightColors, darkColors, nickNacks } from "./theme";
import { GlobalStyles } from "../../../styled/components/GlobalStyles";

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
      <GlobalStyles />
      <AppWrapper {...rest}>{children}</AppWrapper>
    </ThemeProvider>
  );
}
