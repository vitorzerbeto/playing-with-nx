export function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-5">
      <h1 className="text-white text-7xl font-bold font-mono">Quizz Game!</h1>
      <button className="bg-cyan-200 w-full max-w-xs py-5 cursor-pointer rounded-lg text-3xl shadow-black transition-colors duration-300 hover:bg-cyan-300 active:bg-cyan-400">
        Start
      </button>
    </div>
  );
}
