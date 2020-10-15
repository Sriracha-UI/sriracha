import { css } from "styled-components";
import { bgCover, bgAttach } from "../../../maps";
import {
  BackgroundSourceProps,
  BackgroundPositionProps,
  BackgroundRepeatProps,
  BackgroundAttachmentProps,
  BackgroundSizeProps,
  OpacityProps,
} from "../../../../types";

export default css`
  background-image: ${(props: BackgroundSourceProps) =>
    props.bgSrc ? `url(${props.bgSrc})` : "none"};
  opacity: ${(props: OpacityProps) => (props.opacity ? props.opacity : "none")};
  background-position: ${(props: BackgroundPositionProps) =>
    props.bgPosition ? props.bgPosition : "center"};
  background-repeat: ${(props: BackgroundRepeatProps) =>
    props.bgRepeat ? props.bgRepeat : "no-repeat"};
  background-attachment: ${(props: BackgroundAttachmentProps) =>
    props.bgAttachment ? props.bgAttachment : bgAttach};
  background-size: ${(props: BackgroundSizeProps) =>
    props.bgSize ? props.bgSize : bgCover};
`;
