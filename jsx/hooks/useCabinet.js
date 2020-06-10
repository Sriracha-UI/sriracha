import { useState } from "react";

export const useCabinet = () => {
  const [isCabinet, setIsCabinet] = useState(false);

  function toggleCabinet() {
    setIsCabinet(!isCabinet);
  }

  return { isCabinet, toggleCabinet };
};
