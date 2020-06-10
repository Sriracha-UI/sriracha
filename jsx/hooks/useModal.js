import { useState } from "react";

export const useModal = () => {
  const [isModal, setIsModal] = useState(false);

  function toggleModal() {
    setIsModal(!isModal);
  }

  return { isModal, toggleModal };
};
