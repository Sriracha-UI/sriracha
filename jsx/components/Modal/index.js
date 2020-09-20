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
    margin: 1.75rem auto;
    width: 100px;
    top: ${(props) =>
      props.theme.space[props.mdt]
        ? props.theme.space[props.mdt]
        : props.mdt
        ? props.mdt
        : 0};
    left: ${(props) =>
      props.theme.space[props.mdl]
        ? props.theme.space[props.mdl]
        : props.mdl
        ? props.mdl
        : 0};
    right: ${(props) =>
      props.theme.space[props.mdr]
        ? props.theme.space[props.mdr]
        : props.mdr
        ? props.mdr
        : "none"};
    bottom: ${(props) =>
      props.theme.space[props.mdb]
        ? props.theme.space[props.mdb]
        : props.mdb
        ? props.mdb
        : "none"};
  }
`;

export default Modal;
