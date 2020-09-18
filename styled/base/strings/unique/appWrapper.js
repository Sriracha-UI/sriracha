import { css } from "styled-components";
import { marg, pad } from "../../../maps";
import { getBackground } from "../../../functions";

export default css`
  color: ${(props) =>
    !props.color
      ? props.theme.colors.gray9
      : props.theme.colors[props.color]
      ? props.theme.colors[props.color]
      : props.color};
  background: ${(props) =>
    !props.bg
      ? props.theme.colors.background
      : props.theme.colors[props.bg]
      ? props.theme.colors[props.bg]
      : props.bg};
  background-image: ${(props) =>
    props.bgSrc ? `url(${props.bgSrc})` : "none"};
  font-family: ${(props) =>
    props.font ? props.font : '"Open Sans", sans-serif'};
  min-height: ${(props) => (props.minH ? props.minH : "none")};
  max-width: ${(props) => (props.maxW ? props.maxW : "none")};
  min-width: ${(props) => (props.minW ? props.minW : "none")};
  max-height: ${(props) => (props.maxH ? props.maxH : "none")};
  margin: ${(props) => (props.m ? props.m : marg)};
  padding: ${(props) => (props.p ? props.p : pad)};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${(props) =>
      props.headFont ? props.headFont : '"Open Sans", cursive'};
  }
`;
