import { useState } from "react";

export default function Player({ initialName, symbol, isActive , onChangeName}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    if (isEditing) {
    onChangeName(symbol, playerName) }
    setIsEditing((editing) => !editing);
  }

  return (

    <li
      className={`flex flex-1 items-center justify-between rounded-lg p-4 shadow-lg transition-colors duration-300 ${
        isActive ? "bg-cyan-900" : "bg-gray-800"
      }`}
    >
      <div className="flex items-center w-40 gap-x-6">
        {isEditing ? (
          <input
            type="text"
            placeholder="Player name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="w-full rounded-md bg-gray-700 px-2 py-1 text-lg font-semibold text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        ) : (
          <span className="text-lg font-semibold text-gray-300">
            {playerName}
          </span>
        )}
        <span className="text-2xl font-bold text-cyan-400 ml-4">{symbol}</span>
      </div>

      <button
        onClick={handleEditClick}
        className="rounded-md bg-gray-700 px-3 py-1 text-sm font-semibold text-yellow-100 transition hover:bg-gray-600"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}