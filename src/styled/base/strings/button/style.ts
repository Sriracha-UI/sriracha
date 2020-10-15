import { HvrBsProps, HvrBcProps } from "./../../../../types/index";
import { css } from "styled-components";
import {
  buttonColor,
  buttonBackground,
  buttonHoverColor,
  buttonHoverBackground,
  buttonCursorStyle,
  boxShadow,
  hoverShadow,
  activeBackground,
} from "../../../maps";
import {
  BackgroundProps,
  ColorProps,
  BorderProps,
  BorderRadiusProps,
  BorderStyleProps,
  BorderWidthProps,
  BorderColorProps,
  OpacityProps,
  ShadowProps,
  HvrColorProps,
  HvrBgProps,
  HvrBorderProps,
  HvrBwProps,
  HvrShadowProps,
  ActiveBackgroundProps,
} from "../../../../types";

export default css`
  color: ${(props: ColorProps) =>
    !props.color
      ? buttonColor
      : props.theme.colors[props.color]
      ? props.theme.colors[props.color]
      : props.color};
  background: ${(props: BackgroundProps) =>
    !props.bg
      ? buttonBackground
      : props.theme.colors[props.bg]
      ? props.theme.colors[props.bg]
      : props.bg};
  border: ${(props: BorderProps) => (props.border ? props.border : "none")};
  border-style: ${(props: BorderStyleProps) => (props.bs ? props.bs : "auto")};
  border-width: ${(props: BorderWidthProps) => (props.bw ? props.bw : "auto")};
  border-radius: ${(props: BorderRadiusProps) =>
    props.radius ? props.radius : props.theme.borderRadius};
  border-color: ${(props: BorderColorProps) =>
    props.theme.colors[props.bc]
      ? props.theme.colors[props.bc]
      : props.bc
      ? props.bc
      : "auto"};
  opacity: ${(props: OpacityProps) => (props.opacity ? props.opacity : "none")};
  box-shadow: ${(props: ShadowProps) =>
    props.theme.shadows[props.shadow]
      ? props.theme.shadows[props.shadow]
      : props.shadow
      ? props.shadow
      : boxShadow};

  transition: color 0.5s, background 0.5s, box-shadow 0.5s;

  &:hover {
    color: ${(props: HvrColorProps) =>
      !props.hvrColor
        ? buttonHoverColor
        : props.theme.colors[props.hvrColor]
        ? props.theme.colors[props.hvrColor]
        : props.hvrColor};
    background: ${(props: HvrBgProps) =>
      !props.hvrBg
        ? buttonHoverBackground
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
    cursor: ${buttonCursorStyle};
  }

  &:active {
    background: ${(props: ActiveBackgroundProps) =>
      props.activeBg ? props.activeBg : activeBackground};
  }

  &[disabled] {
    opacity: 0.2;
    cursor: not-allowed;
  }
`;

// -webkit-filter: ${(props) =>
//       props.filter ? props.filter : "brightness(80%)"};
