import { useState } from "react";

export const useCabinet = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleCabinet() {
    setIsOpen(!isOpen);
  }

  return [isOpen, toggleCabinet];
};
