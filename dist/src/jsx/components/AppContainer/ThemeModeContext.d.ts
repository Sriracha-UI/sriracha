import React from "react";
interface ThemeContextProps {
    theme: string;
}
export declare const ThemeModeContext: React.Context<ThemeContextProps>;
export default function ThemeModeProvider({ theme, children }: {
    theme: any;
    children: any;
}): JSX.Element;
export {};
