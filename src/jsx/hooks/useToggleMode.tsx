import { useState, useEffect } from "react";

export const useToggleMode = () => {
  const [themeString, setThemeString] = useState<string>("light");
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleTheme = () => {
    if (themeString === "light") {
      localStorage.setItem("theme", "dark");
      setThemeString("dark");
      setToggle(!toggle);
    } else {
      localStorage.setItem("theme", "light");
      setThemeString("light");
      setToggle(!toggle);
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") || "light";
    localTheme && setThemeString(localTheme);
  }, [toggle]);

  return { themeString, toggleTheme };
};
