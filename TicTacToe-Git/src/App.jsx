import { useState } from 'react'
import {WINCOMB} from './Components/WINCOMB.jsx'
import './App.css'
import Header from './Components/Header.jsx'
import Player from './Components/Player.jsx'
import GameOver from './Components/GameOver.jsx'
import GameBoard from './Components/GameBoard.jsx'
import Log from './Log.jsx'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function deriveActivePlayer(gameTurns) {
let CurrentPlayer = 'X';

      if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
        CurrentPlayer = 'O'
      }
      return CurrentPlayer;
}


function App() {
  const [players, setPlayers] = useState({
    'X' : "Player 1",
    'O' : "Player 2"
  })
  const [gameTurns, setGameTurns]  = useState([])
  //const [hasWinner, setHasWinner] = useState

  const activePlayer = deriveActivePlayer(gameTurns);


let gameBoard = [...initialGameBoard.map(array => [...array])];

    for (const turn of gameTurns) {
      
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }

    let winner;

  for (const combination of WINCOMB) {
    const firstSquareSymbol = gameBoard[combination[0].row] [combination[0].col];
    const secondSquareSymbol = gameBoard[combination[1].row]  [combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row]  [combination[2].col];

    if(firstSquareSymbol &&
       firstSquareSymbol === secondSquareSymbol && 
       firstSquareSymbol === thirdSquareSymbol)
       {
        winner = players[firstSquareSymbol];
       }
  }

   const hasDraw = gameTurns.length === 9 && !winner;
  
  function handleSelectSquare(rowIndex, colIndex) {
    //setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      const CurrentPlayer = deriveActivePlayer(prevTurns)
      const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: CurrentPlayer},...prevTurns];
    return updatedTurns;
    })
  }

  function Restart(){
      setGameTurns([]);
    }

    function handlePlayerNameChange(symbol, newName) {
      setPlayers (prevPlayers => {
        return {
          ...prevPlayers,[symbol] : newName
        }
      }) 
    }
  return (
    <>   
      <header>
        <Header />
      </header> 
    
      <main>
       <div
  id="game-container"
  className="flex w-full flex-col items-center bg-gray-900 p-2 sm:p-4 font-sans text-white
             min-h-screen md:h-[35rem]"
  >

  <ol
    id="players"
    className="flex flex-col sm:flex-row max-w-full sm:max-w-md justify-center gap-3 sm:gap-6 mt-0 mb-6"
  >
    <Player initialName="Player 1" 
    symbol="X"  
    isActive={activePlayer === 'X' } 
    onChangeName={handlePlayerNameChange} />

    <Player initialName="Player 2" 
    symbol="O" 
    isActive={activePlayer === 'O' }
    onChangeName={handlePlayerNameChange} />

  </ol>


{(winner || hasDraw) && <GameOver winner={winner} onRestart={Restart} />}
  <div className="flex w-full max-w-3xl flex-1 items-center justify-center bg-gray-800 rounded-xl shadow-md">
    <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
  </div>
</div>

<Log turns={gameTurns}/>
      </main>
    </>
  )
}

export default App
