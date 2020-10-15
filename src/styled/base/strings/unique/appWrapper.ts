import {
  BackgroundProps,
  BackgroundSourceProps,
  ColorProps,
  FontProps,
  MinHeightProps,
  MaxWidthProps,
  MinWidthProps,
  MaxHeightProps,
  MarginProps,
  PaddingProps,
} from "./../../../../types";
import { css } from "styled-components";
import { marg, pad } from "../../../maps";

export default css`
  color: ${(props: ColorProps) =>
    !props.color
      ? props.theme.colors.gray9
      : props.theme.colors[props.color]
      ? props.theme.colors[props.color]
      : props.color};
  background: ${(props: BackgroundProps) =>
    !props.bg
      ? props.theme.colors.background
      : props.theme.colors[props.bg]
      ? props.theme.colors[props.bg]
      : props.bg};
  background-image: ${(props: BackgroundSourceProps) =>
    props.bgSrc ? `url(${props.bgSrc})` : "none"};
  font-family: ${(props: FontProps) =>
    props.font ? props.font : '"Open Sans", sans-serif'};
  min-height: ${(props: MinHeightProps) => (props.minH ? props.minH : "none")};
  max-width: ${(props: MaxWidthProps) => (props.maxW ? props.maxW : "none")};
  min-width: ${(props: MinWidthProps) => (props.minW ? props.minW : "none")};
  max-height: ${(props: MaxHeightProps) => (props.maxH ? props.maxH : "none")};
  margin: ${(props: MarginProps) => (props.m ? props.m : marg)};
  padding: ${(props: PaddingProps) => (props.p ? props.p : pad)};
`;
