import { faker } from "@faker-js/faker";
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserTypings from "./components/UserTypings";

const words = faker.lorem.words(10);

function App() {
  return (
    <>
      <CountdownTimer timeleft={30} />
      <WordsContainer>
        <GenarateRandomWords words={words} />
        <UserTypings className="absolute inset-0" userInput={"test"} />
      </WordsContainer>
      <RestartButton className={"mx-auto mt-10 text-slate-500"} onRestart={() => null} />
      <Results className="mt-10" accuracyPercentage={100} errors={20} total={200} />
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
  return <h2 className="text-primary font-medium">Time : {timeleft}</h2>;
};

export default App;
