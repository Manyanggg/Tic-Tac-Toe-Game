import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log"; 

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("x");

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((preActivePlayer) => (preActivePlayer === "x" ? "o" : "x"));
    setGameTurns((preTurns) => {
      let currentPlayer = "x" ;

      if (preTurns.length > 0 && preTurns[0].player === "x") {
        currentPlayer = "0" ;
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...preTurns,
      ];
      return updatedTurns;
    });
  }

  // this <main> is for the main container
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player 1"
            symbol="x"
            isActive={activePlayer === "x"}
          />
          <Player
            initialName="player 2"
            symbol="o"
            isActive={activePlayer === "o"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
