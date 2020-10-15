import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Box, theme } from "../../../index";
import { centerAlign, justifyCenter } from "../../../styled/maps";
import {
  AlignItemProps,
  BottomProps,
  JustifyContentProps,
  LeftProps,
  Props,
  RightProps,
  TopProps,
} from "../../../types";

interface TransformProps {
  translate?: string;
  translateX?: string;
  translateY?: string;
}

interface OverlayBackgroundProps extends Props {
  obg?: string;
}

interface ModalProps {
  active: boolean;
  toggle: () => void;
  children: React.ReactNode;
}

const Modal = ({ active, toggle, children, ...rest }: ModalProps) =>
  active
    ? ReactDOM.createPortal(
        <ModalWrapper {...rest}>
          <Box
            className="container"
            aria-modal
            aria-hidden
            role="dialog"
            // @ts-ignore
            radius="0"
          >
            <div className="overlay" onClick={toggle} />
            <div className="modal">{children}</div>
          </Box>
        </ModalWrapper>,
        document.body
      )
    : null;

const ModalWrapper = styled.div`
  text-align: center;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100%;
    height: 100%;
    border-radius: 0;
    background: ${(props: OverlayBackgroundProps) =>
      !props.obg
        ? theme.colors.blackAlpha8
        : props.theme.colors[props.obg]
        ? props.theme.colors[props.obg]
        : props.obg};
  }

  .container {
    display: flex;
    justify-content: ${(props: JustifyContentProps) =>
      props.justify ? props.justify : justifyCenter};
    align-items: ${(props: AlignItemProps) =>
      props.align ? props.align : centerAlign};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
  }

  .modal {
    z-index: 2000;
    position: absolute;
    top: ${(props: TopProps) => (props.top ? props.top : "50%")};
    right: ${(props: RightProps) => (props.right ? props.right : "auto")};
    bottom: ${(props: BottomProps) => (props.bottom ? props.bottom : "auto")};
    left: ${(props: LeftProps) => (props.left ? props.left : "50%")};
    transform: ${(props: TransformProps) =>
      props.translate
        ? `translate(${props.translate})`
        : props.translateX
        ? `translateX(${props.translateX})`
        : props.translateY
        ? `translateY(${props.translateY})`
        : "translate(-50%, -50%)"};
  }
`;

export default Modal;
