import { atom } from 'jotai';

import { IAnswers, IAnswer } from '../types';

export const answersAtom = atom<IAnswers>(new Map());
export const addAnswersAtom = atom(null, (get, set, { questionId, isCorrect }: IAnswer) => {
  const answers = get(answersAtom);

  set(answersAtom, answers.set(questionId, isCorrect));
});
