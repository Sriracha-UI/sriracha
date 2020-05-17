export default `
  position: ${(props: { position: string }) =>
    props.position ? props.position : "fixed"};
  top: ${(props: { top: string }) => (props.top ? props.top : "auto")}
  right: ${(props: { right: string }) => (props.right ? props.right : "auto")}
  bottom: ${(props: { bottom: string }) =>
    props.bottom ? props.bottom : "auto"}
  left: ${(props: { left: string }) => (props.left ? props.left : "auto")}
`;
