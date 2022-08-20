import { atom } from 'jotai';

import { IQuestion } from '../types';
import { loadedQuestionsAtom } from './loadedQuestions';

export const currentQuestionIdAtom = atom('1');
export const currentQuestionAtom = atom<IQuestion>((get) => {
  const questions = get(loadedQuestionsAtom);
  const id = get(currentQuestionIdAtom);

  return questions[id];
});
