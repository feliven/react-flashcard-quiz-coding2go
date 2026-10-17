import { useState } from "react";
import flashcards from "./data";
import AnswerOption from "./component/AnswerOption";

function shuffle<T>(items: T[]): T[] {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function App() {
  const [cards, _setCards] = useState(() => shuffle(flashcards));
  const [cardIndex, setCardIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);

  const currentCard = cards[cardIndex];

  function handleAnswer(selectedAnswer: string) {
    if (finished) {
      return;
    }

    setSelectedOption(selectedAnswer);
    setScore(selectedAnswer === currentCard.back ? score + 1 : 0);

    setTimeout(() => {
      if (cardIndex === cards.length - 1) {
        setFinished(true);
        return;
      }

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
