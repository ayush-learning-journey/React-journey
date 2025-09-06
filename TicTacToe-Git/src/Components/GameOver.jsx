


export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over" className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center">
      <div className="bg-gray-900 text-amber-400 rounded-lg shadow-2xl p-4 sm:p-8 text-center animate-fade-in">
  <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">Game Over!</h2>
  {winner && <p className="text-lg sm:text-2xl mb-6">{winner} won!</p>}
  {!winner && <p className="text-lg sm:text-2xl mb-6">It's a draw!</p>}
        <p>
          <button
            onClick={onRestart}
            className="px-6 py-3 bg-amber-500 text-gray-900 font-bold rounded-md hover:bg-amber-400 transition-colors duration-300"
          >
            Rematch
          </button>
        </p>
      </div>
    </div>
  );
} 