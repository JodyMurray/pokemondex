import React from "react";

export const DisplaySection = ({ pokemon, pokemonChosen }) => {
  return (
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
  );
};
