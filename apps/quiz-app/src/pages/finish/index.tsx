import { useAtomValue } from 'jotai';
import { answersAtom } from '../../features/questions/atoms/anwers';
import { IAnswers } from '../../features/questions/types';

const getAnswers = (answers: IAnswers) => {
  const elements = [];

  for (const answer of answers) {
    elements.push(answer);
  }

  return elements;
};

const DivAnswers = ([id, value]: [string, boolean]) => (
  <div>
    <p>{id}</p>
    <p>{value ? 'correta' : 'incorreta'}</p>
  </div>
);

export function FinishPage() {
  const anwers = useAtomValue(answersAtom);

  return (
    <div className="flex flex-col justify-center items-center gap-y-5">
      <h1 className="text-white text-7xl font-bold font-mono">Finished!</h1>
      {getAnswers(anwers).map(DivAnswers)}
    </div>
  );
}
