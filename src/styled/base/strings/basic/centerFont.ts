import {
  FontProps,
  FontSizeProps,
  WeightProps,
  TextDecorationProps,
  TextAlignProps,
} from "./../../../../types";
import { css } from "styled-components";
import { textCenter, fSize, fontWeight } from "../../../maps";

export default css`
  font-family: ${(props: FontProps) => (props.font ? props.font : "inherit")};
  font-size: ${(props: FontSizeProps) => (props.size ? props.size : fSize)};
  font-weight: ${(props: WeightProps) =>
    props.weight ? props.weight : fontWeight};
  text-decoration: ${(props: TextDecorationProps) =>
    props.decoration ? props.decoration : "none"};
  text-align: ${(props: TextAlignProps) =>
    props.textAlign ? props.textAlign : textCenter};
`;
