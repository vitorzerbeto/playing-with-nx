type IAnswerOption = {
  value: string;
  text: string;
  isChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function AnswerOption({ text, value, isChecked = false, onChange }: IAnswerOption) {
  return (
    <label htmlFor={`answer-${value}`} className="answer-option">
      <span>{text}</span>
      <div className="hidden">
        <input
          type="radio"
          value={value}
          id={`answer-${value}`}
          checked={isChecked}
          onChange={(event) => onChange?.(event)}
        />
      </div>
    </label>
  );
}
