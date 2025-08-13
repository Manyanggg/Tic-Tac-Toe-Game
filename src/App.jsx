import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "x";
  if (gameTurns.length > 0 && gameTurns[0].player === "x") {
    currentPlayer = "o"; 
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const gameBoard = INITIAL_GAME_BOARD.map(row => [...row]);
  for (const turn of gameTurns) {
    const { row, col } = turn.square;
    gameBoard[row][col] = turn.player;
  }

  let winner = null;
  for (const combo of WINNING_COMBINATIONS) {
    const a = gameBoard[combo[0].row][combo[0].column];
    const b = gameBoard[combo[1].row][combo[1].column];
    const c = gameBoard[combo[2].row][combo[2].column];
    if (a && a === b && a === c) {
      winner = a;
      break;
    }
  }

  const activePlayer = deriveActivePlayer(gameTurns);

  const hasDraw = gameTurns.length === 9 && !winner ;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prev => {

      if (gameBoard[rowIndex][colIndex] !== null) return prev;

      const currentPlayer = deriveActivePlayer(prev);
      return [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prev,
      ];
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player 1" symbol="x" isActive={activePlayer === "x"} />
          <Player initialName="player 2" symbol="o" isActive={activePlayer === "o"} />
        </ol>

        {(winner || hasDraw) && <GameOver winner={winner} onReastrt={handleRestart}/>}

        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>

      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
