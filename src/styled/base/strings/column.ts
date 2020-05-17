import {
  columnDirection,
  flexJustify,
  centerAlign,
  flexContent,
  flexWrap,
} from "../../maps/index";

export default `
  display: flex;
  flex-wrap: ${flexWrap};
  flex-direction: ${(props: { direction: string }) =>
    props.direction ? props.direction : columnDirection};
  justify-content: ${(props: { justify: string }) =>
    props.justify ? props.justify : flexJustify};
  align-items: ${(props: { align: string }) =>
    props.align ? props.align : centerAlign};
  align-content: ${(props: { content: string }) =>
    props.content ? props.content : flexContent};
`;
