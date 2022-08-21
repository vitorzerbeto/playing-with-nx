import { IResponseQuestionPayload } from '../types';

export function getQuestions({
  category,
  difficulty,
}: {
  category: number;
  difficulty: string;
}): Promise<IResponseQuestionPayload> {
  return fetch(
    `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`
  ).then((response) => response.json());
}
