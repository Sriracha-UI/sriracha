import React from "react";
interface ColorModeThemeContextProps {
    toggleTheme: string;
    theme: string;
    themeString: string;
    lightTheme: string;
    darkTheme: string;
}
export declare const ThemeModeContext: React.Context<ColorModeThemeContextProps>;
export default function ThemeModeProvider({ toggleTheme, theme, themeString, lightTheme, darkTheme, children, }: {
    toggleTheme: any;
    theme: any;
    themeString: any;
    lightTheme: any;
    darkTheme: any;
    children: any;
}): JSX.Element;
export {};
