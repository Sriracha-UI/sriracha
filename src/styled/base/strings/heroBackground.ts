import { bgCover, bgAttach } from "../../maps/index";

export default ` 
  background-image: ${(props: { bgSrc: string }) =>
    props.bgSrc ? `url(${props.bgSrc})` : "none"};
  opacity: ${(props: { opacity: string }) =>
    props.opacity ? props.opacity : "none"};
  background-position: ${(props: { bgPosition: string }) =>
    props.bgPosition ? props.bgPosition : "center"};
  background-repeat: ${(props: { bgRepeat: string }) =>
    props.bgRepeat ? props.bgRepeat : "no-repeat"};
  background-attachment: ${(props: { bgAttachment: string }) =>
    props.bgAttachment ? props.bgAttachment : bgAttach};
  background-size: ${(props: { bgSize: string }) =>
    props.bgSize ? props.bgSize : bgCover};
`;
