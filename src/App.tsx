import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function increaseCounterHandler() {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increaseCounterHandler}>Click to increase</button>
    </>
  );
}

export default App;
