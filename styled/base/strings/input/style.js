import { css } from "styled-components";
import { cursorStyle, boxShadow, hoverShadow } from "../../../maps";

export default css`
  color: ${(props) =>
    !props.color
      ? "auto"
      : props.theme.colors[props.color]
      ? props.theme.colors[props.color]
      : props.color};
  background: ${(props) =>
    !props.bg
      ? "auto"
      : props.theme.colors[props.bg]
      ? props.theme.colors[props.bg]
      : props.bg};
  border: ${(props) =>
    props.border ? props.border : `0.2rem inset ${props.theme.colors.gray6}`};
  border-style: ${(props) => (props.bs ? props.bs : "auto")};
  border-width: ${(props) => (props.bw ? props.bw : "auto")};
  border-radius: ${(props) =>
    props.radius ? props.radius : props.theme.borderRadius};
  border-color: ${(props) =>
    props.theme.colors[props.bc]
      ? props.theme.colors[props.bc]
      : props.bc
      ? props.bc
      : "auto"};
  opacity: ${(props) => (props.opacity ? props.opacity : "none")};
  box-shadow: ${(props) =>
    props.theme.shadow[props.shadow]
      ? props.theme.shadow[props.shadow]
      : props.shadow
      ? props.shadow
      : boxShadow};

  transition: color 0.5s, background 0.5s, box-shadow 0.5s;

  &:hover {
    color: ${(props) =>
      !props.hvrColor
        ? "auto"
        : props.theme.colors[props.hvrColor]
        ? props.theme.colors[props.hvrColor]
        : props.hvrColor};
    background: ${(props) =>
      !props.hvrBg
        ? "auto"
        : props.theme.colors[props.hvrBg]
        ? props.theme.colors[props.hvrBg]
        : props.hvrBg};
    border: ${(props) =>
      props.hvrBorder
        ? props.hvrBorder
        : props.border
        ? props.border
        : `0.2rem solid ${props.theme.colors.gray3}`};
    border-style: ${(props) =>
      props.hvrBs ? props.hvrBs : props.bs ? props.bs : "auto"};
    border-width: ${(props) =>
      props.hvrBw ? props.hvrBw : props.bw ? props.bw : "auto"};
    border-color: ${(props) =>
      props.theme.colors[props.hvrBc]
        ? props.theme.colors[props.hvrBc]
        : props.hvrBc
        ? props.hvrBc
        : props.theme.colors[props.bc]
        ? props.theme.colors[props.bc]
        : props.bc
        ? props.bc
        : "auto"};
    box-shadow: ${(props) =>
      props.theme.shadow[props.hvrShadow]
        ? props.theme.shadow[props.hvrShadow]
        : props.hvrShadow
        ? props.hvrShadow
        : hoverShadow};
    cursor: ${cursorStyle};
  }

  &:focus {
    color: ${(props) =>
      !props.fcsColor
        ? "auto"
        : props.theme.colors[props.fcsColor]
        ? props.theme.colors[props.fcsColor]
        : props.fcsColor};
    background: ${(props) =>
      !props.fcsBg
        ? "auto"
        : props.theme.colors[props.fcsBg]
        ? props.theme.colors[props.fcsBg]
        : props.fcsBg};
    border: ${(props) =>
      props.fcsBorder
        ? props.fcsBorder
        : props.border
        ? props.border
        : `0.2rem solid ${props.theme.colors.gray3}`};
    border-style: ${(props) =>
      props.fcsBs ? props.fcsBs : props.bs ? props.bs : "auto"};
    border-width: ${(props) =>
      props.fcsBw ? props.fcsBw : props.bw ? props.bw : "auto"};
    border-color: ${(props) =>
      props.theme.colors[props.fcsBc]
        ? props.theme.colors[props.fcsBc]
        : props.fcsBc
        ? props.fcsBc
        : props.theme.colors[props.bc]
        ? props.theme.colors[props.bc]
        : props.bc
        ? props.bc
        : "auto"};
    box-shadow: ${(props) =>
      props.theme.shadow[props.fcsShadow]
        ? props.theme.shadow[props.fcsShadow]
        : props.fcsShadow
        ? props.fcsShadow
        : hoverShadow};
    cursor: ${cursorStyle};
  }
`;
