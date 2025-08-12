import { useState } from 'react';

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("x");

  function handleSelectSquare() {
    setActivePlayer ((preActivePlayer) => preActivePlayer === 'x' ? 'o':'x' );
  }



  // this <main> is for the main container
  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
        <Player initialName="player 1" symbol="x" isActive={activePlayer === 'x'}/>
        <Player initialName="player 2" symbol="o" isActive={activePlayer === 'o'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlaySymbol={activePlayer}/>
      </div>
    </main>
  );
}

export default App;
