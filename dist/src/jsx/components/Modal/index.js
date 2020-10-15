var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Box, theme } from "../../../index";
import { centerAlign, justifyCenter } from "../../../styled/maps";
var Modal = function (_a) {
    var active = _a.active, toggle = _a.toggle, children = _a.children, rest = __rest(_a, ["active", "toggle", "children"]);
    return active
        ? ReactDOM.createPortal(React.createElement(ModalWrapper, __assign({}, rest),
            React.createElement(Box, { className: "container", "aria-modal": true, "aria-hidden": true, role: "dialog", 
                // @ts-ignore
                radius: "0" },
                React.createElement("div", { className: "overlay", onClick: toggle }),
                React.createElement("div", { className: "modal" }, children))), document.body)
        : null;
};
var ModalWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-align: center;\n  .overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1040;\n    width: 100%;\n    height: 100%;\n    border-radius: 0;\n    background: ", ";\n  }\n\n  .container {\n    display: flex;\n    justify-content: ", ";\n    align-items: ", ";\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 1050;\n    width: 100vw;\n    height: 100vh;\n    overflow-x: hidden;\n    overflow-y: auto;\n    outline: 0;\n  }\n\n  .modal {\n    z-index: 2000;\n    position: absolute;\n    top: ", ";\n    right: ", ";\n    bottom: ", ";\n    left: ", ";\n    transform: ", ";\n  }\n"], ["\n  text-align: center;\n  .overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1040;\n    width: 100%;\n    height: 100%;\n    border-radius: 0;\n    background: ",
    ";\n  }\n\n  .container {\n    display: flex;\n    justify-content: ",
    ";\n    align-items: ", ";\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 1050;\n    width: 100vw;\n    height: 100vh;\n    overflow-x: hidden;\n    overflow-y: auto;\n    outline: 0;\n  }\n\n  .modal {\n    z-index: 2000;\n    position: absolute;\n    top: ", ";\n    right: ", ";\n    bottom: ", ";\n    left: ", ";\n    transform: ",
    ";\n  }\n"])), function (props) {
    return !props.obg
        ? theme.colors.blackAlpha8
        : props.theme.colors[props.obg]
            ? props.theme.colors[props.obg]
            : props.obg;
}, function (props) {
    return props.justify ? props.justify : justifyCenter;
}, function (props) { return (props.align ? props.align : centerAlign); }, function (props) { return (props.top ? props.top : "50%"); }, function (props) { return (props.right ? props.right : "auto"); }, function (props) { return (props.bottom ? props.bottom : "auto"); }, function (props) { return (props.left ? props.left : "50%"); }, function (props) {
    return props.translate
        ? "translate(" + props.translate + ")"
        : props.translateX
            ? "translateX(" + props.translateX + ")"
            : props.translateY
                ? "translateY(" + props.translateY + ")"
                : "translate(-50%, -50%)";
});
export default Modal;
var templateObject_1;
