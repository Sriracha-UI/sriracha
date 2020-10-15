import { useState, useEffect } from "react";
export var useToggleMode = function () {
    var _a = useState("light"), themeString = _a[0], setThemeString = _a[1];
    var _b = useState(false), toggle = _b[0], setToggle = _b[1];
    var toggleTheme = function () {
        if (themeString === "light") {
            localStorage.setItem("theme", "dark");
            setThemeString("dark");
            setToggle(!toggle);
        }
        else {
            localStorage.setItem("theme", "light");
            setThemeString("light");
            setToggle(!toggle);
        }
    };
    useEffect(function () {
        var localTheme = localStorage.getItem("theme") || "light";
        localTheme && setThemeString(localTheme);
    }, [toggle]);
    return { themeString: themeString, toggleTheme: toggleTheme };
};
