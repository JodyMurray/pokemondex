import './App.css';
import { useState } from 'react';

function App() {

  const [pokemonName, setPokemonName] = useState('');

  return (
    <div className="App">
      <div className="TitleSection">
        <p>
          Pokemon stats
        </p>
        <input type="text" onChange={(event) => {
          setPokemonName(event.target.value);
        }} />
        <button>Search Pokemon</button>
      </div>
    </div>
  );
}

export default App;
