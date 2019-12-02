import React, { useEffect, useState } from "react";
import pokemonAPI from "../api/pokemonAPI";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    console.log("weheeeee");
    pokemonAPI
      .getAll()
      .then(res => {
        setPokemons(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  console.log("render");
  return (
    <div>
      <h1>Pokemons page !</h1>
      <ul>
        {pokemons.map((pokemon, i) => (
          <li key={i}>
            <p>{pokemon.name}</p>
            <img src={pokemon.picture} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemons;
