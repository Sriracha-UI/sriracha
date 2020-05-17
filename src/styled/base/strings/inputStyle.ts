import { cursorStyle, boxShadow } from "../../maps/index";
import { theme } from "../../theme/index";

export default `
  color: ${(props: { color: string }) => (props.color ? props.color : "auto")};
  background: ${(props: { bg: string }) => (props.bg ? props.bg : "auto")};
  border: ${(props: { border: string }) =>
    props.border ? props.border : `0.2rem inset ${theme.colors.gray3}`};
  border-radius: ${(props: { radius: string }) =>
    props.radius ? props.radius : "0.1rem"};
  opacity: ${(props: { opacity: string }) =>
    props.opacity ? props.opacity : "none"};
  box-shadow: ${(props: { shadow: string }) =>
    props.shadow ? props.shadow : boxShadow};

  &:hover {
    border: ${(props: { hvrBorder: string }) =>
      props.hvrBorder ? props.hvrBorder : `0.2rem solid ${theme.colors.blue1}`};
    color: ${(props: { hvrColor: string }) =>
      props.hvrColor ? props.hvrColor : "auto"};
    background: ${(props: { hvrBg: string }) =>
      props.hvrBg ? props.hvrBg : "auto"};
    cursor: ${cursorStyle};
  }
`;
