import { useState } from "react";

export const useModal = () => {
  const [isActive, setIsActive] = useState(false);

  function toggleModal() {
    setIsActive(!isActive);
  }

  return [isActive, toggleModal];
};
