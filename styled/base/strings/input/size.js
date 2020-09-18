import { css } from "styled-components";
import { sideways, marg } from "../../../maps";
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
  ${(props) => getMaxWidth(props, "none")}
  ${(
    props
  ) => getMinWidth(props, "none")}
  ${(props) =>
    getMinHeight(props, "none")}
  ${(props) => getMargin(props, marg)}
  ${(
    props
  ) => getPadding(props, "0.8rem")};
`;
