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
import AppWrapper from "../../../styled/components/AppWrapper";
import { ThemeProvider } from "styled-components";
import { lightColors, darkColors, nickNacks } from "./theme";
import { GlobalStyles } from "../../../styled/components/GlobalStyles";
import ThemeModeProvider from "./ThemeModeContext";
export default function ColorModeWrapper(_a) {
    var themeString = _a.themeString, toggleTheme = _a.toggleTheme, children = _a.children, rest = __rest(_a, ["themeString", "toggleTheme", "children"]);
    var lightTheme = __assign({ colors: lightColors }, nickNacks);
    var darkTheme = __assign({ colors: darkColors }, nickNacks);
    var themeMode = themeString === "light" ? lightTheme : darkTheme;
    return (React.createElement(ThemeProvider, { theme: themeMode },
        React.createElement(ThemeModeProvider, { themeString: themeString, toggleTheme: toggleTheme, theme: themeMode, lightTheme: lightTheme, darkTheme: darkTheme },
            React.createElement(GlobalStyles, null),
            React.createElement(AppWrapper, __assign({}, rest), children))));
}
