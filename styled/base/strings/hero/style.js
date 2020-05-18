import { css } from "styled-components";
import { cursorStyle, boxShadow, invertColor } from "../../../maps";

export default css`
  color: ${(props) => (props.color ? props.color : invertColor)};
  background: ${(props) => (props.bg ? props.bg : "auto")};
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: ${(props) => (props.radius ? props.radius : "0.1rem")};
  opacity: ${(props) => (props.opacity ? props.opacity : "none")};
  box-shadow: ${(props) => (props.shadow ? props.shadow : boxShadow)};

  transition: border 0.6s, color 0.6s, background 0.6s, background 0.6s,
    box-shadow 0.6s;

  &:hover {
    border: ${(props) => (props.hvrBorder ? props.hvrBorder : "none")};
    color: ${(props) => (props.hvrColor ? props.hvrColor : "auto")};
    background: ${(props) => (props.hvrBg ? props.hvrBg : "auto")};
    box-shadow: ${(props) => (props.hvrShadow ? props.hvrShadow : "auto")};
    cursor: ${cursorStyle};
  }
`;
