import React, { useState } from 'react';
import PokemonList from './components/PokemonList';
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([])

  //metodo get para obtener los nombres de los pokemones
  axios.get("https://pokeapi.co/api/v2/pokemon/").then( res => {
    setPokemon(res.data.results.map( pok => pok.name))
  })

  return (
    <>
      <PokemonList pokemon={pokemon} />
    </>
  );
}

export default App;