import { css } from "styled-components";
import {
  buttonColor,
  buttonBackground,
  buttonHoverColor,
  buttonHoverBackground,
  buttonCursorStyle,
  boxShadow,
  hoverShadow,
  activeBackground,
  buttonRadius,
} from "../../../maps";

export default css`
  color: ${(props) =>
    !props.color
      ? buttonColor
      : props.theme.colors[props.color]
      ? props.theme.colors[props.color]
      : props.color};
  background: ${(props) =>
    !props.bg
      ? buttonBackground
      : props.theme.colors[props.bg]
      ? props.theme.colors[props.bg]
      : props.bg};
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: ${(props) => (props.radius ? props.radius : buttonRadius)};
  opacity: ${(props) => (props.opacity ? props.opacity : "none")};
  box-shadow: ${(props) => (props.shadow ? props.shadow : boxShadow)};

  transition: color 0.5s, background 0.5s, box-shadow 0.5s;

  &:hover {
    color: ${(props) =>
      !props.hvrColor
        ? buttonHoverColor
        : props.theme.colors[props.hvrColor]
        ? props.theme.colors[props.hvrColor]
        : props.hvrColor};
    background: ${(props) =>
      !props.hvrBg
        ? buttonHoverBackground
        : props.theme.colors[props.hvrBg]
        ? props.theme.colors[props.hvrBg]
        : props.hvrBg};
    border: ${(props) =>
      props.hvrBorder ? props.hvrBorder : props.border ? props.border : "none"};
    box-shadow: ${(props) => (props.hvrShadow ? props.hvrShadow : hoverShadow)};
    cursor: ${buttonCursorStyle};
  }

  &:active {
    background: ${(props) =>
      props.activeBg ? props.activeBg : activeBackground};
  }
`;

// -webkit-filter: ${(props) =>
//       props.filter ? props.filter : "brightness(80%)"};
