import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const [toggle, setToggle] = useState(false);
  // localStorage.getItem("theme") ||
  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      setToggle(!toggle);
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
      setToggle(!toggle);
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") || "light";
    localTheme && setTheme(localTheme);
  }, [toggle]);

  return { theme, toggleTheme };
};
