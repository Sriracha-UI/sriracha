import { css } from "styled-components";
import { cursorStyle, boxShadow, hoverShadow } from "../../../maps";
import {
  getColor,
  getBackground,
  getHvrColor,
  getHvrBackground,
} from "../../../functions";

export default css`
  ${(props) => getColor(props, "auto")}
  ${(props) => getBackground(props, "auto")}
  border: ${(props) =>
    props.border ? props.border : `0.2rem inset ${props.theme.gray6}`};
  border-radius: ${(props) => (props.radius ? props.radius : "0.1rem")};
  opacity: ${(props) => (props.opacity ? props.opacity : "none")};
  box-shadow: ${(props) => (props.shadow ? props.shadow : boxShadow)};

  transition: color 0.5s, background 0.5s, box-shadow 0.5s;

  &:hover {
    ${(props) => getHvrColor(props, "auto")}
    ${(props) => getHvrBackground(props, "auto")}
    border: ${(props) =>
      props.hvrBorder ? props.hvrBorder : `0.2rem solid ${props.theme.gray3}`};
    box-shadow: ${(props) => (props.hvrShadow ? props.hvrShadow : hoverShadow)};
    cursor: ${cursorStyle};
  }

  &:focus {
    ${(props) => getHvrColor(props, "auto")}
    ${(props) => getHvrBackground(props, "auto")}
    border: ${(props) =>
      props.hvrBorder ? props.hvrBorder : `0.2rem solid ${props.theme.blue1}`};
    box-shadow: ${(props) => (props.hvrShadow ? props.hvrShadow : hoverShadow)};
    cursor: ${cursorStyle};
  }
`;
