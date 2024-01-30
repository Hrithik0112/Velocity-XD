import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserTypings from "./components/UserTypings";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage, calculateWordsPerMinute } from "./utils/helper";

const COUNTDOWN_SECONDS = 30;

function App() {
  const { state, words, timeLeft, typed, errors, restart, totalTyped } = useEngine();
  const wpm = calculateWordsPerMinute(totalTyped / 5, COUNTDOWN_SECONDS - timeLeft);
  return (
    <>
      <CountdownTimer timeleft={timeLeft} />
      <WordsContainer>
        <GenarateRandomWords words={words} />
        <UserTypings className="absolute inset-0" words={words} userInput={typed} />
      </WordsContainer>
      <RestartButton className={"mx-auto mt-10 text-slate-500"} onRestart={restart} />
      <Results
        className="mt-10"
        state={state}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        errors={errors}
        total={totalTyped}
        wpm={wpm}
      />
    </>
  );
}

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative text-3xl max-w-xl leading-relaxed break-all mt-3">{children}</div>
  );
};

const GenarateRandomWords = ({ words }: { words: string }) => {
  return <div className=" text-slate-500">{words}</div>;
};

const CountdownTimer = ({ timeleft }: { timeleft: number }) => {
  return (
    <h2 className="text-primary font-medium flex justify-between">
      <p>Time : {timeleft}</p>
      <p className="font-mono font-bold text-white text-3xl">
        Velocity-<strong className="font-extrabold text-primary">XD</strong>
      </p>
    </h2>
  );
};

export default App;
