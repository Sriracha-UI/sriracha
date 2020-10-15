import { useState } from "react";

export const useCabinet = () => {
  const [isCabinet, setIsCabinet] = useState<boolean>(false);

  function toggleCabinet() {
    setIsCabinet(!isCabinet);
  }

  return { isCabinet, toggleCabinet };
};
