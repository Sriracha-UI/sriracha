import { css } from "styled-components";
import { marg, pad } from "../../../maps";
import {
  getHeight,
  getWidth,
  getMinHeight,
  getMinWidth,
  getMaxHeight,
  getMaxWidth,
  getMargin,
  getPadding,
} from "../../../functions";

export default css`
  ${(props) => getHeight(props, "auto")}
  ${(props) => getWidth(props, "100%")}
  ${(props) =>
    getMaxHeight(props, "none")}
  ${(props) => getMaxWidth(props, "none")}
  ${(
    props
  ) => getMinWidth(props, "none")}
  ${(props) =>
    getMinHeight(props, "none")}
  ${(props) => getMargin(props, marg)}
  ${(
    props
  ) => getPadding(props, pad)};
`;
