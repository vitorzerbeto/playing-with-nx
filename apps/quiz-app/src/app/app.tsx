import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            This is the generated root route. <Link to="/page-2">Click here for page 2.</Link>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
