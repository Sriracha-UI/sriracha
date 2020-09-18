import { css } from "styled-components";
import { sideways, boxSize, marg, pad } from "../../../maps";
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
  ${(props) => getWidth(props, sideways)}
  ${(props) =>
    getMaxHeight(props, "none")}
  ${(props) => getMaxWidth(props, "100vw")}
  ${(
    props
  ) => getMinWidth(props, "none")}
  ${(props) =>
    getMinHeight(props, "100vh")}
  ${(props) => getMargin(props, marg)}
  ${(
    props
  ) => getPadding(props, pad)};
`;
