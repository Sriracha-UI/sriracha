var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from "styled-components";
import { bgCover, bgAttach } from "../../../maps";
export default css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-image: ", ";\n  opacity: ", ";\n  background-position: ", ";\n  background-repeat: ", ";\n  background-attachment: ", ";\n  background-size: ", ";\n"], ["\n  background-image: ",
    ";\n  opacity: ", ";\n  background-position: ",
    ";\n  background-repeat: ",
    ";\n  background-attachment: ",
    ";\n  background-size: ", ";\n"])), function (props) {
    return props.bgSrc ? "url(" + props.bgSrc + ")" : "none";
}, function (props) { return (props.opacity ? props.opacity : "none"); }, function (props) {
    return props.bgPosition ? props.bgPosition : "center";
}, function (props) {
    return props.bgRepeat ? props.bgRepeat : "no-repeat";
}, function (props) {
    return props.bgAttachment ? props.bgAttachment : bgAttach;
}, function (props) { return (props.bgSize ? props.bgSize : bgCover); });
var templateObject_1;
