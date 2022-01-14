import React from 'react'

export default function PokemonList({ pokemon }) {
  return (
    <div>
      <div className='mb-4'>
        <span>
          Listado de pokemones:
        </span>
      </div>
        {pokemon.map( pok => (
          <div key={pok}>
            {pok}
          </div>
        ))}
    </div>
  )
}