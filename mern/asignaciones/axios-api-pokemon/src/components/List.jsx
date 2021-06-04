import React from 'react'

const List = (props) => {
    const {pokemon} = props
    return (
        <div>
            <ul>
                <li>{pokemon.name}</li>
            </ul>
        </div>
    )
}

export default List
