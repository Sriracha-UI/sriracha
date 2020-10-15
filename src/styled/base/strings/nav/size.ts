import { css } from "styled-components";
import { marg, pad } from "../../../maps";
import {
  HeightProps,
  WidthProps,
  MaxHeightProps,
  MaxWidthProps,
  MinHeightProps,
  MinWidthProps,
  MarginProps,
  MarginTopProps,
  MarginBottomProps,
  MarginLeftProps,
  MarginRightProps,
  PaddingProps,
  PaddingTopProps,
  PaddingBottomProps,
  PaddingLeftProps,
  PaddingRightProps,
} from "../../../../types";

export default css`
  height: ${(props: HeightProps) =>
    !props.h
      ? "auto"
      : props.theme.space[props.h]
      ? props.theme.space[props.h]
      : props.h};
  width: ${(props: WidthProps) =>
    !props.w
      ? "100%"
      : props.theme.space[props.w]
      ? props.theme.space[props.w]
      : props.w};
  max-height: ${(props: MaxHeightProps) =>
    !props.maxH
      ? "none"
      : props.theme.space[props.maxH]
      ? props.theme.space[props.maxH]
      : props.maxH};
  max-width: ${(props: MaxWidthProps) =>
    !props.maxW
      ? "none"
      : props.theme.space[props.maxW]
      ? props.theme.space[props.maxW]
      : props.maxW};
  min-height: ${(props: MinHeightProps) =>
    !props.minH
      ? "none"
      : props.theme.space[props.minH]
      ? props.theme.space[props.minH]
      : props.minH};
  min-width: ${(props: MinWidthProps) =>
    !props.minW
      ? "none"
      : props.theme.space[props.minW]
      ? props.theme.space[props.minW]
      : props.minW};
  margin: ${(props: MarginProps) =>
    !props.m
      ? marg
      : props.theme.space[props.m]
      ? props.theme.space[props.m]
      : props.m};
  margin-top: ${(props: MarginTopProps) =>
    !props.mt
      ? "none"
      : props.theme.space[props.mt]
      ? props.theme.space[props.mt]
      : props.mt};
  margin-bottom: ${(props: MarginBottomProps) =>
    !props.mb
      ? "none"
      : props.theme.space[props.mb]
      ? props.theme.space[props.mb]
      : props.mb};
  margin-left: ${(props: MarginLeftProps) =>
    !props.ml
      ? "none"
      : props.theme.space[props.ml]
      ? props.theme.space[props.ml]
      : props.ml};
  margin-right: ${(props: MarginRightProps) =>
    !props.mr
      ? "none"
      : props.theme.space[props.mr]
      ? props.theme.space[props.mr]
      : props.mr};
  padding: ${(props: PaddingProps) =>
    !props.p
      ? pad
      : props.theme.space[props.p]
      ? props.theme.space[props.p]
      : props.p};
  padding-top: ${(props: PaddingTopProps) =>
    !props.pt
      ? "none"
      : props.theme.space[props.pt]
      ? props.theme.space[props.pt]
      : props.pt};
  padding-bottom: ${(props: PaddingBottomProps) =>
    !props.pb
      ? "none"
      : props.theme.space[props.pb]
      ? props.theme.space[props.pb]
      : props.pb};
  padding-left: ${(props: PaddingLeftProps) =>
    !props.pl
      ? "none"
      : props.theme.space[props.pl]
      ? props.theme.space[props.pl]
      : props.pl};
  padding-right: ${(props: PaddingRightProps) =>
    !props.pr
      ? "none"
      : props.theme.space[props.pr]
      ? props.theme.space[props.pr]
      : props.pr};
`;
