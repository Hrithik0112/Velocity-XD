import { useState } from "react";
import useWords from "./useWords";

export type State = "start" | "running" | "finish";

const NUMBER_OF_WORDS = 12;

const useEngine = () => {
  const [state, setState] = useState<State>("start");
  const { words, updateWords } = useWords(12);

  return { state, words };
};

export default useEngine;
