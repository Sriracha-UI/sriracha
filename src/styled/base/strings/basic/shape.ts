import { OverFlowProps, ClipProps } from "./../../../../types";
import { css } from "styled-components";
import { flow, shape } from "../../../maps";

export default css`
  overflow: ${(props: OverFlowProps) =>
    props.overflow ? props.overflow : flow};
  clip-path: ${(props: ClipProps) => (props.clip ? props.clip : shape)};
`;
