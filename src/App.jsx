import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  // this <main> is for the main container
  return (
    <main>
      <div id="game-container">
        <ol id="players">
        <Player initialName="player 1" symbol="x" />
        <Player initialName="player 2" symbol="o" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
