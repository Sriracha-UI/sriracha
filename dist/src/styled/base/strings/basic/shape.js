var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from "styled-components";
import { flow, shape } from "../../../maps";
export default css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: ", ";\n  clip-path: ", ";\n"], ["\n  overflow: ", ";\n  clip-path: ", ";\n"])), function (props) { return (props.overflow ? props.overflow : flow); }, function (props) { return (props.clip ? props.clip : shape); });
var templateObject_1;
