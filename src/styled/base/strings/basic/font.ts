import { css } from "styled-components";
import { textAlign, fSize, fontWeight } from "../../../maps";

export default css`
  font-family: ${(props) => (props.font ? props.font : "inherit")};
  font-size: ${(props) =>
    !props.size
      ? fSize
      : props.theme.fontSizes[props.size]
      ? props.theme.fontSizes[props.size]
      : props.size};
  font-weight: ${(props) => (props.weight ? props.weight : fontWeight)};
  text-decoration: ${(props) => (props.decoration ? props.decoration : "none")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : textAlign)};
`;
