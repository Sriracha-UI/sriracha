import React from "react";
// import styled from 'styled-components';
import Button from "../../../styled/components/Button";

const ToggleTheme = ({ theme, toggleTheme }) => {
  // const isLight = theme === "light";
  return <Button onClick={toggleTheme}>Toggle Theme</Button>;
};

export default ToggleTheme;
