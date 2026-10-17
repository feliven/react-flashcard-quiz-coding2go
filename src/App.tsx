import { useState } from "react";
import flashcards from "./data";
import AnswerOption from "./component/AnswerOption";

function App() {
  const [cardIndex, setCardIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const currentCard = flashcards[cardIndex];

  function handleAnswer(selectedAnswer: string) {
    setSelectedOption(selectedAnswer);

    if (selectedAnswer !== currentCard.back) {
      setScore(0);
      return;
    }

    if (cardIndex === flashcards.length - 1) {
      alert("end");
      return;
    }

    setScore(score + 1);

    setTimeout(() => {
      setCardIndex(cardIndex + 1);
      setSelectedOption(null);
    }, 1000);
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
          <AnswerOption
            key={option}
            option={option}
            onAnswer={handleAnswer}
            correctAnswer={currentCard.back}
            selectedAnswer={selectedOption}
          />
        ))}
      </div>

      <p className="game-hint">Every correct answer increases your score. One mistake resets it.</p>
    </main>
  );
}

export default App;
