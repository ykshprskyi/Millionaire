import "./Answer.scss";

interface AnswerProps {
  text: string;
}

export const Answer = ({ text }: AnswerProps) => {
  return (
    <div className="answer_item__wrapper">
      <span className="answer_item__text">{text}</span>
    </div>
  );
};
