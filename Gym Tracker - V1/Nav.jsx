export default function Nav({setActive}) {
    return (
        <nav className="flex items-center bg-gray-200 w-full">
  <button onClick={() => setActive("counter")}
    className="flex-1 px-6 py-2 h-full text-center rounded-lg text-purple-800 font-bold hover:bg-gray-300 transition-colors">
    Workout Counts
  </button>
  <button  onClick={() => setActive("mood")}
    className="flex-1 px-6 py-2 h-full text-center text-purple-800 font-bold hover:bg-gray-300 transition-colors">
    Mood
  </button>
  <button onClick={() => setActive("notes")}
    className="flex-1 px-6 py-2 h-full text-center text-purple-800 font-bold hover:bg-gray-300 transition-colors">
    Notes
  </button>
</nav>

    );
}