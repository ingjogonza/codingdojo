import React from 'react'

const Planets = ({singleItem}) => {
    return (
        <div className="card card-1">
            <h1>{singleItem.name}</h1>
            <p>Rotation period: {singleItem.rotation_period} </p>
            <p>Orbital Period: {singleItem.orbital_period}</p>
            <p>Diameter: {singleItem.diameter}</p>
            <p>Climate: {singleItem.climate}</p>
            
        </div>
    )
}

export default Planets
