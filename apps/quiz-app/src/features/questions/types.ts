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
