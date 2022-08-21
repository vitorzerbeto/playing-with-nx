import { useAtomValue } from 'jotai';

import { currentQuestionAtom } from '../../atoms/currentQuestion';
import { getTotalQuestionsAtom } from '../../atoms/loadedQuestions';

export function QuestionsProgress() {
  const { id } = useAtomValue(currentQuestionAtom);
  const total = useAtomValue(getTotalQuestionsAtom);

  return (
    <div className="absolute bottom-5 left-2/4 -translate-x-2/4">
      <span className="text-cyan-100">
        {id}/{total}
      </span>
    </div>
  );
}
