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
import styled from "styled-components";
import Box from "../../../styled/components/Box";
export default function Img(_a) {
    var src = _a.src, alt = _a.alt, rest = __rest(_a, ["src", "alt"]);
    return (React.createElement(ImgWrapper, __assign({}, rest),
        React.createElement("img", { src: src, alt: alt })));
}
var ImgWrapper = styled(Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  img {\n    width: 100%;\n    height: auto;\n  }\n"], ["\n  img {\n    width: 100%;\n    height: auto;\n  }\n"])));
var templateObject_1;
