import { HvrBsProps, HvrBcProps } from "./../../../../types/index";
import { css } from "styled-components";
import {
  cursorStyle,
  boxShadow,
  invertColor,
  hoverShadow,
} from "../../../maps";
import {
  ColorProps,
  BackgroundProps,
  BorderProps,
  BorderStyleProps,
  BorderWidthProps,
  BorderColorProps,
  BorderRadiusProps,
  OpacityProps,
  ShadowProps,
  HvrColorProps,
  HvrBgProps,
  HvrBorderProps,
  HvrBwProps,
  HvrShadowProps,
} from "../../../../types";

export default css`
  color: ${(props: ColorProps) =>
    !props.color
      ? invertColor
      : props.theme.colors[props.color]
      ? props.theme.colors[props.color]
      : props.color};
  background: ${(props: BackgroundProps) =>
    !props.bg
      ? "auto"
      : props.theme.colors[props.bg]
      ? props.theme.colors[props.bg]
      : props.bg};
  border: ${(props: BorderProps) => (props.border ? props.border : "none")};
  border-style: ${(props: BorderStyleProps) => (props.bs ? props.bs : "auto")};
  border-width: ${(props: BorderWidthProps) => (props.bw ? props.bw : "auto")};
  border-color: ${(props: BorderColorProps) =>
    props.theme.colors[props.bc]
      ? props.theme.colors[props.bc]
      : props.bc
      ? props.bc
      : "auto"};
  border-radius: ${(props: BorderRadiusProps) =>
    props.radius ? props.radius : props.theme.borderRadius};
  opacity: ${(props: OpacityProps) => (props.opacity ? props.opacity : "none")};
  box-shadow: ${(props: ShadowProps) =>
    props.theme.shadows[props.shadow]
      ? props.theme.shadows[props.shadow]
      : props.shadow
      ? props.shadow
      : boxShadow};

  &:hover {
    color: ${(props: HvrColorProps) =>
      !props.hvrColor
        ? "auto"
        : props.theme.colors[props.hvrColor]
        ? props.theme.colors[props.hvrColor]
        : props.hvrColor};
    background: ${(props: HvrBgProps) =>
      !props.hvrBg
        ? "auto"
        : props.theme.colors[props.hvrBg]
        ? props.theme.colors[props.hvrBg]
        : props.hvrBg};
    border: ${(props: HvrBorderProps) =>
      props.hvrBorder ? props.hvrBorder : props.border ? props.border : "none"};
    border-style: ${(props: HvrBsProps) =>
      props.hvrBs ? props.hvrBs : props.bs ? props.bs : "auto"};
    border-width: ${(props: HvrBwProps) =>
      props.hvrBw ? props.hvrBw : props.bw ? props.bw : "auto"};
    border-color: ${(props: HvrBcProps) =>
      props.theme.colors[props.hvrBc]
        ? props.theme.colors[props.hvrBc]
        : props.hvrBc
        ? props.hvrBc
        : props.theme.colors[props.bc]
        ? props.theme.colors[props.bc]
        : props.bc
        ? props.bc
        : "auto"};
    box-shadow: ${(props: HvrShadowProps) =>
      props.theme.shadows[props.hvrShadow]
        ? props.theme.shadows[props.hvrShadow]
        : props.hvrShadow
        ? props.hvrShadow
        : hoverShadow};
    cursor: ${cursorStyle};
  }
`;
