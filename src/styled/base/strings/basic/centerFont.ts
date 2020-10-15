import { css } from "styled-components";
import { textCenter, fSize, fontWeight } from "../../../maps";

export default css`
  font-family: ${(props) => (props.font ? props.font : "inherit")};
  font-size: ${(props) => (props.size ? props.size : fSize)};
  font-weight: ${(props) => (props.weight ? props.weight : fontWeight)};
  text-decoration: ${(props) => (props.decoration ? props.decoration : "none")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : textCenter)};
`;
