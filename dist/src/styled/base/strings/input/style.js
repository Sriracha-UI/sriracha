var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from "styled-components";
import { cursorStyle, boxShadow, hoverShadow } from "../../../maps";
export default css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  background: ", ";\n  border: ", ";\n  border-style: ", ";\n  border-width: ", ";\n  border-radius: ", ";\n  border-color: ", ";\n  opacity: ", ";\n  box-shadow: ", ";\n\n  transition: color 0.5s, background 0.5s, box-shadow 0.5s;\n\n  &:hover {\n    color: ", ";\n    background: ", ";\n    border: ", ";\n    border-style: ", ";\n    border-width: ", ";\n    border-color: ", ";\n    box-shadow: ", ";\n    cursor: ", ";\n  }\n\n  &:focus {\n    color: ", ";\n    background: ", ";\n    border: ", ";\n    border-style: ", ";\n    border-width: ", ";\n    border-color: ", ";\n    box-shadow: ", ";\n    cursor: ", ";\n  }\n"], ["\n  color: ",
    ";\n  background: ",
    ";\n  border: ",
    ";\n  border-style: ", ";\n  border-width: ", ";\n  border-radius: ",
    ";\n  border-color: ",
    ";\n  opacity: ", ";\n  box-shadow: ",
    ";\n\n  transition: color 0.5s, background 0.5s, box-shadow 0.5s;\n\n  &:hover {\n    color: ",
    ";\n    background: ",
    ";\n    border: ",
    ";\n    border-style: ",
    ";\n    border-width: ",
    ";\n    border-color: ",
    ";\n    box-shadow: ",
    ";\n    cursor: ", ";\n  }\n\n  &:focus {\n    color: ",
    ";\n    background: ",
    ";\n    border: ",
    ";\n    border-style: ",
    ";\n    border-width: ",
    ";\n    border-color: ",
    ";\n    box-shadow: ",
    ";\n    cursor: ", ";\n  }\n"])), function (props) {
    return !props.color
        ? "auto"
        : props.theme.colors[props.color]
            ? props.theme.colors[props.color]
            : props.color;
}, function (props) {
    return !props.bg
        ? "auto"
        : props.theme.colors[props.bg]
            ? props.theme.colors[props.bg]
            : props.bg;
}, function (props) {
    return props.border ? props.border : "0.2rem inset " + props.theme.colors.gray6;
}, function (props) { return (props.bs ? props.bs : "auto"); }, function (props) { return (props.bw ? props.bw : "auto"); }, function (props) {
    return props.radius ? props.radius : props.theme.borderRadius;
}, function (props) {
    return props.theme.colors[props.bc]
        ? props.theme.colors[props.bc]
        : props.bc
            ? props.bc
            : "auto";
}, function (props) { return (props.opacity ? props.opacity : "none"); }, function (props) {
    return props.theme.shadows[props.shadow]
        ? props.theme.shadows[props.shadow]
        : props.shadow
            ? props.shadow
            : boxShadow;
}, function (props) {
    return !props.hvrColor
        ? "auto"
        : props.theme.colors[props.hvrColor]
            ? props.theme.colors[props.hvrColor]
            : props.hvrColor;
}, function (props) {
    return !props.hvrBg
        ? "auto"
        : props.theme.colors[props.hvrBg]
            ? props.theme.colors[props.hvrBg]
            : props.hvrBg;
}, function (props) {
    return props.hvrBorder
        ? props.hvrBorder
        : props.border
            ? props.border
            : "0.2rem solid " + props.theme.colors.gray3;
}, function (props) {
    return props.hvrBs ? props.hvrBs : props.bs ? props.bs : "auto";
}, function (props) {
    return props.hvrBw ? props.hvrBw : props.bw ? props.bw : "auto";
}, function (props) {
    return props.theme.colors[props.hvrBc]
        ? props.theme.colors[props.hvrBc]
        : props.hvrBc
            ? props.hvrBc
            : props.theme.colors[props.bc]
                ? props.theme.colors[props.bc]
                : props.bc
                    ? props.bc
                    : "auto";
}, function (props) {
    return props.theme.shadows[props.hvrShadow]
        ? props.theme.shadows[props.hvrShadow]
        : props.hvrShadow
            ? props.hvrShadow
            : hoverShadow;
}, cursorStyle, function (props) {
    return !props.fcsColor
        ? "auto"
        : props.theme.colors[props.fcsColor]
            ? props.theme.colors[props.fcsColor]
            : props.fcsColor;
}, function (props) {
    return !props.fcsBg
        ? "auto"
        : props.theme.colors[props.fcsBg]
            ? props.theme.colors[props.fcsBg]
            : props.fcsBg;
}, function (props) {
    return props.fcsBorder
        ? props.fcsBorder
        : props.hvrBorder
            ? props.hvrBorder
            : "0.2rem solid " + props.theme.colors.gray3;
}, function (props) {
    return props.fcsBs ? props.fcsBs : props.hvrBs ? props.hvrBs : "auto";
}, function (props) {
    return props.fcsBw ? props.fcsBw : props.hvrBw ? props.hvrBw : "auto";
}, function (props) {
    return props.theme.colors[props.fcsBc]
        ? props.theme.colors[props.fcsBc]
        : props.fcsBc
            ? props.fcsBc
            : props.theme.colors[props.hvrBc]
                ? props.theme.colors[props.hvrBc]
                : props.hvrBc
                    ? props.hvrBc
                    : "auto";
}, function (props) {
    return props.theme.shadows[props.fcsShadow]
        ? props.theme.shadows[props.fcsShadow]
        : props.fcsShadow
            ? props.fcsShadow
            : hoverShadow;
}, cursorStyle);
var templateObject_1;
