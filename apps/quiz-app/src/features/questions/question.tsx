import { useState } from 'react';
import { AnswerOption } from './components';

type AnswerOption = {
  title: string;
  value: string;
};

type Question = {
  title: string;
  answerOptions: AnswerOption[];
  answer: string;
};

const QUESTION: Question = {
  title: 'Qual é a capital do Brasil?',
  answer: 'brasilia',
  answerOptions: [
    { title: 'Brasília', value: 'brasilia' },
    { title: 'São Paulo', value: 'saopaulo' },
    { title: 'Rio de Janeiro', value: 'riodejaneiro' },
    { title: 'Recífe', value: 'recife' },
  ],
};

export const Question = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>();

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="w-full bg-sky-500/50 py-10 px-6 text-center rounded border-2 border-sky-500">
        <h3 className="text-white text-5xl font-bold font-mono">{QUESTION.title}</h3>
      </div>
      <div className="grid grid-cols-2 w-full max-w-4xl gap-3 mx-auto">
        {QUESTION.answerOptions.map(({ title, value }) => (
          <AnswerOption
            key={value}
            text={title}
            value={value}
            isChecked={selectedAnswer === value}
            onChange={(e) => setSelectedAnswer(e.target.value)}
          />
        ))}
      </div>
    </div>
  );
};
