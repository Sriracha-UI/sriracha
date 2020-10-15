import {
  FlexWrapProps,
  FlexDirectionProps,
  JustifyContentProps,
  AlignItemProps,
  AlignContentProps,
} from "./../../../../types";
import { css } from "styled-components";
import {
  columnDirection,
  flexJustify,
  centerAlign,
  flexContent,
  flexWrap,
} from "../../../maps";

export default css`
  display: flex;
  flex-wrap: ${(props: FlexWrapProps) => (props.wrap ? props.wrap : flexWrap)};
  flex-direction: ${(props: FlexDirectionProps) =>
    props.direction ? props.direction : columnDirection};
  justify-content: ${(props: JustifyContentProps) =>
    props.justify ? props.justify : flexJustify};
  align-items: ${(props: AlignItemProps) =>
    props.align ? props.align : centerAlign};
  align-content: ${(props: AlignContentProps) =>
    props.content ? props.content : flexContent};
`;
