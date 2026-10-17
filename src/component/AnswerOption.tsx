type AnswerOptionProps = {
  option: string;
  onAnswer: (option: string) => void;
};

function AnswerOption({ option, onAnswer }: AnswerOptionProps) {
  return (
    <button className="correct" key={option} onClick={() => onAnswer(option)}>
      {option}
    </button>
  );
}

export default AnswerOption;
