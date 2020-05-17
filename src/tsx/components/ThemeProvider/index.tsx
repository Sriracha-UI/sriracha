import React from "react";

import { theme } from "../../../styled/theme/index";

import { createTheming } from "@callstack/react-theme-provider";

const { ThemeProvider, withTheme, useTheme } = createTheming(theme);

const ThemeWrapper = ({ theme, children }: any) => (
  <ThemeProvider theme={theme.colors.primary}>{children}</ThemeProvider>
);

ThemeWrapper.defaultProps = {
  theme,
};

export default ThemeWrapper;
export { withTheme, useTheme };
