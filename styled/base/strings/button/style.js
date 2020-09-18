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
import {
  getColor,
  getBackground,
  getHvrColor,
  getHvrBackground,
} from "../../../functions";

export default css`
  ${(props) => getColor(props, buttonColor)}
  ${(props) => getBackground(props, buttonBackground)}
  border: ${(props) =>
    props.border ? props.border : "none"};
  border-radius: ${(props) => (props.radius ? props.radius : buttonRadius)};
  opacity: ${(props) => (props.opacity ? props.opacity : "none")};
  box-shadow: ${(props) => (props.shadow ? props.shadow : boxShadow)};

  transition: color 0.5s, background 0.5s, box-shadow 0.5s;

  &:hover {
    ${(props) => getHvrColor(props, buttonHoverColor)}
    ${(props) => getHvrBackground(props, buttonHoverBackground)}
    border: ${(
      props
    ) => (props.hvrBorder ? props.hvrBorder : "none")};
    box-shadow: ${(props) => (props.hvrShadow ? props.hvrShadow : hoverShadow)};
    cursor: ${buttonCursorStyle};
  }

  &:active {
    background: ${(props) =>
      props.activeBg ? props.activeBg : activeBackground};
  }
`;
