import {
  PositionProps,
  TopProps,
  RightProps,
  BottomProps,
  LeftProps,
} from "./../../../../types";
import { css } from "styled-components";

export default css`
  position: ${(props: PositionProps) =>
    props.position ? props.position : "fixed"};
  top: ${(props: TopProps) => (props.top ? props.top : "auto")};
  right: ${(props: RightProps) => (props.right ? props.right : "auto")};
  bottom: ${(props: BottomProps) => (props.bottom ? props.bottom : "auto")};
  left: ${(props: LeftProps) => (props.left ? props.left : "auto")};
`;
