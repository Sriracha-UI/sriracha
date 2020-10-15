import React from "react";
interface ColorModeWrapperProps {
    themeString: string;
    toggleTheme: () => void;
    children: React.ReactNode;
}
export default function ColorModeWrapper({ themeString, toggleTheme, children, ...rest }: ColorModeWrapperProps): JSX.Element;
export {};
