import { useState } from "react";
import Axios from "axios";

import { TitleSection } from "./components/TitleSection";
import { DisplaySection } from "./components/DisplaySection";

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
      <DisplaySection
        pokemon={pokemon}
        pokemonChosen={pokemonChosen}
      />
    </div>
  );
}

export default App;
