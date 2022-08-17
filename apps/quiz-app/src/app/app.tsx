import { Router } from './route';

import './../index.css';

export function App() {
  return (
    <main className="bg-indigo-900 min-h-screen flex flex-row items-center justify-center p-9 font-">
      <div className="max-w-7xl w-full">
        <Router />
      </div>
    </main>
  );
}

export default App;
