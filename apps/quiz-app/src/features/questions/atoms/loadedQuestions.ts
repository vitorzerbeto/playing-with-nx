import { atom } from 'jotai';

import { ILoadedQuestions } from '../types';

const QUESTIONS: ILoadedQuestions = {
  '1': {
    id: '1',
    title: 'Qual é a capital do Brasil?',
    answer: 'brasilia',
    answerOptions: [
      { title: 'Brasília', value: 'brasilia' },
      { title: 'São Paulo', value: 'saopaulo' },
      { title: 'Rio de Janeiro', value: 'riodejaneiro' },
      { title: 'Recífe', value: 'recife' },
    ],
    nextQuestion: '2',
  },
  '2': {
    id: '2',
    title: 'Quantos ossos tem o corpo humano?',
    answer: '206',
    answerOptions: [
      { title: '206', value: '206' },
      { title: '222', value: '222' },
      { title: '123', value: '123' },
      { title: '190', value: '190' },
    ],
  },
};

export const loadedQuestionsAtom = atom<ILoadedQuestions>(QUESTIONS);
