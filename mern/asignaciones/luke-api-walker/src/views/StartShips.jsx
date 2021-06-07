import React from 'react'

const StartShips = ({singleItem}) => {
    return (
        <div className="card card-1">
            <h1>{singleItem.name}</h1>
            <p>Model: {singleItem.model} </p>
            <p>Manufacturer: {singleItem.manufacturer}</p>
            <p>Cost in Credits: {singleItem.cost_in_credits}</p>
            
        </div>
    )
}

export default StartShips
