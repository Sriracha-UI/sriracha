import React from "react";
import AppWrapper from "../../../styled/components/AppWrapper";
import { ThemeProvider } from "styled-components";
import { lightColors, nickNacks } from "./theme";
import { GlobalStyles } from "../../../styled/components/GlobalStyles";
import ThemeModeProvider from "./ThemeModeContext";

interface AppContainerProps {
  children: React.ReactNode;
}

export default function AppContainer({ children, ...rest }: AppContainerProps) {
  const theme = {
    colors: lightColors,
    ...nickNacks,
  };

  return (
    <ThemeProvider theme={theme}>
      <ThemeModeProvider theme={theme}>
        <GlobalStyles />
        <AppWrapper {...rest}>{children}</AppWrapper>
      </ThemeModeProvider>
    </ThemeProvider>
  );
}
