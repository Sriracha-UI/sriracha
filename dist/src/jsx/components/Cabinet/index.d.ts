import React from "react";
interface CabinetProps {
    active: boolean;
    toggle: () => boolean;
    children: React.ReactNode;
}
declare const Cabinet: ({ active, toggle, children, ...rest }: CabinetProps) => JSX.Element;
export default Cabinet;
