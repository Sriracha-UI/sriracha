import {
  TooltipMarginProps,
  TooltipPaddingProps,
  TooltipWidthProps,
  TooltipHeightProps,
  TopProps,
  RightProps,
  BottomProps,
  LeftProps,
  TooltipBorderRadiusProps,
  ZIndexProps,
} from "./../../../../types/index";
import { css } from "styled-components";

export default css`
  & .tooltip {
    visibility: hidden;
    opacity: 0;
    margin: ${(props: TooltipMarginProps) => (props.ttM ? props.ttM : "0")};
    padding: ${(props: TooltipPaddingProps) => (props.ttP ? props.ttP : "0")};
    width: ${(props: TooltipWidthProps) => (props.ttW ? props.ttW : "auto")};
    height: ${(props: TooltipHeightProps) => (props.ttH ? props.ttH : "auto")};
    top: ${(props: TopProps) => (props.top ? props.top : "none")};
    right: ${(props: RightProps) => (props.right ? props.right : "none")};
    bottom: ${(props: BottomProps) => (props.bottom ? props.bottom : "none")};
    left: ${(props: LeftProps) => (props.left ? props.left : "none")};
    border-radius: ${(props: TooltipBorderRadiusProps) =>
      props.ttRadius ? props.ttRadius : "auto"};
    z-index: ${(props: ZIndexProps) => (props.zIndex ? props.zIndex : 1)};
    position: absolute;
    transition: ease-in-out, visibility 0.25s ease-in-out;
    transition: ease-in-out, opacity 0.25s ease-in-out;
  }

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }

  &:focus .tooltip {
    visibility: visible;
    opacity: 1;
  }
`;
