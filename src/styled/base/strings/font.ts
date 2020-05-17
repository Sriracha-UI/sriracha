import { textAlign, fontSize, fontWeight } from "../../maps/index";

export default `
  font-family: ${(props: { font: string }) =>
    props.font ? props.font : "inherit"};
  font-size: ${(props: { fSize: string }) =>
    props.fSize ? props.fSize : fontSize};
  font-weight: ${(props: { weight: string }) =>
    props.weight ? props.weight : fontWeight};
  text-decoration: ${(props: { textDec: string }) =>
    props.textDec ? props.textDec : "none"}
  text-align: ${textAlign};
`;
