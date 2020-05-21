import { css } from "styled-components";
import { textAlign, fSize, fontWeight } from "../../../maps";

export default css`
  font-family: ${(props) => (props.font ? props.font : "inherit")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : fSize)};
  font-weight: ${(props) => (props.weight ? props.weight : fontWeight)};
  text-decoration: ${(props) => (props.textDec ? props.textDec : "none")}
  text-align: ${textAlign};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${(props) => (props.headFont ? props.headFont : "inherit")};
  }
`;
