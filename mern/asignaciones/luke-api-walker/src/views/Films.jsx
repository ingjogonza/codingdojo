import React from 'react'

const Films = ({singleItem}) => {
    return (
        <div className="card card-1">
            <h1>{singleItem.title}</h1>
            <p>Episode: {singleItem.episode_id} </p>
            <p>Director: {singleItem.director}</p>
            <p>Producer: {singleItem.producer}</p>
            
        </div>
    )
}

export default Films
