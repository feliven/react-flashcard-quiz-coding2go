type AnswerOptionProps = {
  option: string;
  onAnswer: (option: string) => void;
  correctAnswer: string;
  selectedAnswer: string | null;
};

function AnswerOption({ option, onAnswer, correctAnswer, selectedAnswer }: AnswerOptionProps) {
  let answerClass = "";

  if (selectedAnswer !== null && option === selectedAnswer) {
    answerClass = option === correctAnswer ? "correct" : "incorrect";
  }

  return (
    <button className={answerClass} key={option} onClick={() => onAnswer(option)}>
      {option}
    </button>
  );
}

export default AnswerOption;
