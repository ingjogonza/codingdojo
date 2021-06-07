import React from 'react'

const Species = ({singleItem}) => {
    return (
        <div className="card card-1">
            <h1>{singleItem.name}</h1>
            <p>Classification: {singleItem.classification} </p>
            <p>Designation: {singleItem.designation}</p>
            <p>Average height: {singleItem.average_height}</p>
            <p>Skin Colors: {singleItem.skin_colors}</p>
            
        </div>
    )
}

export default Species
