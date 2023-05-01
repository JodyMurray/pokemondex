import React from "react";

export const TitleSection = (props) => {
  const { pokemonName, setPokemonName, searchPokemon } = props;

  return (
    <div className="TitleSection">
      <p>Pokemon stats</p>
      <input
        type="text"
        value={pokemonName}
        onChange={(event) => {
          setPokemonName(event.target.value);
        }}
      />
      <button onClick={searchPokemon}>Search Pokemon</button>
    </div>
  );
};
