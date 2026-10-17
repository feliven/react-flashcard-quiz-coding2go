// import { useState } from "react";

function App() {
  //   const [counter, setCounter] = useState(0);

  return (
    <main>
      <header>
        <h1>Quiz</h1>
        <span>
          Score <strong>0</strong>
        </span>
      </header>

      <div className="flashcard">
        <h2>Apple</h2>
      </div>

      <div className="answers">
        <button>Answer 1</button>
        <button>Answer 2</button>
        <button>Answer 3</button>
        <button>Answer 4</button>
      </div>

      <p className="game-hint">Every correct answer increases your score. One mistake resets it.</p>
    </main>
  );
}

export default App;
