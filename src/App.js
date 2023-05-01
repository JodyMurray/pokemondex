import { useState } from "react";
import Axios from "axios";

import { TitleSection } from "./components/TitleSection";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defence: "",
    type: "",
  });

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
        setPokemon({
          name: pokemonName,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defence: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
        });
        setPokemonChosen(true);
      }
    );
  };

  return (
    <div className="App">
      <TitleSection
        pokemonName={pokemonName}
        setPokemonName={setPokemonName}
        searchPokemon={searchPokemon}
      />
      <div className="DisplaySection">
        {!pokemonChosen ? (
          <h2> Please choose a Pokemon</h2>
        ) : (
          <>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.img} />
            <h3>Species: {pokemon.species}</h3>
            <h3>Type: {pokemon.type}</h3>
            <h4>HP: {pokemon.hp}</h4>
            <h4>Attack: {pokemon.attack}</h4>
            <h4>Defence: {pokemon.defence}</h4>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
