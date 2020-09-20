import { css } from "styled-components";
import {
  cursorStyle,
  boxShadow,
  cardColor,
  cardBackground,
  textCenter,
  hoverShadow,
} from "../../../maps";

export default css`
  color: ${(props) =>
    !props.color
      ? cardColor
      : props.theme.colors[props.color]
      ? props.theme.colors[props.color]
      : props.color};
  background: ${(props) =>
    !props.bg
      ? cardBackground
      : props.theme.colors[props.bg]
      ? props.theme.colors[props.bg]
      : props.bg};
  border: ${(props) => (props.border ? props.border : "none")};
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
    props.theme.shadows[props.shadow]
      ? props.theme.shadows[props.shadow]
      : props.shadow
      ? props.shadow
      : boxShadow};
  text-align: ${textCenter};

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
      props.hvrBorder ? props.hvrBorder : props.border ? props.border : "none"};
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
      props.theme.shadows[props.hvrShadow]
        ? props.theme.shadows[props.hvrShadow]
        : props.hvrShadow
        ? props.hvrShadow
        : hoverShadow};
    cursor: ${cursorStyle};
  }
`;
