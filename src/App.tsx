import { faker } from "@faker-js/faker";
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";

const words = faker.lorem.words(10);

function App() {
  return (
    <>
      <CountdownTimer timeleft={30} />
      <GenarateRandomWords words={words} />
      <RestartButton className={"mx-auto mt-10 text-slate-500"} onRestart={() => null} />
      <Results className="mt-10" accuracyPercentage={100} errors={20} total={200} />
    </>
  );
}

const GenarateRandomWords = ({ words }: { words: string }) => {
  return <div className="text-4xl text-center text-slate-500">{words}</div>;
};

const CountdownTimer = ({ timeleft }: { timeleft: number }) => {
  return <h2 className="text-primary font-medium">Time : {timeleft}</h2>;
};

export default App;
