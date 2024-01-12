import { useCallback, useEffect, useRef, useState } from "react";

const useCountdown = (seconds: number) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startCountdown = useCallback(() => {
    console.log("Starting Countdown....");
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
  }, [setTimeLeft]);

  const resetCountdown = useCallback(() => {
    console.log("Reseting Countdown....");
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setTimeLeft(seconds);
  }, [seconds]);

  // when the countdown reaches 0, clear the countdown interval
  useEffect(() => {
    if (!timeLeft && intervalRef.current) {
      console.log("Clearing Timer.....");
      clearInterval(intervalRef.current);
    }
  }, [timeLeft, intervalRef]);

  return { timeLeft, startCountdown, resetCountdown };
};

export default useCountdown;
