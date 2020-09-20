import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Card, Box, theme } from "../../../index";

const Modal = ({ active, toggle, children, ...rest }) =>
  active
    ? ReactDOM.createPortal(
        <ModalWrapper {...rest}>
          <Box className="container" aria-modal aria-hidden role="dialog">
            <div className="overlay" onClick={toggle} />
            {children}
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
    background: ${(props) =>
      !props.obg
        ? theme.colors.blackAlpha8
        : props.theme.colors[props.obg]
        ? props.theme.colors[props.obg]
        : props.obg};
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: ${(props) =>
      props.theme.space[props.mt]
        ? props.theme.space[props.mt]
        : props.mt
        ? props.mt
        : 0};
    left: ${(props) =>
      props.theme.space[props.ml]
        ? props.theme.space[props.ml]
        : props.ml
        ? props.ml
        : 0};
    right: ${(props) =>
      props.theme.space[props.mr]
        ? props.theme.space[props.mr]
        : props.mr
        ? props.mr
        : "none"};
    bottom: ${(props) =>
      props.theme.space[props.mb]
        ? props.theme.space[props.mb]
        : props.mb
        ? props.mb
        : "none"};
    z-index: 1050;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
  }

  .modal {
    z-index: 2000;
    background: white;
    position: relative;
    margin: 1.75rem auto;
    border-radius: 3px;
    max-width: 500px;
    padding: 2rem;
  }
`;

export default Modal;
