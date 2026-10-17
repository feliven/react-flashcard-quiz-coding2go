// import { useState } from "react";
import flashcards from "./data";

function App() {
  //   const [cardIndex, setCardIndex] = useState(0);

  const currentCard = flashcards[0];

  return (
    <main>
      <header>
        <h1>Quiz</h1>
        <span>
          Score <strong>0</strong>
        </span>
      </header>

      <div className="flashcard">
        <h2>{currentCard.front}</h2>
      </div>

      <div className="answers">
        <button>{currentCard.options[0]}</button>
        <button>{currentCard.options[1]}</button>
        <button>{currentCard.options[2]}</button>
        <button>{currentCard.options[3]}</button>
      </div>

      <p className="game-hint">Every correct answer increases your score. One mistake resets it.</p>
    </main>
  );
}

export default App;
