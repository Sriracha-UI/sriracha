import {
  cursorStyle,
  boxShadow,
  cardColor,
  cardBackground,
} from "../../maps/index";

export default `
  color: ${(props: { color: string }) =>
    props.color ? props.color : cardColor};
  background: ${(props: { bg: string }) =>
    props.bg ? props.bg : cardBackground};
  border: ${(props: { border: string }) =>
    props.border ? props.border : "none"};
  border-radius: ${(props: { radius: string }) =>
    props.radius ? props.radius : "0.1rem"};
  opacity: ${(props: { opacity: string }) =>
    props.opacity ? props.opacity : "none"};
  box-shadow: ${(props: { shadow: string }) =>
    props.shadow ? props.shadow : boxShadow};

  &:hover {
    border: ${(props: { hvrBorder: string }) =>
      props.hvrBorder ? props.hvrBorder : "none"};
    color: ${(props: { hvrColor: string }) =>
      props.hvrColor ? props.hvrColor : "auto"};
    background: ${(props: { hvrBg: string }) =>
      props.hvrBg ? props.hvrBg : "auto"};
    cursor: ${cursorStyle};
  }
`;
