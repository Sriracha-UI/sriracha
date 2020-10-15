import React from "react";
interface AppContainerProps {
    children: React.ReactNode;
}
export default function AppContainer({ children, ...rest }: AppContainerProps): JSX.Element;
export {};
