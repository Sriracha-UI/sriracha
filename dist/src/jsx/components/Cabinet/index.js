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
import Card from "../../../styled/components/Card";
var Cabinet = function (_a) {
    var active = _a.active, toggle = _a.toggle, children = _a.children, rest = __rest(_a, ["active", "toggle", "children"]);
    return (React.createElement(CabinetWrapper, null,
        React.createElement("div", { className: "overlay-" + (active ? "active" : "in-active"), onClick: toggle }),
        React.createElement(Card, __assign({}, rest, { className: "cabinet " + (active ? "active" : "in-active"), 
            // @ts-ignore
            radius: "0 0.4rem 0.4rem 0" }), children)));
};
var CabinetWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-align: center;\n\n  .in-active {\n    left: -30rem;\n  }\n\n  .active {\n    left: 0rem;\n  }\n\n  .overlay-in-active {\n    display: none;\n  }\n\n  .overlay-active {\n    z-index: 1000;\n    position: absolute;\n    height: 100vh;\n    width: 100vw;\n    left: 0;\n    right: 0;\n    top: 0;\n  }\n\n  .in-active .cabinet {\n    display: none;\n  }\n\n  .cabinet {\n    z-index: 2000;\n    position: fixed;\n    height: 100vh;\n    width: 30rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 0;\n    transition: left 1s;\n  }\n\n  @media only screen and (max-width: 600px) {\n    .cabinet {\n      width: 50vw;\n    }\n  }\n"], ["\n  text-align: center;\n\n  .in-active {\n    left: -30rem;\n  }\n\n  .active {\n    left: 0rem;\n  }\n\n  .overlay-in-active {\n    display: none;\n  }\n\n  .overlay-active {\n    z-index: 1000;\n    position: absolute;\n    height: 100vh;\n    width: 100vw;\n    left: 0;\n    right: 0;\n    top: 0;\n  }\n\n  .in-active .cabinet {\n    display: none;\n  }\n\n  .cabinet {\n    z-index: 2000;\n    position: fixed;\n    height: 100vh;\n    width: 30rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 0;\n    transition: left 1s;\n  }\n\n  @media only screen and (max-width: 600px) {\n    .cabinet {\n      width: 50vw;\n    }\n  }\n"])));
export default Cabinet;
var templateObject_1;
