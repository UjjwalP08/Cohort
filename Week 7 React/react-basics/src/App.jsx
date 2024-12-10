import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  );
}

function Count() {
  return (
    <div>
      <CountRender />
      <ButtonRender />
    </div>
  );
}

function CountRender() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      {count}
      <EvenRender />
    </div>
  );
}

function EvenRender() {
  const isEven = useRecoilValue(evenSelector);
  return <div>{isEven ? "It is Even" : null}</div>;
}

function ButtonRender() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
