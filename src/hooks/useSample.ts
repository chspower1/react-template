import { useState } from "react";

export const useSample = () => {
  const [num, setNum] = useState(0);
  return { num, setNum };
};
