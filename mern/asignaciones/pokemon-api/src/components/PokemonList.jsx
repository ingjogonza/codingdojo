import React from 'react'

const PokemonList = ({pokemon}) => {
   const {name} =pokemon
    return (
        <div>
            <ul>
                <li>{name}</li>
            </ul>
            
        </div>
    )
}

export default PokemonList
