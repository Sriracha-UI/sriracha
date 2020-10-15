var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from "styled-components";
import { flexDirection, flexJustify, flexItems, flexContent, flexWrap, } from "../../../maps";
export default css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: ", ";\n  flex-direction: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  align-content: ", ";\n"], ["\n  display: flex;\n  flex-wrap: ", ";\n  flex-direction: ",
    ";\n  justify-content: ", ";\n  align-items: ", ";\n  align-content: ", ";\n"])), function (props) { return (props.wrap ? props.wrap : flexWrap); }, function (props) {
    return props.direction ? props.direction : flexDirection;
}, function (props) { return (props.justify ? props.justify : flexJustify); }, function (props) { return (props.align ? props.align : flexItems); }, function (props) { return (props.content ? props.content : flexContent); });
var templateObject_1;
