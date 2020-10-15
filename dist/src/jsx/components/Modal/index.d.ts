import React from "react";
interface ModalProps {
    active: boolean;
    toggle: () => void;
    children: React.ReactNode;
}
declare const Modal: ({ active, toggle, children, ...rest }: ModalProps) => React.ReactPortal;
export default Modal;
