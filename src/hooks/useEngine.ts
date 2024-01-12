import { useState } from "react";
import useWords from "./useWords";
import useCountdown from "./useCountdown";

export type State = "start" | "running" | "finish";

const NUMBER_OF_WORDS = 12;
const COUNDOWN_SECONDS = 30;

const useEngine = () => {
  const [state, setState] = useState<State>("start");
  const { words, updateWords } = useWords(12);
  const { timeLeft, startCountdown, resetCountdown } = useCountdown(COUNDOWN_SECONDS);

  return { state, words, timeLeft };
};

export default useEngine;
