import { atom } from 'jotai';

import { ILoadedQuestions, IResponseQuestion } from '../types';
import { decodeHTMLEntities } from '../utils/decodeHTMLEntities';
import { shuffle } from '../utils/shuffle';

const INITIAL_STATE: ILoadedQuestions = {
  '0': {
    id: '',
    title: '',
    answerOptions: [],
    answer: '',
  },
};

function formatQuestionRequestToState(questions: IResponseQuestion[]): ILoadedQuestions {
  const totalQuestions = questions.length;

  const result = questions.reduce((acc, { question, incorrect_answers, correct_answer }, index) => {
    const id = index + 1;

    return {
      ...acc,
      [id]: {
        id,
        title: decodeHTMLEntities(question),
        answerOptions: shuffle([...incorrect_answers, correct_answer]).map((answer) => ({
          title: answer,
          value: answer,
        })),
        answer: correct_answer,
        nextQuestion: totalQuestions !== id && `${id + 1}`,
      },
    };
  }, {});

  console.log({ totalQuestions, result });

  return result;
}

export const loadedQuestionsAtom = atom<ILoadedQuestions>(INITIAL_STATE);
export const updateLoadedQuestionsAtom = atom(
  null,
  (get, set, { questions }: { questions: IResponseQuestion[] }) => {
    const newQuestions = formatQuestionRequestToState(questions);
    set(loadedQuestionsAtom, newQuestions);
  }
);
