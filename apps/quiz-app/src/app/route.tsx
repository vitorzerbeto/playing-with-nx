import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages';

const ROUTES = {
  HOME: '/',
  FINISH: 'finish',
} as const;

export function Router() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
    </Routes>
  );
}
