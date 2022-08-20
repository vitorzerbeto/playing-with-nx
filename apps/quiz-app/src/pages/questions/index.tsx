import { useParams } from 'react-router-dom';
import { QuestionsContainer } from '../../features/questions';

export function QuestionsPage() {
  const { questionId } = useParams();

  return <QuestionsContainer questionId={questionId} />;
}
