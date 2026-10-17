import { useState } from "react";
import flashcards from "./data";

function App() {
  const [cardIndex, setCardIndex] = useState(0);
  const [score, setScore] = useState(0);

  const currentCard = flashcards[cardIndex];

  function handleAnswer(selectedAnswer: string) {
    console.log(selectedAnswer);

    if (selectedAnswer !== currentCard.back) {
      setScore(0);
      return;
    }

    if (cardIndex === flashcards.length - 1) {
      alert("end");
      return;
    }

    setScore(score + 1);
    setCardIndex(cardIndex + 1);
  }

  return (
    <main>
      <header>
        <h1>Quiz</h1>
        <span>
          Score <strong>{score}</strong>
        </span>
      </header>

      <div className="flashcard">
        <h2>{currentCard.front}</h2>
      </div>

      <div className="answers">
        {currentCard.options.map((option) => (
          <button key={option} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>

      <p className="game-hint">Every correct answer increases your score. One mistake resets it.</p>
    </main>
  );
}

export default App;
