import { theme } from "../../theme/index";

export default `
  & .tooltip {
    visibility: hidden;
    opacity: 0;
    width: ${(props: any) => (props.ttW ? props.ttW : "auto")};
    height: ${(props: any) => (props.ttH ? props.ttH : "auto")};
    color: ${(props: any) =>
      props.ttColor ? props.ttColor : theme.colors.gray0};
    background: ${(props: any) => (props.ttBg ? props.ttBg : "none")};
    top: ${(props: any) => (props.ttTop ? props.ttTop : "none")};
    right: ${(props: any) => (props.ttRight ? props.ttRight : "none")};
    bottom: ${(props: any) => (props.ttBottom ? props.ttBottom : "none")};
    left: ${(props: any) => (props.ttLeft ? props.ttLeft : "none")};
    border-radius: ${(props: any) =>
      props.ttRadius ? props.ttRadius : "auto"};
    z-index: ${(props: any) => (props.ttZindex ? props.ttZindex : 1)};
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
