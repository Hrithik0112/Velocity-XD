import { faker } from "@faker-js/faker";

const words = faker.lorem.words(10);

function App() {
  return <GenarateRandomWords words={words} />;
}

const GenarateRandomWords = ({ words }: { words: string }) => {
  return <div className="text-4xl text-center text-slate-500">{words}</div>;
};

export default App;
