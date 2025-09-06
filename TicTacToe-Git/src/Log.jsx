



export default function Log({ turns }) {
  return (
    <ol id="log" className="p-3 mt-4 rounded-md bg-gray-800 text-white shadow-lg w-full max-w-sm sm:max-w-md mx-auto text-sm sm:text-lg">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`} className="text-lg mb-2 p-2 bg-gray-700 rounded-sm flex justify-between">
          <span>
            <span
              className={`font-bold ${
                turn.player === 'X' ? 'text-cyan-400' : 'text-yellow-400'
              }`}
            >
              {turn.player}
            </span> selected row {turn.square.row + 1}, col {turn.square.col + 1}
          </span>
        </li>
      ))}
    </ol>
  );
}