import { flow, shape } from "../../maps/index";

export default `
  overflow: ${(props: { overflow: string }) =>
    props.overflow ? props.overflow : flow};
  clip-path: ${(props: { clip: string }) => (props.clip ? props.clip : shape)};
`;
