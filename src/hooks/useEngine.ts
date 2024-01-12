import { useState } from "react";

export type State = "start" | "running" | "finish";

const useEngine = () => {
  const [state, setState] = useState<State>("start");

  return { state };
};

export default useEngine;
