var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from "styled-components";
import { textAlign, fSize, fontWeight } from "../../../maps";
export default css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  text-decoration: ", ";\n  text-align: ", ";\n"], ["\n  font-family: ", ";\n  font-size: ",
    ";\n  font-weight: ", ";\n  text-decoration: ", ";\n  text-align: ", ";\n"])), function (props) { return (props.font ? props.font : "inherit"); }, function (props) {
    return !props.size
        ? fSize
        : props.theme.fontSizes[props.size]
            ? props.theme.fontSizes[props.size]
            : props.size;
}, function (props) { return (props.weight ? props.weight : fontWeight); }, function (props) { return (props.decoration ? props.decoration : "none"); }, function (props) { return (props.textAlign ? props.textAlign : textAlign); });
var templateObject_1;
