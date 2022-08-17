import { Route, Routes } from 'react-router-dom';
import { HomePage, QuestionsPage } from '../pages';

export const ROUTES = {
  HOME: '/',
  QUESTION: 'question/:id',
} as const;

export function Router() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.QUESTION} element={<QuestionsPage />} />
    </Routes>
  );
}
