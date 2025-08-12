import Player from "./components/Player";


function App() {
  // this <main> is for the main container
  return (
    <main>
      <div id="game-container">
        <ol id="players">
        <Player initialName="player 1" symbol="x" />
        <Player initialName="player 2" symbol="o" />
        </ol>
      </div>
    </main>
  );
}

export default App;
