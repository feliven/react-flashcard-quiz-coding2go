type AnswerOptionProps = {
  option: string;
  onAnswer: (option: string) => void;
};

function AnswerOption(props: AnswerOptionProps) {
  return (
    <button key={props.option} onClick={() => props.onAnswer(props.option)}>
      {props.option}
    </button>
  );
}

export default AnswerOption;
