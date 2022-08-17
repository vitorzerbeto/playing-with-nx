import { useState } from 'react';
import { AnswerOption } from './AnswerOption';

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

  console.log({ selectedAnswer });

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="w-full bg-sky-500/50 py-10 px-6 text-center rounded border-2 border-sky-500">
        <h3 className="text-white text-5xl font-bold font-mono">{QUESTION.title}</h3>
      </div>
      <div className="grid grid-cols-2 w-full gap-3">
        {QUESTION.answerOptions.map(({ title, value }) => (
          <AnswerOption
            text={title}
            value={value}
            isChecked={selectedAnswer === value}
            onChange={(e) => setSelectedAnswer(e.target.value)}
          />
        ))}
      </div>
      <button
        disabled={!selectedAnswer}
        className="custon-button bg-lime-700 text-white hover:bg-lime-800 active:bg-lime-900 disabled:bg-stone-400 disabled:cursor-not-allowed"
      >
        Responder e ir para a próxima
      </button>
    </div>
  );
};
