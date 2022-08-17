import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages';
import { Question } from '../pages/question';

export const ROUTES = {
  HOME: '/',
  QUESTION: 'question/:id',
} as const;

export function Router() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.QUESTION} element={<Question />} />
    </Routes>
  );
}
