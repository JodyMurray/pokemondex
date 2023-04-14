import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {

  const [pokemonName, setPokemonName] = useState('');
  const [pokemon, setPokemon] = useState({})
  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
      setPokemon({
        name: pokemonName, 
        species: response.data.species.name, 
        img: response.data.sprites.front_default, 
        hp: response.data.stats[0].base_stat, 
        attack: response.data.stats[1].base_stat,
        defence: response.data.stats[2].base_stat,
        type: response.data.types[0].type.name,

      })
    });
  };



  return (
    <div className="App">
      <div className="TitleSection">
        <p>
          Pokemon stats
        </p>
        <input type="text" onChange={(event) => {
          setPokemonName(event.target.value);
        }} />
        <button onClick={searchPokemon}>Search Pokemon</button>
      </div>
    </div>
  );
}

export default App;
