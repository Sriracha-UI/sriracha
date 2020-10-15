var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from "styled-components";
import { marg, pad } from "../../../maps";
export default css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  background: ", ";\n  background-image: ", ";\n  font-family: ", ";\n  min-height: ", ";\n  max-width: ", ";\n  min-width: ", ";\n  max-height: ", ";\n  margin: ", ";\n  padding: ", ";\n"], ["\n  color: ",
    ";\n  background: ",
    ";\n  background-image: ",
    ";\n  font-family: ",
    ";\n  min-height: ", ";\n  max-width: ", ";\n  min-width: ", ";\n  max-height: ", ";\n  margin: ", ";\n  padding: ", ";\n"])), function (props) {
    return !props.color
        ? props.theme.colors.gray9
        : props.theme.colors[props.color]
            ? props.theme.colors[props.color]
            : props.color;
}, function (props) {
    return !props.bg
        ? props.theme.colors.background
        : props.theme.colors[props.bg]
            ? props.theme.colors[props.bg]
            : props.bg;
}, function (props) {
    return props.bgSrc ? "url(" + props.bgSrc + ")" : "none";
}, function (props) {
    return props.font ? props.font : '"Open Sans", sans-serif';
}, function (props) { return (props.minH ? props.minH : "none"); }, function (props) { return (props.maxW ? props.maxW : "none"); }, function (props) { return (props.minW ? props.minW : "none"); }, function (props) { return (props.maxH ? props.maxH : "none"); }, function (props) { return (props.m ? props.m : marg); }, function (props) { return (props.p ? props.p : pad); });
var templateObject_1;
