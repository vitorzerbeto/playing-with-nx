import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Question } from './components';
import { currentQuestionAtom, currentQuestionIdAtom } from './atoms/currentQuestion';
import { addAnswersAtom } from './atoms/anwers';

interface IQuestionsContainer {
  questionId: string | undefined;
}

export function QuestionsContainer({ questionId }: IQuestionsContainer) {
  const setCurrentQuestionId = useSetAtom(currentQuestionIdAtom);
  const addAnwers = useSetAtom(addAnswersAtom);
  const currentQuestion = useAtomValue(currentQuestionAtom);

  const navigate = useNavigate();

  useEffect(() => {
    if (questionId) {
      setCurrentQuestionId(questionId);
    }
  }, [questionId, setCurrentQuestionId]);

  const handleSelectOption = (value: string) => {
    const { nextQuestion } = currentQuestion;
    addAnwers({ questionId: questionId ?? '', userAnswer: value });

    if (nextQuestion) {
      navigate(`/question/${nextQuestion}`, { replace: false });
    } else {
      navigate(`/finish`);
    }
  };

  if (questionId === undefined) return <p>LOADING...</p>;

  return <Question onSelectAnswer={handleSelectOption} />;
}
