export type IAnswerOption = {
  title: string;
  value: string;
};

export type IQuestion = {
  id: string;
  title: string;
  answerOptions: IAnswerOption[];
  answer: string;
  nextQuestion?: string;
};

export type ILoadedQuestions = Record<string, IQuestion>;

export type IAnswer = {
  questionId: string;
  userAnswer: string;
};

export type IAnswers = Map<string, string>;

export type IResponseQuestion = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type IResponseQuestionPayload = {
  response_code: number;
  results: IResponseQuestion[];
};
