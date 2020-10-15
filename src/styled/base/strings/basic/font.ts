import { css } from "styled-components";
import { textAlign, fSize, fontWeight } from "../../../maps";
import {
  FontProps,
  FontSizeProps,
  WeightProps,
  TextDecorationProps,
  TextAlignProps,
} from "../../../../types";

export default css`
  font-family: ${(props: FontProps) => (props.font ? props.font : "inherit")};
  font-size: ${(props: FontSizeProps) =>
    !props.size
      ? fSize
      : props.theme.fontSizes[props.size]
      ? props.theme.fontSizes[props.size]
      : props.size};
  font-weight: ${(props: WeightProps) =>
    props.weight ? props.weight : fontWeight};
  text-decoration: ${(props: TextDecorationProps) =>
    props.decoration ? props.decoration : "none"};
  text-align: ${(props: TextAlignProps) =>
    props.textAlign ? props.textAlign : textAlign};
`;
