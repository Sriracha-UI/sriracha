// export theme stuff
import ThemeWrapper from "./jsx/components/ThemeProvider";

// import { withTheme, useTheme } from "./jsx/components/ThemeProvider";

export { theme } from "./styled/theme";

// export hooks
import { useModal } from "./jsx/hooks/useModal";
import { useCabinet } from "./jsx/hooks/useCabinet";
import { useDarkMode } from "./jsx/hooks/useDarkMode";
import { useTheme } from "./jsx/hooks/useTheme";

// jsx components
import Modal from "./jsx/components/Modal";
import Cabinet from "./jsx/components/Cabinet";
import AppContainer from "./jsx/components/AppContainer";
import ToggleTheme from "./jsx/components/ToggleTheme";

import styled, {
  ServerStyleSheet,
  ThemeContext,
  withTheme,
  css,
} from "styled-components";

// exports
export {
  ThemeWrapper,
  withTheme,
  useModal,
  useCabinet,
  useDarkMode,
  useTheme,
  ThemeContext,
  Modal,
  Cabinet,
  ServerStyleSheet,
  AppContainer,
  ToggleTheme,
  styled,
  css,
};

// export style components
export { default as AppWrapper } from "./styled/components/AppWrapper";
export { default as Wrapper } from "./styled/components/Wrapper";
export { default as NavBar } from "./styled/components/NavBar";
export { default as Flex } from "./styled/components/Flex";
export { default as Form } from "./styled/components/Form";
export { default as Input } from "./styled/components/Input";
export { default as Button } from "./styled/components/Button";
export { default as Card } from "./styled/components/Card";
export { default as Box } from "./styled/components/Box";
export { default as Hero } from "./styled/components/Hero";
export { default as Text } from "./styled/components/Text";
export { default as Tooltip } from "./styled/components/Tooltip";
