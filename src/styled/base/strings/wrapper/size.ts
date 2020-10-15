import { css } from "styled-components";
import { sideways, marg, pad } from "../../../maps";

export const wrapperSizeBase = css`
  height: ${(props) =>
    !props.h
      ? "auto"
      : props.theme.space[props.h]
      ? props.theme.space[props.h]
      : props.h};
  width: ${(props) =>
    !props.w
      ? sideways
      : props.theme.space[props.w]
      ? props.theme.space[props.w]
      : props.w};
  max-height: ${(props) =>
    !props.maxH
      ? "none"
      : props.theme.space[props.maxH]
      ? props.theme.space[props.maxH]
      : props.maxH};
  max-width: ${(props) =>
    !props.maxW
      ? "100vw"
      : props.theme.space[props.maxW]
      ? props.theme.space[props.maxW]
      : props.maxW};
  min-height: ${(props) =>
    !props.minH
      ? "100vh"
      : props.theme.space[props.minH]
      ? props.theme.space[props.minH]
      : props.minH};
  min-width: ${(props) =>
    !props.minW
      ? "none"
      : props.theme.space[props.minW]
      ? props.theme.space[props.minW]
      : props.minW};
  margin: ${(props) =>
    !props.m
      ? marg
      : props.theme.space[props.m]
      ? props.theme.space[props.m]
      : props.m};
  margin-top: ${(props) =>
    !props.mt
      ? "none"
      : props.theme.space[props.mt]
      ? props.theme.space[props.mt]
      : props.mt};
  margin-bottom: ${(props) =>
    !props.mb
      ? "none"
      : props.theme.space[props.mb]
      ? props.theme.space[props.mb]
      : props.mb};
  margin-left: ${(props) =>
    !props.ml
      ? "none"
      : props.theme.space[props.ml]
      ? props.theme.space[props.ml]
      : props.ml};
  margin-right: ${(props) =>
    !props.mr
      ? "none"
      : props.theme.space[props.mr]
      ? props.theme.space[props.mr]
      : props.mr};
  padding: ${(props) =>
    !props.p
      ? pad
      : props.theme.space[props.p]
      ? props.theme.space[props.p]
      : props.p};
  padding-top: ${(props) =>
    !props.pt
      ? "none"
      : props.theme.space[props.pt]
      ? props.theme.space[props.pt]
      : props.pt};
  padding-bottom: ${(props) =>
    !props.pb
      ? "none"
      : props.theme.space[props.pb]
      ? props.theme.space[props.pb]
      : props.pb};
  padding-left: ${(props) =>
    !props.pl
      ? "none"
      : props.theme.space[props.pl]
      ? props.theme.space[props.pl]
      : props.pl};
  padding-right: ${(props) =>
    !props.pr
      ? "none"
      : props.theme.space[props.pr]
      ? props.theme.space[props.pr]
      : props.pr};
`;
