import { css } from "styled-components";

export default css`
  & .tooltip {
    visibility: hidden;
    opacity: 0;
    margin: ${(props) => (props.ttM ? props.ttM : "0")};
    padding: ${(props) => (props.ttP ? props.ttP : "0")};
    width: ${(props) => (props.ttW ? props.ttW : "auto")};
    height: ${(props) => (props.ttH ? props.ttH : "auto")};
    top: ${(props) => (props.top ? props.top : "none")};
    right: ${(props) => (props.right ? props.right : "none")};
    bottom: ${(props) => (props.bottom ? props.bottom : "none")};
    left: ${(props) => (props.left ? props.left : "none")};
    border-radius: ${(props) => (props.ttRadius ? props.ttRadius : "auto")};
    z-index: ${(props) => (props.zIndex ? props.zIndex : 1)};
    position: absolute;
    transition: ease-in-out, visibility 0.25s ease-in-out;
    transition: ease-in-out, opacity 0.25s ease-in-out;
  }

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }

  &:focus .tooltip {
    visibility: visible;
    opacity: 1;
  }
`;
