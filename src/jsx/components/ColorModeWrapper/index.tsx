import React from "react";
import AppWrapper from "../../../styled/components/AppWrapper";
import { ThemeProvider } from "styled-components";
import { lightColors, darkColors, nickNacks } from "./theme";
import { GlobalStyles } from "../../../styled/components/GlobalStyles";
import ThemeModeProvider from "./ThemeModeContext";

interface ColorModeWrapperProps {
  themeString: string;
  toggleTheme: () => void;
  children: React.ReactNode;
}

export default function ColorModeWrapper({
  themeString,
  toggleTheme,
  children,
  ...rest
}: ColorModeWrapperProps) {
  const lightTheme = {
    colors: lightColors,
    ...nickNacks,
  };

  const darkTheme = {
    colors: darkColors,
    ...nickNacks,
  };

  const themeMode = themeString === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <ThemeModeProvider
        themeString={themeString}
        toggleTheme={toggleTheme}
        theme={themeMode}
        lightTheme={lightTheme}
        darkTheme={darkTheme}
      >
        <GlobalStyles />
        <AppWrapper {...rest}>{children}</AppWrapper>
      </ThemeModeProvider>
    </ThemeProvider>
  );
}
