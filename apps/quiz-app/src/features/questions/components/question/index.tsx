import { useAtom } from 'jotai';
import { useState } from 'react';

import { AnswerOption } from '..';
import { currentQuestionAtom } from '../../atoms/currentQuestion';

type IQuestionProp = {
  onSelectAnswer: (value: string) => void;
};

export const Question = ({ onSelectAnswer }: IQuestionProp) => {
  const [question] = useAtom(currentQuestionAtom);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleChange = (value: string) => {
    setSelectedAnswer(value);
    onSelectAnswer(value);
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="w-full bg-sky-500/50 py-10 px-6 text-center rounded border-2 border-sky-500">
        <h3
          className="text-white text-3xl font-bold font-mono"
          dangerouslySetInnerHTML={{ __html: question?.title }}
        ></h3>
      </div>
      <div className="grid grid-cols-2 w-full max-w-4xl gap-3 mx-auto">
        {question?.answerOptions.map(({ title, value }) => (
          <AnswerOption
            key={value}
            text={title}
            value={value}
            isChecked={selectedAnswer === value}
            onChange={(e) => handleChange(e.target.value)}
          />
        ))}
      </div>
    </div>
  );
};
