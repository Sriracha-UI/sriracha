import styled from "styled-components";
import { fontBase } from "../base";

const Span = styled.span`
  ${fontBase}
  color: ${(props) =>
    !props.color
      ? "auto"
      : props.theme.colors[props.color]
      ? props.theme.colors[props.color]
      : props.color};
  background: ${(props) =>
    !props.bg
      ? "auto"
      : props.theme.colors[props.bg]
      ? props.theme.colors[props.bg]
      : props.bg};

  &:hover {
    color: ${(props) =>
      !props.hvrColor
        ? "auto"
        : props.theme.colors[props.hvrColor]
        ? props.theme.colors[props.hvrColor]
        : props.hvrColor};
    background: ${(props) =>
      !props.hvrBg
        ? "auto"
        : props.theme.colors[props.hvrBg]
        ? props.theme.colors[props.hvrBg]
        : props.hvrBg};
  }
`;

export default Span;
