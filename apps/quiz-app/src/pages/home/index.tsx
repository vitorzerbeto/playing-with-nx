import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { getQuestions } from '../../features/questions/api/service';
import { updateLoadedQuestionsAtom } from '../../features/questions/atoms/loadedQuestions';

export function HomePage() {
  const setQuestions = useSetAtom(updateLoadedQuestionsAtom);

  const { data, isLoading, isSuccess } = useQuery(['questions'], () =>
    getQuestions({ category: 11, difficulty: 'easy' })
  );

  useEffect(() => {
    if (isSuccess) {
      setQuestions({ questions: data.results });
    }
  }, [data, isSuccess, setQuestions]);

  return (
    <div className="flex flex-col justify-center items-center gap-y-5">
      <h1 className="text-white text-7xl font-bold font-mono">Quizz Game!</h1>
      {!isLoading && (
        <Link
          to="question/1"
          className="custon-button bg-cyan-200 hover:bg-cyan-300 active:bg-cyan-400"
        >
          Start
        </Link>
      )}
    </div>
  );
}
