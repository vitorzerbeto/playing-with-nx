import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-5">
      <h1 className="text-white text-7xl font-bold font-mono">Quizz Game!</h1>
      <Link to="question/1" className="custon-button bg-cyan-200 hover:bg-cyan-300 active:bg-cyan-400">
        Start
      </Link>
    </div>
  );
}
