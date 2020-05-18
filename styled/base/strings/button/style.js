import { css } from "styled-components";
import {
  buttonColor,
  buttonBackground,
  buttonHoverColor,
  buttonHoverBackground,
  buttonCursorStyle,
  boxShadow,
  activeBackground,
  buttonRadius,
} from "../../../maps";

export default css`
  color: ${(props) => (props.color ? props.color : buttonColor)};
  background: ${(props) => (props.bg ? props.bg : buttonBackground)};
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: ${(props) => (props.radius ? props.radius : buttonRadius)};
  opacity: ${(props) => (props.opacity ? props.opacity : "none")};
  box-shadow: ${(props) => (props.shadow ? props.shadow : boxShadow)};

  transition: border 0.6s, color 0.6s, background 0.6s, background 0.6s,
    box-shadow 0.6s;

  &:hover {
    border: ${(props) => (props.hvrBorder ? props.hvrBorder : "none")};
    color: ${(props) => (props.hvrColor ? props.hvrColor : buttonHoverColor)};
    background: ${(props) =>
      props.hvrBg ? props.hvrBg : buttonHoverBackground};
    box-shadow: ${(props) => (props.hvrShadow ? props.hvrShadow : "auto")};
    cursor: ${buttonCursorStyle};
  }

  &:active {
    background: ${(props) =>
      props.activeBg ? props.activeBg : activeBackground};
  }
`;
