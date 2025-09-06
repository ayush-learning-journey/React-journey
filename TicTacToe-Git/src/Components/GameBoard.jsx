


export default function GameBoard({onSelectSquare, board}) {

    


      return (
      
        <ol id="game-board" className="flex flex-col gap-4 p-4 bg-gray-900 rounded-lg">
          {board.map((row, rowIndex) => (
            <li key={rowIndex}>
              {/* Row container: lays out cells horizontally with a gap */}
              <ol className="flex gap-4">
                {row.map((PlayerSymbol, colIndex) => (
                  <li key={colIndex}>
                  
                 <button
  onClick={() => onSelectSquare(rowIndex, colIndex)}
  disabled={PlayerSymbol !== null}
  className="
    w-16 h-16 text-3xl          /* default mobile size */
    sm:w-20 sm:h-20 sm:text-4xl /* small screens and up */
    md:w-24 md:h-24 md:text-5xl /* medium+ screens = your PC */
    bg-gray-800 rounded-md font-bold text-cyan-500 
    hover:bg-gray-700 hover:text-white 
    transition-all duration-200
  "
>
  {PlayerSymbol}
</button>
   
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      );
    }