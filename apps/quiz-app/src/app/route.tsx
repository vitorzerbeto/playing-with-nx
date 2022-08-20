import { Route, Routes } from 'react-router-dom';
import { HomePage, QuestionsPage } from '../pages';
import { FinishPage } from '../pages/finish';

export const ROUTES = {
  HOME: '/',
  QUESTION: 'question/:questionId',
  FINISH: 'finish',
} as const;

export function Router() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.QUESTION} element={<QuestionsPage />} />
      <Route path={ROUTES.FINISH} element={<FinishPage />} />
    </Routes>
  );
}
