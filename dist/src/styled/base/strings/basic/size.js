var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from "styled-components";
import { sideways, marg, pad } from "../../../maps";
export default css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: ", ";\n  width: ", ";\n  max-height: ", ";\n  max-width: ", ";\n  min-height: ", ";\n  min-width: ", ";\n  margin: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n  padding: ", ";\n  padding-top: ", ";\n  padding-bottom: ", ";\n  padding-left: ", ";\n  padding-right: ", ";\n"], ["\n  height: ",
    ";\n  width: ",
    ";\n  max-height: ",
    ";\n  max-width: ",
    ";\n  min-height: ",
    ";\n  min-width: ",
    ";\n  margin: ",
    ";\n  margin-top: ",
    ";\n  margin-bottom: ",
    ";\n  margin-left: ",
    ";\n  margin-right: ",
    ";\n  padding: ",
    ";\n  padding-top: ",
    ";\n  padding-bottom: ",
    ";\n  padding-left: ",
    ";\n  padding-right: ",
    ";\n"])), function (props) {
    return !props.h && !props.sqr
        ? "auto"
        : props.theme.space[props.h]
            ? props.theme.space[props.h]
            : props.theme.space[props.sqr]
                ? props.theme.space[props.sqr]
                : props.sqr
                    ? props.sqr
                    : props.h;
}, function (props) {
    return !props.w && !props.sqr
        ? sideways
        : props.theme.space[props.w]
            ? props.theme.space[props.w]
            : props.theme.space[props.sqr]
                ? props.theme.space[props.sqr]
                : props.sqr
                    ? props.sqr
                    : props.w;
}, function (props) {
    return !props.maxH
        ? "none"
        : props.theme.space[props.maxH]
            ? props.theme.space[props.maxH]
            : props.maxH;
}, function (props) {
    return !props.maxW
        ? "none"
        : props.theme.space[props.maxW]
            ? props.theme.space[props.maxW]
            : props.maxW;
}, function (props) {
    return !props.minH
        ? "none"
        : props.theme.space[props.minH]
            ? props.theme.space[props.minH]
            : props.minH;
}, function (props) {
    return !props.minW
        ? "none"
        : props.theme.space[props.minW]
            ? props.theme.space[props.minW]
            : props.minW;
}, function (props) {
    return !props.m
        ? marg
        : props.theme.space[props.m]
            ? props.theme.space[props.m]
            : props.m;
}, function (props) {
    return !props.mt
        ? "none"
        : props.theme.space[props.mt]
            ? props.theme.space[props.mt]
            : props.mt;
}, function (props) {
    return !props.mb
        ? "none"
        : props.theme.space[props.mb]
            ? props.theme.space[props.mb]
            : props.mb;
}, function (props) {
    return !props.ml
        ? "none"
        : props.theme.space[props.ml]
            ? props.theme.space[props.ml]
            : props.ml;
}, function (props) {
    return !props.mr
        ? "none"
        : props.theme.space[props.mr]
            ? props.theme.space[props.mr]
            : props.mr;
}, function (props) {
    return !props.p
        ? pad
        : props.theme.space[props.p]
            ? props.theme.space[props.p]
            : props.p;
}, function (props) {
    return !props.pt
        ? "none"
        : props.theme.space[props.pt]
            ? props.theme.space[props.pt]
            : props.pt;
}, function (props) {
    return !props.pb
        ? "none"
        : props.theme.space[props.pb]
            ? props.theme.space[props.pb]
            : props.pb;
}, function (props) {
    return !props.pl
        ? "none"
        : props.theme.space[props.pl]
            ? props.theme.space[props.pl]
            : props.pl;
}, function (props) {
    return !props.pr
        ? "none"
        : props.theme.space[props.pr]
            ? props.theme.space[props.pr]
            : props.pr;
});
var templateObject_1;
