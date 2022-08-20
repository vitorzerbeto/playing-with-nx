import './answer-option.css';

type IAnswerOptionProp = {
  value: string;
  text: string;
  isChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function AnswerOption({ text, value, isChecked = false, onChange }: IAnswerOptionProp) {
  return (
    <label htmlFor={`answer-${value}`} className="answer-option">
      <input
        type="radio"
        value={value}
        id={`answer-${value}`}
        checked={isChecked}
        onChange={(event) => onChange?.(event)}
        className="hidden"
      />
      <span>{text}</span>
    </label>
  );
}
