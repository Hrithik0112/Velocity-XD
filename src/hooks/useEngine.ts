import { useState } from "react";
import useWords from "./useWords";
import useCountdown from "./useCountdown";
import useTypings from "./useTypings";

export type State = "start" | "running" | "finish";

const NUMBER_OF_WORDS = 12;
const COUNDOWN_SECONDS = 30;

const useEngine = () => {
  const [state, setState] = useState<State>("start");
  const { words, updateWords } = useWords(NUMBER_OF_WORDS);
  const { timeLeft, startCountdown, resetCountdown } = useCountdown(COUNDOWN_SECONDS);
  const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTypings(state !== "finish");

  return { state, words, timeLeft, typed };
};

export default useEngine;
