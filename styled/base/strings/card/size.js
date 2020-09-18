import { css } from "styled-components";
import { sideways, cardMarg, cardPad } from "../../../maps";
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
  ${(props) => getMargin(props, cardMarg)}
  ${(
    props
  ) => getPadding(props, cardPad)};
`;
