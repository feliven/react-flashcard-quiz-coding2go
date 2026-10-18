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

function createShuffledDeck() {
  return shuffle(flashcards).map((card) => ({
    ...card,
    options: shuffle(card.options),
  }));
}

function App() {
  const [cards, setCards] = useState(createShuffledDeck);
  const [cardIndex, setCardIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);

  const maxRounds = 3;
  const currentCard = cards[cardIndex];

  function handleAnswer(selectedAnswer: string) {
    // Ignore clicks if the game is over or the correct answer has already been chosen
    if (finished || selectedOption === currentCard.back) {
      return;
    }

    setSelectedOption(selectedAnswer);

    const isAnswerCorrect = selectedAnswer === currentCard.back;
    setScore(isAnswerCorrect ? score + 1 : 0);

    if (!isAnswerCorrect) {
      return;
    }

    setTimeout(() => {
      if (cardIndex === maxRounds - 1) {
        setFinished(true);
        return;
      }

      setCardIndex(cardIndex + 1);
      setSelectedOption(null);
    }, 350);
  }

  function handleReset() {
    setCards(createShuffledDeck());
    setCardIndex(0);
    setScore(0);
    setSelectedOption(null);
    setFinished(false);
  }

  if (finished) {
    return (
      <main>
        <div className="finished">
          <h1>Game over!</h1>
          <h2>Final score:</h2>
          <h3>{score}</h3>
          <button
            onClick={() =>
              setTimeout(() => {
                handleReset();
              }, 350)
            }
          >
            Start over
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <header>
        <h1>Quiz</h1>
        <span>
          Score: <strong>{score}</strong>
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
