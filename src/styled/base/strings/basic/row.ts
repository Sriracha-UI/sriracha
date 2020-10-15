import { css } from "styled-components";
import {
  flexDirection,
  flexJustify,
  flexItems,
  flexContent,
  flexWrap,
} from "../../../maps";
import {
  FlexWrapProps,
  FlexDirectionProps,
  JustifyContentProps,
  AlignItemProps,
  AlignContentProps,
} from "./../../../../types";

export default css`
  display: flex;
  flex-wrap: ${(props: FlexWrapProps) => (props.wrap ? props.wrap : flexWrap)};
  flex-direction: ${(props: FlexDirectionProps) =>
    props.direction ? props.direction : flexDirection};
  justify-content: ${(props: JustifyContentProps) =>
    props.justify ? props.justify : flexJustify};
  align-items: ${(props: AlignItemProps) =>
    props.align ? props.align : flexItems};
  align-content: ${(props: AlignContentProps) =>
    props.content ? props.content : flexContent};
`;
