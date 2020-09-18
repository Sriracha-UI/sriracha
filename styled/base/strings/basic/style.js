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
    props.border ? props.border : "none"};
  border-radius: ${(props) => (props.radius ? props.radius : "0.1rem")};
  opacity: ${(props) => (props.opacity ? props.opacity : "none")};
  box-shadow: ${(props) => (props.shadow ? props.shadow : boxShadow)};

  &:hover {
    ${(props) => getHvrColor(props, "auto")}
    ${(props) => getHvrBackground(props, "auto")}
    border: ${(props) =>
      props.hvrBorder ? props.hvrBorder : "none"};
    box-shadow: ${(props) => (props.hvrShadow ? props.hvrShadow : hoverShadow)};
    cursor: ${cursorStyle};
  }
`;
